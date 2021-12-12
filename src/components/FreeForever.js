import React from 'react';
import Icon from '../assets/images/freeForever.png';

export default function FreeForever() {
  return (
    <div className="downloadicon flex sm:flex-row items-center sm:flex-col mb-4 sm:mb-0">
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
            alt="easy installation"
            style={{ minWidth: '100%', minheight: '100%', flexShrink: 0 }}
          />
        </div>
      </div>
      <p className="poppins">Free Forever</p>
    </div>
  );
}
