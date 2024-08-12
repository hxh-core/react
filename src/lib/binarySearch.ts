// 04.08.2024 / v.1.0.0 / Kirill Kireev
// Функция принимает на вход массив чисел и искомое число
// Возвращает найденное число или null если не найдено

/**
 * Performs a binary search on a sorted array to find a specific item.
 *
 * @param {number[]} array - The sorted array to search in.
 * @param {number} item - The item to search for.
 * @return {number | null} - The found item or null if not found.
 */
export const binarySearch = (array: number[], item: number): number | null => {
	let low = 0;
	let high = array.length - 1;

	if (array.length === 0) {
		return null;
	}

	while (low <= high) {
		const middle = Math.floor((high + low) / 2);
		const value = array[middle];

		if (value === item) {
			return value;
		}

		if (value > item) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	return null;
};
