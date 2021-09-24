import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
  const[products, setProducts] = useState([]);
  const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    useEffect(()=>{
        const saveCart = getStoredCart();
        console.log(saveCart);

    },[])

    //handler add to shopping cart
    const handleAddToCart = product =>{
        // console.log(product.name);
        const newCart = [...cart , product];
        setCart(newCart);
        console.log(product);
        addToDb(product.key)
    }

    return (
        <div className="shop-container">
           <div className="product-container">
                {/* <h3>product :{products.length} </h3> */}
                {
                    products.map( product => <Product
                    key = {product.key}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;