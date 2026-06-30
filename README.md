# Ovizog.com — নাগরিক ও ভিকটিম সুরক্ষা প্ল্যাটফর্ম

**The Digital Citizen Complaint & Legal Support Platform for Bangladesh**

Built in collaboration with **Rupali Bangladesh Investigation Cell (RBIC)**.

---

## Features

- 🛡️ **Anonymous Complaint Filing** — Zero PII stored for anonymous submissions
- 🔒 **EXIF Stripping** — GPS & device metadata removed from all uploaded images via `sharp`
- 🎫 **Secure Token Tracking** — Cryptographically secure `OV-YYYY-XXXXXXXX` tracking IDs
- 📍 **64 Districts** — Full Bangladesh district/upazila location selectors
- 📂 **Digital Evidence Vault** — Drag-and-drop upload for images, audio & video
- 🌐 **Bilingual** — Bengali (primary) + English (secondary)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + Framer Motion |
| Icons | Lucide React |
| Backend/DB | Supabase (PostgreSQL + RLS) |
| Storage | Supabase Storage (private bucket) |
| Fonts | Hind Siliguri + Inter (Google Fonts) |

## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/ovizog-app.git
cd ovizog-app
npm install
```

### 2. Configure Environment
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Set Up Supabase Database
Run `supabase-schema.sql` in the Supabase SQL Editor.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, pillars, workflow, RBIC partner |
| `/submit` | 4-step complaint wizard |
| `/track` | Token-based status tracker |
| `/about` | About Ovizog & RBIC |
| `/legal` | Bangladesh legal guidelines |
| `/contact` | Contact information & form |

## Security

- All DB writes happen **server-side** (service role key never exposed to client)
- `complainant_profiles` table locked to service role via RLS
- Evidence files stored in a **private** Supabase Storage bucket
- Tracking API returns **only non-sensitive status fields**

## License

© 2026 Ovizog.com. All Rights Reserved.
