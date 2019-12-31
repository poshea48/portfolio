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
  padding: 0 1em;
  @media (max-width: 850px) {
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    visibility: hidden;
    pointer-events: none;
  }
`
const NavLinkWrapper = styled.div``
const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  height: 50px;
  justify-content: space-around;
  margin-bottom: 1em;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    margin-right: 0.5em;
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

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  }
`

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  /* height: 50px; */
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1em;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    margin-right: 0.5em;
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

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  }
`
const Navbar = () => {
  return (
    <Container>
      <NavLinkWrapper>
        <Nav onClick={() => scrollTo("#projects")}>
          <span className="title">My Projects</span>
          <NavLinkPointer />
        </Nav>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink to="/contact">
          <span className="title">Let's Chat</span>
          <ChatBubble />
        </NavLink>
      </NavLinkWrapper>
    </Container>
  )
}

export default Navbar
