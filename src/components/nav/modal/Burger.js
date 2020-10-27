import React from 'react';
import styled from 'styled-components';
import { blues } from '../../../styles/colors';

const StyledBurger = styled.button`
  position: absolute;
  display: flex;
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
    box-shadow: 0 0 5px 5px ${({ open }) =>
      open ? 'rgba(80,143,222,.7)' : blues.gunMetal};
  }
  }
  .line {
    width: 100%;
    height: 3px;
    background-color: ${blues.dark};
    background: ${blues.dark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
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
  }

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
    padding: 8px;
    div {
      height: 3px;
    }
  }
`;
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      aria-label="navigation button"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </StyledBurger>
  );
};

export default Burger;
