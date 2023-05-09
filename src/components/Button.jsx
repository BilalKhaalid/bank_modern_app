import React from "react";

const Button = ({ styles }) => (
  <button
  //! creating this button element and adding the props directly in the className
    className={`py-4 px-6 bg-blue-gradient font-poppins text-[18px] text-primary outline-none rounded-lg ${styles} `}
    type="button"
  >
    Get Started
  </button>
);

export default Button;
