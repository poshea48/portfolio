import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { blues } from '../../styles/colors';

const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    margin-right: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
    &:focus {
    }
  }
  span,
  a {
    font-size: 16px;
    text-decoration: none;
    color: ${blues.gunMetal};
    border-radius: 5px;
    padding: 5px;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 5px 5px ${blues.laurelGreen};
    }
  }

  /* span {
    margin: 0 0.5em 0 0;
  }
  a {
    margin: 0 0.5em;
  } */

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    li {
      font-size: 16px;
      text-decoration: none;
      margin: 1em;
      span,
      a {
        color: ${({ mobile }) => (mobile ? blues.laurelGreen : blues.gunMetal)};
      }
      font-weight: 900;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
const NavLinks = ({ mobile }) => {
  const handleScrollTo = () => scrollTo('#projects');
  const linkRef = useRef(null);
  return (
    <List mobile={mobile}>
      <li>
        <Link to="/projects" ref={linkRef} role="button">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </List>
  );
};

export default NavLinks;
