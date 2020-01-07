import React, { useState, useRef } from "react"
import Window from "./Window"
import Burger from "./Burger"
import styled from "styled-components"
import { useOnClickOutside } from "../hooks"

const Container = styled.div`
  position: absolute;
  display: none;
  top: 1.3em;
  left: 1em;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 450px) {
    left: 0.8em;
  }

  @media (max-width: 350px) {
    display: flex;
    left: 0.2em;
  }
`
const Modal = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <Container ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Window open={open} />
    </Container>
  )
}

export default Modal
