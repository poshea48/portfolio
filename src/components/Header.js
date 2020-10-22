import React from 'react';
import styled from 'styled-components';
import { blues } from '../styles/colors';
import Navigation from './nav/Navigation';

const Container = styled.header`
  position: sticky;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  background-color: ${blues.un};
  box-shadow: 0 0 36px 36px ${blues.un};
  padding: 3em 0 0 0;
  z-index: 10;
  @media (max-width: 550px) {
    padding: 2em 3em 0 0;
  }

  @media (max-width: 400px) {
    padding: 2em 1em 0 0em;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Name = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Playfair Display, serif;
  z-index: -1;

  h1 {
    align-self: center;
    color: ${blues.gunMetal};
    font-weight: 900;
    font-size: 3em;
    margin: 0;
  }
  h2 {
    align-self: center;
    font-size: 1.3em;
    margin: 0.5em 0 0.5em 0;
    color: ${blues.laurelGreen};
  }

  @media (max-width: 550px) {
    h1 {
      /* font-size: 2.2em; */
      align-self: flex-end;
    }
    h2 {
      align-self: flex-end;
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.2em;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }
`;
const Header = () => {
  return (
    <Container>
      <Content>
        <Navigation />
        <Name>
          {/* eslint-disable-next-line prettier/prettier */}
          <h1>{"Paul O'Shea"}</h1>
          <h2>Full Stack Developer</h2>
        </Name>
      </Content>
    </Container>
  );
};

export default Header;
