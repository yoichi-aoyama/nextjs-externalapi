/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode:true,
    swcMinify: true,
    images: {
        domains: ['images.dog.ceo'],
    },
}

module.exports = nextConfig
