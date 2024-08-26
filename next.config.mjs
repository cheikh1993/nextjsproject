/** @type {import('next').NextConfig} */
const nextConfig = {

      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.campussuddesmetiers.com",
            
          },
          {
            protocol: "https",
            hostname: "senego.com",
          },
        ],
      },
};

export default nextConfig;
