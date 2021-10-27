import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import QuestionFour from './questionFour';

describe('QuestionFour', () => {
    it('should not show phone number validation error', async () => {
        // Given
        render(<QuestionFour />);

        // When
        const input = screen.getByLabelText('Phone number:');
        fireEvent.change(input, { target: { value: '712312312' } });
        fireEvent.change(input, { target: { value: '7123123121' } });

        // Then
        await waitFor(() =>
            expect(
                screen.getByText('Please enter a valid phone number'),
            ).not.toBeVisible(),
        );
    });

    it('should enable submit button', async () => {
        // Given
        render(<QuestionFour />);

        // When
        const input = screen.getByLabelText('Phone number:');
        fireEvent.change(input, { target: { value: '7123123121' } });

        // Then
        await waitFor(() => expect(screen.getByText('Submit')).toBeEnabled());
    });
});
