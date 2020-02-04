import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavLinkPointer from "../nav/NavLinkPointer"
import ChatBubble from "../nav/ChatBubble"
import { blues } from "../../styles/colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledWindow = styled.nav`
  display: flex;
  position: absolute;
  /* flex-direction: column; */
  /* justify-content: space-around; */
  background: ${blues.gunMetal};
  padding: 2.5rem 2rem 1rem 2rem;
  width: 200px;
  height: 150px;
  transform: ${({ open }) => (open ? "translateX(0em)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  top: -0.5em;
  left: -2em;
  text-align: left;
  border-radius: 0 20px 20px 0;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span,
  a {
    font-size: 14px;
    margin: 0 0.5em;
    text-decoration: none;
    color: ${blues.un};
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`
const Window = ({ open }) => {
  return (
    <StyledWindow open={open}>
      <Nav>
        <span onClick={() => scrollTo("#projects")}>Projects</span>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </Nav>
    </StyledWindow>
  )
}

export default Window
