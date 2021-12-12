import React from 'react';
import CyberBook from '../components/CyberBook';
import DropdownMenu from '../components/DropDown';
import GettingCertified from '../components/GettingCertified';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import TextFillBoxAaron from '../components/TextFillBoxAaron';
import CyberEssentialsLogo from '../svg/CyberEssentialsLogo';
import CyberEssentialsPlusLogo from '../svg/CyberEssentialsPlusLogo';
import Kitty from '../svg/kitty';
import Kitty2 from '../svg/kitty2';

const CyberEssentials = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center p-10 ">
        <div className="flex flex-col items-center" style={{ maxWidth: 1400 }}>
          {/* What is cyber essentials */}
          <div className="lg:flex">
            <div className="text-2xl font-bold lg:text-5xl lg:w-1/3">
              <h1>What is Cyber Essentials?</h1>
            </div>
            <p className="mt-4 lg:text-xl lg:w-2/3" style={{ opacity: 0.7 }}>
              Cyber Essentials is a government-backed scheme helping you to guard your organisation,
              whatever its size, against a range of the most common cyber attacks.
            </p>
          </div>
          {/* Two types of certification */}
          <div className="mt-10 lg:mt-20 lg:flex lg:flex-row-reverse lg:items-center ">
            <div className="lg:w-1/3">
              <p className="text-2xl font-bold lg:text-5xl lg:break-normal">
                The two types of certification
              </p>
              <p className="mr-16 hidden lg:block" style={{ opacity: 0.7 }}>
                Both options give protection against a wide variety of the most common cyber
                attacks.
              </p>
            </div>
            {/* Cyber 1 */}
            <div className="mt-5 sm:mt-0 flex p-4 pl-0  lg:w-1/3">
              <div className="">
                <CyberEssentialsLogo />
              </div>
              <div className="text-base ml-2 flex justify-center items-center">
                <p style={{ opacity: 0.7 }}>
                  Lightweight and easy to follow self-assessed certification.
                </p>
              </div>
            </div>
            {/* Cyber 2 */}
            <div className="flex p-4 pl-0 lg:w-1/3">
              <div className="">
                <CyberEssentialsPlusLogo />
              </div>
              <div className="text-base flex ml-2 justify-center items-center">
                <p style={{ opacity: 0.7 }}>Verified by independant Certification Body.</p>
              </div>
            </div>
            <div>
              <p className="mr-16 lg:hidden" style={{ opacity: 0.7 }}>
                Both options give protection against a wide variety of the most common cyber
                attacks.
              </p>
            </div>
          </div>
          {/* Why get cyber essentials */}
          <div className="mt-10 lg:mt-20 lg:flex lg:flex-col lg:items-center">
            <h1 className="text-2xl font-bold lg:text-5xl lg:text-center">
              Why get Cyber Essentials?
            </h1>
            <div className="lg:flex lg:justify-between lg:mt-6 mt-4">
              <div
                style={{ borderWidth: 2.5, borderColor: '#27aecc' }}
                className="lg:mx-4 tab py-2 px-4 mb-1 text-center sm:text-lg font-medium text-black lg:w-64 lg:flex lg:justify-center lg:items-center"
              >
                <p className="">Certified cyber security</p>
              </div>
              <div
                style={{ borderWidth: 2.5, borderColor: '#1f7d9c' }}
                className="lg:mx-4 tab py-2 px-4 mb-1 text-center sm:text-lg font-medium text-black lg:w-64 lg:flex lg:justify-center lg:items-center"
              >
                <p>Reassure customers that they are secure</p>
              </div>
              <div
                style={{ borderWidth: 2.5, borderColor: '#2b5794' }}
                className="lg:mx-4 tab py-2 px-4 mb-1 text-center sm:text-lg font-medium text-black lg:w-64 lg:flex lg:justify-center lg:items-center"
              >
                <p>Attract new business with evidence of cyber security measures in place</p>
              </div>
            </div>
            <div className="lg:flex lg:mt-4">
              <div
                style={{ borderWidth: 2.5, borderColor: '#1f7d9c' }}
                className="lg:mx-4 tab lg:tab3 py-2 px-4 mb-1 text-center sm:text-lg font-medium text-black lg:w-64 lg:flex lg:justify-center lg:items-center"
              >
                <p>Have a clear picture of your organisation's security level</p>
              </div>
              <div
                style={{ borderWidth: 2.5, borderColor: '#27aecc' }}
                className="lg:mx-4 tab py-2 px-4 mb-1 text-center sm:text-lg font-medium text-black lg:w-64 lg:flex lg:justify-center lg:items-center"
              >
                <p>Some government contracts require Cyber Essentials certification</p>
              </div>
            </div>
          </div>
          {/* Getting certified */}
          <div className="mt-10 lg:mt-20 w-full flex justify-center">
            <GettingCertified />
          </div>
          {/* Government contracts */}
          <div className="mt-10 lg:mt-20 lg:flex lg:justify-center lg:items-center">
            <h2 className="text-2xl lg:text-5xl lg:w-1/3 font-bold poppins">
              Government Contracts
            </h2>
            <p className="mt-4 lg:mt-0 lg:w-2/3 lg:text-xl" style={{ opacity: 0.7 }}>
              If you would like to bid for central government contracts which involve handling
              sensitive and personal information or the provision of certain technical products and
              services, you will require Cyber Essentials Certification. More information is
              available on the
              <a className="complianceblue text-white rounded px-1 ml-1" href="https://gov.uk">
                Gov.UK website
              </a>
            </p>
          </div>
          {/* £25k insurance */}
          <div className="mt-10 lg:mt-20 lg:flex lg:flex-row-reverse ">
            <div className="lg:w-1/3 lg:text-right sm:flex sm:flex-wrap sm:break-normal">
              <p className="text-2xl lg:text-5xl font-bold lg:ml-2">
                £25,000 of Cybersecurity Insurance Cover
              </p>
            </div>
            <div className="mt-4 lg:my-0 lg:flex-col lg:w-2/3 ">
              <p className="lg:text-xl mb-2" style={{ opacity: 0.7 }}>
                Having achieved Cyber Essentials compliance a company is then eligible for £25,000
                of cybersecurity insurance cover from AXA that can be used for:
              </p>
              <TextFillBoxAaron />
            </div>
          </div>
        </div>
      </div>
      <CyberBook />
      <Footer />
    </>
  );
};

export default CyberEssentials;
