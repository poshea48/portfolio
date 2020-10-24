import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import { blues } from '../../styles/colors';

const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background-color: ${blues.lgWhite};
  padding: 1em;
  width: 100%;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px ${blues.laurelGreen};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  border-radius: 30px 30px 0 0;

  h3 {
    text-align: center;
    padding: 0.25em;
    border-radius: 15px;
    color: ${blues.dark};
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.005);

    h3 {
      text-decoration: underline;
    }
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
`;

const Project = ({ image }) => {
  const { name, img, link } = image;
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
    </Container>
  );
};

export default Project;
