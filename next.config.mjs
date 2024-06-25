/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Cache-Control",
      value: "no-store, no-cache, must-revalidate, proxy-revalidate",
     },
     {
      key: "CDN-Cache-Control",
      value: "no-store, no-cache, must-revalidate, proxy-revalidate",
     },
     {
      key: "Vercel-CDN-Cache-Control",
      value: "no-store, no-cache, must-revalidate, proxy-revalidate",
     },
    ],
   },
  ];
 },
};

export default nextConfig;
