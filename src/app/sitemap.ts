import fs from 'fs';
import path from 'path';

import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/util/constants';

// Path to the /app/work directory
const workDir = path.join(process.cwd(), 'src', 'app', 'work');

// Get folder names
let folderNames: Array<string> = [];
try {
	folderNames = fs.readdirSync(workDir).filter(item => {
		const itemPath = path.join(workDir, item);
		return fs.statSync(itemPath).isDirectory(); // Only include directories
	});
} catch (err) {
	console.error('Error reading /app/work directory:', err);
}

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		...folderNames.map(project => ({
			url: `${BASE_URL}/work/${project}`,
			lastModified: new Date(),
			priority: 0.5,
		})),
	];
};

export default sitemap;
