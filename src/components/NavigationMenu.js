import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import { device } from '../theme/Breakpoints';

const menuWidth = '250px';

const NavigationContainer = styled.div`
  height: 100vh;
  width: ${menuWidth};
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform .3s .1s ease-in-out;
  transform: ${({ menuOpened }) => menuOpened ? 'translateX(0)' : `translateX(${menuWidth})`};
  -webkit-box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
  box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
`;

const NavigationList = styled.div`
  margin: 10rem 4rem 0;
  
  @media ( ${device.tablet} ) {
    margin: 10rem 5rem 0;
  }
`;

const NavigationMenu = ({ menuOpened }) => {
  return (
    <NavigationContainer menuOpened={menuOpened}>
      <NavigationList>
        <MainMenu/>
      </NavigationList>
    </NavigationContainer>
  )
}

NavigationMenu.propTypes = {
  menuOpened: PropTypes.bool.isRequired
};

export default NavigationMenu;