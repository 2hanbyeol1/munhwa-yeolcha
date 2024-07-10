/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net"
      },
      {
        protocol: "http",
        hostname: "www.kopis.or.kr"
      }
    ]
  }
};

export default nextConfig;
