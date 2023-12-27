import React from 'react'
import Products1 from '../img/products/1.jpg'
import Products2 from '../img/products/2.jpg'
import Products3 from '../img/products/3.png'
import Products4 from '../img/products/4.jpg'
import Products5 from '../img/products/5.jpg'
import Products6 from '../img/products/6.jpg'
import Products7 from '../img/products/7.jpg'
import Products8 from '../img/products/8.jpg'

import './Products.css'

const Products = () => {
  return (
    <div className='Wrapper'>
        <h2 className='h2'>Products we are proud of</h2>
        <div className="products">
           <div className="card">
            <img src={Products1} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products2} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products3} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products4} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products5} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products6} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products7} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>

           <div className="card">
            <img src={Products8} alt="" />
            <h3>Little Armchair Sheepskin</h3>
            <p>300$</p>
           </div>
        </div>
    </div>
  )
}

export default Products