import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { palette } from '../../styles/colors';
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  /* height: 50px; */
  justify-content: space-around;
  margin-bottom: 1em;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    margin-right: 0.5em;
    color: ${palette.darkGray};
  }
  &:hover {
    transform: scale(1.2);
  }

  &:hover .blink {
    transform: scale(1.2);
    span {
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
  }

  &:hover .point {
    animation-name: point;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  @media (max-width: 850px) {
    &:first-child {
      margin-left: 1em;
    }
    &:last-child {
      margin-right: 1em;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const NavLink = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default NavLink;
