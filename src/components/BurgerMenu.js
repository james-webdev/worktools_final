import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-top: 8px;
`;

const BurgerDiv = styled.div`
  .bar1 {
    width: 25px;
    height: 1.5px;
    background-color: black;
    margin: 4px 0;
    transition: 0.4s;
  }
  .bar2 {
    width: 25px;
    height: 1.5px;
    background-color: black;
    margin: 4px 0;
    transition: 0.4s;
  }

  &.change .bar1 {
    transform: rotate(-45deg) translate(-5px, 2px);
  }

  &.change .bar2 {
    transform: rotate(45deg) translate(0px, 0px);
  }
`;

const BurgerMenu = ({ menuOpen, onClick }) => {
  return (
    <>
      <div>
        <Container className="sm:hidden">
          <BurgerDiv className={menuOpen ? 'change' : ' '} onClick={onClick}>
            <div className="bar1" />
            <div className="bar2" />
          </BurgerDiv>
        </Container>
      </div>
    </>
  );
};

export default BurgerMenu;
