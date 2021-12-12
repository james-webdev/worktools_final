import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TwitWrapper = styled.div`
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

const Twitter = () => (
  <TwitWrapper className="text-2xl">
    <a href="https://twitter.com/worktools">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faTwitter} />
    </a>
  </TwitWrapper>
);

export default Twitter;
