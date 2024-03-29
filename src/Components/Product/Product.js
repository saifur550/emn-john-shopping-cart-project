import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name, img, price ,stock ,seller} = props.product;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
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
            <button onClick={()=> props.handleAddToCart(props.product)} className="btn-regular"> {icon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;