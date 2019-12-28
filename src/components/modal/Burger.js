import React from "react"
import styled from "styled-components"
import { palette } from "../../styles/colors"

const StyledBurger = styled.button`
  position: absolute;
  top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25em;
  /* box-shadow: 0 0 5px 5px ${palette.darkGray}; */
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 1.8rem;
    height: 0.25rem;
    background: ${p => (p.open ? palette.lightGray : palette.darkGray)};
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
