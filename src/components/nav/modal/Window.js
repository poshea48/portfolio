import React from 'react';
import styled from 'styled-components';
import { blues } from '../../../styles/colors';
import NavLinks from '../NavLinks';

const StyledWindow = styled.div`
  display: flex;
  position: absolute;
  background: ${blues.dark};
  padding: 2.5rem 2rem 1rem 2rem;
  width: 250px;
  transform: ${({ open }) => (open ? 'translateX(0em)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  top: -0.5em;
  left: -2em;
  text-align: center;
  border-radius: 0 20px 20px 0;
`;

const Window = ({ open, page }) => {
  return (
    <StyledWindow open={open}>
      <NavLinks mobile={true} page={page} />
    </StyledWindow>
  );
};

export default Window;
