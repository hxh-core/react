import { splitByChunks } from '../../lib/splitByChunks';

describe('splitByChunks', () => {
    test('should split array into chunks of given size', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const chunkSize = 3;
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        expect(splitByChunks(input, chunkSize)).toEqual(expected);
    });

    test('should handle last chunk smaller than chunk size', () => {
        const input = [1, 2, 3, 4, 5];
        const chunkSize = 2;
        const expected = [[1, 2], [3, 4], [5]];
        expect(splitByChunks(input, chunkSize)).toEqual(expected);
    });

    test('should return empty array when input array is empty', () => {
        const input: number[] = [];
        const chunkSize = 3;
        const expected: number[][] = [];
        expect(splitByChunks(input, chunkSize)).toEqual(expected);
    });

    test('should handle chunk size larger than array length', () => {
        const input = [1, 2, 3];
        const chunkSize = 5;
        const expected = [[1, 2, 3]];
        expect(splitByChunks(input, chunkSize)).toEqual(expected);
    });

    test('should throw error when chunk size is zero or negative', () => {
        const input = [1, 2, 3];
        expect(() => splitByChunks(input, 0)).toThrow('Chunk size must be greater than 0');
        expect(() => splitByChunks(input, -1)).toThrow('Chunk size must be greater than 0');
    });
});
