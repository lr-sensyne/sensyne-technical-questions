import React from 'react';
import { render, screen } from '@testing-library/react';

import QuestionOne from './questionOne';

describe('QuestionOne', () => {
    it('should increase counter', () => {
        // Given
        render(<QuestionOne />);

        // When
        screen.getByText(`I've been clicked: 0 times`).click();
        screen.getByText(`I've been clicked: 1 times`).click();

        // Then
        expect(screen.getByText(`I've been clicked: 2 times`)).toBeVisible();
    });
});
