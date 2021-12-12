import React from 'react';
import { Link } from 'gatsby';

const IndividualPrice = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center border-2 complianceborder p-5 sm:p-10 mt-4 sm:mt-0 sm:flex sm:max-w-sm">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Individual</h1>
        </div>
        <div className="w-full flex items-center">
          <p className="text-5xl font-bold">£0</p>
          <p className="text-sm mt-4">/month</p>
        </div>
        <div className="w-full text-left">
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
            <p className="text-gray-600">Unlimited Devices</p>
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
            <p className="text-gray-600">Continuous Assessment</p>
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
            <p className="text-gray-600">Self-Help & E-learning</p>
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
            <p className="text-gray-600">Expert help (+£60)</p>
          </div>
        </div>

        <Link
          to="/download"
          className="mt-5 w-full py-3 headerDownload text-center text-white poppins compliancebuttonborder w-5/6"
        >
          <p>Get Started</p>
        </Link>
      </div>
    </>
  );
};

export default IndividualPrice;
