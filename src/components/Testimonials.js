import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import commaIcon from '@iconify-icons/mdi/comma';
import Quote from '../assets/images/quote.png';

const Testimonials = () => {
  const Testimonial = (color, company, comment, person, position) => {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          // maxWidth: 250,
          // height: '100%',
          backgroundColor: color,
          borderRadius: 20,
          borderTopLeftRadius: 0,
          display: 'table-cell',
          alignItems: 'center'
        }}
      >
        <div className="m-10">
          <div className="h-20 flex items-center">
            <p className="text-3xl text-white" style={{ lineHeight: 1 }}>
              {company}
            </p>
          </div>
          <div className="h-40 flex items-center relative">
            <div className="relative">
              <p className="opacity-75 text-white" style={{ lineHeight: 1.6, fontSize: 14 }}>
                {comment}
              </p>
              <img
                src={Quote}
                alt=""
                style={{
                  width: 40,
                  height: 40,
                  opacity: 0.15,
                  position: 'absolute',
                  top: -20,
                  left: -10
                }}
              />
              <img
                src={Quote}
                alt=""
                style={{
                  width: 40,
                  height: 40,
                  opacity: 0.15,
                  transform: 'rotate(180deg)',
                  position: 'absolute',
                  bottom: -20,
                  right: -10
                }}
              />
            </div>
          </div>
          {/* Quotes */}

          {/* Comment */}

          <div className="h-14">
            <p className="text-lg text-white">{person}</p>
            <p className="opacity-75 text-white">{position}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex bold text-center justify-center items-center pb-5">
        <h1 className="ml-5 mr-5 poppins text-3xl font-bold">We think our clients put it best!</h1>
      </div>
      <div
        className="flex justify-between w-full"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '40px'
        }}
      >
        {Testimonial(
          '#27aecc',
          'Beatnik Games',
          'For us, its the most convenient way to manage our IT security.',
          'Damien Cerri',
          'CEO'
        )}
        {Testimonial(
          '#1f7d9c',
          'AD Dynamo',
          'Worktools helped us to fix all our historic non-compliances within 48 hours of on-boarding - result!',
          'Sam Wriley',
          'Director'
        )}
        {Testimonial(
          '#2b5794',
          'Adam Knibb Architects',
          'Awesome! Glad we decided to go with Worktools. Saved us loads of time and hassle.',
          'Adam Knibb',
          'Director'
        )}
      </div>
    </>
  );
};

export default Testimonials;
