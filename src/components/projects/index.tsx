'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CSSProperties } from 'react';
import { useRef } from 'react';

import ProjectTile from '@/components/projects/projectTile';

import styles from './index.module.css';

const Projects = () => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const container = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const mm = gsap.matchMedia(container);

		mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
			gsap.utils.toArray('a').forEach((card, index, cards) => {
				const reverseIndex = cards.length - index;
				const cardElement = card as HTMLAnchorElement;

				gsap.to(cardElement, {
					scrollTrigger: {
						trigger: cardElement,
						scrub: true,
						start: 'top 0%',
						end: `+=${cardElement.offsetHeight * (cards.length - index)}px`,
					},
					scale: 1.1 - reverseIndex * 0.1,
					filter: `brightness(${1.1 - reverseIndex * 0.25})`,
				});
			});
		});
	});

	return (
		<div
			ref={container}
			className={styles.projects}
			style={{ '--numcards': 4 } as CSSProperties}
		>
			<div>
				<ProjectTile
					index={1}
					title="Freshening up KCB’s online presence"
					logo={{
						src: '/cases/kcb/logo.png',
						width: 320,
						height: 320,
						alt: '',
					}}
					background="/cases/kcb/hero.jpg"
					url="/work/kcb"
				/>
				<ProjectTile
					index={2}
					title="A transitional design update"
					logo={{
						src: '/cases/bakertilly/logo.svg',
						width: 180,
						height: 84,
						alt: '',
					}}
					background="/cases/bakertilly/background.jpg"
					url="/work/bakertilly"
				/>
				<ProjectTile
					index={3}
					title="Constructing a design system for internal apps"
					logo={{
						src: '/cases/heijmans/logo.svg',
						alt: '',
						width: 938,
						height: 438,
					}}
					background="/cases/heijmans/background.jpeg"
					url="/work/heijmans-infra"
				/>
				<ProjectTile
					index={4}
					title="Spreading the love for cooking"
					logo={{
						src: '/cases/keukenliefde/logo.png',
						alt: '',
						width: 234,
						height: 136,
					}}
					background="/cases/keukenliefde/background.jpg"
					url="/work/keukenliefde"
				/>
			</div>
		</div>
	);
};

export default Projects;
