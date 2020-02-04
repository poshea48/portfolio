import React from "react"
import styled from "styled-components"
import { blues } from "../styles/colors"
import StyledShakaBackground from "./ShakaBackground"
import Navigation from "./nav/Navigation"
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-bottom: 1em;
  box-sizing: border-box;
`

const Content = styled.div`
  position: relative;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  background-color: ${blues.unRgba};
  box-shadow: 0 0 36px 36px ${blues.unRgba};
  padding: 3em 0 0 0;

  @media (max-width: 550px) {
    padding: 2em 3em 0 1em;
  }

  @media (max-width: 400px) {
    padding: 2em 2em 0 0.5em;
  }
`

const Name = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Playfair Display, serif;
  z-index: -1;

  h1 {
    align-self: center;
    color: ${blues.gunMetal};
    font-weight: 900;
    font-size: 3em;
    margin: 0;
  }
  h3 {
    align-self: center;
    font-size: 1.3em;
    margin: 0.5em 0 0.5em 0;
    color: ${blues.laurelGreen};
  }

  @media (max-width: 550px) {
    h1 {
      /* font-size: 2.2em; */
      align-self: flex-end;
    }
    h3 {
      align-self: flex-end;
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.2em;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }
`
const Home = () => {
  return (
    <Container id="home">
      <StyledShakaBackground />
      <Content>
        <Header>
          <Navigation />
          <Name>
            <h1>Paul O'Shea</h1>
            <h3>Full Stack Developer</h3>
          </Name>
        </Header>
      </Content>
    </Container>
  )
}

export default Home
