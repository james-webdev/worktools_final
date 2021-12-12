import React from 'react';
import { Link } from 'gatsby';
import Instagram from '../Social_Media/Instagram';
import Twitter from '../Social_Media/Twitter';
import LinkedIn from '../Social_Media/LinkedIn';
import Facebook from '../Social_Media/Facebook';
import GoogleMaps from '../GoogleMaps';
import CyberEssentialsLogoFooter from '../../svg/CyberEssentialsLogoFooter';
import Mailto from '../MailTo';

const Footer = () => (
  <footer className="bg-black pb-10 text-white lg:flex lg:justify-center pt-8">
    <div className="lg:flex lg:justify-between lg:max-w-6xl">
      <div className="sm:flex sm:flex-col mx-10">
        <div className="flex flex-col sm:flex sm:flex-row sm:justify-left">
          {/* Resources */}
          <div className="flex flex-col mr-10 mb-4 sm:mb-0">
            <h1 className="text-xl">Resources</h1>
            <div className="text-small flex flex-col">
              <a
                // style={{ fontSize: 12 }}
                className="text-small footergrey hover:text-gray-200"
                href="/download"
              >
                Download
              </a>

              <button className="text-small" type="submit">
                <div className="text-small flex">
                  <Mailto email="hi@guardian.com" subject="I have a question" body="Hey!">
                    <a className="text-small footergrey hover:text-gray-200 text-left">Contact</a>
                  </Mailto>
                </div>
              </button>
            </div>
          </div>
          {/* Legal */}
          <div className="flex flex-col">
            <h1 className="text-xl">Legal</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <Link to="/termsandconditions" className="footergrey hover:text-gray-200">
                Terms and Conditions
              </Link>
              <Link to="/termsofservice" className="footergrey hover:text-gray-200">
                Terms of Service
              </Link>
              <Link to="/privacystatement" className="footergrey hover:text-gray-200">
                Privacy Statement
              </Link>
            </div>
          </div>
        </div>
        {/* Socials */}
        <div className="my-8 bg-black flex items-center justify-between max-w-xs">
          <div>
            <LinkedIn />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
        </div>
        {/* Cyber essentials */}
        <div className="items-center flex mb-8">
          <div className="text-sm footergrey flex justify-center items-center">
            <p>Cyber Essentials Certified</p>
          </div>
          <div className="ml-3">
            <CyberEssentialsLogoFooter />
          </div>
        </div>
        {/* Info */}
        <div className="footergrey hidden sm:flex sm:mb-8 text-center text-sm sm:text-left">
          Wortktools is a trading name of DeskServe LTD. Registered in England, Company Number
          09251779. Registered Office 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ © 2021.
          All rights reserved.
        </div>
      </div>
      <div className="mapBnW flex mx-10 lg:m-0">
        <GoogleMaps />
      </div>
      <div className="footergrey mx-10 mt-10 p-1 leading-loose text-xs sm:hidden">
        Wortktools is a trading name of DeskServe LTD. Registered in England, Company Number
        09251779. Registered Office 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ © 2021.
        All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
