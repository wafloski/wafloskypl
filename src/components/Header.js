import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';

const StyledLink = styled(Link)`
  padding: 2rem 3rem;
  display: block;
`;

const Header = ({ isHome }) => (
  isHome ? (<header>
    <StyledLink to="/">
      <Logo />
    </StyledLink>
  </header>) : null
);

Header.propTypes = {
  isHome: PropTypes.bool
};

Header.defaultProps = {
  isHome: false
};

export default Header;
