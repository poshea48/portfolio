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
`;
const MobileNav = ({ page }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);

  useOnClickOutside(node, () => {
    setOpen(false);
    node.current.focus();
  });
  const keyUpHandler = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      node.current.focus();
    }
  };
  return (
    <Container onKeyUp={keyUpHandler}>
      <Burger buttonRef={node} open={open} setOpen={setOpen} page={page} />
      <Window open={open} page={page} />
    </Container>
  );
};

export default MobileNav;
