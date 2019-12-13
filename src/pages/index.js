import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/styles.css';

const Pictures = ({ data }) => {
  const images = data.allWordpressPost.edges.map(post => (
    <div style={{ padding: '0', marginBottom: '10px' }} className="card">
      <Link
        to={`/post/${post.node.slug}`}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        <Img
          sizes={post.node.featured_media.localFile.childImageSharp.sizes}
          alt={post.node.title}
          style={{ width: '100%' }}
        />
      </Link>
    </div>
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
  return <div className="layout masonry">{out}</div>;
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Pictures data={data} />
    </Layout>
  );
};

Pictures.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;

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
