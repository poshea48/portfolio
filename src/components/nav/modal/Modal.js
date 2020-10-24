import React, { useState, useRef } from 'react';
import Window from './Window';
import Burger from './Burger';
import styled from 'styled-components';
import { useOnClickOutside } from '../../hooks';

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
const Modal = ({ page }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);

  useOnClickOutside(node, () => {
    setOpen(false);
  });
  const keyUpHandler = (e) => {
    console.log('inside keyUpHandler, ', page);
    if (e.key === 'Escape') {
      setOpen(false);
      node.current.focus();
    }
  };
  console.log('inside Modal, ', page);
  return (
    <Container ref={node} onKeyUp={keyUpHandler}>
      <Burger open={open} setOpen={setOpen} />
      <Window open={open} page={page} />
    </Container>
  );
};

export default Modal;
