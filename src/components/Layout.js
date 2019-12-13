/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../theme/GlobalStyle'
import Header from './Header';

const Layout = ({ children, isHome }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata.title} isHome={isHome}/>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Mateusz Konopka</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool
};

Layout.defaultProps = {
  isHome: false
};

export default Layout;
