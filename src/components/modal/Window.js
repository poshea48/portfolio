import React from 'react';
import styled from 'styled-components';
import { blues } from '../../styles/colors';
import scrollTo from 'gatsby-plugin-smoothscroll';
import NavLinks from '../nav/NavLinks';

const StyledWindow = styled.div`
  display: flex;
  position: absolute;

  background: ${blues.gunMetal};
  padding: 2.5rem 2rem 1rem 2rem;
  width: 250px;
  /* height: 150px; */
  transform: ${({ open }) => (open ? 'translateX(0em)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  top: -0.5em;
  left: -2em;
  text-align: center;
  border-radius: 0 20px 20px 0;
`;

// const Nav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 100%;
//   a,
//   span {
//     font-size: 16px;
//     text-decoration: none;
//     margin: 1em;
//     color: ${blues.un};
//     font-weight: 900;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out;

//     &:hover {
//       transform: scale(1.2);
//     }
//   }
// `;

const Window = ({ open }) => {
  return (
    <StyledWindow open={open}>
      <NavLinks mobile={true} />
    </StyledWindow>
  );
};

export default Window;
