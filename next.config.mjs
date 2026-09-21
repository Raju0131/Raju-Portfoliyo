/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  /* Wrong-number forms of the two real pages. Each of these 404s on its own,
     so it is sent to the page the visitor meant rather than to a dead end. */
  async redirects() {
    return [
      { source: "/service", destination: "/services", permanent: true },
      { source: "/works", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
