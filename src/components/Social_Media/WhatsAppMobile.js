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
`;

const WhatsAppMobile = () => (
  <WassapWrapper className="text-2xl">
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'rgba(33, 93, 155, 255)' }} icon={faWhatsapp} />
    </a>
  </WassapWrapper>
);

export default WhatsAppMobile;
