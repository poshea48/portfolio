import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import { blues } from '../../styles/colors';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  background-color: ${blues.lgWhite};
  padding: 1em;
  max-width: 800px;
  width: 100%;
  margin-bottom: 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px ${blues.laurelGreen};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 30px 30px 0 0;
  margin-bottom: 0.5em;
  h3 {
    text-align: left;
    padding: 0;
    border-radius: 15px;
    color: ${blues.dark};
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    h3 {
      text-align: center;
    }
  }
`;
const Link = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  align-items: center;
  &:hover {
    transform: scale(1.005);

    h3 {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    align-self: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 280px;
  position: relative;
  @media screen and (max-width: 650px) {
    max-width: 400px;
    width: 100%;
    height: 224px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
    width: 100%;
    height: 168px;
  }
`;

const Description = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 200px);
  height: 100%;
  margin-left: 4em;
  .buzz {
    text-transform: uppercase;
    color: ${blues.un};
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 1em;
    padding-right: 0;
  }
`;

const Project = ({ image }) => {
  const { name, img, link, description } = image;
  const descriptionItems = description.map((item, i) => (
    <li key={i}>{item}</li>
  ));
  return (
    <Container>
      <Link href={link} target="_blank" rel="noopener" aria-label={name}>
        <Title>
          <h3>{name}</h3>{' '}
        </Title>
        <ImageContainer>
          <Image
            image={img}
            style={{
              borderRadius: '10px',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '100%',
            }}
          />
        </ImageContainer>
      </Link>
      <Description>{descriptionItems}</Description>
    </Container>
  );
};

export default Project;
