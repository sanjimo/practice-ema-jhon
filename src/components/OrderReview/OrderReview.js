import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key =>{
         const newCart = cart.filter(product=>  product.key !== key);
         setCart(newCart);
         removeFromDb(key);
    }


    const handleProceedToShipping = () => {
        history.push('/shipping');
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product=><ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handleProceedToShipping} className="btn btn-warning">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;