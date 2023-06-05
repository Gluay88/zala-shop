import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        <a href="/">ZALA</a> &copy; Copyright {currentYear}
      </p>
    </div>
  );
};

export default Footer;
