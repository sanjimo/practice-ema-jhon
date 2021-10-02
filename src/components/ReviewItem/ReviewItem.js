import React from 'react';

const ReviewItem = (props) => {
    const {img,name,price,seller,key} = props.product;
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
             onClick={()=>props.handleRemove(key)}
             className="btn-regular"
             >Remove from cart</button>
         </div>
        </div>
    );
};

export default ReviewItem;