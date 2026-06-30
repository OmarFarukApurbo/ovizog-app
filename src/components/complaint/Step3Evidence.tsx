"use client";

import { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { UploadCloud, X, FileImage, FileVideo, FileAudio, File, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Step3EvidenceProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_TYPES = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
  "image/gif": [".gif"],
  "audio/mpeg": [".mp3"],
  "audio/wav": [".wav"],
  "audio/ogg": [".ogg"],
  "video/mp4": [".mp4"],
  "video/webm": [".webm"],
  "video/quicktime": [".mov"],
};

function getFileIcon(type: string) {
  if (type.startsWith("image/")) return FileImage;
  if (type.startsWith("video/")) return FileVideo;
  if (type.startsWith("audio/")) return FileAudio;
  return File;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Step3Evidence({ files, onFilesChange }: Step3EvidenceProps) {
  const [rejectedFiles, setRejectedFiles] = useState<string[]>([]);

  const onDrop = useCallback(
    (accepted: File[], rejected: FileRejection[]) => {
      const newFiles = [...files, ...accepted].slice(0, 10);
      onFilesChange(newFiles);

      if (rejected.length > 0) {
        setRejectedFiles(rejected.map((r) => `${r.file.name}: ${r.errors[0]?.message}`));
        setTimeout(() => setRejectedFiles([]), 4000);
      }
    },
    [files, onFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_FILE_SIZE,
    maxFiles: 10,
  });

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    onFilesChange(updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          ডিজিটাল প্রমাণপত্র আপলোড
        </h3>
        <p className="text-neutral-500 text-sm">
          ছবি, অডিও বা ভিডিও আকারে ডিজিটাল তথ্যপ্রমাণ আপলোড করুন। (ঐচ্ছিক)
        </p>
      </div>

      {/* Security notice */}
      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
        <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
        <div className="text-sm">
          <span className="font-semibold text-green-800">EXIF মেটাডেটা স্বয়ংক্রিয়ভাবে মুছে যাবে</span>
          <span className="text-green-700"> — আপনার ডিভাইসের GPS অবস্থান ও পরিচয় সুরক্ষিত থাকবে।</span>
        </div>
      </div>

      {/* Dropzone */}
      <div
        {...getRootProps()}
        id="evidence-dropzone"
        className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? "border-[#0F4C3A] bg-[#0F4C3A]/5 scale-[1.02]"
            : "border-neutral-300 bg-neutral-50 hover:border-[#0F4C3A]/60 hover:bg-[#0F4C3A]/3"
        }`}
      >
        <input {...getInputProps()} id="evidence-file-input" />

        <motion.div
          animate={{ y: isDragActive ? -4 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
              isDragActive ? "bg-[#0F4C3A] text-white" : "bg-neutral-200 text-neutral-500"
            }`}
          >
            <UploadCloud className="w-8 h-8" />
          </div>

          <div>
            <p className="font-bold text-neutral-800 text-base mb-1">
              {isDragActive ? "এখানে ফাইল ছেড়ে দিন..." : "ফাইল টানুন বা ক্লিক করুন"}
            </p>
            <p className="text-sm text-neutral-500">
              সর্বোচ্চ ১০টি ফাইল • প্রতিটি সর্বোচ্চ ৫০MB
            </p>
          </div>

          {/* Accepted types */}
          <div className="flex flex-wrap justify-center gap-2">
            {["JPG/PNG (ছবি)", "MP4/MOV (ভিডিও)", "MP3/WAV (অডিও)"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Rejection errors */}
      <AnimatePresence>
        {rejectedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-[#D32F2F]/10 border border-[#D32F2F]/30 rounded-xl"
          >
            {rejectedFiles.map((err) => (
              <p key={err} className="text-[#D32F2F] text-sm">
                ⚠️ {err}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Uploaded files list */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-neutral-700">
              যোগ করা ফাইলসমূহ ({files.length}/10)
            </p>
            {files.map((file, i) => {
              const Icon = getFileIcon(file.type);
              return (
                <motion.div
                  key={`${file.name}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl"
                >
                  <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0F4C3A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-800 truncate">{file.name}</p>
                    <p className="text-xs text-neutral-500">{formatFileSize(file.size)} • {file.type}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-[#D32F2F] hover:bg-[#D32F2F]/10 transition-colors flex-shrink-0"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
