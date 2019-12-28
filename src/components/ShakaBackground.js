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

  @media (max-width: 900px) {
    background-position: 75% 0 !important;
  }

  @media (max-width: 725px) {
    background-position: 80% 0 !important;
  }

  @media (max-width: 630px) {
    background-position: 88% 0 !important;
  }

  @media (max-width: 500px) {
    background-attachment: scroll !important;
    background-position: 88% 10% !important;
    opacity: 0.8 !important;
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

    @media (max-width: 500px) {
      background-attachment: scroll !important;
      background-position: 88% 10% !important;
      opacity: 0.8 !important;
    }
  }
`
const style = {
  width: "100%",
  position: "absolute",
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  opacity: "0.8",
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
