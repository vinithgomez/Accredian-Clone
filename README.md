# Accredian Enterprise — Landing Page Clone

A recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) B2B landing page, built as a Full Stack Developer Intern assignment. Next.js 16 (App Router), TypeScript, and Tailwind CSS, with a bonus lead-capture form backed by a Next.js API route.

## 1. Setup Instructions

**Requirements:** Node.js 18.18+ and npm.

```bash
git clone <your-repo-url>
cd accredian-clone
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whichever port is printed in the terminal).

Build for production:

```bash
npm run build
npm run start
```

> **Note:** `dev` and `build` are wired to `next dev --webpack` / `next build --webpack` rather than the bare commands. This project was developed on a machine where Next.js 16's default Turbopack dev/build fails with a native-binding error specific to that environment; the Webpack flag is a safe, portable fallback and works identically on Vercel and other machines. Turbopack can be re-enabled by dropping the flag if your environment supports it.

## 2. Approach Taken

- **Structure:** App Router with a `src/` directory. Route-level code lives in `src/app`, presentational sections in `src/components`, reusable primitives (`Button`, `Container`, `Card`, `Badge`, `SectionHeading`, `Icon`, `AnimateIn`) in `src/components/ui`, and shared types/constants/validation/API helpers in `src/lib`.
- **Composition over duplication:** every section (Hero, Programs, Testimonials, etc.) is built from the same handful of UI primitives instead of repeating Tailwind utility strings, so spacing, color, and typography stay consistent without a component library.
- **Data-driven content:** copy for nav links, programs, value props, testimonials, and stats lives in `src/lib/constants.ts` as typed arrays, so sections are thin render layers over data rather than hardcoded JSX.
- **Single-page navigation:** the Navbar's links and CTA buttons are in-page anchors (`#programs`, `#why-us`, `#testimonials`, `#contact`, etc.) with `scroll-behavior: smooth` set globally, so there's no client-side routing to manage for what is fundamentally a one-page marketing site.
- **Lead capture:** `LeadForm` is a client component with its own validation state; `src/lib/validation.ts` is shared between the client (inline field errors) and the `/api/lead` route (server-side re-validation), so the two never drift out of sync. Submissions are kept in an in-memory array and best-effort appended to `data/leads.json` for local inspection — see the improvements section below for what a production version would use instead.
- **Motion:** a single `AnimateIn` client wrapper (Framer Motion `whileInView`) is reused across sections for scroll-triggered fade-ups, plus Tailwind transition utilities for hover states on cards, buttons, and links — kept subtle and consistent rather than section-specific one-offs.

## 3. AI Usage Explanation

Claude Code was used to scaffold the entire Next.js project (App Router, TypeScript, Tailwind, ESLint via `create-next-app`), generate the folder structure (`src/components`, `src/components/ui`, `src/lib`), and build out all component boilerplate — the Navbar (including the mobile slide-in menu), Footer, Hero, Trusted-By logo strip, Why Choose Us, Programs, How It Works, Testimonials, Stats, final CTA banner, and the Lead Capture form. It also built the `/api/lead` Next.js API route (validation, in-memory + JSON-file storage), the shared TypeScript types in `src/lib/types.ts`, and wrote this README. All copy (headlines, program descriptions, testimonials, stats) is original/paraphrased placeholder content, not scraped from the live site, since no pixel-perfect reference screenshots were available. The build was verified end-to-end in a browser during development: page render, mobile/tablet/desktop breakpoints, the lead form's validation and success/error states, and a real POST to `/api/lead` confirmed the round trip and file persistence.

**What I reviewed, modified, or fixed manually:**
- Diagnosed and fixed a lucide-react version issue that dropped brand icons — 
  replaced with hand-rolled SVGs in Footer.tsx.
- Identified that Turbopack was broken for Next.js 16 on my machine and directed 
  the fix (pre-patching dev/build scripts with --webpack).
- Verified the full build in-browser: checked responsiveness at 375/768/1024/1440px, 
  tested the mobile hamburger menu, and manually submitted the lead form to confirm 
  a real 201 response with data persisted to data/leads.json.
- Caught that two navbar links ("Enterprise Solutions" and "Resources") weren't 
  wired to any section, and directed Claude Code to anchor them correctly 
  (#why-choose-us and #resources respectively) — then re-verified both worked 
  on desktop and mobile.
- Ran npm run lint and npx next build to confirm clean builds after every 
  significant change.
- Deployed to Vercel and tested the live form submission, since JSON-file 
  persistence behaves differently on Vercel's serverless filesystem than locally.

## 4. Improvements With More Time

- **Real persistence:** swap the in-memory array / local JSON file in `/api/lead` for a real database (Supabase or Postgres via Prisma), so submissions survive deploys and serverless cold starts.
- **Pixel-accurate parity:** compare section-by-section against the live reference with real screenshots and match spacing, imagery, and copy exactly rather than working from a written spec.
- **Real assets:** replace the placeholder text-based "Trusted By" logos and the illustrated hero mock with actual SVG logos and a designed hero image/illustration.
- **Testimonial carousel:** add autoplay + swipe/drag support instead of a static grid, with pause-on-hover and accessible controls.
- **Accessibility audit:** run an automated pass (axe/Lighthouse) plus manual keyboard-navigation and screen-reader testing, especially for the mobile menu focus trap and form error announcements.
- **Copy testing:** A/B test hero headline and CTA copy once there's real traffic to learn from.
- **Analytics + email:** wire the lead form to a real notification path (email via Resend/SendGrid, or a CRM webhook) instead of just storing the row.
- **E2E tests:** add Playwright coverage for the lead form's happy path and validation states, and a visual regression check for the responsive breakpoints.

## Deployment (Vercel)

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project, accept the detected Next.js settings), then `vercel --prod` to deploy to production.

**Option B — GitHub import:**

1. Push this repo to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command and output directory are auto-detected — no changes needed.
4. No environment variables are required for this project.
5. Click **Deploy**.

> The in-memory/JSON-file lead storage works for a demo but resets on every deploy and isn't shared across serverless function instances — see "Improvements With More Time" above.
