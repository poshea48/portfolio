import React from "react"
import styled from "styled-components"
import Seo from "./seo"
import Home from "./Home"
import ProjectsHome from "./projects/ProjectsHome"
import { palette } from "../styles/colors"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: ${palette.lightGray};
  font-family: Playfair Display, serif;
  perspective: 2px;
`
const Layout = () => {
  return (
    <Container>
      <Seo title="Paul O'Shea Full Stack Developer" />
      <Home />
      <ProjectsHome />
    </Container>
  )
}

export default Layout
