import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledAirportBackground = styled(BackgroundImage)`
  h1 {
    text-align: center;
    color: ${palette.lightGray};
  }

  h4 {
    text-align: center;
    color: ${palette.darkGray};
  }
  h4 {
    margin-top: 1em;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  &:before,
  &:after {
    border-radius: 50px;
  }
`

const style = {
  display: "flex",
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: palette.lightGray,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const AirportBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "airport.jpeg" }) {
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
        <StyledAirportBackground
          fluid={imageData}
          backgroundColor={palette.lightGray}
          style={style}
        >
          {children}
        </StyledAirportBackground>
      )
    }}
  />
)

export default AirportBackground
