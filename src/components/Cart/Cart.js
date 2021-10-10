import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{cart}=props;
    let totalQuantity = 0;
    let total=0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1 : product.quantity;
        total=total+product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax= (total+shipping)/10;
    const grandTotal=total+shipping+tax;

    return (
        <div className="cart">
            <h2 className="order-summary">Order Summary</h2>
            <h4 className="items-ordered">Items Ordered : {totalQuantity}</h4>
            <h4>Items : ${total.toFixed(2)}</h4>
            <h4>Shipping : ${shipping}</h4>
            <h4>Tax : ${tax.toFixed(2)}</h4>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;