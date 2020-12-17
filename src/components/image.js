import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ image, style = {} }) => {
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
          fluid(maxWidth: 500, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rbPhotos: file(relativePath: { eq: "rbPhotos.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockDraft: file(relativePath: { eq: "mockDraft.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tournTracker: file(relativePath: { eq: "tournTracker2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sh: file(relativePath: { eq: "sh.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[image].childImageSharp.fluid} style={style} />;
};

export default Image;
