'use client';

import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { useRef } from 'react';

import styles from './index.module.css';

type HeroProps = PropsWithChildren<
	HTMLAttributes<HTMLDivElement> & {
		background?: StaticImageData | string;
		dark?: boolean;
	}
>;

const Hero: FC<HeroProps> = ({ className, children, background, dark = true }) => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const container = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const mm = gsap.matchMedia(container);

		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.to('img', {
				scrollTrigger: {
					trigger: 'img',
					scrub: true,
					start: 'top 0%',
					end: 'bottom 0%',
				},
				'--y': '40%',
				duration: 1,
			});
		});
	});

	return (
		<header ref={container} className={styles.hero}>
			<div>{children}</div>
			{background && (
				<Image
					src={background}
					alt=""
					fill={true}
					className={classNames(className, dark ? 'opacity-35' : 'opacity-65')}
					// placeholder="blur"
					priority={true}
				/>
			)}
		</header>
	);
};

export default Hero;
