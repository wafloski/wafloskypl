import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/Layout';

const StyledText = styled.div`
  color: red;
  min-height: 50vh;
  p:first-letter {
    font-size: 3rem;
  }
`;

const PageTemplate = ({ data }) => (
  <Layout isHome isPage>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <StyledText dangerouslySetInnerHTML={{ __html: `<div> ${data.wordpressPage.content} </div>` }}/>
  </Layout>
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
