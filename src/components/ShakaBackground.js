import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledShakaBackground = styled(BackgroundImage)`
  height: 800px;
  width: 100%;
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 0 0 50px 50px;
  /* transform: scale(1.1, 1.1); */
  @media (max-width: 900px) {
    background-position: 75% 0;
  }

  @media (max-width: 725px) {
    background-position: 80% 0;
  }

  @media (max-width: 630px) {
    background-position: 88% 0;
  }

  &:before,
  &:after {
    content: "";
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 100% 100%;
    position: fixed;
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 100%;
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
  /* &:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    background-size: 100%;
    z-index: -1;
  } */
`
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
        >
          {children}
        </StyledShakaBackground>
      )
    }}
  />
)

export default ShakaBackground
