import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import EnterFSIcon from '../images/expand.svg';
import ExitFSIcon from '../images/exit_fs.svg';

const StyledHeader = styled.header`
  padding: 2rem 3rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  position: ${({ isHome }) => (isHome ? 'relative' : 'fixed')};
  z-index: 1;
  transition: .25s;
  justify-content: space-between;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const StyledLink = styled(Link)`
  
`;

const StyledPanel = styled.div`

`;

const StyledFSButton = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  background-image: ${({ isFullScreen }) => (isFullScreen ? `url(${ExitFSIcon})` : `url(${EnterFSIcon})`)};
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: .5s;
  outline: 0;
  
  &:hover {
    opacity: .8;
  }
`;

const Header = ({ isHome, isFullScreen, toggleFullScreen }) => {
  return (
    <StyledHeader isHome={isHome} >
      <StyledLink to="/">
        <Logo/>
      </StyledLink>
      <StyledPanel>
        <StyledFSButton type='button' title='full screen' onClick={() => toggleFullScreen(!isFullScreen)} isFullScreen={isFullScreen}/>
      </StyledPanel>
    </StyledHeader>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  toggleFullScreen: PropTypes.func.isRequired
};

Header.defaultProps = {
  isHome: false,
  isFullScreen: false
};

export default Header;
