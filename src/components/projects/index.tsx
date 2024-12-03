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
					title="Blauwhoed"
					logo={{
						src: '/cases/blauwhoed/logo.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/blauwhoed/thumbnail.jpg"
					url="/work/blauwhoed"
				/>
				<ProjectTile
					index={2}
					title="Amvest"
					logo={{
						src: '/cases/amvest/logo.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/amvest/thumbnail.jpg"
					url="/work/amvest"
				/>
				<ProjectTile
					index={3}
					title="Gebroeders Blokland"
					logo={{
						src: '/cases/gebroeders-blokland/logo.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/gebroeders-blokland/thumbnail.jpg"
					url="/work/gebroeders-blokland"
				/>
				<ProjectTile
					index={4}
					title="UNO"
					logo={{
						src: '/cases/uno/logo.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/uno/thumbnail.jpg"
					url="/work/uno"
				/>
				<ProjectTile
					index={5}
					title="Freshening up KCB’s online presence"
					logo={{
						src: '/cases/kcb/logo.png',
						width: 320,
						height: 320,
						alt: '',
					}}
					background="/cases/kcb/thumbnail.jpg"
					url="/work/kcb"
				/>
				<ProjectTile
					index={6}
					title="A transitional design update"
					logo={{
						src: '/cases/bakertilly/logo-mark.svg',
						width: 90,
						height: 90,
						alt: '',
					}}
					background="/cases/bakertilly/thumbnail.jpg"
					url="/work/bakertilly"
				/>
				<ProjectTile
					index={7}
					title="Constructing a design system for internal apps"
					logo={{
						src: '/cases/heijmans-vastgoed/mark.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/heijmans-vastgoed/thumbnail.jpg"
					url="/work/heijmans-vastgoed"
				/>
				<ProjectTile
					index={8}
					title="Spreading the love for cooking"
					logo={{
						src: '/cases/keukenliefde/logo.svg',
						alt: '',
						width: 90,
						height: 90,
					}}
					background="/cases/keukenliefde/thumbnail.jpg"
					url="/work/keukenliefde"
				/>
			</div>
		</div>
	);
};

export default Projects;
