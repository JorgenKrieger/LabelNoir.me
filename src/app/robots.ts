import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/util/constants';

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
};

export default robots;
