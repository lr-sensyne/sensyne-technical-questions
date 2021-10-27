import React, { useState } from 'react';
import debounce from 'lodash.debounce';

import { isPhoneNumberValid } from './api';
import {
    Container,
    DescriptionContainer,
    Form,
    Label,
    Input,
    FormatNote,
    ErrorMessage,
} from './styles';

function QuestionFour() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
    const [error, setError] = useState('');

    const validatePhoneNumber = debounce(async (phoneNumber: string) => {
        const isValid = await isPhoneNumberValid(phoneNumber);

        setError(isValid ? '' : 'Please enter a valid phone number');
    }, 300);

    const handlePhoneNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPhoneNumber(event.target.value);

        // Assume the phone number is invalid before we retrieve the validation result
        // in order to block incorrect submission
        setError('Please enter a valid phone number');

        validatePhoneNumber(phoneNumber);
    };

    const handlePhoneNumberBlur = () => {
        setPhoneNumberTouched(true);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        alert('Thanks for contacting us!');
    };

    <Container>
        <DescriptionContainer>
            <h1>Task description</h1>
            <p>
                Your task is to fix the validation of the phone number input in
                the form. Notice how when you type it really quick the error
                persists even though the number is valid.
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
            <FormatNote>
                (please provide UK mobile phone number without country code)
            </FormatNote>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <button disabled={!phoneNumberTouched || error !== ''}>
                Submit
            </button>
        </Form>
    </Container>;
}

export default QuestionFour;
