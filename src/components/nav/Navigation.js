import React from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import NavLinks from './NavLinks';

const Container = styled.nav`
  position: absolute;
  left: 2em;
  top: 12px;
  .links-container {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    top: 8px;
    left: 1em;
  }
`;

const Navigation = () => {
  return (
    <Container>
      <Modal />
      <div className="links-container">
        <NavLinks mobile={false} />
      </div>
    </Container>
  );
};

export default Navigation;
