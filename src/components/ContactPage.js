import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import WaterBackground from "./WaterBackground"
import { palette, ocean } from "../styles/colors"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2em 1.5em 2.5em 1.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinksContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  background-color: ${ocean.white};
  box-shadow: 0 0 4px 4px;
  opacity: 0.8;
  padding: 0.5em 0;
  border-radius: 20px 20px 0 0;
  align-self: center;
  max-width: 600px;
  width: 100%;
  z-index: 30;
  box-sizing: border-box;
  a {
    color: ${palette.darkGray};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    /* padding: 0.5em 0; */
  }
`
const Content = styled.div`
  flex-basis: 1 auto;
  overflow: scroll;
  padding: 1em;
  max-width: 600px;
  margin-bottom: 2em;
  align-self: center;
  border-radius: 0 0 20px 20px;
  background: ${ocean.white};
  box-shadow: 0 0 3px 3px;

  opacity: 1;
  display: flex;
  overflow-x: scroll;
  flex-direction: column;
  z-index: 20;
  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
    color: ${ocean.olivine};
  }
  h4 {
    text-align: center;
    color: ${ocean.lilBoy};
  }
  h5 {
    margin: 0;
    margin-bottom: 2px;
    text-align: center;
    color: ${palette.darkGray};
  }
  p {
    color: ${ocean.celestial};
    text-align: center;
    /* &:last-child {
      text-align: center;
    } */
  }

  li {
    color: ${palette.mediumGray};
  }
  img[alt="its Paul"] {
    width: 100px;
    border-radius: 100%;
  }

  em a {
    color: ${ocean.olivine};
    font-size: 18px;
  }
  .tech {
    display: grid;
    grid-template-columns: 50% 50%;
    /* @media (max-width: 400px) {
      grid-template-columns: 100%;
    } */
  }

  .tech p {
    color: ${palette.mediumGray};
    text-align: center;
  }
`
const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)
  const { html } = data.markdownRemark
  return (
    <Wrapper>
      <WaterBackground />
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </LinksContainer>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  )
}

export default ContactPage
