import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
      mePic: file(relativePath: { eq: "thatsme.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hoursTracker: file(relativePath: { eq: "hoursTracker.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rbPhotos: file(relativePath: { eq: "rbPhotos.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockDraft: file(relativePath: { eq: "mockDraft.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tournTracker: file(relativePath: { eq: "tournTracker.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[image].childImageSharp.fluid} />
}

export default Image
