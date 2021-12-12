import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '@fontsource/poppins';
import Layout from './layout/Layout';
import Button from './Button';
import CarouselEx from './Carousel';
// import LaptopImage from '../assets/images/Laptop1.png';
import LanderImage from '../assets/images/lander.png';
import Heart from './Heart';
import Target from './Target';
import Shield from './Shield';
import Contact from './GetFormContact';
import Pulse from './Pulse';
import SlidePage from './SlidePage';
import Testimonials from './Testimonials';

const Container = () => {
  const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  };

  const [isOn, toggleIsOn] = useToggle();

  // const StickyToggle = {
  //   top: '87px'
  // };
  return (
    <Layout>
      <section className="p-10 flex justify-center">
        <div
          className="w-full sm:mx-auto sm:items-center flex flex-col-reverse sm:flex sm:flex-row"
          style={{ maxWidth: 1200 }}
        >
          <div className="lg:flex lg:flex-col lg:justify-center sm:items-left sm:mr-5 sm:w-2/4">
            <div className="z-10 text-left mr-10">
              <h1 className="text-4xl text-black lg:text-5xl font-bold">Continually</h1>
              <h1 className="text-4xl text-black lg:text-5xl font-bold -mt-2 lg:-mt-3">
                assess your
              </h1>
              <h1 className="compliancebluetext text-4xl lg:text-5xl font-bold -mt-2 lg:-mt-3">
                {' '}
                compliance to{' '}
              </h1>
              <h1 className="compliancebluetext text-4xl lg:text-5xl font-bold -mt-2 lg:-mt-3">
                IT standards.
              </h1>
            </div>
            <div className="hidden poppins md:block max-w-sm">
              Resolve compliance, cybersecurity & common IT issues yourself. We are on hand to help.{' '}
            </div>
            <div className="mt-4 flex sm:justify-start">
              <Link to="download">
                <Button className="focus:outline-none headerDownload">
                  <p>Download Now</p>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-2/4 relative mb-6">
            <div className="z-50 relative max-w-4xl -ml-32 mr-20 sm:ml-0 sm:mr-0">
              <div className="">
                <img id="laptop" className="shadow-md z-50" src={LanderImage} alt="LanderImage" />
              </div>
            </div>
            <div className="absolute z-10 bottom-0 right-0 sm:bottom-auto sm:right-auto sm:top-0 sm:mt-10">
              <Pulse />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="flex-col lg:flex lg:flex-row" style={{ maxWidth: 1200 }}>
          <div className="lg:w-1/3 mx-12 my-4 xl:ml-0">
            <Heart />
          </div>
          <div className="lg:w-1/3 mx-12 my-4">
            <Shield />
          </div>
          <div className="lg:w-1/3 mx-12 my-4 xl:mr-0">
            <Target />
          </div>
        </div>
      </section>
      {/* <section class="grid grid-cols-2">

      </section> */}

      <div className="halfBackgroundBlue">
        <div className="mt-20">
          <Contact />
        </div>
      </div>

      <div className="" style={{ backgroundColor: '#def3f6', height: '80px', width: '100%' }} />
      <section className="md:hidden halfBackgroundBlueUpper flex justify-center items-center w-full">
        <div className="mt-20 sm:ml-40 sm:mr-40">
          <CarouselEx />
        </div>
      </section>

      <section className="hidden md:block halfBackgroundBlueUpper flex justify-center items-center w-full">
        <div className="w-full flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <Testimonials />
          </div>
        </div>
      </section>

      <section>
        <div className="mt-20">
          <SlidePage />
        </div>
      </section>
    </Layout>
  );
};

export default Container;
