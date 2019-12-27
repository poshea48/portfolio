import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavLinkPointer from "../NavLinkPointer"
import ChatBubble from "../ChatBubble"
import { palette } from "../../styles/colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledWindow = styled.nav`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  background: ${palette.darkGray};
  padding: 2rem 1rem 1rem 1rem;
  width: 225px;
  height: 180px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  top: 1px;
  left: -1em;
  text-align: left;
`

const NavLink = styled(Link)`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  text-decoration: none;
  margin-right: 0.5em;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    color: ${palette.lightTeal};
  }
  &:hover {
    transform: scale(1.1);
  }

  &:hover .blink {
    transform: scale(1.1);
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
`

const Nav = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  text-decoration: none;
  margin-right: 0.5em;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    color: ${palette.lightTeal};
  }
  &:hover {
    transform: scale(1.1);
  }

  &:hover .blink {
    transform: scale(1.1);
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
`
const Window = ({ open }) => {
  return (
    <StyledWindow open={open}>
      <NavLink to="/contact">
        <span className="title">Lets Chat</span>
        <ChatBubble />
      </NavLink>

      <Nav onClick={() => scrollTo("#projects")}>
        <div className="title">My Projects</div>
        <NavLinkPointer />
      </Nav>
    </StyledWindow>
  )
}

export default Window