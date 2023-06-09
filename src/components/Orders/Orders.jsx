import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log('cart inside orders',cart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(pd => pd._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveFromCart = {handleRemoveFromCart}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                    cart={cart} 
                    handleClearCart = {handleClearCart}
                >
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;