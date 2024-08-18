import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  &:hover {
    color: var(--secondary-color);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>AI Company</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
