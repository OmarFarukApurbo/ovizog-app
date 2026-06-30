import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

/**
 * GET /api/track-complaint?token=OV-2026-XXXXXXXX
 *
 * Public endpoint to retrieve the status of a complaint by its token ID.
 *
 * Security:
 * - Returns ONLY non-sensitive fields (status, category, location, dates)
 * - Never returns description, personal info, or evidence paths in this response
 * - Uses service role server-side to bypass RLS for the public lookup
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token || token.trim().length < 5) {
    return NextResponse.json(
      { success: false, error: "বৈধ ট্র্যাকিং আইডি প্রদান করুন" },
      { status: 400 }
    );
  }

  const supabase = createServerClient();

  const { data: complaint, error } = await supabase
    .from("complaints")
    .select(
      "id, token_id, title, category, location_district, location_upazila, is_anonymous, status, created_at"
      // Note: 'description' deliberately excluded from public tracking response
      // Note: complainant_profiles NOT joined here (RLS + data minimization)
    )
    .eq("token_id", token.trim().toUpperCase())
    .single();

  if (error || !complaint) {
    return NextResponse.json(
      { success: false, error: "এই ট্র্যাকিং আইডি দিয়ে কোনো অভিযোগ পাওয়া যায়নি" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, complaint }, { status: 200 });
}
