import React from "react"
import BlogsHome from "../components/blogs/BlogsHome"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges.map(edge => edge.node) || null
  return <BlogsHome blogs={blogs} />
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
