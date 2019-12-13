import { Link } from 'gatsby';
import React from 'react';
import Logo from './logo';

const LogoStyles = {
  padding: 10,
  display: 'block',
};

const Header = () => (
  <header>
    <Link style={LogoStyles} to="/">
      <Logo />
    </Link>
  </header>
);

export default Header;
