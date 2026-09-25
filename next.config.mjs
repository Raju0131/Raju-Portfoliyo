/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      /* Wrong-number forms of the two real pages. Each of these 404s on its
         own, so it is sent to the page the visitor meant rather than to a
         dead end. */
      { source: "/service", destination: "/services", permanent: true },
      { source: "/works", destination: "/work", permanent: true },
      /* The e-commerce case study's address from before the project took its
         name, so links shared under the old one still land on it. */
      { source: "/work/techhouse", destination: "/work/premium-hatbazar", permanent: true },
    ];
  },
};

export default nextConfig;
