import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

import styles from './index.module.css';

// Types
type InlineLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		icon: IconDefinition;
		iconColor?: string;
		iconPosition?: 'left' | 'right';
		iconSize?: 'large';
	};

// Helper function
const isInternalLink = (url: string | undefined) => url?.startsWith('/') || url?.startsWith('#');

// Main component
const InlineLink = ({
	href,
	children,
	className,
	icon,
	iconColor,
	iconPosition = 'right',
	iconSize,
	...props
}: InlineLinkProps) => {
	// Links
	const linkClasses = classNames(
		className,
		styles.link,
		icon && (iconPosition === 'left' ? styles.iconLeft : styles.iconRight)
	);

	// Content
	const content = (
		<>
			{icon && (
				<div className={styles.icon} style={{ color: iconColor }}>
					<FontAwesomeIcon
						icon={icon}
						className={iconSize === 'large' ? styles.large : undefined}
					/>
				</div>
			)}
			{children}
		</>
	);

	// Return
	return isInternalLink(href) ? (
		<Link href={href} className={linkClasses} {...props}>
			{content}
		</Link>
	) : (
		<a href={href} className={linkClasses} target="_blank" rel="noopener noreferrer" {...props}>
			{content}
		</a>
	);
};

export default InlineLink;
