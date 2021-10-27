import React from 'react';
import { render, screen } from '@testing-library/react';
import AcUnit from '@material-ui/icons/AcUnit';

import QuestionListItem from './questionListItem';

describe('QuestionListItem', () => {
    it('should render item correctly', () => {
        // Given
        render(
            <QuestionListItem
                item={{
                    id: 'mock-guid',
                    name: 'Thomas',
                    description: 'Cool',
                    icon: AcUnit,
                    species: 'Human',
                }}
            />,
        );

        // Then
        expect(screen.getByText('mock-guid')).toBeVisible();
        expect(screen.getByText('Thomas: Human')).toBeVisible();
        expect(screen.getByText('Cool')).toBeVisible();
        expect(screen.getByTestId('ListItemIcon')).toBeVisible();
    });
});
