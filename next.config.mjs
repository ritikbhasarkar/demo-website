/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
