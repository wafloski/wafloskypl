import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: ${({type}) => type === 'footer' ? 'row' : 'column' };
  li {
    margin-right: ${({type}) => type === 'footer' && '4rem' };
    margin-bottom: ${({type}) => type === 'footer' ? 0 : '4rem' }
    font-size: 2rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MainMenu = ({type}) => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      allWordpressWpApiMenusMenusItems(filter: {name: {eq: "nav_menu"}}) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
  `);

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;

  return (
    <StyledMenuContainer type={type}>
      {
        menuItems.map((item) => (
          <li>
            <StyledLink key={item.object_slug} to={item.object_slug}>
              {item.title}
            </StyledLink>
          </li>
        ))
      }
    </StyledMenuContainer>
  );
}

MainMenu.propTypes = {
  type: PropTypes.string
};

MainMenu.defaultProps = {
  type: ''
};

export default MainMenu;