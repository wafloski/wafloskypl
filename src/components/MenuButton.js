import React, { useState } from 'react'
import styled from 'styled-components';

const StyledMenuButton = styled.button`
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform .3s .1s ease-in-out;
  outline: 0;
`;

const MenuButtonBox = styled.span`
  width: 3.6rem;
  height: 2.4rem;
  display: inline-block;
  position: relative;
`;

const MenuButtonInner = styled.span`
  width: 100%;
  height: 0.3rem;
  background-color: ${({ menuOpened }) => menuOpened ? 'transparent' : '#000'};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  
  &::before, &::after {
    width: 100%;
    height: 0.3rem;
    background-color: #000;
    position: absolute;
    content: '';
    left: 0;
    transition: transform .2s .2s ease-in-out;
  }
  
  &::before {
    top: -10px;
    transform: ${({ menuOpened }) => menuOpened ? 'translateY(10px) rotate(45deg)' : ''};
  }
  
  &::after {
    top: 10px;
    transform: ${({ menuOpened }) => menuOpened ? 'translateY(-10px) rotate(-45deg)' : ''};
  }
`;

const MenuButton = () => {
  const [ menuOpened, setMenuOpened ] = useState(false);

  const handleMenuButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <StyledMenuButton onClick={() => handleMenuButtonClick()}>
      <MenuButtonBox>
        <MenuButtonInner menuOpened={menuOpened}/>
      </MenuButtonBox>
    </StyledMenuButton>
  )
};

export default MenuButton;