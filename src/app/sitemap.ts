import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/util/constants';

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${BASE_URL}/work/bakertilly`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${BASE_URL}/work/heijmans-infra`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${BASE_URL}/work/kcb`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${BASE_URL}/work/keukenliefde`,
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
	];
};

export default sitemap;
