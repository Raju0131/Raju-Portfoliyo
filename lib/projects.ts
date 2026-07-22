export type ProjectFeature = { t: string; d: string };

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
  body1: string;
  body2: string;
  features: ProjectFeature[];
  live: string | null;
  next: string;
  nextTitle: string;
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
    intro:
      "A real-time 3D sneaker configurator — pick your colourway and material, watch it recolour live, and export the result. Built to run smoothly right in the browser.",
    role: "Developer",
    stack: "Next.js · R3F · Zustand",
    year: "2026",
    status: "Live",
    marquee: "Sneaker Lab ✦ react-three-fiber ✦ Real-time colour ✦ WebGL ✦ ",
    body1:
      "The source model came as baked-texture meshes with no separable parts, so standard per-material tinting was impossible — recolouring one panel meant recolouring the whole shoe, stitching and all.",
    body2:
      "I built a luminance-preserving tint pipeline that recolours the shoe while keeping the fabric weave and stitching intact, then compressed the model from 16.7MB down to 2.4MB with Draco and mesh simplification so it loads fast, even on mobile.",
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
