import React from "react"
import styled from "styled-components"
import { palette } from "../styles/colors"
import Navbar from "./Navbar"
import StyledShakaBackground from "./ShakaBackground"
import Modal from "./modal/Modal"

const Container = styled.div`
  position: relative;
  height: 800px;
  width: 100vw;
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
`
const Greeting = styled.div`
  display: flex;
  position: sticky;
  top: 3em;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  margin-bottom: 1em;
`

const Title = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  justify-content: space-around;
  h1 {
    text-align: center;
    color: ${palette.lightGray};
    margin-bottom: 0;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.8em;
    }
  }

  @media (max-width: 350px) {
    padding-left: 1em;
  }
`

const Name = styled.div`
  text-transform: uppercase;
  width: 100%;
  font-family: Playfair Display, serif;
  top: 15em;
  position: sticky;
  font-weight: normal;
  z-index: -1;
  h1 {
    text-align: center;
    color: ${palette.lightGray};
  }
  h3 {
    text-align: center;
    font-size: 1em;
    color: ${palette.darkGray};
  }

  @media (max-width: 700px) {
    top: 10em;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1em;
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
