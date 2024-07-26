/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'reqres.in',
                port: '',
                pathname: '/img/faces/**',
            },
        ],
    },
};

export default nextConfig;
