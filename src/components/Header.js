import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import MenuButton from './MenuButton';
import NavigationMenu from './NavigationMenu';
import EnterFSIcon from '../images/expand.svg';
import ExitFSIcon from '../images/exit_fs.svg';
import ReturnArrow from '../images/return_arrow.svg';

const texts = {
  exitFullScreen: 'wyjdź z trybu pełnoekranowego',
  enterFullScreen: 'włącz tryb pełnoekranowy'
}

const StyledHeader = styled.header`
  padding: 2rem 3rem;
  display: flex;
  background-color: rgba(255, 255, 255, .1);
  width: 100%;
  position: ${({ isHome }) => (isHome ? 'relative' : 'fixed')};
  z-index: 2;
  transition: .25s;
  justify-content: space-between;
  opacity: ${({ isHome }) => (isHome ? 1 : .2 )};
  
  &:hover {
    background-color: rgba(255, 255, 255, .8);
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
`;

const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFSButton = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  padding: 2rem;
  background-image: ${({ isFullScreen }) => (isFullScreen ? `url(${ExitFSIcon})` : `url(${EnterFSIcon})`)};
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: .5s;
  outline: 0;
  margin-right: 10rem;
  opacity: ${({ menuOpened }) => menuOpened &&  0 };
  
  &:hover {
    opacity: .8;
  }
`;

const StyledReturnArrow = styled(Link)`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  padding: 2rem;
  background-image: url(${ReturnArrow});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: .5s;
  outline: 0;
  margin-right: 4rem;
  display: block;
  opacity: ${({ menuOpened }) => menuOpened &&  0 };
  
  &:hover {
    opacity: .8;
  }
`;

const Header = ({ isHome, isFullScreen, toggleFullScreen }) => {

  const [ menuOpened, setMenuOpened ] = useState(false);
  const menuToggle = (isMenuOpened) => setMenuOpened(isMenuOpened);

  return (
    <StyledHeader isHome={isHome} >
      <StyledLink to='/'>
        <Logo/>
      </StyledLink>
      <StyledPanel>
        { !isHome && <StyledReturnArrow menuOpened={menuOpened} to='/' title='powrót'/> }
        <StyledFSButton menuOpened={menuOpened} type='button' title={ isFullScreen ? texts.exitFullScreen : texts.enterFullScreen } onClick={() => toggleFullScreen(!isFullScreen)} isFullScreen={isFullScreen}/>
        <MenuButton menuOpened={menuOpened} menuToggle={menuToggle}/>
        <NavigationMenu menuOpened={menuOpened}/>
      </StyledPanel>
    </StyledHeader>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  toggleFullScreen: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isHome: false,
  isFullScreen: false
};

export default Header;
