'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.css';

const Navigation = () => {
	const currentPathname = usePathname();

	return (
		<nav className={styles.navigation}>
			<div>
				<Link href="/" aria-current={'/' === currentPathname ? 'page' : undefined}>
					<Image src="/logo.svg" width={53} height={64} alt="LabelNoir" />
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
