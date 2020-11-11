import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import WaterBackground from './WaterBackground';
import { palette, ocean } from '../styles/colors';
import Layout from './Layout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;
`;
const LinksContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  background-color: ${ocean.white};
  box-shadow: 0 0 4px 4px;
  opacity: 0.8;
  padding: 1em 0;
  border-radius: 20px 20px 0 0;
  align-self: center;
  max-width: 800px;
  width: 100%;
  height: 50px;
  z-index: 30;
  box-sizing: border-box;
  a {
    color: ${palette.darkGray};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    /* padding: 0.5em 0; */
  }
`;
const Content = styled.div`
  flex-basis: 1 auto;
  opacity: 0.95;
  overflow: scroll;
  padding: 1em;
  max-width: 800px;
  height: calc(100% - 50px);
  align-self: center;
  border-radius: 0 0 20px 20px;
  background: ${ocean.white};
  box-shadow: 0 0 3px 3px;
  display: flex;
  overflow-x: scroll;
  flex-direction: column;
  z-index: 20;

  h2 {
    text-align: center;
    font-weight: 800;
  }
  h3 {
    text-align: center;
    color: ${ocean.olivine};
    font-weight: 800;
  }
  h4 {
    text-align: center;
    color: ${ocean.lilBoy};
    font-weight: 800;
  }
  h5 {
    margin: 0;
    margin-bottom: 2px;
    text-align: center;
    color: ${palette.darkGray};
    font-weight: 800;
  }
  p {
    color: ${ocean.celestial};
    font-weight: 800;
    text-align: center;
    /* &:last-child {
      text-align: center;
    } */
  }

  li {
    color: ${palette.darkGray};
    font-weight: 800;
  }
  img[alt='its Paul'] {
    width: 100px;
    border-radius: 100%;
    font-weight: 800;
  }

  em a {
    color: ${ocean.olivine};
    font-size: 18px;
    font-weight: 800;
  }
  .tech {
    display: grid;
    grid-template-columns: 50% 50%;
    /* @media (max-width: 400px) {
      grid-template-columns: 100%;
    } */
  }

  .tech p {
    color: ${palette.darkGray};
    text-align: center;
  }
`;
const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <Wrapper>
        <WaterBackground />
        <LinksContainer>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </LinksContainer>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  );
};

export default ContactPage;
