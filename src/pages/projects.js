import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import Layout from "../components/layout/layout"
// import SEO from "../components/seo"
import { gray } from "../styles/colors"

const Title = styled.h2`
  text-align: center;
  color: ${gray.darkGray};
`
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;

  h4 {
    text-align: center;
    color: ${gray.darkGray};
  }
  h4 {
    margin-top: 1em;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Project = styled.div`
  align-self: center;
  margin: 0.5em;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  margin-bottom: 1em;
`

const ImageContainer = styled.div`
  max-width: 500px;
`
const Projects = () => (
  <Layout>
    <Title>My Projects</Title>
    <Container>
      <Project>
        <ImageContainer>
          <Image image="rbPhotos" />
        </ImageContainer>
      </Project>
      <Project>
        <ImageContainer>
          <Image image="hoursTracker" />
        </ImageContainer>
      </Project>
      <Project>
        <ImageContainer>
          <Image image="mockDraft" />
        </ImageContainer>
      </Project>
      <Project>
        <ImageContainer>
          <Image image="tournTracker" />
        </ImageContainer>
      </Project>
    </Container>
  </Layout>
)

export default Projects
