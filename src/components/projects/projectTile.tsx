import classNames from 'classnames';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

import styles from './index.module.css';

type ProjectTileProps = {
	logo: ImageProps;
	background: string;
	title: string;
	url: string;
	index: number;
};

const ProjectTile = ({ logo, background, title, url, index }: ProjectTileProps) => (
	<Link
		href={url}
		className={classNames(styles.project)}
		style={{ '--index': index } as CSSProperties}
	>
		<div>
			<Image
				src={logo.src}
				alt={logo.alt || ''}
				width={logo.width}
				height={logo.height}
				className={styles.logo}
			/>
			<span className={styles.title}>{title}</span>
			<Image
				src={background}
				alt=""
				fill={true}
				className={styles.background}
				sizes="(max-width: 768px) 100vw, 50vw"
				// placeholder="blur"
			/>
		</div>
	</Link>
);

export default ProjectTile;
