import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';

const PageTemplate = ({ data }) => (
  <>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    <div>{data.wordpressPage.content }</div>
  </>
);

PageTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PageTemplate;

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`;
