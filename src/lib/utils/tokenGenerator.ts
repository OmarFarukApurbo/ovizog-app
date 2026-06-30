/**
 * Generates a cryptographically secure complaint token in the format:
 * OV-YYYY-XXXXXXXX  (e.g. OV-2026-A3K9BZ2M)
 * Uses nanoid for the random suffix to ensure URL-safe, unique tokens.
 */

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing chars (0,O,1,I)

export function generateTokenId(): string {
  const year = new Date().getFullYear();
  let suffix = "";

  // Use crypto.getRandomValues for cryptographic randomness
  const bytes = new Uint8Array(8);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    // Node.js fallback
    const { randomBytes } = require("crypto");
    const buf = randomBytes(8);
    for (let i = 0; i < 8; i++) bytes[i] = buf[i];
  }

  for (let i = 0; i < 8; i++) {
    suffix += CHARS[bytes[i] % CHARS.length];
  }

  return `OV-${year}-${suffix}`;
}
