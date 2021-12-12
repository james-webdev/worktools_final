import React from 'react';
import { Link } from 'gatsby';

const Complete = () => {
  return (
    <div
      className="flex flex-col justify-center items-center border-2 complianceborderwhite py-6 px-8"
      // style={{ maxWidth: 270 }}
    >
      <div className="w-full flex flex-col justify-between h-full">
        <div className="w-full">
          <h1 className="text-2xl text-white item-left">Complete</h1>
        </div>
        <div className="w-full flex text-left" style={{ height: 70 }}>
          <p className="text-md font-extralight opacity-50 text-white my-auto">
            "Enhanced" plan plus:
          </p>
        </div>

        <div className="text-left mb-4">
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
            <p className="poppins text-white">Windows & Linux Servers</p>
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
            <p className="poppins text-white">Data Loss Detection</p>
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
            <p className="poppins text-white">Active Threat Detection</p>
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
            <p className="poppins text-white">Custom Device Packs</p>
          </div>
        </div>

        <div className="p-3 w-full text-center compliancebuttonborderwhite">
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Complete;
