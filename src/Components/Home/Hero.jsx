import React from "react";
import "./Hero.css";
import HeroImg1 from "../img/header/home-img-1.jpg";
import HeroImg2 from "../img/header/home-img-2.jpg";
import HeroImg3 from "../img/header/home-img-3.jpg";
import HeroImg4 from "../img/header/home-img-4.jpg";

const Hero = () => {
  return (
    <main>
      <div className="hero-images">
        <div className="cont">
        <img className="hero-img1" src={HeroImg1} alt="hero-img" />
        <h2>Live Comfortably</h2>
        </div>
        <div className="count2">
        <img className="hero-img2" src={HeroImg2} alt="hero-img" />
        <h2>Skincare</h2>
        </div>
        <div className="hright">
          <div className="count3">
            <img className="hero-img3" src={HeroImg3} alt="hero-img" />
            <h2>Kitchan</h2>
          </div>
          <div className="count4">

          <img className="hero-img4" src={HeroImg4} alt="hero-img" />
          <h2>Electronics</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
