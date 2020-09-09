import React, { useState, useRef } from 'react';
import Window from './Window';
import Burger from './Burger';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';

const Container = styled.div`
  /* position: absolute; */
  display: none;
  width: 1.8em;
  height: 1.8em;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 550px) {
    width: 1.5em;
    height: 1.5em;
  }

  @media (max-width: 350px) {
    display: flex;
  }
`;
const Modal = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Window open={open} />
    </Container>
  );
};

export default Modal;
