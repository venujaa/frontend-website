import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ primary }) => (primary ? 'var(--secondary-color)' : 'var(--primary-color)')};
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? 'darken(var(--secondary-color), 10%)' : 'darken(var(--primary-color), 10%)')};
  }
`;

const Button = ({ children, primary, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
