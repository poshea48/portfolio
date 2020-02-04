import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { ocean, palette } from "../styles/colors"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.lightGray};
  width: 100vw;
  height: 100vh;
  padding: 1em 2em;

  a {
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 800;
  }
  header {
    display: flex;
    flex-direction: column;
  }
  li {
    list-style: none;
    margin: 0 0.5em;
  }
  nav ul {
    display: flex;
    margin: 0;
  }
  .nav-header {
    align-self: flex-end;
    a {
      color: ${ocean.celestial};
    }
  }
  .nav-footer {
    align-self: center;
  }
`
const BlogTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Container>
      <SEO title="blog" description="this is blog" />
      <article>
        <header>
          <nav className="nav-header">
            <ul>
              <Link to="/blog">
                <li>All Blogs</li>
              </Link>
              <Link to="/">
                <li>Home</li>
              </Link>
            </ul>
          </nav>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }}></section>
      </article>
      <nav className="nav-footer">
        <ul>
          <li>Previous</li>
          <li>Next</li>
        </ul>
      </nav>
    </Container>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
