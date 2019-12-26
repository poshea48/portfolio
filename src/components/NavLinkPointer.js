import React from "react"
import styled from "styled-components"
import { palette } from "../styles/colors"

const Pointer = styled.span`
  font-size: 2em;
  color: ${palette.lightGray};

  @media (max-width: 650px) {
    align-self: center;
  }
  @keyframes point {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation-name: point;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
`
const NavLinkPointer = () => {
  return <Pointer className="point">☟</Pointer>
}

export default NavLinkPointer
