import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, ratings, seller, quantity, price } = props.product;
    // console.log(img, name, seller, quantity, price)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>

                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>

                <button className='btn-cart'>Add to card</button>
            </div>
        </div>
    );
};

export default Product;