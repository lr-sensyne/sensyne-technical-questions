import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import QuestionTwo from './questionTwo';
import * as api from './api';

describe('QuestionTwo', () => {
    it('should call getCardDetails on mount', () => {
        // Given
        const getCardDetailsMock = jest
            .spyOn(api, 'getCardDetails')
            .mockImplementation();
        render(<QuestionTwo />);

        // Then
        expect(getCardDetailsMock).toHaveBeenCalled();
    });

    it('should render loading state', () => {
        // Given
        jest.spyOn(api, 'getCardDetails').mockImplementation();
        render(<QuestionTwo />);

        // Then
        expect(screen.getByTestId('LoaderContainer')).toBeVisible();
    });

    it('should render error state', () => {
        // Given
        jest.spyOn(api, 'getCardDetails').mockImplementation(() => {
            throw new Error('Error');
        });
        render(<QuestionTwo />);

        // Then
        expect(screen.getByTestId('ErrorContainer')).toBeVisible();
    });

    it('should render not found state', async () => {
        // Given
        jest.spyOn(api, 'getCardDetails').mockImplementation(() =>
            Promise.resolve(undefined),
        );
        render(<QuestionTwo />);

        // Then
        await waitFor(() =>
            expect(screen.getByTestId('NotFoundContainer')).toBeVisible(),
        );
    });

    it('should render card details', async () => {
        // Given
        jest.spyOn(api, 'getCardDetails').mockImplementation(() =>
            Promise.resolve({
                title: 'Dogs',
                body: 'Dogs are cool',
                imgSrc: 'mock-image-src',
            }),
        );
        render(<QuestionTwo />);

        // Then
        await waitFor(() => {
            expect(screen.getByText('Dogs')).toBeVisible();
            expect(screen.getByText('Dogs are cool')).toBeVisible();
            expect(screen.getByTitle('Dogs')).toBeVisible();
        });
    });
});
