import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} AI Company. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
