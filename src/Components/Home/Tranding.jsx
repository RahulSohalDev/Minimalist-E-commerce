import React from 'react'
import './Tranding.css'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

//products
import Product1 from '../img/products/otherProducts/blackandwhite1.webp'
import Product2 from '../img/products/otherProducts/blackandwhite2.webp'
import Product3 from '../img/products/otherProducts/blacklamp1.webp'
import Product4 from '../img/products/otherProducts/blacklamp2.jpg'
import Product5 from '../img/products/otherProducts/bodyoil1.jpg'
import Product6 from '../img/products/otherProducts/bodyoil2.jpg'
import Product7 from '../img/products/otherProducts/cam1.webp'
import Product8 from '../img/products/otherProducts/chairboom1.webp'
import Product9 from '../img/products/otherProducts/cam2.jpg'
import Product10 from '../img/products/otherProducts/chairboom2.webp'
import Product11 from '../img/products/otherProducts/cleaningoil1.jpg'
import Product12 from '../img/products/otherProducts/cleaningoil2.jpg'
import Product13 from '../img/products/otherProducts/comfy1.webp'
import Product14 from '../img/products/otherProducts/comfy2.webp'
import Product15 from '../img/products/otherProducts/copenhagen1.webp'
import Product16 from '../img/products/otherProducts/copenhagen2.webp'

const Tranding = () => {
  return (
    <section className='flex-direction'>

    <div className='Tranding'>
          <h2>Tranding Now</h2>
            <div className="next-prev">
              <button className='Prev'> <GrLinkPrevious /> </button>
            <button className='Next'><GrLinkNext /> </button>
            </div>
     </div>

     <div className="trading-products">
        <div className="tranding-card">
            <img src={Product14} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>
        <div className="tranding-card">
            <img src={Product15} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product3} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product4} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product5} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product6} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product7} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product8} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product9} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product10} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product11} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product12} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product13} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product16} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product2} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>

        <div className="tranding-card">
            <img src={Product1} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
        </div>
     </div>
    </section>
  )
}

export default Tranding