import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledShakaBackground = styled(BackgroundImage)`
  @media (max-width: 900px) {
    background-position: 75% 0 !important;
  }

  @media (max-width: 725px) {
    background-position: 80% 0 !important;
  }

  @media (max-width: 630px) {
    background-position: 88% 0 !important;
  }

  &:before,
  &:after {
    border-radius: 0 0 50px 50px;
    @media (max-width: 900px) {
      background-position: 75% 0 !important;
    }

    @media (max-width: 725px) {
      background-position: 80% 0 !important;
    }

    @media (max-width: 630px) {
      background-position: 88% 0 !important;
    }
  }
`
const style = {
  height: "800px",
  width: "100%",
  backgroundAttachment: "fixed",
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}
const ShakaBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "shaka.jpeg" }) {
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
