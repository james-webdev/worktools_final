import React from 'react';
import MobilesImg from '../assets/images/Mobiles.png';

const Mobiles = () => {
  return (
    <div className="">
      <div className="">
        <img id="mobilesImg" className="" src={MobilesImg} alt="mobiles" />
      </div>
      <div className="bg-black -mt-48 h-60 rounded-lg">
        <div className="text-left mr-4 ml-4 mb-8 p-6">
          <h1 className="text-white mt-40 text-xl">
            Monitor your protection from any device, anywhere
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
