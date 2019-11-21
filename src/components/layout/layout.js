/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from "./hamburger"
import AsideNav from "./asideNav"
import { gray } from "../../styles/colors"

import "./layout.css"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const Main = styled.div`
  flex: 1;
  padding: 1em;
  height: 100%;
  background: ${gray.ligthGray};
  overflow: scroll;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <AsideNav />
      <Hamburger />
      <Main siteTitle={data.site.siteMetadata.title}>{children}</Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
