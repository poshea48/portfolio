import React from "react"
import styled from "styled-components"
import { gray } from "../../styles/colors"

const Container = styled.div`
  position: absolute;
  display: none;
  background: ${gray.ligthGray};
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 25px;
  top: 1em;
  left: 1em;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
  }
`
const Line = styled.div`
  align-self: center;
  border-bottom: 4px solid ${gray.darkGray};
  width: 100%;
`
const Hamburger = () => {
  return (
    <Container>
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default Hamburger
