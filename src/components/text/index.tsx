import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './index.module.css';

type TextProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Text = ({ children, className }: TextProps) => (
	<div className="wrapper">
		<div className={classNames(styles.text, className)}>{children}</div>
	</div>
);

export default Text;
