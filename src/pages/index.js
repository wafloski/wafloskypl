import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles.css'

const Pictures = ({ data }) => {
  const images = data.allWordpressPost.edges.map(post => (
    <div style={{ padding: "0", marginBottom: "20px", border: "1px solid #ccc" }} className="card">
      <Link to={`/post/${post.node.slug}`} style={{ color: "black", textDecoration: "none" }}>
        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}
             style={{ width: "100%", marginRight: 20 }}/>
      </Link>
    </div>
  ))

  const cols = 3;
  const out = [];
  let col = 0;
  while(col < cols) {
    for (let i=0; i < images.length; i += cols) {
      let _val = images[i + col];
      if (_val !== undefined) out.push(_val)
    }
    col++
  }
  console.log(out)
  return (
    <div className="layout masonry">
      {out}
    </div>
  )
}


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <Pictures data={data}/>
    </Layout>
  );
}
export default IndexPage

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
`