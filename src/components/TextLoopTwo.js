import React from 'react';
import TextLoop from 'react-text-loop';

const TextLooperTwo = () => {
  return (
    <div className="text-xl p-1 font-bold poppins flex flex-col sm:flex-row items-center justify-center">
      {/* <div className="p-2 leading-loose text-white">81% of businesses struggle to manage their</div> */}
      <TextLoop interval="1000" className="bg-white font-bold p-1 text-2xl rounded-lg">
        <p className="ml-2 mt-2 text-2xl">data loss.</p>
        <p className="ml-2 mt-2 text-2xl">regulatory compliance.</p>
        <p className="ml-2 mt-2 text-2xl">brand reputation.</p>
        <p className="ml-2 mt-2 text-2xl">operational security risks.</p>
      </TextLoop>{' '}
    </div>
  );
};

export default TextLooperTwo;
