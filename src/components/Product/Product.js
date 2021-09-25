import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,stock,seller}=props.product;
    return (
        <div className="product">
         <div>
             <img src={img} alt="" />
         </div>
         <div className="product-details">
             <h4 className="product-name">{name}</h4>
             <p><small>by : {seller}</small></p>
             <p>Price : ${price}</p>
             <p><small>Only {stock} left in stock - order soon </small></p>
             <button className="btn-regular">add to cart</button>
         </div>
        </div>
    );
};

export default Product;