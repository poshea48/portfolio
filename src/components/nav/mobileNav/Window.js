import React, { useEffect } from 'react';
import styled from 'styled-components';
import { blues } from '../../../styles/colors';
import NavLinks from '../NavLinks';

const StyledWindow = styled.div`
  display: flex;
  position: absolute;
  background: ${blues.dark};
  padding: 2.5rem 2rem 1rem 2rem;
  width: 250px;
  transform: ${({ open }) => (open ? 'translateX(0em)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  top: -0.5em;
  left: -2em;
  text-align: center;
  border: none;
  border-radius: 0 20px 20px 0;
`;

const Window = ({ open, page }) => {
  useEffect(() => {
    /*
    when open is true, traps focus inside window
    when open is false turns off trap
  */
    if (typeof window == 'undefined') return;
    if (!open) {
      document.removeEventListener('keydown', handleKeydown);
      return;
    }
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('#nav-window'); // select the modal by it's id

    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    function handleKeydown(e) {
      let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    }
    document.addEventListener('keydown', handleKeydown);

    firstFocusableElement.focus();
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [open]);

  return (
    <StyledWindow
      open={open}
      id="nav-window"
      role="dialog"
      aria-labelledby="nav-window"
      aria-describedby="navigation window"
    >
      <NavLinks mobile={true} page={page} />
    </StyledWindow>
  );
};

export default Window;
