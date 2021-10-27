import React, { useState, useRef } from 'react';
import debounce from 'lodash.debounce';

import { isPhoneNumberValid, CANCELLED } from './api';
import {
    Container,
    DescriptionContainer,
    Form,
    Label,
    Input,
    ErrorMessage,
} from './styles';
import CancellationTokenSource from './utils';

function QuestionFour() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
    const [error, setError] = useState('');
    const cancelValidationToken = useRef<CancellationTokenSource | undefined>(
        undefined,
    );

    const validatePhoneNumber = debounce(
        async (
            phoneNumber: string,
            cancellationTokenSource: CancellationTokenSource,
        ) => {
            try {
                const isValid = await isPhoneNumberValid(
                    phoneNumber,
                    cancellationTokenSource.token,
                );

                setError(isValid ? '' : 'Please enter a valid phone number');
            } catch (err) {
                if (err === CANCELLED) {
                    // Do nothing, the error happened because of cancellation
                }
            }
        },
        300,
    );

    const handlePhoneNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPhoneNumber(event.target.value);

        // Assume the phone is invalid before we retrieve the validation result in order to block submission
        setError('Please enter a valid phone number');

        // Cancel previous validation
        validatePhoneNumber.cancel();
        if (cancelValidationToken.current) {
            cancelValidationToken.current.cancel();
        }

        const newCancellationToken = new CancellationTokenSource();
        cancelValidationToken.current = newCancellationToken;

        validatePhoneNumber(event.target.value, newCancellationToken);
    };

    const handlePhoneNumberBlur = () => {
        setPhoneNumberTouched(true);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        alert('Thanks for contacting us!');
    };

    return (
        <Container>
            <DescriptionContainer>
                <h1>Task description</h1>
                <p>
                    Your task is to fix the validation of the phone number input
                    in the form. Notice how when you type it really quick the
                    error persists even though the number is valid.
                </p>
            </DescriptionContainer>
            <Form onSubmit={handleSubmit}>
                <h2>Contact form</h2>
                <Label>
                    <span>Phone number:</span>
                    <Input
                        type="text"
                        onChange={handlePhoneNumberChange}
                        onBlur={handlePhoneNumberBlur}
                        value={phoneNumber}
                        maxLength={10}
                    />
                </Label>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <button disabled={!phoneNumberTouched || error !== ''}>
                    Submit
                </button>
            </Form>
        </Container>
    );
}

export default QuestionFour;
