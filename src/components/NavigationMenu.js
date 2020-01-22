import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const NavigationContainer = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform .3s .1s ease-in-out;
  transform: ${({ menuOpened }) => menuOpened ? 'translateX(0)' : 'translateX(250px)'};
  -webkit-box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
  box-shadow: -1px 0 10px 2px rgba(0,0,0,0.5);
`;

const NavigationList = styled.ul`
  margin-top: 50px;
  list-style: none;
`;

const NavigationItem = styled.li`
  margin-bottom: 50px;
`;

const NavigationMenu = ({ menuOpened }) => {
  return (
    <NavigationContainer menuOpened={menuOpened}>
      <NavigationList>
        <NavigationItem>dupa</NavigationItem>
        <NavigationItem>cyc</NavigationItem>
        <NavigationItem>koń</NavigationItem>
        <NavigationItem>arbuz</NavigationItem>
      </NavigationList>
    </NavigationContainer>
  )
}

NavigationMenu.propTypes = {
  menuOpened: PropTypes.bool.isRequired
};

export default NavigationMenu;