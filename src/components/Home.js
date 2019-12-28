import React from "react"
import styled from "styled-components"
import { palette, ocean } from "../styles/colors"
import Navbar from "./Navbar"
import StyledShakaBackground from "./ShakaBackground"
import Modal from "./modal/Modal"

const sunColor = "#f28c38"
const Container = styled.div`
  position: relative;
  height: 800px;
  width: 100vw;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
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
  padding-top: 3em;
  padding-bottom: 3em;
  margin-bottom: 0.5em;
  opacity: 0.8;
  justify-content: space-around;
  background-color: ${palette.darkGray};
  border-radius: 0 0 50% 50%;
  box-shadow: 0 0 10px 10px #f28c38;
  z-index: -1;
  h1 {
    text-align: center;
    color: ${palette.lightGray};

    margin-bottom: 0;
  }

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
  position: sticky;
  z-index: -1;
  h1 {
    text-align: center;
    align-self: center;
    background-color: ${ocean.celestial};
    opacity: 0.9;
    color: ${palette.lightGray};
    font-weight: 900;
    margin: 0;
    box-shadow: 0 0 15px 15px ${ocean.celestial};
  }
  h3 {
    text-align: center;
    align-self: center;
    font-size: 1em;
    opacity: 0.8;
    background-color: ${ocean.celestial};
    color: ${palette.darkGray};
    font-weight: 900;
    box-shadow: 0 5px 5px 5px ${ocean.celestial};
  }

  @media (max-width: 700px) {
    top: 18em;
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
