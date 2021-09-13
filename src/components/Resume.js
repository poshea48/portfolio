import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import NavLinks from './nav/NavLinks';
import Layout from './Layout';
import { blues } from '../styles/colors';

const BGWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${blues.un};
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

const Nav = styled.nav`
  align-self: center;
  width: 100%;
  max-width: 800px;
  margin: 10px 0;
`;

const Container = styled.div`
  align-self: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 100%;
  position: relative;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
      display: none;
    }
    .title {
      text-align: center !important;
    }
  }
`;

const LinkContainer = styled.div`
  display: none;
  margin-top: 4em;
  a {
    font-weight: 800;
    text-transform: uppercase;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;
const Resume = () => {
  return (
    <Layout>
      <BGWrapper>
        <Nav>
          <NavLinks page="resume" mobile={false} />
        </Nav>
        <Container>
          <iframe
            title="resume"
            src="https://docs.google.com/document/d/e/2PACX-1vRgYrXa12LOQT10_OOPgeCCiUBvuZ2-AQIfFoJaugXr1qyVkPvmCp6HUg8A8x41yNTtmzSwtGvp451C/pub?embedded=true"
          ></iframe>
          <LinkContainer>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRgYrXa12LOQT10_OOPgeCCiUBvuZ2-AQIfFoJaugXr1qyVkPvmCp6HUg8A8x41yNTtmzSwtGvp451C/pub"
              target="_blank"
              rel="noreferrer"
            >
              Click to see my Resume
            </a>
          </LinkContainer>
        </Container>
      </BGWrapper>
    </Layout>
  );
};

export default Resume;
