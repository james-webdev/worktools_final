import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const InstagramMobile = () => (
  <InstaWrapper className="text-2xl">
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'rgba(33, 93, 155, 255)' }} icon={faInstagram} />
    </a>
  </InstaWrapper>
);

export default InstagramMobile;
