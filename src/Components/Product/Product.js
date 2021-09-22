import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price ,stock ,seller} = props.product;
    return (
        <div className="product">
            <div className="product-left">
            <img src={img} alt="" />
            </div>
            <div className="product-right">
            <h3 className="product-name">{name}</h3>
            <p><small> By " {seller}</small></p>
            <h4>Price : {price}</h4>
            <p>only {stock} left in stock - order soon</p>
            <button onclick="btnPurches()" className="btn-purches">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;