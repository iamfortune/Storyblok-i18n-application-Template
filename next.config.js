/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig
