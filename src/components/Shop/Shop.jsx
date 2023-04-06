import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // if product does not exit in the cart, then set quantity = 1
        // if exist, update qunatity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get id
        for (const id in storedCart) {
            // get the product using id 
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // add the added product to saved cart
                savedCart.push(addedProduct);
            }
        }
        // console.log('added product', savedCart);
        setCart(savedCart);

    }, [products])


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart} 
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to='/orders'>
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;