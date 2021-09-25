import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart}=props;
    let total=0;
    for(const product of cart){
        total=total+product.price;
    }
    return (
        <div className="cart">
            <h2 className="order-summary">Order Summary</h2>
            <h4 className="items-ordered">Items Ordered : {props.cart.length}</h4>
            <h4>Items : ${total}</h4>
        </div>
    );
};

export default Cart;