import React, { useState, useRef } from 'react';
import Window from './Window';
import Burger from './Burger';
import styled from 'styled-components';
import { useOnClickOutside } from '../../hooks';

const Container = styled.div`
  display: none;
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
    if (e.key === 'Escape') {
      setOpen(false);
      node.current.focus();
    }
  };
  return (
    <Container ref={node} onKeyUp={keyUpHandler}>
      <Burger open={open} setOpen={setOpen} />
      <Window open={open} page={page} />
    </Container>
  );
};

export default Modal;
