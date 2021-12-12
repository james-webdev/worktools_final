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
      {serverState.message && (
        <div className="poppins rounded mt-3 p-3 complianceblue text-center text-black text-1xl">
          <p>Thanks! Your email has been submitted.</p>
        </div>
      )}
      <div className="backgroundBlue w-full">
        <div className="sm:max-w-6xl px-10 mx-auto justify-around pt-3 pb-6 mt-5 flex-col sm:flex-row">
          <div className="text-black sm:mr-4">
            <h1 className="poppins text-3xl font-semibold">Get Notified.</h1>
            <p className="poppins">Sign up to be notified when the product is released</p>
          </div>
          <form className="flex w-full mt-4 sm:mt-0 flex-col sm:flex-row" onSubmit={handleOnSubmit}>
            <input
              className="h-10 text-black w-full mr-4 sm:mr-8 my-auto text-md poppins sm:text-lg"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.2)',
                backgroundColor: 'transparent'
              }}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
            <button
              className="py-2 px-4 complianceblue text-white poppins tab mt-4 sm:my-auto focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
