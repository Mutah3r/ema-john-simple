import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const { img, name, ratings, seller, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>

                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>

                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    Add to card 
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
};

export default Product;