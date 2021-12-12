import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import { Icon, InlineIcon } from '@iconify/react';
import commaIcon from '@iconify-icons/mdi/comma';
import Quote from '../assets/images/quote.png';

function CarouselEx() {
  const [activeSlide, setActiveSlide] = useState(0);
  const Testimonial = (color, company, comment, person, position) => {
    return (
      <div
        className=""
        style={{
          width: 281.25,
          // height: 422.5,
          backgroundColor: color,
          borderRadius: 20,
          borderTopLeftRadius: 0
        }}
      >
        <div className="m-10 flex flex-col justify-between">
          <div className="flex items-center">
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
      <div className="">
        <Carousel
          updateOnItemClick
          containerProps={{
            style: {
              width: '100%',
              justifyContent: 'space-between'
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              objectFit: 'cover'
            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: '>',
            style: {
              width: 25,
              height: 25,
              minWidth: 25,
              alignSelf: 'center'
            }
          }}
          backwardBtnProps={{
            children: '<',
            style: {
              width: 25,
              height: 25,
              minWidth: 25,
              alignSelf: 'center'
            }
          }}
          itemsToShow={1}
          speed={200}
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
        </Carousel>
      </div>
    </>
  );
}

export default CarouselEx;
