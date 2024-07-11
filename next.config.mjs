/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "http",
        hostname: "www.kopis.or.kr" // 나중에 지워서 올리기
      }
    ]
  }
};

export default nextConfig;
