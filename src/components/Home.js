import React from "react"
import styled from "styled-components"
import { palette, ocean, blues } from "../styles/colors"
import Navbar from "./Navbar"
import StyledShakaBackground from "./ShakaBackground"
import Modal from "./modal/Modal"

const Container = styled.div`
  position: relative;
  height: 800px;
  width: 100vw;
`

const Content = styled.div`
  position: relative;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Greeting = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  margin-bottom: 1em;
`

const Title = styled.div`
  display: flex;
  position: sticky;
  padding: 1em 0 0.5em 0;
  margin-bottom: 0.5em;
  /* opacity: 0.8; */
  justify-content: space-around;
  background-color: transparent;

  z-index: -1;
  h1 {
    text-align: center;
    color: ${blues.laurelGreen};

    margin-bottom: 0;
  }

  //! for white background on mobile
  /* @media (max-width: 550px) {
    box-shadow: 0px 0 20px 20px ${palette.lightGray};
    background-color: ${palette.lightGray};
    opacity: 0.8;
    border-radius: 10%;
  } */

  @media (max-width: 400px) {
    h1 {
      font-size: 1.8em;
      line-height: 1.3;
    }
  }

  @media (max-width: 350px) {
    padding-left: 1em;
  }
`

const Name = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Playfair Display, serif;
  top: 15em;
  padding-top: 1em;
  position: sticky;
  z-index: -1;
  h1 {
    text-align: center;
    align-self: center;
    color: ${blues.gunMetal};
    font-weight: 900;
    margin: 0;
  }
  h3 {
    text-align: center;
    align-self: center;
    font-size: 1.3em;
    opacity: 0.99;
    margin-top: 0.5em;
    color: ${blues.laurelGreen};
    font-weight: 900;
  }

  @media (max-width: 500px) {
    top: 4em;
    h1 {
      background-color: ${blues.un};
      box-shadow: 0 0 36px 36px ${blues.un};

      opacity: 0.8;
    }
  }
`
const Home = () => {
  return (
    <Container id="home">
      <StyledShakaBackground />
      <Content>
        <Greeting>
          <Modal />
          <Title>
            <h1>Aloha World</h1>
          </Title>
          <Navbar />
        </Greeting>
        <Name>
          <h1>Paul O'Shea</h1>
          <h3>Full Stack Developer</h3>
        </Name>
      </Content>
    </Container>
  )
}

export default Home
