import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { blues } from "../../styles/colors"
import Modal from "../modal/Modal"

const Container = styled.div`
  position: absolute;
  top: 4em;
  left: 2em;

  @media (max-width: 550px) {
    top: 3em;
  }

  @media (max-width: 500px) {
    top: 2.5em;
    left: 1em;
  }

  @media (max-width: 350px) {
    left: 0.5em;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  a,
  span {
    font-size: 16px;
    margin: 0 0.5em;
    text-decoration: none;
    color: ${blues.gunMetal};
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 850px) {
      display: none;
    }
  }
`

const Navigation = () => {
  const handleScrollTo = () => scrollTo("#projects")
  return (
    <Container>
      <Modal />
      <Nav>
        <span
          tabIndex="0"
          role="button"
          onClick={handleScrollTo}
          onKeyDown={handleScrollTo}
        >
          Projects
        </span>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </Nav>
    </Container>
  )
}

export default Navigation
