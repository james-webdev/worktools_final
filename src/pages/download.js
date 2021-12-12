import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/GetFormContactBlue';
import CyberBook from '../components/CyberBook';
import MacDownloadButton from '../components/MacDownloadButton';
import WindowsDownloadButton from '../components/WindowsDownloadButton';
import FreeForever from '../components/FreeForever';
import EasyInstallation from '../components/EasyInstallation';
import StayProtected from '../components/StayProtected';
import GuardianLogo from '../assets/images/logo.png';
import AppleDownload from '../assets/images/appleDownload.png';
import WindowsDownload from '../assets/images/windowsDownload.png';

const Download = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="text-center mt-8 mx-10 mb-10 lg:mb-20">
          <div className="text-left poppins">
            {/* <h1 className="font-bold sm:pb-4 text-2xl">Download</h1> */}
            <div className="lg:flex lg:justify-center lg:items-center hidden lg:block">
              <img
                className="hidden lg:block"
                style={{ height: 30 }}
                src={GuardianLogo}
                alt="GuardianLogo"
              />
              <h2 className="ml-2 -mt-1 text-center text-lg sm:text-2xl">
                works on Windows and Mac operating systems.
              </h2>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:hidden">
              <h2 className="ml-2 -mt-1 text-center text-lg sm:text-2xl">
                Guardian works on Windows and Mac operating systems.
              </h2>
            </div>
          </div>
          <div className="my-8 w-full">
            <div className="flex flex-col items-center sm:pt-8">
              <div className="sm:flex sm:justify-between sm:w-full sm:max-w-4xl">
                <FreeForever />
                <EasyInstallation />
                <StayProtected />
              </div>
            </div>
          </div>

          <div className="ml-10 mr-10 flex justify-center items-center sm:mt-10 mb-8 sm:mb-10">
            <div className="mr-5 lg:hidden flex flex-col items-center justify-center">
              <img
                src={WindowsDownload}
                alt="windows download"
                style={{ width: 150, marginBottom: 10 }}
              />
              <p className="text-xs poppins">Download for Windows</p>
            </div>
            <div className="hidden lg:block mt-10">
              <WindowsDownloadButton />
            </div>
            <div className="ml-5 lg:hidden flex flex-col items-center justify-center">
              <img
                src={AppleDownload}
                alt="apple download"
                style={{ width: 150, marginBottom: 10 }}
              />
              <p className="text-xs poppins">Download for Mac</p>
            </div>
            <div className="hidden lg:block mt-10">
              <MacDownloadButton />
            </div>
          </div>
          <p className="lg:hidden">
            Please view this page on a laptop or a desktop to download guardian to your device
          </p>
        </div>
        <Contact className="" />
        {/* <CyberBook /> */}
        <Footer />
      </div>
    </>
  );
};

export default Download;
