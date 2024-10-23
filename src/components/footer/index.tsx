import InlineLink from '@/components/inlineLink';
import socials from '@/data/socials';

import styles from './index.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<div>
			<p>This is the part where you get in touch and we make amazing things happen.</p>

			<nav>
				{socials.map(social => (
					<InlineLink
						key={social.label}
						href={social.url}
						icon={social.icon}
						iconColor={social.color}
						iconPosition="left"
						iconSize="large"
					>
						{social.label}
					</InlineLink>
				))}
			</nav>
		</div>
	</footer>
);

export default Footer;
