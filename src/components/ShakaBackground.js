import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledShakaBackground = styled(BackgroundImage)`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  z-index: -1;
  background-attachment: scroll !important;
  background-position: 100% center;

  &:before,
  &:after {
    background-attachment: scroll !important;
    background-position: 100% center;
  }
`
const style = {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}
const ShakaBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "shaka-2.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledShakaBackground
          fluid={imageData}
          backgroundColor={palette.lightGray}
          style={style}
        >
          {children}
        </StyledShakaBackground>
      )
    }}
  />
)

export default ShakaBackground
