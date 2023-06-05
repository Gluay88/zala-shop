import React from "react";
import GreenGlasses from "../assets/greenglasses.jpg";
import BlueShoes from "../assets/blueshoes.jpg";
import PinkJacket from "../assets/pinkjacket.jpg";
import "../styles/BottomSection.scss";

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <div className="all-items">
        <div className="item">
          <img src={GreenGlasses} alt="Woman wearing green glasses" />
          <p>Woman Glasses</p>
        </div>

        <div className="item">
          <img src={BlueShoes} alt="Pastel Blue Nike Shoes" />
          <p>Woman Sneakers</p>
        </div>

        <div className="item">
          <img src={PinkJacket} alt="Woman wearing pastel pink jacket" />
          <p>Woman Jacket</p>
        </div>
      </div>
    </section>
  );
};
export default BottomSection;
