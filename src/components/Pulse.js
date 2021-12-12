import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseMove = keyframes`
0% {
  transform: scale(0.9);
  box-shadow: 0 0 0 0 rgba(184, 199, 220, 0.3);
}
75% {
  transform: scale(1);
  z-index: -2;
  box-shadow: 0 0 0 75px rgba(198, 225, 237, 0.4);
}
95% {
  transform: scale(1);
  z-index: -2;
  box-shadow: 0 0 0 150px rgba(198, 225, 237, 0);
}
100% {
  transform: scale(0.9);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const PulseDiv = styled.div`
  animation-name: ${pulseMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  background: #b8c7dc;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
`;

const Pulse = () => {
  return <PulseDiv>{/* <div className="blob" /> */}</PulseDiv>;
};

export default Pulse;
