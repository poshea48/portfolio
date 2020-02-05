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
  overflow: scroll;

  a {
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${ocean.celestial};
  }
  header {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${palette.darkGray};
  }

  p {
    color: ${palette.darkGray};
  }

  .date {
    color: ${palette.lightTeal};
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

const EndOfStory = styled.div`
  width: 75%;
  margin: 0 auto;
  border-bottom: 1px solid ${palette.darkGray};
`
const BlogTemplate = ({ data, pageContext }) => {
  const { html, frontmatter } = data.markdownRemark
  const { prev, next } = pageContext

  return (
    <Container>
      <SEO title={frontmatter.title} description={frontmatter.description} />
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
          <p className="date">{frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }}></section>
      </article>
      <EndOfStory />
      <br />
      <nav className="nav-footer">
        <ul>
          {prev && (
            <li>
              <Link to={prev.fields.slug}>Previous</Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={next.fields.slug}>Next</Link>
            </li>
          )}
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
