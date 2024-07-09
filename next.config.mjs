/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "entertainimg.kbsmedia.co.kr"
      }
    ]
  }
};

export default nextConfig;
