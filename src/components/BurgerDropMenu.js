import React from 'react';
import { Link } from 'gatsby';
import ContactMobile from './GetFormMobile';
import FacebookMobile from './Social_Media/FaceBookMobile';
import LinkedInMobile from './Social_Media/LinkedinMobile';
import InstagramMobile from './Social_Media/InstagramMobile';
import TwitterMobile from './Social_Media/TwitterMobile';
import WhatsAppMobile from './Social_Media/WhatsAppMobile';
import MenuHome from '../assets/images/menuHome.png';
import MenuDownload from '../assets/images/menuDownload.png';
import MenuCyber from '../assets/images/menuCyber.png';

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={
        menuOpen ? 'mx-10 transitionMenu flex flex-col text-center sm:hidden' : 'hidden opacity-0'
      }
    >
      <div className="flex flex-col justify-between">
        {/* Nav */}
        <div className="mt-6 mb-4">
          <Link
            to="/"
            className=" flex justify-left items-center poppins text-black font-medium mb-2"
            href="#features"
          >
            <div className="w-8 h-8 flex items-center">
              <img
                src={MenuHome}
                alt="home icon"
                style={{
                  minWidth: '100%',
                  minheight: '100%',
                  flexShrink: 0
                }}
              />
            </div>
            <div className="ml-4 text-2xl">
              <h1>Home</h1>
            </div>
          </Link>
          <Link
            to="/download"
            className=" flex justify-left items-center poppins text-black font-medium mb-2"
            href="#features"
          >
            <div
              className="w-8"
              style={{
                height: 25,
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <img
                src={MenuDownload}
                alt="download icon"
                style={{ height: '100%', width: 'auto' }}
              />
            </div>
            <div className="ml-4 text-2xl">
              <h1>Download</h1>
            </div>
          </Link>
          <Link
            to="/cyberessentials"
            className="flex justify-left items-center poppins text-black font-medium"
          >
            <div
              className="w-8"
              style={{
                height: 25,
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <img src={MenuCyber} alt="cyber icon" style={{ height: '100%', width: 'auto' }} />
            </div>
            <div className="ml-4 text-2xl">
              <h1>Cyber Essentials</h1>
            </div>
          </Link>
        </div>
        {/* Contact details */}
        <div className="mt-12 flex justify-between items-center">
          <div className="poppins text-left">
            <div className="opacity-50 text-xs">Email</div>
            <div className="text-md">hi@work.tools</div>
          </div>
          <div className="poppins text-left">
            <div className="opacity-50 text-xs">Phone</div>
            <div className="text-md">0333 0508 805</div>
          </div>
        </div>
        {/* Socials */}
        <div className="mt-2 flex flex-row items-center justify-between">
          <div>
            <LinkedInMobile />
          </div>
          <div>
            <TwitterMobile />
          </div>
          <div>
            <FacebookMobile />
          </div>
          <div>
            <InstagramMobile />
          </div>
        </div>
        {/* Form */}
        <div className="mt-12">
          <ContactMobile />
        </div>
      </div>
    </div>
  );
};

export default Menu;
