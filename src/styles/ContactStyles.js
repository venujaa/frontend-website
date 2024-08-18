import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(var(--secondary-color), 10%);
  }
`;
