import React from 'react';
import styled from 'styled-components';
import MenuContext from '../contexts/MenuContext';

const NavigationContainer = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-250px);
  transition: transform .3s .1s ease-in-out;
`;

const NavigationList = styled.ul`
  margin-top: 50px;
  list-style: none;
`;

const NavigationItem = styled.li`
  margin-bottom: 50px;
`;

const NavigationMenu = () => (
  <MenuContext.Consumer>
    {(context) => (
      <NavigationContainer>
        { context }
        <NavigationList>
          <NavigationItem>dupa</NavigationItem>
          <NavigationItem>cyc</NavigationItem>
          <NavigationItem>koń</NavigationItem>
          <NavigationItem>arbuz</NavigationItem>
        </NavigationList>
      </NavigationContainer>
    )}
  </MenuContext.Consumer>
);

export default NavigationMenu;