'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

import styles from './index.module.css';

const Gallery = ({ children }: PropsWithChildren) => {
	const container = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const mm = gsap.matchMedia(container);

		mm.add(
			{
				isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
				isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			context => {
				const { isDesktop, reduceMotion } = context.conditions as gsap.Conditions;
				const spacing = isDesktop ? 56 : 28;

				gsap.utils.toArray('img').forEach((img, index) => {
					const imgElement = img as HTMLImageElement;
					const even = index % 2 == 0;

					gsap.to(imgElement, {
						scrollTrigger: {
							trigger: imgElement.parentElement,
							scrub: true,
							start: 'top 60%',
							end: 'bottom 50%',
						},
						x: (spacing / 2) * (even ? 1 : -1),
						clipPath: `inset(0 ${spacing / 2}px round 32px)`,
						duration: reduceMotion ? 0 : 1,
					});
				});
			}
		);
	});

	return (
		<div ref={container} className={styles.gallery}>
			{children}
		</div>
	);
};

export default Gallery;
