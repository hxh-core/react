// 04.08.2024 / v.1.0.0 / Kirill Kireev
// Функция принимает на вход массив чисел и возвращает отсортированный массив

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * @param {number[]} array - The array to be sorted.
 * @return {number[]} The sorted array.
 */
export const bubbleSort = (array: number[]): number[] => {
	const resultArray: number[] = array.slice();

	for (let i = 0; i < resultArray.length; i++) {
		for (let j = 0; j < resultArray.length - 1 - i; j++) {
			if (resultArray[j] > resultArray[j + 1]) {
				[resultArray[j], resultArray[j + 1]] = [
					resultArray[j + 1],
					resultArray[j],
				];

				// Simple swap
				// let temp = resultArray[j];
				// resultArray[j] = resultArray[j + 1];
				// resultArray[j + 1] = temp;
			}
		}
	}

	return resultArray;
};
