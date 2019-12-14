import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/Layout';

const PageWrapper = styled.div`
  position: relative;
  background-color: #000;
`;

const StyledImage = styled(Img)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <PageWrapper>
      <StyledImage
        fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
        alt={data.wordpressPost.title}
      />
      <StyledLink to="/" />
    </PageWrapper>
  </Layout>
);

BlogPostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPostTemplate;

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
