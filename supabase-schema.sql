-- =================================================================
-- Ovizog.com — Supabase Database Schema & RLS Policies
-- Run this entire script in the Supabase SQL Editor
-- =================================================================

-- ===========================
-- 1. TABLES
-- ===========================

-- complaints: Core table for all filed complaints
CREATE TABLE IF NOT EXISTS complaints (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  token_id          TEXT UNIQUE NOT NULL,
  title             TEXT,
  description       TEXT NOT NULL,
  category          TEXT NOT NULL,
  location_district TEXT NOT NULL,
  location_upazila  TEXT NOT NULL,
  is_anonymous      BOOLEAN DEFAULT TRUE NOT NULL,
  status            TEXT DEFAULT 'Pending'
                    CHECK (status IN ('Pending', 'Under Investigation', 'Forwarded', 'Resolved'))
                    NOT NULL,
  created_at        TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at        TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Index for fast token lookups (tracking portal)
CREATE INDEX IF NOT EXISTS idx_complaints_token_id ON complaints(token_id);
-- Index for status filtering (admin dashboard)
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
-- Index for date-based queries
CREATE INDEX IF NOT EXISTS idx_complaints_created_at ON complaints(created_at DESC);

-- complainant_profiles: Only created for "identified" submissions
-- Strictly protected — not exposed via public API
CREATE TABLE IF NOT EXISTS complainant_profiles (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  complaint_id   UUID REFERENCES complaints(id) ON DELETE CASCADE NOT NULL,
  full_name      TEXT NOT NULL,
  phone_number   TEXT,
  email          TEXT,
  national_id    TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_complainant_profiles_complaint_id
  ON complainant_profiles(complaint_id);

-- evidence_attachments: Stores metadata/paths for uploaded evidence files
CREATE TABLE IF NOT EXISTS evidence_attachments (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  complaint_id UUID REFERENCES complaints(id) ON DELETE CASCADE NOT NULL,
  file_path    TEXT NOT NULL,
  file_type    TEXT NOT NULL,
  file_name    TEXT,
  uploaded_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_evidence_complaint_id ON evidence_attachments(complaint_id);

-- ===========================
-- 2. AUTO-UPDATE TIMESTAMPS
-- ===========================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_complaints_updated_at
  BEFORE UPDATE ON complaints
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===========================
-- 3. ROW LEVEL SECURITY (RLS)
-- ===========================

-- Enable RLS on all tables
ALTER TABLE complaints             ENABLE ROW LEVEL SECURITY;
ALTER TABLE complainant_profiles   ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence_attachments   ENABLE ROW LEVEL SECURITY;

-- ------- complaints policies -------

-- Anyone (including anonymous users) can INSERT a new complaint
CREATE POLICY "Public can insert complaints"
  ON complaints FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can SELECT complaints (for tracking by token)
-- Note: The API route only exposes non-sensitive fields
CREATE POLICY "Public can read complaints"
  ON complaints FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only service_role (backend) can UPDATE complaint status
CREATE POLICY "Service role can update complaint status"
  ON complaints FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Only service_role can DELETE
CREATE POLICY "Service role can delete complaints"
  ON complaints FOR DELETE
  TO service_role
  USING (true);

-- ------- complainant_profiles policies -------

-- Only service_role can insert profiles (done server-side)
CREATE POLICY "Service role can insert profiles"
  ON complainant_profiles FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Completely locked from public reads — only service_role (RBIC admin) can read
CREATE POLICY "Service role can read profiles"
  ON complainant_profiles FOR SELECT
  TO service_role
  USING (true);

-- No other operations permitted on complainant_profiles

-- ------- evidence_attachments policies -------

-- Service role inserts evidence records (after EXIF strip)
CREATE POLICY "Service role can insert evidence"
  ON evidence_attachments FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Public cannot read evidence file paths directly
-- (evidence is served via signed URLs from backend, not publicly exposed)
CREATE POLICY "Service role can read evidence"
  ON evidence_attachments FOR SELECT
  TO service_role
  USING (true);

-- ===========================
-- 4. SUPABASE STORAGE BUCKET
-- ===========================

-- Run this in the Supabase Storage section OR via API:
-- Create a private bucket called 'evidence'
-- The bucket should be PRIVATE (not public)

-- If using SQL:
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'evidence',
  'evidence',
  false,                -- PRIVATE bucket — no public URL access
  52428800,             -- 50MB limit per file
  ARRAY[
    'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif',
    'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4',
    'video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'
  ]
)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: Only service_role can upload/read evidence
CREATE POLICY "Service role can upload evidence"
  ON storage.objects FOR INSERT
  TO service_role
  WITH CHECK (bucket_id = 'evidence');

CREATE POLICY "Service role can read evidence"
  ON storage.objects FOR SELECT
  TO service_role
  USING (bucket_id = 'evidence');

-- ===========================
-- 5. SAMPLE DATA (OPTIONAL)
-- ===========================

-- Uncomment to insert sample complaint for testing:
/*
INSERT INTO complaints (token_id, title, description, category, location_district, location_upazila, is_anonymous, status)
VALUES (
  'OV-2026-TEST01',
  'পরীক্ষামূলক অভিযোগ',
  'এটি একটি পরীক্ষামূলক অভিযোগ।',
  'corruption',
  'Dhaka',
  'Mirpur',
  true,
  'Under Investigation'
);
*/
