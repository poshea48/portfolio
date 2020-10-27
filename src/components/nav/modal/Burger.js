import React from 'react';
import styled from 'styled-components';
import { blues } from '../../../styles/colors';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  background: ${blues.laurelGreen};
  border-radius: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 10;
  overflow: hidden;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px
      ${({ open }) => (open ? blues.lgWhite : blues.gunMetal)};
  }
  /* @media (max-width: 500px) {
    width: 35px;
    height: 35px;
    padding: 8px;
    div {
      height: 3px;
      z-index: 10;
    }
  } */
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  min-height: 3px;
  max-height: 3px;
  background-color: ${blues.gunMetal} !important;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  z-index: 12;
  &:first-child {
    transform: ${({ open }) =>
      open ? 'translateX(2.5px) rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(30px)' : 'translateX(0)')};
  }
  &:nth-child(3) {
    transform: ${({ open }) =>
      open ? 'translateX(2.5px) rotate(-45deg)' : 'rotate(0)'};
  }
`;
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      aria-label="navigation button"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <Line open={open} />
      <Line open={open} />
      <Line open={open} />
    </StyledBurger>
  );
};

export default Burger;
