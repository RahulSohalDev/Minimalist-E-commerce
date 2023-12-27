import React from "react";
import Banner from "../img/banner/banner2.jpg";
import './Shop.css'
const Shop = () => {
  return (
    <section className="shop">
      <img src={Banner} alt="Banner-img" />
      <div className="shop-content">
       <h2>Comfortable & Elegante Living</h2>
      <p>
        RAOUF Products are all made to standard sizes so that you can mix and
        match them freely.
      </p>
      <button className="shop-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Shop;
