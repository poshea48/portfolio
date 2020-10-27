import React from 'react';
import styled from 'styled-components';
import Modal from './modal/Modal';
import NavLinks from './NavLinks';

const Container = styled.nav`
  position: absolute;
  left: 2em;
  top: 2em;
  .links-container {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    top: 2em;
    left: 1em;
  }
`;

const Navigation = ({ page }) => {
  return (
    <Container>
      <Modal page={page} />
      <div className="links-container">
        <NavLinks page={page} mobile={false} />
      </div>
    </Container>
  );
};

export default Navigation;
