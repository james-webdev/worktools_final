import React from 'react';
import onBoard from '../assets/images/devices.jpg';
import IndividualImage from '../assets/images/individualImage.png';
import PersonChatbox from '../assets/images/personChatbox.png';
import People from '../assets/images/people.png';
import TextLooper from './TextLoop';

const Individual = () => {
  return (
    <>
      <div className="lg:ml-20 lg:mr-20">
        <div className="sm:flex sm:justify-center">
          <div className="max-w-xl font-bold text-center text-black poppins ml-4 mr-4 text-3xl sm:mt-4 sm:mb-4 sm:w-1/2 sm:flex sm:justify-center">
            <p>Stay alert to security issues and become cyber-aware.</p>
          </div>
        </div>
        <div className="mt-10 sm:flex sm:align-middle sm:justify-center sm:p-2">
          <div className="sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
            <img src={onBoard} alt="appscreenshot" />
          </div>
          <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins sm:text-left sm:ml-8">
            <h2 className="text-2xl text-black font-bold sm:mt-0">
              Continuously monitor your devices.
            </h2>
            <p className="mt-2 text-black opacity-50">
              Our product works in the background continuously securing you so you have one less
              thing to worry about!
            </p>
          </div>
        </div>
        <div className="sm:flex-row-reverse sm:flex sm:align-middle sm:justify-center mt-20 sm:mt-10 sm:p-2">
          <div className="sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
            <img src={PersonChatbox} alt="appscreenshot" />
          </div>
          <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins sm:text-right sm:mr-8">
            <h2 className="text-2xl text-black font-bold sm:mt-0">
              Secure your devices and get instant expert help.
            </h2>
            <p className="mt-2 text-black opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quis cupiditate
              hic numquam, ipsum labore cum saepe quae veritatis?
            </p>
          </div>
        </div>
        <div className="sm:flex sm:align-middle sm:justify-center mt-20 sm:mt-10 sm:p-2">
          <div className="sm:my-auto sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
            <img src={People} alt="people" />
          </div>
          <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins sm:text-left sm:ml-8">
            <h2 className="text-2xl text-black font-bold sm:mt-0">
              95% of breaches are caused by human error.
            </h2>
            <p className="mt-2 text-black opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quis cupiditate
              hic numquam, ipsum labore cum saepe quae veritatis?
            </p>
          </div>
        </div>

        <div className="mt-10 -ml-10 -mr-10 sm:my-20 sm:ml-0 sm:mr-0 sm:flex sm:justify-center sm:items-center">
          <TextLooper />
        </div>
      </div>
    </>
  );
};

export default Individual;
