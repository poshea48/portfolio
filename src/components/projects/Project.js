import React from "react"
import styled from "styled-components"
import Image from "../Image"
import { palette } from "../../styles/colors"

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5em;
  max-width: 500px;
  width: 80%;
  margin-bottom: 1em;
`

const Title = styled.h3`
  text-align: center;
`
const Link = styled.a`
  color: ${palette.darkGray};
  text-decoration: none;
  &:hover {
    font-size: 1.05em;
    text-decoration: underline;
    color: ${palette.teal};
    transition: all 0.3s ease-in-out;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const Project = ({ image }) => {
  const { name, img, link } = image
  return (
    <Container>
      <Title>
        <Link href={link} target="_blank" rel="noopener">
          {name}{" "}
        </Link>
      </Title>
      <ImageContainer>
        <Image image={img} />
      </ImageContainer>
    </Container>
  )
}

export default Project
