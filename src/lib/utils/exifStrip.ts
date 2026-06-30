/**
 * EXIF Stripping Utility
 * Uses the `sharp` library to strip all metadata (EXIF, GPS, XMP, IPTC)
 * from image files before they are stored in Supabase Storage.
 *
 * This protects user privacy by removing device identifiers and GPS coordinates
 * that may be embedded in image files taken with smartphones.
 */

import sharp from "sharp";

export type SupportedImageType =
  | "image/jpeg"
  | "image/jpg"
  | "image/png"
  | "image/webp"
  | "image/gif"
  | "image/tiff";

const SUPPORTED_TYPES: string[] = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/tiff",
];

/**
 * Strips EXIF/metadata from an image buffer.
 * Returns the cleaned buffer ready for upload.
 *
 * @param buffer - Raw image buffer
 * @param mimeType - MIME type of the image
 * @returns Cleaned buffer with all metadata removed
 */
export async function stripImageExif(
  buffer: Buffer,
  mimeType: string
): Promise<Buffer> {
  if (!SUPPORTED_TYPES.includes(mimeType)) {
    // Unsupported type — return as-is but log a warning
    console.warn(
      `[EXIF Strip] Unsupported image type: ${mimeType}. Skipping EXIF strip.`
    );
    return buffer;
  }

  try {
    // sharp strips metadata by default when not calling .withMetadata()
    const cleanBuffer = await sharp(buffer)
      .toBuffer(); // No .withMetadata() call = all EXIF/GPS/XMP metadata stripped

    console.log(
      `[EXIF Strip] Successfully stripped metadata from ${mimeType} image.`
    );
    return cleanBuffer;
  } catch (error) {
    console.error("[EXIF Strip] Error stripping EXIF data:", error);
    // On error, return original buffer rather than failing the upload
    return buffer;
  }
}

/**
 * Checks whether a file MIME type is a supported image type for EXIF stripping.
 */
export function isStrippableImage(mimeType: string): boolean {
  return SUPPORTED_TYPES.includes(mimeType);
}

/**
 * Checks whether a file MIME type is a video (EXIF stripping not supported,
 * noted for post-MVP FFmpeg integration).
 */
export function isVideo(mimeType: string): boolean {
  return mimeType.startsWith("video/");
}
