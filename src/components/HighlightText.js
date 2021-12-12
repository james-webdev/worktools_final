import React from 'react';
import styled, { keyframes } from 'styled-components';

const highlight = keyframes` 
    
    55% {
      background-color:  #27aecc;
      color: white;
    }
    100% {
      background-color:  #27aecc;
      color: white;
    }
`;

const ColourOneDiv = styled.div`
  display: inline;
  padding: 2px;
  border-radius: 5px 5px 5px 5px;
  animation-name: ${highlight};
  animation-iteration-count: infinite;
  animation-duration: 5s;
`;

const highlightTwo = keyframes` 
    
    55% { 
      background-color:  #1f7d9c;
      color: white;
    }
    100% {
      background-color:  #1f7d9c;
      color: white;
    }
`;

const ColourTwoDiv = styled.div`
  display: inline;
  border-radius: 15px 15px 15px 15px;
  padding: 2px;
  animation-name: ${highlightTwo};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

const highlightThree = keyframes` 
    
    55% { 
      background-color:  #2b5794;
      color: white;
    }
    100% {
      background-color:  #2b5794;
      color: white;
    }
`;

const ColourThreeDiv = styled.div`
  display: inline;
  border-radius: 5px 5px 5px 5px;
  padding: 2px;
  animation-name: ${highlightThree};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

const HighlightText = () => {
  return (
    <div className="">
      <p className="leading-loose text-center text-2xl font-bold sm:text-4xl sm:ml-20 sm:mr-20">
        Could you do more to protect your
        <ColourOneDiv>self?</ColourOneDiv>
      </p>
    </div>
  );
};

export default HighlightText;
