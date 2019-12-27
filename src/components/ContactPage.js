import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import WaterBackground from "./WaterBackground"
import { palette, ocean } from "../styles/colors"

const LinksContainer = styled.div`
  display: flex;
  padding: 0.8em 0;
  justify-content: space-around;
  background: ${ocean.white};
  opacity: 0.9;
  border-radius: 20px 20px 0 0;
  align-self: center;
  max-width: 600px;
  width: 100%;
  a {
    color: ${palette.darkGray};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
  }
`
const Container = styled.div`
  padding: 2em;
  max-width: 600px;
  align-self: center;
  /* height: 100%; */
  border-radius: 0 0 20px 20px;
  background: ${ocean.white};
  opacity: 0.9;
  display: flex;
  overflow: scroll;
  flex-direction: column;
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
    &:last-child {
      text-align: center;
    }
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
    <WaterBackground>
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/#projects">My Projects</Link>
      </LinksContainer>
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </WaterBackground>
  )
}

export default ContactPage