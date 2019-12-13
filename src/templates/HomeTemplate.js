import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImagesWrapper = styled.div`
  padding: 0 1rem 1rem;
  column-count: 3;
  column-gap: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  break-inside: avoid;
  page-break-inside: avoid;
  margin-bottom: 1rem;
`;

const StyledImage = styled(Img)`
  width: 100%;
`;

const Pictures = ({ data }) => {
  const images = data.allWordpressPost.edges.map(post => (
    <ImageContainer>
      <Link to={`/post/${post.node.slug}`}>
        <StyledImage
          sizes={post.node.featured_media.localFile.childImageSharp.sizes}
          alt={post.node.title}
        />
      </Link>
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

const HomeTemplate = ({ data }) => {
  return (
    <ImagesWrapper>
      <Pictures data={data} />
    </ImagesWrapper>
  );
};

HomeTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

Pictures.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HomeTemplate;

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;