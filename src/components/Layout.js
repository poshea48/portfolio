import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import Seo from "./seo"
import Home from "./Home"
import ProjectsHome from "./projects/ProjectsHome"
import { palette } from "../styles/colors"

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${palette.lightGray};
  font-family: Playfair Display, serif;
`

const ProjectTitle = styled.div`
  position: sticky;
  display: flex;
  margin: 0.5em 0.5em;
  flex-direction: column;
  justify-content: center;
  background: ${palette.lightGray};
  align-self: center;
  top: 0;
  height: 55px;
  width: 100%;
  z-index: 10;
  h1 {
    font-weight: 900;
    font-size: 2em;
    text-align: center;
    margin: 0;
    color: ${palette.darkGray};
  }
  .dev {
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8em;
    }
  }
`

const BackUp = styled.div`
  position: absolute;
  width: 120px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  top: 0.5em;
  left: 1.5em;
  span {
    display: block;
    margin-left: 0.4em;
  }
  .icon {
    transform: rotate(90deg);
    font-size: 30px;
  }
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`
const Layout = () => {
  return (
    <Container>
      <Seo />
      <Home />
      <ProjectTitle id="projects">
        <BackUp onClick={() => scrollTo("#home")}>
          <div className="icon">❮</div>
          <span>Home</span>
        </BackUp>
        <h1>My Projects</h1>
      </ProjectTitle>
      <ProjectsHome />
    </Container>
  )
}

export default Layout
