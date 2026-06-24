# Burby Ventures — website

A Next.js 14 marketing site for Jason Burby: executive coaching, agency
coaching & advisory, team workshops, and board/startup advising.

## What's here

```
app/
  layout.tsx          Shared shell: fonts, metadata, nav, footer
  globals.css         All styling (one file, no Tailwind)
  page.tsx            Home
  coaching/           Offering 1 — executive coaching
  agencies/           Offering 2 — coaching & advisory for agency CEOs
  workshops/          Offering 3 — team leadership workshops
  advising/           Offering 4 — board & startup advising
  testimonials/       Results / testimonials
  contact/            Book a call
  components/         Nav, Footer, Art (the mountain/river SVGs)
```

Each page has its own `<title>` and meta description for SEO. URLs are clean
(`/coaching`, `/agencies`, etc.) and every page prerenders as static HTML.

---

## Deploy: GitHub drag-and-drop → Vercel (no command line)

1. **Make a GitHub repo.** On github.com click **New repository**, name it
   `burby-ventures`, leave it empty (no README), and create it.
2. **Upload these files.** On the empty repo page click **uploading an existing
   file**. Drag in *everything in this folder EXCEPT* `node_modules` and
   `.next` (those rebuild automatically — they're also listed in
   `.gitignore`). Make sure `app/`, `package.json`, `tsconfig.json`,
   `next.config.mjs`, and `.gitignore` are all included, keeping the folder
   structure. Commit.
3. **Import to Vercel.** At vercel.com → **Add New… → Project** → import the
   `burby-ventures` repo. Vercel auto-detects Next.js — just click **Deploy**.
   No environment variables needed.
4. **Point your domain.** In the Vercel project → **Settings → Domains**, add
   `burbyventures.com` and follow the DNS steps (same flow you used for the
   DuPen site).

To make edits later, change a file on GitHub (pencil icon) or drag in new
versions; Vercel redeploys on every commit.

---

## Things to update before this goes live

- **Logo** — the nav and footer load `public/logo.svg`, which ships as a
  **placeholder wordmark**. Replace `public/logo.svg` with your real logo,
  keeping the filename `logo.svg`. If your logo is a PNG instead, add it as
  `public/logo.png` and change the one `LOGO` line in both
  `app/components/Nav.tsx` and `app/components/Footer.tsx` to `/logo.png`. Use a
  white/transparent version — it sits on the dark green nav and footer.
- **Copy** — the service-page text now uses flexible phrasing rather than
  specific engagement claims, so nothing on the site asserts a detail that might
  be wrong. If you want exact specifics baked in (engagement length, session
  cadence, stage focus, group sizes), edit the relevant page in `app/`.
- **Testimonials** — `app/testimonials/page.tsx` has your four real quotes plus
  three dashed placeholder slots. Replace the slots and add titles/companies.
- **Booking + contact** — the buttons on `/contact` point at your existing
  Squarespace booking and contact pages. Swap in whatever you want long-term.
- **Photo** — there's no portrait yet; adding a real photo of you is the single
  highest-value addition.

## Run it locally (optional)

If you ever want to preview locally: install Node.js, then in this folder run
`npm install` and `npm run dev`, and open http://localhost:3000.
