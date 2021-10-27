import AcUnit from '@material-ui/icons/AcUnit';

import { createRowData } from './mocks';

describe('createRowData', () => {
    it('should return default mock', () => {
        // When
        const result = createRowData({
            name: null,
            Icon: null,
            description: null,
            species: null,
        });

        // Then
        expect(result).toEqual({
            id: expect.any(String),
            species: 'Human',
            name: 'Jon Snow',
            icon: AcUnit,
            description: 'You know nothing, Jon Snow.',
        });
    });

    it('should return row data', () => {
        // When
        const result = createRowData({
            name: 'Thomas',
            Icon: AcUnit,
            description: 'Cool',
            species: 'Human',
        });

        // Then
        expect(result).toEqual({
            id: expect.any(String),
            species: 'Human',
            name: 'Thomas',
            icon: AcUnit,
            description: 'Cool',
        });
    });
});
