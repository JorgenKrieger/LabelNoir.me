import classNames from 'classnames';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import '@/styles/global.css';
import { SPACE_GROTESK } from '@/util/fonts';

const geistSans = localFont({
	src: '../assets/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../assets/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const viewport: Viewport = {
	themeColor: '#000',
	initialScale: 1,
	viewportFit: 'cover',
	width: 'device-width',
};

export const metadata: Metadata = {
	title: 'LabelNoir',
	description: 'Hey, this is the personal portfolio of Jörgen. A Dutch Digital Designer.',
};

const FONTS = classNames(geistSans.variable, geistMono.variable, SPACE_GROTESK.variable);

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang="en">
		<body className={classNames(FONTS, 'bg-noir-950 text-white antialiased')}>
			<Navigation />

			{children}

			<Footer />
		</body>
	</html>
);

export default RootLayout;
