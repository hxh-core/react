import { setUrlBeforeSrc } from '../../helpers';

describe('setUrlBeforeSrc', () => {
	it('should prepend the URL to a single string', () => {
		expect(setUrlBeforeSrc('image.jpg', 'https://example.com/')).toEqual(
			'https://example.com/image.jpg',
		);
	});

	it('should prepend the URL to each string in an array', () => {
		expect(
			setUrlBeforeSrc(['image1.jpg', 'image2.jpg'], 'https://example.com/'),
		).toEqual([
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
		]);
	});
});
