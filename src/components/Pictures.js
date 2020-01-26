import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { device } from '../theme/Breakpoints';

const ImageContainer = styled.div`
  position: relative;
  break-inside: avoid;
  page-break-inside: avoid;
  margin-bottom: 0.1rem;
  height: 280px;
  @media ( ${device.laptop} ) {
    height: auto;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  &:after {
    content: '';
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: .25s;
  }
  
  &:hover:after {
    background-color: rgba(0,0,0,0);
  }
`;

const StyledTextContainer = styled.div`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  
  &:hover > h2 {
    opacity: 0.2;
  }
`;

const StyledTitleText = styled.h2`
  font-weight: 400;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  transition: .25s;
  padding: 1rem 2rem 0.6rem;
  text-shadow: 1px 1px 0 #000;
  @media ( ${device.tablet} ) {
    font-size: 1.6rem;
  }
  @media ( ${device.laptop} ) {
    font-size: 1.8rem;
  }
`;

const StyledImage = styled(Img)`
  width: 100%;
`;

const Pictures = ({ data }) => {
  const images = data.allWordpressPost.edges.map(post => (
    <ImageContainer key={post.node.slug}>
      <StyledLink to={`/picture/${post.node.slug}`}>
        <StyledImage
          sizes={post.node.featured_media.localFile.childImageSharp.sizes}
          alt={post.node.title}
        />
        <StyledTextContainer>
          <StyledTitleText>{post.node.title}</StyledTitleText>
        </StyledTextContainer>
      </StyledLink>
    </ImageContainer>
  ));

  const cols = 3;
  const out = [];
  let col = 0;
  while (col < cols) {
    for (let i = 0; i < images.length; i += cols) {
      const val = images[i + col];
      if (val !== undefined) out.push(val);
    }
    col += 1;
  }
  return <>{out}</>;
};

Pictures.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Pictures;
