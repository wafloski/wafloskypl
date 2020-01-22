/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import useEventListener from '@use-it/event-listener';
import Fullscreen from 'react-full-screen';
import GlobalStyle from '../theme/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const ESCAPE_KEYS = ['27', 'Escape'];

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

  const [ isFullScreen, setFullScreen ] = useState(false);

  const fullScreenToggler = (isFS) => setFullScreen(isFS);

  const ESCkeyExit = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key)) && isFullScreen) {
      setFullScreen(false);
    }
  }

  useEventListener('keydown', ESCkeyExit);

  return (
    <>
      <Fullscreen
        enabled={isFullScreen}
      >
        <GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title} isHome={isHome} isFullScreen={isFullScreen} toggleFullScreen={fullScreenToggler}/>
        <main>{children}</main>
        <Footer/>
      </Fullscreen>
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
