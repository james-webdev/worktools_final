import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LinkedWrapper = styled.div`
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
  }
`;


const LinkedIn = () => (
  <LinkedWrapper className="text-2xl">
    <a href="https://www.linkedin.com/company/work-tools">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faLinkedinIn} />
    </a>
  </LinkedWrapper>
);

export default LinkedIn;
