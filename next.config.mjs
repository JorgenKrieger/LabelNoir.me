/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'custom',
		// path: 'https://assets.labelnoir.me/',
		loaderFile: './src/util/loader.ts',
	},
};

export default nextConfig;
