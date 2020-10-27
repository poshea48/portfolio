import React from 'react';
import styled from 'styled-components';
import MobileNav from './mobileNav/MobileNav';
import NavLinks from './NavLinks';

const Container = styled.nav`
  position: absolute;
  left: 2em;
  top: 3.5em;
  .links-container {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 550px) {
    top: 2.5em;
  }

  @media (max-width: 500px) {
    left: 1em;
  }
`;

const Navigation = ({ page }) => {
  return (
    <Container>
      <MobileNav page={page} />
      <div className="links-container">
        <NavLinks page={page} mobile={false} />
      </div>
    </Container>
  );
};

export default Navigation;
