/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://esp32-agrinho.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
