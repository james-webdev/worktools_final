import React from 'react';

const sizes = {
  default: `py-2 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        complianceblue
        text-white
        poppins
    `}
      style={{ borderRadius: 20, borderTopLeftRadius: 0 }}
    >
      {children}
    </button>
  );
};

export default Button;
