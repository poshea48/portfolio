import React from 'react';
import styled from 'styled-components';
import { blues } from '../../../styles/colors';

const StyledBurger = styled.button`
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
      ${({ open, page }) => {
        if (open) {
          return blues.lgWhite;
        }
        return page == 'home' ? blues.gunMetal : blues.lgWhite;
      }};
  }
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
  transform-origin: 0;
  z-index: 12;
  &:first-child {
    margin-bottom: 4px;
    transform: ${({ open }) =>
      open ? 'translateX(3px) rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(30px)' : 'translateX(0)')};
  }
  &:nth-child(3) {
    margin-top: 4px;
    transform: ${({ open }) =>
      open ? 'translateX(3px) rotate(-45deg)' : 'rotate(0)'};
  }
`;
const Burger = ({ open, setOpen, buttonRef, page }) => {
  return (
    <StyledBurger
      aria-label="navigation button"
      ref={buttonRef}
      page={page}
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
