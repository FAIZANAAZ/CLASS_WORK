/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "encrypted-tbn0.gstatic.com", // Wildcard ka use karain taake subdomains bhi cover hoon
        },
      ],
    },
  };
  

export default nextConfig;
