import { setUrlBeforeImageName } from '../../helpers';

describe('setUrlBeforeUrl', () => {
	it('should prepend URL to a single string', () => {
		const imageSrc = 'image.jpg';
		const url = 'https://example.com/';
		expect(setUrlBeforeImageName(imageSrc, url)).toBe(
			'https://example.com/image.jpg',
		);
	});

	it('should prepend URL to an array of strings', () => {
		const imageSrc = ['image1.jpg', 'image2.jpg'];
		const url = 'https://example.com/';
		expect(setUrlBeforeImageName(imageSrc, url)).toEqual([
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
		]);
	});

	it('should prepend URL to an empty string', () => {
		const imageSrc = '';
		const url = 'https://example.com/';
		expect(setUrlBeforeImageName(imageSrc, url)).toBe('https://example.com/');
	});

	it('should prepend URL to an empty array', () => {
		const imageSrc: string[] = [];
		const url = 'https://example.com/';
		expect(setUrlBeforeImageName(imageSrc, url)).toEqual([]);
	});

	it('should prepend URL with a path to a single string', () => {
		const imageSrc = 'image.jpg';
		const url = 'https://example.com/path/';
		expect(setUrlBeforeImageName(imageSrc, url)).toBe(
			'https://example.com/path/image.jpg',
		);
	});
});
