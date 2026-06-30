import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { generateTokenId } from "@/lib/utils/tokenGenerator";
import { stripImageExif, isStrippableImage } from "@/lib/utils/exifStrip";

/**
 * POST /api/submit-complaint
 *
 * Accepts a multipart/form-data payload containing complaint details and optional evidence files.
 * - Generates a cryptographically secure token ID
 * - Strips EXIF data from all image evidence before uploading
 * - Saves complaint to Supabase
 * - Saves complainant profile separately (if identified submission)
 * - Stores evidence file paths in evidence_attachments table
 *
 * Security: Uses service role key server-side only. No PII stored for anonymous submissions.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract fields
    const submissionType = formData.get("submissionType") as string;
    const title = (formData.get("title") as string) || null;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const district = formData.get("district") as string;
    const upazila = formData.get("upazila") as string;

    // Validate required fields
    if (!description || !category || !district || !upazila) {
      return NextResponse.json(
        { success: false, error: "অভিযোগের বিবরণ, ধরন এবং অবস্থান আবশ্যক" },
        { status: 400 }
      );
    }

    const isAnonymous = submissionType !== "identified";
    const supabase = createServerClient();
    const tokenId = generateTokenId();

    // 1. Insert complaint record
    const { data: complaint, error: complaintError } = await supabase
      .from("complaints")
      .insert({
        token_id: tokenId,
        title,
        description,
        category,
        location_district: district,
        location_upazila: upazila,
        is_anonymous: isAnonymous,
        status: "Pending",
      })
      .select()
      .single();

    if (complaintError || !complaint) {
      console.error("[submit-complaint] Supabase insert error:", complaintError);
      return NextResponse.json(
        { success: false, error: "অভিযোগ সংরক্ষণে সমস্যা হয়েছে" },
        { status: 500 }
      );
    }

    const complaintId = complaint.id;

    // 2. If identified, save complainant profile
    if (!isAnonymous) {
      const fullName = formData.get("fullName") as string;
      const phoneNumber = (formData.get("phoneNumber") as string) || null;
      const email = (formData.get("email") as string) || null;
      const nationalId = (formData.get("nationalId") as string) || null;

      if (fullName) {
        const { error: profileError } = await supabase
          .from("complainant_profiles")
          .insert({
            complaint_id: complaintId,
            full_name: fullName,
            phone_number: phoneNumber,
            email,
            national_id: nationalId,
          });

        if (profileError) {
          console.error("[submit-complaint] Profile insert error:", profileError);
          // Non-fatal: continue processing
        }
      }
    }

    // 3. Process evidence files
    const evidenceFiles = formData.getAll("evidence") as File[];

    for (const file of evidenceFiles) {
      if (!(file instanceof File) || file.size === 0) continue;

      try {
        const rawBuffer = Buffer.from(await file.arrayBuffer());

        // Strip EXIF metadata from images to protect user privacy
        const cleanBuffer = isStrippableImage(file.type)
          ? await stripImageExif(rawBuffer, file.type)
          : rawBuffer;

        const ext = file.name.split(".").pop() ?? "bin";
        const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const storagePath = `evidence/${complaintId}/${safeName}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from("evidence")
          .upload(storagePath, cleanBuffer, {
            contentType: file.type,
            upsert: false,
          });

        if (uploadError) {
          console.error("[submit-complaint] Storage upload error:", uploadError);
          continue; // Skip failed file, don't fail the whole request
        }

        // Record in evidence_attachments table
        await supabase.from("evidence_attachments").insert({
          complaint_id: complaintId,
          file_path: storagePath,
          file_type: file.type,
          file_name: file.name,
        });
      } catch (fileErr) {
        console.error("[submit-complaint] File processing error:", fileErr);
      }
    }

    return NextResponse.json({ success: true, token_id: tokenId }, { status: 201 });
  } catch (err) {
    console.error("[submit-complaint] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "অভিযোগ জমা দিতে অপ্রত্যাশিত সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
