import React from "react";
import "./Har.css";
import Banner from '../img/banner/banner1.jpg'

const Harmonious = () => {
  return (
    <section  className="flex">
      <div className="content-Har">
        <h2>Creative harmonious living</h2>
        <p>
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <button>SHOP NOW</button>
      </div>
      <img src={Banner} alt="" />
    </section>
  );
};

export default Harmonious;
