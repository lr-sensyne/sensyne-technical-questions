import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
    border-radius: 8px;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ececec;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
`;

export const FormatNote = styled.p`
    padding: 0;
    color: gray;
    margin: 0.25rem 0;
`;

export const ErrorMessage = styled.p`
    color: red;
    text-align: left;
    padding: 0;
`;
