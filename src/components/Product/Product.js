import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {img,name,price,seller}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
         <div>
             <img src={img} alt="" />
         </div>
         <div className="product-details">
             <h4 className="product-name">{name}</h4>
             <p><small>by : {seller}</small></p>
             <p>Price : ${price}</p>
             <button
             onClick={()=>props.handleAddToCart(props.product)}
             className="btn btn-warning"
             >{cartIcon} add to cart</button>
         </div>
        </div>
    );
};

export default Product;