# Aureviem Tender Automation

Aureviem is an AI-assisted tender intelligence workspace for Indian government procurement. This repository contains the first working MVP: tender register, browser-side manpower costing calculator, and a server-side OpenAI tender-analysis endpoint for PDF/TXT/MD documents.

## Requirements
- Node.js 20+
- npm
- OpenAI API key for AI analysis
- Optional Supabase project for persistence and private document storage (not yet wired into this MVP)

## Run locally
1. Copy `.env.example` to `.env.local`.
2. Set `OPENAI_API_KEY`.
3. Install and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:3000.

## Deploy
Deploy the repository as a Next.js app on Vercel or another Node.js host. Set `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in server environment variables. Never expose the API key in a `NEXT_PUBLIC_*` variable or commit secrets.

## Current capabilities
- Tender register with manual records and search (session-only).
- AI tender analysis endpoint: PDF/TXT/MD input, structured procurement report, preliminary eligibility matrix.
- Manpower monthly costing calculator with configurable wage, combined PF provision, ESI, service charge and GST.
- Company eligibility checklist and integration status.

## Not yet implemented
- Live GeM/CPPP/state portal feeds. Integrations require supported public feeds/APIs, permitted access, and per-portal verification; do not scrape behind login or bypass CAPTCHA/access controls.
- Database persistence, organization login/roles, private storage and audit logs.
- Automated bid submission, official tender status verification, deadline notifications.
- Full statutory costing rules (PF/EDLI/admin, ESI ceilings, bonus, leave, reliever, gratuity, insurance, minimum wages by state/category).

## Security and correctness
- Do not upload sensitive company documents until private storage and authentication are configured.
- AI output is an aid, not a legal opinion or a substitute for reviewing the original tender.
- Verify every extracted clause, date, amount, eligibility condition and statutory calculation before bidding.
