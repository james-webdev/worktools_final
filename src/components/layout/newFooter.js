import React from 'react';
import Instagram from '../Social_Media/Instagram';
import Twitter from '../Social_Media/Twitter';
import LinkedIn from '../Social_Media/LinkedIn';
import Facebook from '../Social_Media/Facebook';
import GoogleMaps from '../GoogleMaps';

const Footer = () => (
  <footer className="bg-black pb-10 mt-20 text-white">
    <div className="sm:flex sm:justify-between">
      <div className="sm:flex sm:flex-col">
        <div className="flex p-4 ml-2 pl-5 pt-5 flex-col sm:flex sm:flex-row sm:justify-around sm:items-center">
          <div className="flex flex-col sm:p-4">
            <h1 className="text-xl">Resources</h1>
            <a className="text-gray-400 p-1" href="">
              Visit our online store
            </a>
            <a className="text-gray-400 p-1" href="">
              Apple Mac Leasing
            </a>
            <a className="text-gray-400 p-1" href="">
              Microsoft Surface Leasing
            </a>
            <a className="text-gray-400 p-1" href="">
              Download
            </a>
            <a className="text-gray-400 p-1" href="">
              Contact
            </a>
          </div>
          <div className="flex mt-6 sm:mb-5 flex-col sm:p-4">
            <h1 className="text-xl">Legal</h1>
            <a className="text-gray-400 p-1" href="">
              Terms and Conditions
            </a>
            <a className="text-gray-400 p-1" href="">
              Terms of Service
            </a>
            <a className="text-gray-400 p-1" href="">
              Privacy Statement
            </a>
          </div>
        </div>
        <div className="mt-4 ml-8 mb-8 bg-black mr-8 flex items-center justify-between sm:justify-around sm:p-2">
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <LinkedIn />
          </div>
          <div>
            <Facebook />
          </div>
        </div>
        <div className="hidden sm:flex sm:p-3 sm:ml-5 sm:mb-8 sm:text-center sm:text-sm text-gray-400">
          Wortktools is a trading name of DeskServe LTD. Registered in England, Company Number
          09251779. Registered Office 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ © 2019.
          All rights reserved.
        </div>
      </div>
      <div className="mapBnW flex justify-center items-center sm:p-5 sm:mr-20">
        <GoogleMaps />
      </div>
    </div>
  </footer>
);

export default Footer;
