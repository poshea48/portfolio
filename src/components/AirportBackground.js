import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledAirportBackground = styled(BackgroundImage)`
  display: flex;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${palette.lightGray};
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;
  justify-content: center;
  &:before,
  &:after {
    display: flex;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${palette.lightGray};
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 50px;
    justify-content: center;
  }

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
`

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
          style={{}}
        >
          {children}
        </StyledAirportBackground>
      )
    }}
  />
)

export default AirportBackground
