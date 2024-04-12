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

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     // loader: "svg-inline-loader",
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
};

export default nextConfig;
