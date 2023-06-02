import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/">Home</Link>
            <Link to="/woman">Woman</Link>
            <Link to="/man">Man</Link>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
        <div className="logo">
          <h1>Zala Shop</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
