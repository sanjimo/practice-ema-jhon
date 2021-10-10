import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products]=useProducts();
    const [cart,setCart]=useCart(products);

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product=><Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}>
                <Link to="/review">
                    <button className="btn btn-warning">Review Your Order</button>
                </Link>
              </Cart>
            </div>
        </div>
    );
};

export default Shop;