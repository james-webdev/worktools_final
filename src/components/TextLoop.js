import React from 'react';
import TextLoop from 'react-text-loop';

const TextLooper = () => {
  return (
    <div className="zindex text-2xl font-bold poppins flex flex-col sm:flex-row items-center justify-center sm:text-3xl mx-4 sm:mx-0">
      <div className="leading-loose sm:mr-3 min-width-min text-center">
        Could you do more to protect
      </div>
      <TextLoop
        interval="1000"
        className="z-0 complianceblue text-2xl text-white rounded-lg sm:text-3xl"
      >
        <p className="px-3 z-0">yourself?</p>
        <p className="px-3 z-0">your clients?</p>
        <p className="px-3 z-0">your business?</p>
        <p className="px-3 z-0">your colleagues?</p>
        <p className="px-3 z-0">your family?</p>
        <p className="px-3 z-0">your suppliers?</p>
      </TextLoop>
    </div>
  );
};

export default TextLooper;
