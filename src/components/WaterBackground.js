import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledWaterBackground = styled(BackgroundImage)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
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

  @media (max-width: 500px) {
    padding: 1em;
  }
`

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
          style={{}}
        >
          {children}
        </StyledWaterBackground>
      )
    }}
  />
)

export default WaterBackground
