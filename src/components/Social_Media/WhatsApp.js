import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WassapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
   &:hover {
    ${FontAwesomeIcon} {
      transform: translateY(-1px);
    }
`;

const WhatsApp = () => (
  <WassapWrapper className="text-2xl">
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faWhatsapp} />
    </a>
  </WassapWrapper>
);

export default WhatsApp;
