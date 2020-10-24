import React from 'react';
import styled from 'styled-components';
import StyledShakaBackground from './ShakaBackground';
import Header from './Header';
const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  padding-bottom: 1em;
  box-sizing: border-box;
`;

const Home = () => {
  return (
    <Container id="home">
      <StyledShakaBackground />
      <Header page="home" />
    </Container>
  );
};

export default Home;
