import React from 'react';
import styled, { keyframes } from 'styled-components';

const targetMove = keyframes`
10% {
  transform: translate(0, 0);
}

35% {
  transform: translate(10px, 10px);
}
45% {
  transform: translate(10px, -10px);
}
65% {
  transform: translate(-10px, -10px);
}
85% {
  transform: translate(-10px, 10px);
}

100% {
  transform: translate(0, 0);
}
`;

const TargetDiv = styled.div`
  animation-name: ${targetMove};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Target = () => {
  return (
    <div className="flex justify-left lg:justify-center items-center lg:flex-col">
      {/* <TargetDiv> */}
      <div className="" style={{ height: 80 }}>
        <svg
          className="w-20 h-20 my-auto"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 750 750"
          enableBackground="new 0 0 512 512"
        >
          <g transform="translate(140 100)">
            <path
              className="moveThisBit"
              fill="none"
              stroke="#162862"
              strokeWidth="15.6747"
              strokeMiterlimit="10"
              d="M110.702,256.224
   c0,80.798,65.499,146.297,146.297,146.297"
            />

            <path
              className="moveThisBit"
              fill="none"
              stroke="#215D9B"
              strokeWidth="15.6747"
              strokeMiterlimit="10"
              d="M257,109.927
   c-80.798,0-146.297,65.499-146.297,146.297"
            />
            <path
              className="moveThisBit"
              fill="none"
              stroke="#80CADE"
              strokeWidth="15.6747"
              strokeMiterlimit="10"
              d="M403.297,256.224
   c0-80.798-65.499-146.297-146.297-146.297"
            />
            <path
              className="moveThisBit"
              fill="none"
              stroke="#43A1C1"
              strokeWidth="15.6747"
              strokeMiterlimit="10"
              d="M257,402.521
   c80.798,0,146.297-65.499,146.297-146.297"
            />
            <path
              className="moveThisBit"
              fill="#82CEE2"
              d="M269.191,169.162c0,6.974-5.653,12.627-12.627,12.627l0,0c-6.974,0-12.627-5.653-12.627-12.627V12.851
   c0-6.974,5.653-12.627,12.627-12.627l0,0c6.974,0,12.627,5.653,12.627,12.627V169.162z"
            />
            <path
              className="moveThisBit"
              fill="#162862"
              d="M269.191,499.597c0,6.974-5.653,12.627-12.627,12.627l0,0c-6.974,0-12.627-5.653-12.627-12.627V343.286
   c0-6.974,5.653-12.627,12.627-12.627l0,0c6.974,0,12.627,5.653,12.627,12.627V499.597z"
            />
            <path
              className="moveThisBit"
              fill="#46A4CB"
              d="M343.626,268.851c-6.974,0-12.627-5.653-12.627-12.627l0,0c0-6.974,5.653-12.627,12.627-12.627h156.312
   c6.974,0,12.627,5.653,12.627,12.627l0,0c0,6.974-5.653,12.627-12.627,12.627H343.626z"
            />
            <path
              className="moveThisBit"
              fill="#215D9E"
              d="M13.191,268.851c-6.974,0-12.627-5.653-12.627-12.627l0,0c0-6.974,5.653-12.627,12.627-12.627h156.312
   c6.974,0,12.627,5.653,12.627,12.627l0,0c0,6.974-5.653,12.627-12.627,12.627H13.191z"
            />
            <circle
              className="moveThisCircle"
              id="targetPulse"
              fill="#162862"
              cx="257"
              cy="256.224"
              r="42.67"
            />
            <circle
              id="targetPulse"
              className="moveThisBit"
              stroke="#46A4CB"
              strokeWidth="8px"
              fill="none"
              cx="257"
              cy="256.224"
              r="42.67"
            />

            <path
              fill="#215D9E"
              d="M464.6,196.137c-19.531-72.041-75.632-129.185-147.078-150.176V18.801
   c85.898,22.276,153.309,90.832,174.032,177.337H464.6z"
            />
            <path
              fill="#82CEE2"
              d="M462.33,316.31h27.224c-22.813,82.81-88.732,147.937-172.033,169.539v-27.161
   C386.371,438.461,440.971,384.661,462.33,316.31z"
            />
            <path
              fill="#162862"
              d="M49.399,196.137c19.531-72.041,75.632-129.185,147.078-150.176V18.801
   C110.58,41.077,43.169,109.633,22.445,196.137H49.399z"
            />
            <path
              fill="#46A4CB"
              d="M51.669,316.31H24.445c22.813,82.81,88.732,147.937,172.033,169.539v-27.161
   C127.628,438.461,73.028,384.661,51.669,316.31z"
            />
          </g>
        </svg>
      </div>
      {/* </TargetDiv> */}
      <div className="text-left flex-col text-left lg:text-center ml-4 lg:ml-0">
        <h1 className="font-bold text-lg">Cybersecurity</h1>
        <p className="sm:text-center">Understand the threats that your users and devices face</p>
      </div>
    </div>
  );
};

export default Target;
