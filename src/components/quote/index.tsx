import type { PropsWithChildren } from 'react';

import styles from './index.module.css';

const Quote = ({ children }: PropsWithChildren) => (
	<div className="wrapper">
		<blockquote className={styles.quote}>{children}</blockquote>
	</div>
);

export default Quote;
