import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				noir: {
					50: '#F4F4F4',
					100: '#E6E6E6',
					200: '#CACACA',
					300: '#AEAEAE',
					400: '#929292',
					500: '#767676',
					600: '#5A5A5A',
					700: '#3E3E3E',
					800: '#222222',
					900: '#060606',
					950: '#000000',
				},
			},
			fontFamily: {
				display: ['var(--font-space-grotesk)'],
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			screens: {
				xs: '430px',
				hd: '1660px',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('tailwindcss-safe-area'),
		plugin(({ addVariant }) => {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
	],
};

export default config;
