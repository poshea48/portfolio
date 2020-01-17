import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { palette } from "../styles/colors"

const StyledAirportBackground = styled(BackgroundImage)`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-position: 50% 45% !important; */
  z-index: -1;
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

  @media (max-width: 500px) {
    background-attachment: scroll !important;

    /* background-position: 80% !important; */
  }

  &:before,
  &:after {
    /* border-radius: 50px; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /* background-position: 50% 45% !important; */
    z-index: -1;

    opacity: 0.7 !important;

    @media (max-width: 500px) {
      background-attachment: scroll !important;
    }
  }
`

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: palette.lightGray,
  // backgroundPosition: "center top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const AirportBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bambo.jpeg" }) {
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
