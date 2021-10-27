import { sort } from './utils';

describe('sort', () => {
    it('should return sorted array', () => {
        // Given
        const arrayUnsorted = [2, 1, 6, 3];

        // When
        const arraySorted = sort(arrayUnsorted, (a, b) => a - b);

        // Then
        expect(arraySorted).toEqual([1, 2, 3, 6]);
    });
});
