import React from 'react';
import onBoard from '../assets/images/devices.jpg';
import NSCS from '../assets/images/support.jpg';
import Briefcases from '../assets/images/briefcases.png';
import TextLooperTwo from './TextLoopTwo';

const Company = () => {
  return (
    <>
      {' '}
      <div className="sm:flex sm:justify-center">
        <div className="max-w-xl font-bold text-center text-white poppins ml-4 mr-4 text-3xl sm:mt-4 sm:mb-4 sm:w-1/2 sm:flex sm:justify-center">
          <p>
            Effective management of risks with lower insurance premiums or £25K of free Cyber cover.
          </p>
        </div>
      </div>
      <div className="mt-10 sm:flex sm:align-middle sm:justify-center sm:p-2">
        <div className="my-auto sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
          <img src={onBoard} alt="appscreenshot" />
        </div>
        <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins sm:text-left sm:ml-8">
          <h2 className="text-2xl text-white sm:mt-0 font-normal">
            Understand and improve your business security posture
          </h2>
          <p className="mt-2 text-white opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quis cupiditate
            hic numquam, ipsum labore cum saepe quae veritatis?
          </p>
        </div>
      </div>
      <div className="sm:flex-row-reverse sm:flex sm:align-middle sm:justify-center mt-20 sm:mt-10 sm:p-2">
        <div className="my-auto sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
          <img src={NSCS} alt="appscreenshot" />
        </div>
        <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins sm:text-right sm:mr-8">
          <h2 className="text-2xl text-white sm:mt-0 font-normal">
            Simple certification with continuous assessment against standards.
          </h2>
          <p className="mt-2 text-white opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quis cupiditate
            hic numquam, ipsum labore cum saepe quae veritatis?
          </p>
        </div>
      </div>
      <div className="mt-10 sm:flex sm:align-middle sm:justify-center sm:p-2">
        <div className="my-auto sm:max-w-lg sm:w-2/4 shadow-l lg:w-5/12">
          <img src={Briefcases} alt="appscreenshot" />
        </div>
        <div className="mt-5 sm:my-auto sm:max-w-lg sm:w-2/4 text-center poppins justify-center sm:ml-8">
          <div>
            <p className="leading-loose text-white text-2xl font-normal">
              81% of businesses struggle to manage their
            </p>
          </div>
          <TextLooperTwo />
        </div>
      </div>
      <div className="text-center poppins mt-10">
        <p className="text-2xl text-white my-20 sm:text-3xl">Can we help you make it simple?</p>
      </div>
    </>
  );
};

export default Company;
