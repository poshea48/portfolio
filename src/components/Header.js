import React from 'react';
import styled from 'styled-components';
import { blues } from '../styles/colors';
import Navigation from './nav/Navigation';

const Container = styled.header`
  position: sticky;
  display: flex;
  width: 100%;
  height: 180px;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-family: Playfair Display, serif;
  background-color: ${({ page }) =>
    page == 'home' ? 'transparent' : '#252725'};
  padding: 3em 2em 1em 0;
  z-index: 10;
  @media screen and (max-width: 550px) {
    padding: 2em 2em 0 0;
    height: 150px;
  }

  @media screen and (max-width: 500px) {
    height: 130px;
  }

  @media screen and (max-width: 400px) {
    padding: 2em 1em 0 0em;
  }
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
    color: ${({ page }) =>
      page == 'home' ? blues.gunMetal : blues.laurelGreen};
    font-weight: 900;
    font-size: 3em;
    margin: 0;
  }
  h2 {
    align-self: center;
    font-size: 1.5em;
    font-weight: 900;
    margin: 0.5em 0 0.5em 0;
    color: ${({ page }) => (page == 'home' ? '#fff' : '#F6F6F3')};
    /* #E1E5F6 => cloud color */
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
// eslint-disable-next-line quotes
var myName = "Paul O'Shea";
const Header = ({ page }) => {
  return (
    <Container page={page}>
      <Navigation page={page} />
      <Name page={page}>
        <h1>{myName}</h1>
        <h2>JavaScript Developer</h2>
      </Name>
    </Container>
  );
};

export default Header;
