# Md. Raju Ahmed — Portfolio

The portfolio of Md. Raju Ahmed, a full-stack web developer in Rajshahi, Bangladesh. It is a statically generated Next.js 14 site, and its motion is built from CSS and a few small client components rather than an animation library.

**Live site:** https://rifatsarkerraju.com

## What's inside

| Route | What it is |
| --- | --- |
| [`/`](https://rifatsarkerraju.com) | Single-scroll home page: intro loader, hero, marquee ribbon, three selected projects, an About section with a music player, a timeline with a CV download, and a contact footer with a live Dhaka clock |
| [`/work`](https://rifatsarkerraju.com/work) | Archive of all four projects |
| [`/work/3d`](https://rifatsarkerraju.com/work/3d) | **Sneaker Lab**: case study of a real-time 3D sneaker configurator ([live demo](https://3d-bay-ten.vercel.app)) |
| [`/work/cinenest`](https://rifatsarkerraju.com/work/cinenest) | **Cinenest**: web app case study |
| [`/work/premium-hatbazar`](https://rifatsarkerraju.com/work/premium-hatbazar) | **Premium Hatbazar**: case study of a Bengali-first demo store for digital subscriptions ([live demo](https://premiumhatbazar.vercel.app)) |
| [`/work/branding`](https://rifatsarkerraju.com/work/branding) | **Raju — Identity**: the personal brand and this site |
| [`/services`](https://rifatsarkerraju.com/services) | Services with fixed starting prices, the working process and an FAQ |
| `/og/[slug]` | Generated 1200×630 social preview images |
| `/robots.txt` | Generated from `app/robots.ts` |

`/service` and `/works` redirect permanently to `/services` and `/work`, and `/work/techhouse`, the e-commerce case study's address before the project took its name, redirects to `/work/premium-hatbazar` (`next.config.mjs`).

## Frontend engineering highlights

### How the motion system fits together

Every page is a React Server Component rendered to static HTML. Interactivity lives in eight small client components in `components/`. The two motion components, `RevealFx` and `CursorFx`, don't wrap any content. After mount they find elements by data attribute (`data-reveal`, `data-magnetic`) and attach behaviour to them, so the animated sections themselves stay server-rendered.

| Effect | Driven by | Where |
| --- | --- | --- |
| Hero entrance, marquee, spinning badge, pulsing dot, wavy underline | CSS keyframes | `app/globals.css` |
| Scroll reveals | `IntersectionObserver` and inline styles | `components/RevealFx.tsx` |
| Cursor follower, magnetic buttons | `requestAnimationFrame` and mouse events | `components/CursorFx.tsx` |
| Smooth scrolling | Lenis on a `requestAnimationFrame` loop | `components/LenisProvider.tsx` |
| Scroll progress bar | Passive `scroll` listener | `components/ScrollProgress.tsx` |
| Intro loader | Timers and `sessionStorage` | `components/Loader.tsx` |

Apart from Next.js and React, Lenis is the only runtime dependency.

### CSS keyframes and transitions

- Seven keyframes in `app/globals.css` (`fadeUp`, `marquee`, `spinSlow`, `pulseDot`, `bobY`, `waveMove`, `eqBar`) are applied with Tailwind arbitrary values such as `[animation:fadeUp_.7s_ease_.2s_both]`. The hero entrance is staggered from 0.1 s to 0.62 s.
- The marquee renders its text twice and slides by −50% for a seamless loop. The second copy is `aria-hidden`.
- The wavy underline under the name is an inline SVG data-URI tile animated through `background-position`.
- Hover states are plain CSS transitions: cards lift with a shadow, arrow buttons turn 45°, and the tilted photo card straightens. The reveals, card hovers and the magnetic spring-back share one easing curve, `cubic-bezier(.25,.1,.25,1)`, which is also available as the Tailwind utility `ease-swift`.

### Scroll reveals (`RevealFx`)

- One `IntersectionObserver` per page watches every `[data-reveal]` element. It stops watching each element once it has appeared, so every reveal plays once.
- On the home page, an element fades in and rises 26 px once 10% of it is visible. The case studies and the services page use a fade-only variant at 8% (`<RevealFx translate={false} threshold={0.08} />`).
- The component writes `transform` inline, so reveal targets must not carry a transform of their own. Tilted elements such as the marquee ribbons and the signature are wrapped in an untransformed element, and the wrapper takes `data-reveal`.

### Cursor follower and magnetic buttons (`CursorFx`)

- It runs only when `(pointer: fine)` matches, so it does nothing on touch screens. It is mounted on the home page only.
- A 6 px dot and a 36 px ring follow the pointer on a `requestAnimationFrame` loop. They use different interpolation factors (0.4 and 0.16), so the ring trails the dot. The ring grows to 56 px over links and buttons. Both are `pointer-events: none` and stay hidden until the first mouse move.
- Elements marked `data-magnetic` lean toward the pointer by 16% of the horizontal distance and 24% of the vertical distance from their centre. They ease back on `mouseleave`.
- Listeners and the animation frame are removed on unmount.

### Smooth scrolling (`LenisProvider`)

- The provider wraps the whole app in the root layout and drives Lenis 1.3 with its own `requestAnimationFrame` loop.
- In-page anchor links go through Lenis with `anchors: { offset: -40 }`. The sections also carry `scroll-mt-10` (40 px), so a native anchor jump lands in the same place when Lenis isn't running.
- The other Lenis defaults are unchanged: wheel input is smoothed and touch scrolling stays native.
- Lenis isn't started when the visitor prefers reduced motion.

### Intro loader (`Loader`)

The loader cycles through five greetings every 280 ms — `Hello`, `আসসালামু আলাইকুম`, `Bonjour`, `হ্যালো`, `Hola`, so Bengali appears twice. It fades out at 0.9 s and unmounts at 1.2 s, which means the fifth greeting is scheduled at 1.12 s and is never seen: in practice the loader shows the first four. It is `pointer-events: none`, so it never swallows a click. A `sessionStorage` flag limits it to once per browser session, and the flag is read inside `try`/`catch` for browsers that block storage.

### Menu, clock and scroll progress

- **Menu** (`HomeHeader`): a full-screen overlay whose links stagger in. It closes on Escape or when a link is chosen.
- **Clock** (`Clock`): Dhaka time from `Intl.DateTimeFormat` with `timeZone: "Asia/Dhaka"`, refreshed every 30 s. It renders `--:--` on the server and fills in after mount, so the server HTML and the first client render match.
- **Scroll progress** (`ScrollProgress`): a 3 px accent bar driven by a passive scroll listener. It appears on the home page, the services page and the case studies.

### Music player on the About card (`AboutPhotoCard`)

- The play button is a small album-art disc that spins only while audio plays, by toggling `animation-play-state`. Animated equaliser bars replace the play icon during playback.
- The `<audio>` element is created on the first click with `preload="none"`, and it switches to `preload="auto"` only when playback is requested. A comment in the component explains why: creating the element on mount makes the browser fetch the whole track before anything has painted, which starves the hero image on a slow connection.
- The track loops. The playback position is saved to `localStorage`, so playback resumes where the visitor left off on their next visit.
- On a load error, the player moves to the next entry in its `SOURCES` list. The list holds one entry, `amar-dehokhan.mp3`, which every current browser plays. Add another format there only together with the file itself, or the chain falls through a 404.
- Once the list runs out, the status line under the disc reads `Add audio file to play` instead of `Tap to play`. The caption printed on the card itself, `Music + code = me`, is fixed and never changes.

### Fluid layout, almost no breakpoints

The styles contain one width-based media query (`max-[420px]:hidden`, which hides a decorative counter in the case-study header). Everything else is fluid. Type and spacing are sized with `clamp()`, and grids use `repeat(auto-fit, minmax(…, 1fr))`, so columns reflow without breakpoints.

### Accessibility and reduced motion

- With `prefers-reduced-motion: reduce`, `app/globals.css` shortens every CSS animation and transition to 0.01 ms and limits animations to a single iteration. The looping animations stop, and reveals and hovers apply instantly. CSS smooth scrolling is turned off, and `LenisProvider` doesn't start Lenis.
- The script-driven effects don't read the preference. The cursor follower still trails the pointer, magnetic buttons still shift (without easing), and the loader still cycles its greetings.
- Links and buttons get a visible 2 px accent outline on `:focus-visible`. The services FAQ uses native `<details>` and `<summary>` elements.
- Decorative duplicates and ornaments are `aria-hidden`: the second marquee copy, the rotating badge and the background wordmark. The icon-only Back-to-top link and the audio button have `aria-label`s.

### SEO and social previews

- `app/layout.tsx` sets `metadataBase`, a `%s | Raju` title template, the description, and Open Graph and Twitter (`summary_large_image`) tags.
- Each case study gets its own title, description (its intro) and preview image from `generateMetadata`.
- `app/og/[slug]/route.tsx` runs on the Edge runtime and draws 1200×630 preview cards with `ImageResponse` from `next/og`. Case-study cards come from `lib/projects.ts`, and the home and services cards come from a small map in the route. Unknown slugs return 404.
- `/services` sets a canonical URL. It also embeds JSON-LD (`ProfessionalService`, with one `Offer` per service), generated from the same array that renders the pricing cards.
- `app/robots.ts` allows all crawlers and names the LinkedIn, Facebook, Twitter and WhatsApp preview bots explicitly.

## Performance choices

**Pages are prerendered.** This is the route output of `next build`:

| Route | Rendering |
| --- | --- |
| `/`, `/work`, `/services`, `/robots.txt` | Static |
| `/work/[slug]` | SSG: one page per project, from `generateStaticParams` |
| `/og/[slug]` | On demand, on the Edge runtime |

The case-study route sets `dynamicParams = false`, so an unknown slug returns a 404 instead of being rendered on demand.

The other choices:

- **Self-hosted fonts** load through `next/font/local`, so no request goes to Google Fonts at build time or in the browser. Bricolage Grotesque (variable, 200–800), Instrument Sans (variable, 400–700) and Space Mono (400 and 700) are latin-subset WOFF2 files. The "Raju" wordmark uses Boldmatte (TTF). All fonts use `display: swap`. next/font generates metric-adjusted Arial fallbacks (`size-adjust`, `ascent-override`) to limit layout shift when the web fonts arrive.
- **Images** all go through `next/image`:
  - AVIF is served first, then WebP (`images.formats` in `next.config.mjs`).
  - Every image has an explicit width and height. Case-study screenshots read theirs from the `imageDims` map in `lib/projects.ts`.
  - `sizes` values are matched to each layout, and quality is set to 85.
  - Only the home hero photo and the case studies' hero screenshots use `priority`, which preloads them with `fetchpriority="high"`. Everything else is lazy-loaded.
- **Deferred audio:** the music player requests nothing until the visitor presses play.
- **Small client surface:** client code is limited to the eight components in `components/`, and there is no animation library in the bundle.
- The scroll-progress listener is registered as `passive`.

## Tech stack

Next.js App Router, React, TypeScript in strict mode, and Tailwind CSS through PostCSS. Imports use the `@/*` path alias.

| Package | `package.json` | Locked in `package-lock.json` |
| --- | --- | --- |
| `next` | `14.2.35` | 14.2.35 |
| `react`, `react-dom` | `^18` | 18.3.1 |
| `lenis` | `^1.3.25` | 1.3.25 |
| `tailwindcss` | `^3.4.1` | 3.4.19 |
| `postcss` | `^8` | 8.5.20 |
| `typescript` | `^5` | 5.9.3 |
| `eslint`, `eslint-config-next` | `^8`, `14.2.35` | 8.57.1, 14.2.35 |
| `@types/node`, `@types/react`, `@types/react-dom` | `^20`, `^18`, `^18` | 20.19.43, 18.3.31, 18.3.7 |

## Project structure

```
app/
├── layout.tsx             root layout: fonts, site metadata, Lenis provider
├── page.tsx               home page
├── work/page.tsx          work archive
├── work/[slug]/page.tsx   case-study template (statically generated)
├── services/page.tsx      services, pricing, FAQ, JSON-LD
├── og/[slug]/route.tsx    Open Graph image cards (Edge runtime)
├── robots.ts              robots.txt
├── globals.css            CSS variables, keyframes, reduced-motion rules
└── fonts/                 self-hosted font files
components/                client components: loader, header and menu, clock,
                           cursor, reveals, scroll progress, music player, Lenis
lib/projects.ts            case-study content and screenshot dimensions
public/assets/             screenshots, photos, the CV and audio
tailwind.config.ts         colour, font and easing tokens
postcss.config.mjs         the Tailwind PostCSS plugin (no autoprefixer)
tsconfig.json              strict mode and the @/* path alias
next.config.mjs            image formats and redirects
```

## Run locally

You need Node.js 18.17 or later, the minimum for Next.js 14.2. No environment variables are required.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm start       # serve the production build
```

`npm run lint` runs `next lint`. The repo has no ESLint config yet, so the first run asks which preset to set up.

## Deploy

The repo carries no host configuration and no CI — there is no `vercel.json`, `netlify.toml`, `Dockerfile` or workflow in `.github/`. It is a stock Next.js app, so any platform that detects one builds it with `npm run build` and serves it with `npm start`. No environment variables are needed.

Two things rule out a static export (`output: "export"`):

- `/og/[slug]` is a dynamic route on the Edge runtime.
- The `redirects()` in `next.config.mjs` are applied by the Next.js server, or by a host adapter that translates them. A plain static export would 404 on `/service`, `/works` and `/work/techhouse` again.

Everything else is prerendered at build time, so the host only has to run the Next.js server.

## Updating content

### Case studies: `lib/projects.ts`

Each entry in `projects` is one case study, keyed by its URL slug. An entry holds the page copy (title, intro, role, stack, year, status, marquee text and highlights), a tint colour, screenshots and links. These fields control the page layout:

- `body1` and `body2` fill the default "The challenge" and "What I built" sections. Setting `sections` replaces both with any number of numbered sections, and the Highlights number adjusts to match.
- `heroImg`, `img2` and `img3` are paths in `public/assets/`. In the default layout, a missing image shows a "screenshot coming soon" placeholder. Add the pixel size of each new screenshot to `imageDims`, or the image falls back to 1600×900.
- `imagesNatural: true` shows screenshots at their own aspect ratio, with optional captions (`heroCaption`, `img2Caption`, `img3Caption`) and alt text for the second screenshot (`img2Alt`). The third is framed as a mobile view.
- `live` adds the "Visit live site" links. Set it to `null` to hide them.
- `credit` prints an attribution note at the foot of the article. Runs with an `href` become links. It is what carries the Sketchfab attribution on `/work/3d` — see [Third-party assets](#third-party-assets) — and the note on the product names and logos in the `/work/premium-hatbazar` screenshots.
- `next` and `nextTitle` set the "Next project" card, which links the case studies in a loop.

A new slug gets its page, metadata and preview image automatically. Some parts are written by hand and need updating along with it:

- the project rows on `/work` (`app/work/page.tsx`) and the Selected work cards on the home page (`app/page.tsx`)
- the project counts: "(03)" on the home page, "(04)" and "All (04)" on `/work`, and "/ 04" in `app/work/[slug]/page.tsx` and `app/og/[slug]/route.tsx`. Each project's own number is its `index` field.

### Everything else

| What | Where |
| --- | --- |
| Home page copy (hero, about, timeline, contact) | `app/page.tsx` |
| Services, prices, process, FAQ | `SERVICES`, `PROCESS` and `FAQ` in `app/services/page.tsx` |
| Site title, description, social tags | `app/layout.tsx` |
| Home and services preview cards | `homeCard` and `servicesCard` in `app/og/[slug]/route.tsx` |
| Colours, fonts, easing | `tailwind.config.ts`, and `:root` in `app/globals.css` |
| Music player sources | `SOURCES` in `components/AboutPhotoCard.tsx` |

### The CV

The CV is `public/assets/rajus-cv.pdf`, and two buttons use it:

- **CV ↓** in the home header (`components/HomeHeader.tsx`) opens it in a new tab.
- **Download CV ↓** in the My journey section (`app/page.tsx`) downloads it as `Md_Raju_Ahmed_CV.pdf`, through the link's `download` attribute.

To update the CV, replace the PDF but keep the filename, then rebuild and redeploy. Neither button needs to change.

## Third-party assets

The repo has no `LICENSE` file, and three of the things it ships came from somewhere else.

| Asset | Source | Status |
| --- | --- | --- |
| `public/assets/amar-dehokhan.mp3`, plus `album-art.jpg` shown on the spinning disc | "Amar Dehokhan" by Odd Signature | Copyrighted commercial music, and the artwork that goes with it. The artist is credited under the About card, but the rights to use either on a public site have not been confirmed. |
| `app/fonts/boldmatte.ttf` | Boldmatte, the face behind the "Raju" wordmark | The web-embedding licence has not been verified. |
| The sneaker model in the Sneaker Lab screenshots and live demo | "Sneakers - Game Ready - Textured (Mockup)" by [kane_sk06](https://sketchfab.com/kanesk06) on Sketchfab | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), modified. Attribution is required, and is printed at the foot of `/work/3d` from the `credit` field in `lib/projects.ts`. |

The compression, the colour pass and the front end of Sneaker Lab are original work; the mesh and its textures are not.

**A credit is not a licence.** Only the third row is settled by crediting: CC BY 4.0 asks for attribution, the attribution is on the page, and that use is covered. The music is a different question. Naming Odd Signature under the About card is courtesy, not permission — a commercial track still needs the rights holder's say-so before it is streamed from a public site, and the same goes for the artwork. The font is the same again: a credit would not stand in for an embedding licence.

The site is already live, so the first two rows are worth settling rather than leaving open. A `LICENSE` file would also fix how the code itself may be reused — the assets above would need to be excluded from it.

## Contact

Md. Raju Ahmed · iamraju705@gmail.com · [github.com/Raju0131](https://github.com/Raju0131)
