import React, { useState, useEffect } from 'react';

const ScrollTest = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1800) {
        setScroll(true);
        console.log(window.scrollY);
        console.log('on scroll');
      }
    });
  }, []);

  return (
    <section id="features" className="sm:ml-40 sm:mr-40">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-wrapper flex sm:flex-wrap sm:justify-center flex-col sm:flex-row m-2 sm:ml-4 sm:mr-4">
            <div className="single-chart m-3 w-full sm:w-1/3">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="30, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* <text
                  x="18"
                  y="20.35"
                  className="percentage"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  See the latest detailed analysis of your devices
                </text> */}
              </svg>
            </div>

            <div className="single-chart w-full mt-10 sm:w-1/3 m-3">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="60, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* <text x="18" y="20.35" className="percentage">
                  Easily manage your NCSC Cyber Essentials and GDPR compliance
                </text> */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTest;
