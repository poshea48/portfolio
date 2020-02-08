import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledWaterBackground = styled(BackgroundImage)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-position: 0 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${palette.lightGray};
  &:after {
    opacity: 1;
  }

  /* @media (max-width: 500px) {
    padding: 1em;
  } */
`
const style = {
  position: "absolute",
  backgroundPosition: "0 50%",
}

const WaterBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "water.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledWaterBackground
          fluid={imageData}
          backgroundColor={palette.lightGray}
          style={style}
        >
          {children}
        </StyledWaterBackground>
      )
    }}
  />
)

export default WaterBackground
