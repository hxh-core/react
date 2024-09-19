// 19.09.2024 / v.1.0.0 / Jsouwl
// Функция принимает на массив и размер чанка
// Возвращает исходный массив, разбитый на чанки соответствующего размера

/**
 * Splits an array into subarrays of a given size.
 *
 * @template T
 * @param {T[]} array - The array to be split into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {T[][]} - A new array containing subarrays of the original array.
 */
export function splitByChunks<T>(array: T[], chunkSize: number): T[][] {
    if (chunkSize <= 0) {
        throw new Error('Chunk size must be greater than 0');
    }
    return array.reduce((resultArray: T[][], item: T, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
}
