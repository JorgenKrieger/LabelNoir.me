'use client';

import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { useRef } from 'react';

import styles from './index.module.css';

const Media = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add(
				{
					isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
					isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
					reduceMotion: "(prefers-reduced-motion: reduce)',",
				},
				context => {
					const { isDesktop, reduceMotion } = context.conditions as gsap.Conditions;

					gsap.to('img', {
						scrollTrigger: {
							trigger: 'img',
							scrub: true,
							start: 'top 60%',
							end: 'bottom 50%',
						},
						'--inset': isDesktop ? '56px' : '28px',
						'--radius': '32px',
						duration: reduceMotion ? 0 : 1,
					});
				}
			);
		},
		{ scope: container }
	);

	return (
		<div className={classNames(styles.media, className)} ref={container}>
			{children}
		</div>
	);
};

export default Media;
