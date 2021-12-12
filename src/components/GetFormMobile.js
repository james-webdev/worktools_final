import React, { useState } from 'react';
import axios from 'axios';

const ContactMobile = () => {
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
      <div className="text-center">
        <div className="text-left text-sm text-black">
          <p className="poppins">Be notified when the product is officially released.</p>
        </div>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="flex flex-col sm:flex-row">
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
              className="mt-4 p-3 complianceblue poppins w-full"
              style={{
                borderRadius: 25,
                borderTopLeftRadius: 0
              }}
              type="submit"
            >
              <p className="text-white">Subscribe</p>
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

export default ContactMobile;
