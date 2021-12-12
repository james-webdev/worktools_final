import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            placeholder="email"
          />
          <label
            htmlFor="name"
            className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Title
          </label>
        </div>
      </div>
      <div className="">
        <button
          className="w-full shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded compliancebuttonfillwhite"
          type="submit"
        >
          Create
        </button>
      </div>
    </>
  );
};

export default Contact;
