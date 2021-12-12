import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: '-100%' }
// };

const TextFillBox = () => {
  const dropdownRef = useRef(null);
  const [Text, setText] = useState(
    'Claims made against you arising out of media activities and privacy and security wrongful acts.'
  );
  //   const [AnimateState, setAnimateState] = useState(false);
  //   const [selectedButton, setSelectedButton] = useState(false);

  const setBoxtext = text => {
    setText(text);
    console.log(Text);
    // setAnimateState(true);
    // setSelectedButton(true);
  };

  //   const showText = () => {
  //     return (
  //       <motion.p animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }}>${Text}</motion.p>
  //     );
  //   };

  //   useEffect(() => {
  //     const pageClickEvent = e => {
  //       if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
  //         setAnimateState(!AnimateState);
  //       }
  //     };

  //     if (AnimateState) {
  //       window.addEventListener('click', pageClickEvent);
  //     }

  //     return () => {
  //       window.removeEventListener('click', pageClickEvent);
  //     };
  //   }, [AnimateState]);

  return (
    <>
      <div className="flex">
        <div className="border border-black sm:flex sm:justify-around sm:mt-6 sm:p-1">
          <div className="sm: flex-col sm:flex-col">
            <div className="sm:flex">
              {' '}
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1 ">
                {' '}
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() =>
                    setBoxtext(
                      'Claims made against you arising out of media activities and privacy and security wrongful acts.'
                    )
                  }
                >
                  Liability
                </button>
              </div>
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1">
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() => setBoxtext('Ransoms and other cyber extortion.')}
                >
                  Extortion Demands
                </button>
              </div>
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1">
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() =>
                    setBoxtext(
                      'Loss of profit and/or operational expenses caused by a network compromise'
                    )
                  }
                >
                  Business Interuption
                </button>
              </div>
            </div>
            <div className="sm:flex">
              {' '}
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1">
                {' '}
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() =>
                    setBoxtext(
                      'Costs, including emergency costs, following a data breach, including the costs of notifying data subjects. These might typically include payment for Legal, IT, Forensic & PR specialists.'
                    )
                  }
                >
                  Event management
                </button>
              </div>
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1">
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() =>
                    setBoxtext('Defence costs & regulatory fines (where insurable by law).')
                  }
                >
                  Regulatory Investigations
                </button>
              </div>
              <div className="text-center sm:text-sm font-medium text-black rounded-tr-lg rounded-bl-lg rounded-br-lg sm:m-2 sm:p-1">
                <button
                  ref={dropdownRef}
                  className="backgroundColourChange sm:p-2"
                  type="button"
                  onClick={() =>
                    setBoxtext(
                      'Costs of remedying the issue that allowed the loss or damage to your data and costs to replace, restore or update your data.'
                    )
                  }
                >
                  Loss of Electronic Data
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center tab1 sm:text-lg font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg sm:flex sm:justify-center sm:items-center sm:m-3">
          <div>
            <motion.p animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }} initial={false}>
              {Text}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFillBox;
