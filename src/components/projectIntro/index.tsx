import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import InlineLink from '@/components/inlineLink';

import styles from './index.module.css';

type ProjectIntroType = PropsWithChildren<
	HTMLAttributes<HTMLDivElement> & {
		logo?: StaticImageData | string;
		url?: string;
	}
>;

const ProjectIntro = ({ children, logo, url, className }: ProjectIntroType) => (
	<div className={classNames(className, 'wrapper')}>
		<div className={styles.projectIntro}>
			{logo && (
				<Image
					src={logo}
					alt=""
					width={234}
					height={136}
					className="max-h-32 object-contain object-left"
				/>
			)}
			<div className={styles.content}>
				{children}
				{url && (
					<InlineLink href={url} icon={faUpRightFromSquare}>
						View site
					</InlineLink>
				)}
			</div>
		</div>
	</div>
);

export default ProjectIntro;
