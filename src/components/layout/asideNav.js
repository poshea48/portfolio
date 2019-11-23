import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray } from "../../styles/colors"
import Image from "../image"

const Aside = styled.div`
  width: 200px;
  height: 100%;
  background: ${gray.darkGray}; /* gray */
  padding: 1em;
  @media (max-width: 600px) {
    display: none;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 2em 0;
`

const NavItem = styled(Link)`
  display: block;
  color: ${gray.teal};
  &:active {
    color: ${gray.lightTeal};
  }
`
const AsideNav = () => {
  return (
    <Aside>
      <Image image="mePic" />

      <List>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About Me</NavItem>
        <NavItem to="/contact">Contact Me</NavItem>
      </List>
    </Aside>
  )
}

export default AsideNav
