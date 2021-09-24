import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props;

    let total = 0 ;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = total>0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    // const total = cart.reduce(( pre, product)=> pre + product.price,0 )

    return (
        <div className="main-cart">
            <h3>Order Summary</h3> 
              <h5>Item order : {props.cart.length}</h5> 
              <br/>
            <p>Price : {total.toFixed(2)}</p>
            <p>shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <hr/>
            <p>Grand Total  : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;