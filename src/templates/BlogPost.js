import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>
    <Img sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} style={{ maxHeight: 450 }} />
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </Layout>
)

export default BlogPostTemplate
export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
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
`