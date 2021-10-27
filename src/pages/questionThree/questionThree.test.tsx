import React from 'react';
import { render, screen } from '@testing-library/react';

import QuestionThree from './questionThree';

describe('QuestionThree', () => {
    it('should render all mock data', () => {
        // Given
        render(<QuestionThree />);

        // Then
        expect(screen.getAllByTestId('ListItem').length).toEqual(4);
    });
});
