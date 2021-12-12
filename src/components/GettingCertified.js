import React from 'react';
import Mailto from './MailTo';

const GettingCertified = () => {
  return (
    <div className="gettingCertified w-full p-10 text-center sm:flex sm:justify-between sm:max-w-4xl">
      <div className="text-left">
        <h1 className="gettingCertifiedText poppins font-medium text-3xl">Getting certified?</h1>
        <p className="gettingCertifiedText poppins mt-2" style={{ opacity: 0.7 }}>
          Already on the path to securing your company, or considering it soon?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <button
          className="gettingCertifiedButton mt-5 p-3 poppins sm:my-auto sm:px-6"
          type="submit"
        >
          <div className="">
            <Mailto email="hi@guardian.com" subject="I have a question" body="Hey!">
              <p className="gettingCertifiedButtonText">Get in touch</p>
            </Mailto>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GettingCertified;
