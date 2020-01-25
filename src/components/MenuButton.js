import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledMenuButton = styled.button`
  position: ${({ menuOpened }) => menuOpened ? 'fixed' : 'absolute'};
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: all .3s .1s ease-in-out;
  transform: ${({ menuOpened }) => menuOpened ? 'translateX(-230px)' : 'translateX(0px)'};
  outline: 0;
  right: 4rem;
`;

const MenuButtonBox = styled.span`
  width: 4rem;
  height: 2.4rem;
  display: inline-block;
  position: relative;
`;

const MenuButtonInner = styled.span`
  width: 100%;
  height: 0.4rem;
  background-color: ${({ menuOpened }) => menuOpened ? 'transparent' : '#000'};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  
  &::before, &::after {
    width: 100%;
    height: 0.4rem;
    background-color: #000;
    position: absolute;
    content: '';
    left: 0;
    transition: transform .2s .2s ease-in-out;
  }
  
  &::before {
    top: -12px;
    transform: ${({ menuOpened }) => menuOpened ? 'translateY(12px) rotate(45deg)' : ''};
  }
  
  &::after {
    top: 12px;
    transform: ${({ menuOpened }) => menuOpened ? 'translateY(-12px) rotate(-45deg)' : ''};
  }
`;

const MenuButton = ({ menuToggle, menuOpened }) => {

  const handleMenuButtonClick = () => {
    menuToggle(!menuOpened);
  };

  return (
    <>
      <StyledMenuButton menuOpened={menuOpened} onClick={handleMenuButtonClick}>
        <MenuButtonBox>
          <MenuButtonInner menuOpened={menuOpened}/>
        </MenuButtonBox>
      </StyledMenuButton>
    </>
  )
};

MenuButton.propTypes = {
  menuOpened: PropTypes.bool.isRequired,
  menuToggle: PropTypes.func.isRequired,
};

export default MenuButton;