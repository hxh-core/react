import { bubbleSort } from '../../lib';

describe('bubbleSort', () => {
	it('should sort an empty array', () => {
		expect(bubbleSort([])).toEqual([]);
	});

	it('should sort a single-element array', () => {
		expect(bubbleSort([1])).toEqual([1]);
	});

	it('should sort a sorted array', () => {
		expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
	});

	it('should sort a reverse-sorted array', () => {
		expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
	});

	it('should sort a partially sorted array', () => {
		expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
	});

	it('should sort a random array', () => {
		expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
			1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
		]);
	});

	it('should sort a random array', () => {
		expect(bubbleSort([6, 3, 7, 2, 5, 8, 1, 8, 4, 12, 732, 21, 543])).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 8, 12, 21, 543, 732,
		]);
	});
});
