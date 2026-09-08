# Raju — Portfolio

Personal portfolio for **Rifat Sarker ("Raju")**, built from the design handoff in
`../design_handoff_raju_portfolio` (see its README for the full spec). Next.js App
Router + TypeScript + Tailwind CSS, with Lenis smooth scrolling.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm start      # serve the production build
```

## Pages

- `/` — single-scroll homepage: loader, hero, marquee, selected work, about (music
  easter egg), journey, contact mega-footer
- `/work` — work archive (4 projects)
- `/work/[slug]` — project details, statically generated from `lib/projects.ts`
  (`techhouse`, `cinenest`, `branding`, `3d`)

## Structure

- `lib/projects.ts` — all project copy/data, copied verbatim from the handoff
- `components/` — interactive pieces: loader, menu header, Dhaka clock, custom
  cursor + magnetic buttons (`CursorFx`), scroll reveals (`RevealFx`), scroll
  progress bar, audio disc player (`AboutPhotoCard`), Lenis provider
- `app/fonts/` — self-hosted fonts: Bricolage Grotesque + Instrument Sans
  (variable, latin), Space Mono 400/700, and the bundled Boldmatte logotype font

## CV

- The supplied `Md_Raju_Ahmed_CV.pdf` is stored at
  `public/assets/rifat-sarker-cv.pdf`, preserving the existing public URL.
- The header's **CV** button opens `/assets/rifat-sarker-cv.pdf` in a new tab
  for viewing. Browser PDF settings may download the file instead.
- The **Download CV** button in My journey downloads the same PDF as
  `Md_Raju_Ahmed_CV.pdf`.
- To update the CV, replace `public/assets/rifat-sarker-cv.pdf` with the new
  PDF, keeping that filename, then rebuild and redeploy the site. No button
  changes are needed.

## Notes from the handoff

- Tech House / Raju-Identity / 3D screenshots are "coming soon" placeholder
  slots by design; add images to `public/assets/` and reference them in
  `lib/projects.ts`.
- `amar-dehokhan.mp3` is copyrighted music (Odd Signature) — confirm rights
  before a public deploy.
- Boldmatte's license should be checked for web embedding.
