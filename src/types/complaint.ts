export type ComplaintStatus =
  | "Pending"
  | "Under Investigation"
  | "Forwarded"
  | "Resolved";

export type SubmissionType = "anonymous" | "identified";

export interface Complaint {
  id: string;
  token_id: string;
  title: string | null;
  description: string;
  category: string;
  location_district: string;
  location_upazila: string;
  is_anonymous: boolean;
  status: ComplaintStatus;
  created_at: string;
}

export interface ComplainantProfile {
  id: string;
  complaint_id: string;
  full_name: string;
  phone_number?: string;
  email?: string;
  national_id?: string;
  created_at: string;
}

export interface EvidenceAttachment {
  id: string;
  complaint_id: string;
  file_path: string;
  file_type: string;
  file_name: string | null;
  uploaded_at: string;
}

export interface ComplaintWithEvidence extends Complaint {
  evidence_attachments?: EvidenceAttachment[];
}

export interface ComplaintFormData {
  submissionType: SubmissionType;
  // Step 2
  title?: string;
  description: string;
  category: string;
  district: string;
  upazila: string;
  // Step 3 (optional)
  evidenceFiles?: File[];
  // Identified-only
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  nationalId?: string;
}

export interface TrackResponse {
  success: boolean;
  complaint?: Complaint;
  error?: string;
}

export interface SubmitResponse {
  success: boolean;
  token_id?: string;
  error?: string;
}
