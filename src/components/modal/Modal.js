import React, { useState, useRef } from 'react';
import Window from './Window';
import Burger from './Burger';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';

const Container = styled.div`
  display: none;
  /* width: 35px; */
  /* height: 35px; */
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 350px) {
    display: flex;
  }
`;
const Modal = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <Container ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Window open={open} />
    </Container>
  );
};

export default Modal;
