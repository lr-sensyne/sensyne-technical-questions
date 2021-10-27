import React, { useState, useRef } from 'react';
import debounce from 'lodash.debounce';

import { isPhoneNumberValid } from './api';
import { Container, Form } from './styles';
import CancellationTokenSource from './utils';

let cancellationToken = undefined;
function QuestionFour() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const cancelValidation = useRef<(() => void) | undefined>(undefined);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });

    const hasErrors = Object.values(errors).some((error) => error.length > 0);

    const handleFirstNameChange = (event) => {
        if (event.target.value === '') {
            setErrors({
                ...errors,
                firstName: 'Please enter first name',
            });
        } else {
            setErrors({
                ...errors,
                firstName: '',
            });
        }

        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        if (event.target.value === '') {
            setErrors({
                ...errors,
                lastName: 'Please enter last name',
            });
        } else {
            setErrors({
                ...errors,
                lastName: '',
            });
        }

        setLastName(event.target.value);
    };

    // We don't want to call the API too often
    const validatePhoneNumber = async (phoneNumber: string) => {
        const newCancellationToken = new CancellationTokenSource();
        cancellationToken = newCancellationToken;

        try {
            const isValid = await isPhoneNumberValid(
                phoneNumber,
                newCancellationToken.token,
            );

            setErrors({
                ...errors,
                phoneNumber: isValid ? '' : 'Please enter valid phone number',
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);

        if (cancellationToken !== undefined) {
            console.log(cancellationToken);
            cancellationToken.cancel();
        }
        // if (cancelValidation.current) {
        //     cancelValidation.current();
        // }

        validatePhoneNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <h1>Contact form</h1>
            <p>
                Hello, please fill out this contact form in order for us to sent
                you a prize for your achievement
            </p>
            <Form onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input
                        type="text"
                        onChange={handleFirstNameChange}
                        value={firstName}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        type="text"
                        onChange={handleLastNameChange}
                        value={lastName}
                    />
                </label>
                <label>
                    Phone number: (Please use UK phone number without country
                    code i.e. 7123123123)
                    <input
                        type="text"
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                        maxLength={10}
                    />
                </label>
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                <button disabled={hasErrors}>Submit</button>
            </Form>
        </Container>
    );
}

export default QuestionFour;
