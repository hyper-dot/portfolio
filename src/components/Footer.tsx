import React from "react";

const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <p className="max-w-3xl mx-auto my-4 text-center">
      &copy; {currentFullYear} Roshan Paudel
    </p>
  );
};

export default Footer;
