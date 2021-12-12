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

  &:hover {
    ${FontAwesomeIcon} {
      transform: translateY(-1px);
    }

`;

const Instagram = () => (
  <InstaWrapper className="text-2xl">
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faInstagram} />
    </a>
  </InstaWrapper>
);

export default Instagram;
