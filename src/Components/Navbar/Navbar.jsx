import React from "react";
import logo from "../img/newlogo2.png";
import { TbShoppingCart } from "react-icons/tb";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
     <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <h3>Categrious</h3>
            <h3>Product Page</h3>
            <span className="shop">
              <TbShoppingCart />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
