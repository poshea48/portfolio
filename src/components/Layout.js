import React, { useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  height: calc((var(--vh, 1vh) * 100));
  min-height: -webkit-fill-available;
  flex-direction: column;
  justify-content: flex-start;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window == 'undefined') return;
    let mounted = true;
    let timeoutId;
    window.addEventListener('resize', resizeListener);
    resizeHeight();
    return () => {
      mounted = false;
      window.removeEventListener('resize', resizeListener);
    };

    // --------- Utils ---------- //
    function resizeHeight() {
      if (!mounted) return;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    function resizeListener() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);

      // resize height 500 milliseconds after user
      setTimeout(() => {
        resizeHeight();
      }, 500);
    }
  });
  return <Main>{children}</Main>;
};

export default Layout;
