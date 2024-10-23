'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CSSProperties, PropsWithChildren } from 'react';
import { useRef } from 'react';

import styles from './index.module.css';

const Clients = ({ children, data }: PropsWithChildren<{ data: Array<string> }>) => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const container = useRef<HTMLUListElement>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia(container);

			mm.add(
				{
					isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
					isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
					reduceMotion: "(prefers-reduced-motion: reduce)',",
				},
				context => {
					const { isDesktop, reduceMotion } = context.conditions as gsap.Conditions;

					gsap.utils.toArray('li').forEach((item, index) => {
						const element = item as HTMLLIElement;

						gsap.from(element, {
							scrollTrigger: {
								trigger: element.parentElement,
								start: 'top 80%',
								once: true,
							},
							opacity: 0,
							filter: `blur(${isDesktop ? 20 : 10}px)`,
							duration: reduceMotion ? 0 : 0.35,
							delay: 0.05 * index,
						});
					});
				}
			);
		},
		{ scope: container }
	);

	return (
		<div className={styles.clients}>
			<div>
				<p>{children}</p>
				<ul ref={container}>
					{data.map((item, index) => (
						<li key={item} style={{ '--index': index } as CSSProperties}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Clients;
