import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const ExpressContact = () => {
  const [state, setState] = useState({
    email: ''
  });

  const handleChange = e => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const createPost = () => {
    const body = state.email;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    axios
      .post(`http://localhost:3000/contact`, body, headers)
      .then(function(response) {
        if (response) {
          console.log(response);
        } else {
          console.log('Some error ocurred');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
            value={state.email}
            onChange={handleChange}
          />
          <label
            for="name"
            className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Title
          </label>
        </div>
      </div>
      <div className="">
        <button
          onClick={createPost}
          className="w-full shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create
        </button>
      </div>
    </>
  );
};

export default ExpressContact;
