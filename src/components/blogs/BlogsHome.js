import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { palette } from "../../styles/colors"

const Container = styled.div`
  position: relative;
  background: #f0f8ff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 2em;
  /* overflow: scroll; */
  h1 {
    align-self: center;
    margin: 0;
    color: ${palette.darkGray};
  }
  .back-home {
    text-decoration: none;
    align-self: center;
    color: ${palette.darkGray};
    text-transform: uppercase;
    font-weight: 900;
    font-size: 20px;
  }
`
const List = styled.ul`
  margin: 2em auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-left: 20px solid ${palette.darkGray};
  background: #fff;
  span {
    color: ${palette.darkGray};
  }
  .date {
    font-size: 14px;
    text-align: center;
    align-self: flex-start;
    color: #0c28df;
  }
  .title {
    font-size: 30px;
    text-align: left;
    align-self: flex-start;
  }

  .description {
    margin-top: 1em;
    width: 100%;
    align-self: flex-start;
    color: #23557b;
  }
`
const BlogsHome = ({ blogs }) => {
  return (
    <Container>
      <h1>My Thoughts</h1>

      <List>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`${blog.fields.slug}`}>
              <ListItem>
                <span className="title">{blog.frontmatter.title}</span>
                <span className="date">{blog.frontmatter.date}</span>
                <span className="description">
                  {blog.frontmatter.description}
                </span>
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
      <br />
      <Link className="back-home" to="/">
        Home
      </Link>
    </Container>
  )
}

export default BlogsHome
