import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { palette, blues } from '../styles/colors';
import NavLinkPointer from './NavLinkPointer';
import ChatBubble from './ChatBubble';
import OverlayContext from './OverlayContext';

const Container = styled.div`
  display: none;
  position: absolute;
  top: 1px;
  left: 1em;
  z-index: 30;
  .burger {
    width: 30px;
    z-index: 30;
  }

  .burger:after,
  .burger:before,
  .burger div {
    background-color: ${blues.gunMetal};
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.4s ease-in-out;
  }

  .open:before {
    transform: translateY(12px) rotate(135deg);
    background-color: ${palette.lightGray};
  }

  .open:before {
    transform: translateY(12px) rotate(135deg);
    background-color: ${palette.lightGray};
  }

  .open:after {
    transform: translateY(-12px) rotate(-135deg);
    background-color: ${palette.lightGray};
  }

  .open div {
    transform: scale(0);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    display: flex;
    left: 0.5em;
  }
`;
const ModalWindow = styled.div`
  display: ${(p) => (p.status === 'open' ? 'flex' : 'none')};
  z-index: 25;
  padding: 1em;
  @keyframes open {
    0% {
      height: 0;
      opacity: 0;
    }
    10% {
      opacity: 0.5;
      height: 20px;
    }
    20% {
      opacity: 1;
      height: 40px;
    }
    30% {
      height: 60px;
    }
    40% {
      height: 80px;
    }
    50% {
      height: 100px;
    }
    60% {
      height: 120px;
    }

    70% {
      height: 140px;
    }

    80% {
      height: 160px;
    }
    90% {
      height: 180px;
    }

    100% {
      height: 200px;
    }
  }
  @keyframes closed {
    0% {
      height: 0;
    }
    10% {
      height: 180px;
    }
    20% {
      height: 160px;
    }
    30% {
      height: 140px;
    }
    40% {
      height: 120px;
    }
    50% {
      height: 100px;
    }
    60% {
      height: 80px;
    }

    70% {
      height: 60px;
    }

    80% {
      height: 40px;
    }
    90% {
      height: 20px;
    }

    100% {
      height: 0;
    }
  }
  animation-name: ${(p) => p.status};
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  width: 225px;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  background: ${palette.darkGray};
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-right: 0.5em;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  .title {
    /* Title */
    font-size: 1em;
    align-self: center;
    color: ${palette.lightTeal};
  }
  &:hover {
    transform: scale(1.1);
  }

  &:hover .blink {
    transform: scale(1.1);
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
`;
const Hamburger = () => {
  const { overlayOn, changeOverlay } = useContext(OverlayContext);
  const [status, changeStatus] = useState(overlayOn ? 'open' : 'closed');
  const [open, setOpen] = useState(false);
  const node = useRef();

  const toggleBurger = () => {
    // if (open) {
    // }
    if (status === 'closed') {
      changeOverlay(true);
      changeStatus('open');
    } else if (status === 'open') {
      changeOverlay(false);
      changeStatus('closed');
    }
  };

  return (
    <Container>
      <button className={`burger ${status}`} onClick={toggleBurger}>
        <div></div>
      </button>
      <ModalWindow open={open}>
        <NavLink to="/contact">
          <span className="title">Lets Chat</span>
          <ChatBubble />
        </NavLink>

        <NavLink to="/">
          <div className="title">My Projects</div>
          <NavLinkPointer />
        </NavLink>
      </ModalWindow>
    </Container>
  );
};

export default Hamburger;
