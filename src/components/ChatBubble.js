import React from "react"
import styled from "styled-components"
import { palette } from "../styles/colors"

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;
  align-self: center;
`
const Bubble = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 40px;
  background: ${palette.lightGray};
  height: 30px;
  border-radius: 50%;
  align-items: center;
  box-shadow: inset 4px 3px 6px 0px ${palette.mediumGray};
  @keyframes blink {
    0% {
      opacity: 0.2;
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }
  span {
    vertical-align: middle;
    color: ${palette.darkGray};
    line-height: 1.2em;
    height: 100%;
    margin: 0 1px;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 12px;
    left: 30px;
    border: 12px solid transparent;
    border-top-color: ${palette.lightGray};
    box-shadow: inset 0px -1px 4px 1px ${palette.mediumGray};

    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`
const ChatBubble = () => {
  return (
    <Container>
      <Bubble className="blink">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Bubble>
    </Container>
  )
}

export default ChatBubble
