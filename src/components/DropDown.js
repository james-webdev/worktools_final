import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ words }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = e => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="menu-container">
      <button type="button" onClick={onClick} className="menu-trigger ml-2">
        <div className="p-1 flex justify-center items-center">
          <div className={`arrow ${isActive ? 'active' : 'inactive'}`} />
        </div>
      </button>
      <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <div className="text-xs p-1 shadow-lg rounded">
          <p>{words}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
