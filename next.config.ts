import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
            }

            , {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            }
        ]
    }
};

export default nextConfig;
