export type ProjectFeature = { t: string; d: string };

/* A paragraph inside a long-form section. `lead` is the opening sentence, set
   in ink like the emphasised runs on the homepage, so an enumerated point stays
   scannable without becoming a heading of its own. */
export type CaseParagraph = { lead?: string; text: string };

export type CaseSection = { heading: string; body: CaseParagraph[] };

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  tint: string;
  index: string;
  intro: string;
  role: string;
  stack: string;
  year: string;
  status: string;
  marquee: string;
  /* Rendered as "01 The challenge" / "02 What I built" — unless `sections` is
     set, which supersedes both. */
  body1: string;
  body2: string;
  features: ProjectFeature[];
  live: string | null;
  next: string;
  nextTitle: string;
  /* Long-form headline for the <h1> only. `title` stays short because it also
     feeds the breadcrumb, the OG card, the next-project card and <title>. */
  headline?: string;
  /* Opt-in replacement for body1/body2 when a case study needs more than two
     prose sections. Numbering and the Highlights index follow automatically. */
  sections?: CaseSection[];
  heroImg?: string;
  img2?: string;
  img3?: string;
  /* Case-study image treatment — scoped to projects that opt in. */
  imagesNatural?: boolean;
  heroCaption?: string;
  img2Caption?: string;
  img3Caption?: string;
};

export const projects: Record<string, Project> = {
  techhouse: {
    slug: "techhouse",
    title: "Tech House",
    tags: ["Full-stack", "E-commerce"],
    tint: "#e7e4f9",
    index: "04",
    intro:
      "A complete e-commerce platform built end-to-end — from database schema to checkout flow.",
    role: "Full-stack Developer",
    stack: "Next.js · TS · PostgreSQL",
    year: "2026",
    status: "Shipped",
    marquee: "Tech House ✦ E-commerce ✦ Next.js ✦ TypeScript ✦ PostgreSQL ✦ ",
    body1:
      "Tech House needed a fast, reliable storefront with a real admin backend — not a template. Payments, inventory and orders all had to work together without a single dropped state, and the team needed a dashboard they'd actually enjoy using daily.",
    body2:
      "I owned the whole build: data model, API layer, storefront UI and the admin dashboard. Server-rendered pages keep browsing instant; PostgreSQL keeps orders consistent; the checkout flow was tested against every edge case I could invent.",
    features: [
      { t: "Full auth & accounts", d: "Sign-up, sessions, protected routes and role-based admin access." },
      { t: "Cart & payments", d: "Persistent cart, checkout flow and payment integration built for failure cases." },
      { t: "Admin dashboard", d: "Orders, inventory and product management in one clean internal tool." },
      { t: "Performance first", d: "Server rendering + smart caching — product pages load instantly." },
    ],
    live: null,
    next: "3d",
    nextTitle: "Sneaker Lab",
  },
  cinenest: {
    slug: "cinenest",
    title: "Cinenest",
    tags: ["Web app", "Motion"],
    tint: "#def0e6",
    index: "02",
    intro:
      "A cinematic movie discovery experience — browse, search and explore films with buttery-smooth transitions.",
    role: "Web Developer",
    stack: "React · GSAP · TMDB API",
    year: "2025",
    status: "Live",
    marquee: "Cinenest ✦ Movie discovery ✦ React ✦ GSAP ✦ Live on Vercel ✦ ",
    body1:
      "Movie sites are usually data tables with posters. I wanted Cinenest to feel like cinema itself — full-bleed art, staged transitions, and a browsing flow that feels like flipping through a collection rather than filtering a database.",
    body2:
      "Dynamic routing per film, GSAP-driven page transitions, live search over the TMDB catalog and a bespoke visual system. Deployed on Vercel and open to explore — hit the Visit button.",
    features: [
      { t: "Staged page transitions", d: "GSAP timelines choreograph every route change — nothing just 'appears'." },
      { t: "Live TMDB search", d: "Debounced, instant search across the full movie catalog." },
      { t: "Cinematic detail pages", d: "Full-bleed backdrops, cast rails and rating treatments per film." },
      { t: "Deployed & public", d: "Running on Vercel — the real thing, not a mockup." },
    ],
    live: "https://cine-freak-clone-main.vercel.app/",
    next: "branding",
    nextTitle: "Raju — Identity",
    heroImg: "/assets/cinenest-home.png",
    img2: "/assets/cinenest-detail.png",
    img3: "/assets/cinenest-admin.png",
  },
  branding: {
    slug: "branding",
    title: "Raju — Identity",
    tags: ["Branding", "Portfolio"],
    tint: "#fbe8da",
    index: "03",
    intro:
      "My personal brand and this very portfolio — logotype, palette, motion language and every micro-interaction.",
    role: "Design & Development",
    stack: "Design · Motion · Web",
    year: "2025",
    status: "Live",
    marquee: "Raju ✦ Identity ✦ Logotype ✦ Motion language ✦ This website ✦ ",
    body1:
      "Building your own brand is the hardest brief — you're the client who's never satisfied. I wanted something playful but credible: a hand-drawn logotype, a soft lavender palette, and type with personality that doesn't shout.",
    body2:
      "The logotype, the color system, and this animated portfolio: custom cursor, magnetic buttons, scroll-triggered reveals and a music easter egg. Everything hand-made, nothing from a template.",
    features: [
      { t: "Hand-drawn logotype", d: "The 'Raju' mark — personal, imperfect, memorable." },
      { t: "Motion language", d: "Magnetic buttons, custom cursor, reveals — one consistent feel." },
      { t: "Music easter egg", d: "A spinning disc that plays Amar Dehokhan. Because why not." },
      { t: "Fully hand-built", d: "No templates, no page builders — every pixel is intentional." },
    ],
    live: "https://rifatsarkerraju.com",
    next: "techhouse",
    nextTitle: "Tech House",
    heroImg: "/assets/raju-home.png",
    img2: "/assets/raju-work.png",
    img3: "/assets/raju-project.png",
  },
  "3d": {
    slug: "3d",
    title: "Sneaker Lab",
    tags: ["3D", "WebGL"],
    tint: "#e7e4f9",
    index: "01",
    headline: "Sneaker Lab — Real-Time 3D Product Configurator",
    intro:
      "A product configurator that runs entirely in the browser. The interaction was the easy part. The engineering that mattered was the weight.",
    role: "Solo developer — 3D, front end and asset pipeline",
    stack: "Three.js · React Three Fiber · Next.js · TypeScript · GLSL · Zustand",
    year: "2026",
    status: "Live",
    marquee: "Sneaker Lab ✦ react-three-fiber ✦ Real-time colour ✦ WebGL ✦ ",
    body1:
      "The source model came as baked-texture meshes with no separable parts, so standard per-material tinting was impossible — recolouring one panel meant recolouring the whole shoe, stitching and all.",
    body2:
      "I built a luminance-preserving tint pipeline that recolours the shoe while keeping the fabric weave and stitching intact, then compressed the model from 16.7MB down to 2.4MB with Draco and mesh simplification so it loads fast, even on mobile.",
    sections: [
      {
        heading: "What it does",
        body: [
          {
            text: "Orbit the sneaker, switch between six colourways and three materials, export a render, and watch priced options update the cart total as you go. Everything is client side: no page reloads, no plugin, no server round trip between choices.",
          },
        ],
      },
      {
        heading: "The weight problem",
        body: [
          { text: "The source model was 16.7 MB." },
          {
            text: "On a mid-range Android on mobile data, that is not a slow experience. It is an abandoned one — the visitor leaves before the first frame renders.",
          },
          { text: "I brought it to 2.4 MB. An 86% reduction. Three things got it there:" },
          {
            lead: "Measure before touching anything.",
            text: "I ran gltf-transform inspect first to see the split between geometry and textures. On most models the textures are the problem and the geometry is not, and Draco only compresses geometry — so compressing the wrong half and declaring victory is the most common mistake in this work.",
          },
          {
            lead: "Re-author the textures rather than re-compressing them.",
            text: "A 2048px roughness map doing the work of a 512px one is pure waste. Each map got looked at for what it was actually describing before deciding what resolution it needed.",
          },
          {
            lead: "Treat quantisation bits as a dial, not a switch.",
            text: "Draco's defaults are conservative. Positions usually tolerate fewer bits than expected and normals almost always do. I pushed each until banding appeared, then stepped back one.",
          },
          { text: "It holds 60fps on a mid-range Android, not only on a laptop." },
        ],
      },
      {
        heading: "The colour problem",
        body: [
          {
            text: "Multiplying a tint over a baked texture is the fastest way to make an expensive model look cheap. The weave flattens, and the baked shadows go muddy. A red colourway stops looking like the same shoe in red and starts looking like a red silhouette.",
          },
          {
            text: "So the tint pass does not touch colour as a single value. It separates luminance from chroma and replaces only the chroma, leaving luminance alone — which is where the weave, the stitching and the baked ambient occlusion actually live. The change is then masked by each texel's own saturation, so parts that were never coloured stay that way: white midsoles stay white, metal eyelets stay metal.",
          },
          {
            text: "One model, any colourway, at runtime, with the material detail intact. No second texture set, and nothing extra to download.",
          },
        ],
      },
      {
        heading: "Why it matters commercially",
        body: [
          {
            text: "A configurator that will not load on a phone is a showreel, not a product. The people who abandon it are the ones who were about to buy. That is why the 2.4 MB number is the one I lead with rather than the shader work.",
          },
        ],
      },
    ],
    features: [
      { t: "Real-time colour switching", d: "Swap colourways instantly — the tint pipeline recolours the shoe live, with no reload." },
      { t: "Material presets with live pricing", d: "Leather, suede and canvas presets that update the price the moment you pick one." },
      { t: "Canvas screenshot export", d: "Export your custom sneaker as an image straight from the WebGL canvas." },
      { t: "Mobile-first, touch-safe controls", d: "Orbit, zoom and rotate built for touch — they never fight the page scroll." },
    ],
    live: "https://3d-bay-ten.vercel.app",
    next: "cinenest",
    nextTitle: "Cinenest",
    heroImg: "/assets/sneaker-navy.png",
    img2: "/assets/sneaker-green.png",
    img3: "/assets/sneaker-orange.png",
    imagesNatural: true,
    heroCaption:
      "The Sneaker Lab configurator — six colourways, three materials and live pricing, all rendered in real time in the browser.",
    img2Caption:
      "Real-time colour switching: every swatch recolours the shoe live, while the fabric weave and stitching stay intact.",
    img3Caption:
      "Mobile-first — the full configurator works on touch, with orbit controls that never hijack the page scroll.",
  },
};

export const projectSlugs = Object.keys(projects);

/* Intrinsic pixel size of every screenshot in public/assets, so the case-study
   pages can hand next/image real dimensions without probing the file. */
export const imageDims: Record<string, { w: number; h: number }> = {
  "/assets/cinenest-home.png": { w: 1936, h: 941 },
  "/assets/cinenest-detail.png": { w: 1936, h: 941 },
  "/assets/cinenest-admin.png": { w: 1936, h: 941 },
  "/assets/raju-home.png": { w: 1908, h: 929 },
  "/assets/raju-work.png": { w: 1019, h: 993 },
  "/assets/raju-project.png": { w: 1908, h: 929 },
  "/assets/sneaker-navy.png": { w: 1920, h: 935 },
  "/assets/sneaker-green.png": { w: 1920, h: 935 },
  "/assets/sneaker-orange.png": { w: 470, h: 576 },
};
