import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
  const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="shop-container">
           <div className="product-container">
                {/* <h3>product :{products.length} </h3> */}
                {
                    products.map( product => <Product
                    key = {product.key}
                         product={product}
                         ></Product>)
                }
           </div>
           <div className="cart-container">
                <h5>Item order</h5>
           </div>
        </div>
    );
};

export default Shop;