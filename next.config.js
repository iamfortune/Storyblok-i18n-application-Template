/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
	},
};

module.exports = nextConfig
