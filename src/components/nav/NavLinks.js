import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
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
    color: ${({ page }) =>
      page == 'home' || page == 'resume' ? blues.gunMetal : blues.laurelGreen};
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

  @media screen and (max-width: 1220px) {
    flex-direction: ${({ page }) => (page !== 'resume' ? 'column' : 'row')};
    li {
      margin-bottom: ${({ page }) => (page !== 'resume' ? '.5em' : 0)};
    }
  }

  @media screen and (max-width: 992px) {
    /* flex-direction: ${({ page }) =>
      page == 'resume' ? 'row' : 'column'}; */
    justify-content: space-around;
    width: 100%;
    li {
      font-size: 16px;
      text-decoration: none;
      margin: ${({ page }) => (page == 'resume' ? 0 : '1em')};
      span,
      a {
        color: ${({ mobile, page }) =>
          mobile
            ? blues.laurelGreen
            : page == 'home' || page == 'resume'
            ? blues.gunMetal
            : blues.laurelGreen};
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
const NavLinks = ({ mobile, page }) => {
  const linkRef = useRef(null);
  return (
    <List mobile={mobile} page={page}>
      <li>
        {page == 'home' ? (
          <Link to="/projects" ref={linkRef} role="button">
            Projects
          </Link>
        ) : (
          <Link to="/" ref={linkRef} role="button">
            Home
          </Link>
        )}
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </List>
  );
};

export default NavLinks;
