import React from "react"
import styled from "styled-components"
import Image from "../image"
import { palette, ocean } from "../../styles/colors"

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  margin: 0.5em;
  max-width: 700px;
  width: 80%;
  margin-bottom: 1em;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    h3 {
      text-decoration: underline;
    }
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: inset 0 0 40px 5px #708095;
  margin-bottom: 0;
  border-radius: 30px 30px 0 0;

  h3 {
    text-align: center;
    padding: 0.25em;
    border-radius: 15px;
    /* color: ${palette.lightGray}; */
    /* color: ${ocean.celestial}; */
    color: #F0C50B;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0;
    /* &:hover {
      text-decoration: underline;
      color: black;
      transition: all 0.3s ease-in-out;
    } */
  }
`
const Link = styled.a`
  text-decoration: none;
`

const ImageContainer = styled.div`
  width: 100%;
`

const Project = ({ image }) => {
  const { name, img, link } = image
  return (
    <Container>
      <Link href={link} target="_blank" rel="noopener">
        <Title>
          <h3>{name}</h3>{" "}
        </Title>
        <ImageContainer>
          <Image image={img} style={{ borderRadius: "0 0 30px 30px" }} />
        </ImageContainer>
      </Link>
    </Container>
  )
}

export default Project
