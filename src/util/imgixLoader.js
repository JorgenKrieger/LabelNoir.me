export default function imgixLoader({ src, width, quality }) {
	if (src.contains('http')) return src;

	const url = new URL(`https://assets.labelnoir.me/${src}`);
	const params = url.searchParams;
	params.set('auto', params.getAll('auto').join(',') || 'format');
	params.set('fit', params.get('fit') || 'max');
	params.set('w', params.get('w') || width.toString());
	params.set('q', (quality || 50).toString());
	return url.href;
}
