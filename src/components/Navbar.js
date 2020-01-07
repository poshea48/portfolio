import React from "react"
import styled from "styled-components"
import ChatBubble from "./ChatBubble"
import NavLinkPointer from "./NavLinkPointer"
import { Link } from "gatsby"
import { blues } from "../styles/colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 3em;
  margin-bottom: 1em;
  align-items: flex-start;
  @media (max-width: 1100px) {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    visibility: hidden;
    /* display: none; */
    pointer-events: none;
  }

  @media (max-width: 450px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0;
  margin-bottom: 1em;
  height: 76px;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    margin-bottom: 5px;
    color: ${blues.gunMetal};
  }
  &:hover {
    transform: scale(1.2);
  }

  &:hover .blink {
    transform: scale(1.2);
    span {
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
  }

  &:hover .point {
    animation-name: point;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1em;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    color: ${blues.gunMetal};
  }
  &:hover {
    transform: scale(1.2);
  }

  &:hover .blink {
    transform: scale(1.2);
    span {
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
  }

  &:hover .point {
    animation-name: point;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  }
`
const Navbar = () => {
  return (
    <Container>
      <Nav onClick={() => scrollTo("#projects")}>
        <span className="title">My Projects</span>
        <NavLinkPointer />
      </Nav>
      <NavLink to="/contact">
        <span className="title">Let's Chat</span>
        <ChatBubble />
      </NavLink>
    </Container>
  )
}

export default Navbar
