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
  h1 {
    align-self: center;
    margin: 0;
  }
  .back-home {
    text-decoration: none;
    align-self: center;
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

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-left: 10px solid ${palette.darkGray};
  background: ${palette.lightGray};
  span {
    color: ${palette.darkGray};
  }
  .date {
    font-size: 14px;
    text-align: left;
    align-self: center;
    width: 30%;
  }
  .title {
    font-size: 30px;
    text-align: left;
    width: 70%;
    align-self: flex-start;
  }

  .description {
    margin-top: 1em;
    width: 100%;
    align-self: center;
    text-align: center;
  }
`
const BlogsHome = ({ blogs }) => {
  return (
    <Container>
      <h1>My Blogs</h1>
      <Link className="back-home" to="/">
        Home
      </Link>
      <List>
        {blogs.map(blog => (
          <li>
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
    </Container>
  )
}

export default BlogsHome
