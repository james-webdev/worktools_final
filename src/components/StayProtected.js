import React from 'react';
import Icon from '../assets/images/stayProtected.png';

export default function StayProtected() {
  return (
    <div className="downloadicon flex sm:flex-row items-center sm:flex-col">
      <div className="w-10 h-10 sm:h-20 sm:w-20 mr-2 sm:mr-0 sm:mb-2">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={Icon}
            alt="stay protected"
            style={{ minWidth: '100%', minheight: '100%', flexShrink: 0 }}
          />
        </div>
      </div>
      <p className="poppins">Stay protected</p>
    </div>
  );
}
