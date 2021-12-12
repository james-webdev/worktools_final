import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
      message: false
    });
    if (ok) {
      form.reset();
    }
    if (msg) {
      console.log(msg);
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, message: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/4a979712-4299-4337-9e90-ef82347d75b3',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
        console.log(r.data);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      <div
        className="max-w-4xl compliancedarkblue px-8 py-10 text-center mx-6 sm:mx-auto sm:px-20 sm:pt-6 pb-10"
        style={{
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          borderTopLeftRadius: 0
        }}
      >
        <div className="text-left text-white">
          <h1 className="poppins text-3xl">Get Notified.</h1>
          <p className="poppins">Sign up to be notified when the product is released.</p>
        </div>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="content-center w-full flex flex-col sm:flex-row sm:mt-5">
            <input
              className="w-full mt-5 mb-10 text-xl compliancedarkblue text-white border-b border-white sm:mt-0 sm:mb-0 sm:w-96 "
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
            <button
              className="w-full px-8 py-2 bg-white text-black poppins sm:ml-5 sm:max-w-xs sm:w-auto focus:outline-none compliancebuttonfillwhite"
              style={{ borderRadius: 20, borderTopLeftRadius: 0 }}
              type="submit"
            >
              <p>Subscribe</p>
            </button>
          </div>
        </form>
      </div>
      {serverState.message && (
        <div className="poppins rounded mt-3 p-3 backgroundBlue text-center text-black text-1xl">
          <p>Thanks! Your email has been submitted.</p>
        </div>
      )}
    </>
  );
};

export default Contact;
