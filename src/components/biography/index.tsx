'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useRef } from 'react';

import interests from '@/data/interests.json';
import imgixLoader from '@/util/loader';

import styles from './index.module.css';

const blurLayers = 8;

const Biography = () => {
	const container = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const mm = gsap.matchMedia(container);

		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.to('img', {
				scrollTrigger: {
					trigger: 'img',
					scrub: true,
					start: 'top 100%',
					end: 'bottom 0%',
				},
				'--y': '20%',
			});
		});
	});

	return (
		<div className={styles.biography}>
			<figure ref={container} className={styles.figure}>
				<Image loader={imgixLoader} src="profile.jpeg" alt="" fill={true} />

				{/* Progressive blur */}
				{[...Array(blurLayers).keys()].map(i => (
					<div key={i} style={{ '--index': i + 1 } as CSSProperties}></div>
				))}
			</figure>

			<div className={styles.wrapper}>
				<div className={styles.profile}>
					<p className={styles.name}>J&ouml;rgen Krieger</p>
					<ul className={styles.stats}>
						<li>
							<span>Age</span>
							<span>35 y.o</span>
						</li>
						<li>
							<span>Nationality</span>
							<span>🇳🇱 Dutch</span>
						</li>
						<li>
							<span>Experience</span>
							<span>10+ years</span>
						</li>
					</ul>

					<p>
						<strong>Interests</strong>
					</p>
					<ul className={styles.interests}>
						{interests.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>

					<p>
						Enriching life through digital design, that’s where it’s all about for me.
						By crafting products that not just look good, but improve the lives of
						everyone using them, I’m trying to change the world for the better.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Biography;
