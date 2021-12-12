import React from 'react';
import { Link } from 'gatsby';

const Essential = () => {
  return (
    <div
      className="border-2 flex flex-col complianceborderwhite py-6 px-8 mb-4 md:mb-0"
      // style={{ maxWidth: 270 }}
    >
      <div className="w-full flex flex-col justify-between h-full">
        <div className="w-full">
          <h1 className="text-2xl text-white item-left">Essential</h1>
        </div>
        <div className="w-full" style={{ height: 70 }}>
          <div className="flex text-white items-center">
            <p className="text-5xl">£0</p>
            {/* <div className="relative">
            <p className="text-sm mt-4 absolutely">*</p>
          </div> */}
            <p className="text-sm mt-4 font-semibold">/month</p>
          </div>
        </div>

        <div className="text-left mb-4">
          <div className="p-1 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                fill="#FFFFFF"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p className="text-white">Unlimited Devices</p>
          </div>
          <div className="p-1 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p className="text-white">Certification Toolkit*</p>
          </div>
          <div className="p-1 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p className="text-white">Smart IT Policies</p>
          </div>
          <div className="p-1 flex items-center">
            <div className="mr-2">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="28px"
                height="28px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
              >
                <g>
                  <polygon
                    fill="#26A7C2"
                    points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                  />
                </g>
              </svg>
            </div>
            <p className="text-white">Risk Management</p>
          </div>
        </div>

        <Link to="/download">
          <div className="p-3 w-full text-center compliancebuttonfillwhite">
            <p>Get Started</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Essential;
