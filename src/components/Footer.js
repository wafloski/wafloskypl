import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MainMenu from './MainMenu'
import FBicon from '../images/fb.png';
import Instaicon from '../images/insta.png';
import Logo from '../images/logo-waflosky.png';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #fff;
`;

const StyledFooterRow = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;
`;

const StyledFooterCol = styled.div`
  width: 33.3333%;
  padding: 0 3rem;
  display: flex;
`;

const StyledFooterLogo = styled(Link)`
  img {
    width: 15rem;
    height: 4rem;
    margin-right: 4rem;
  }
`;

const StyledCopyright = styled.p`
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem;
`;

const StyledSocialLink = styled(Link)`
  margin-right: 1.6rem;
  img {
    width: 4.8rem;
    transition: .25s;
    &:hover {
      opacity: .8;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterRow>
      <StyledFooterCol>
        <StyledFooterLogo to ='/'><img alt='Waflosky Logo' src={Logo}/></StyledFooterLogo>
      </StyledFooterCol>
      <StyledFooterCol>
        <MainMenu type='footer'/>
      </StyledFooterCol>
      <StyledFooterCol>
        <StyledSocialLink to='https://www.instagram.com/ksiaze_waflitto/'><img alt='Waflosky Facebook' src={FBicon}/></StyledSocialLink>
        <StyledSocialLink to='https://www.instagram.com/ksiaze_waflitto/'><img alt='Waflosky Instagram' src={Instaicon}/></StyledSocialLink>
      </StyledFooterCol>
    </StyledFooterRow>
    <StyledCopyright>© {new Date().getFullYear()} waflosky.pl</StyledCopyright>
  </StyledFooter>
);

export default Footer;

