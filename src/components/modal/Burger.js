import React from "react"
import styled from "styled-components"
import { blues } from "../../styles/colors"

const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 1.8rem;
    height: 0.22rem;
    background: ${p => (p.open ? blues.laurelGreen : blues.maastrict)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(30px)" : "translateX(0)")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      aria-label="navigation button"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  )
}

export default Burger
