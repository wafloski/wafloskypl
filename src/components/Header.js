import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledLink = styled(Link)`
  padding: 2rem 3rem;
  display: block;
`;

const Header = () => (
  <header>
    <StyledLink to="/">
      <Logo />
    </StyledLink>
  </header>
);

export default Header;
