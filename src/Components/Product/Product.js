import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const {name,img,price,seller,stock,star} = props.product;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className = "product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className= "product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br /><br />
                <button onClick = {()=>props.handleAddToCart(props.product)}
                className= "btn-regular"> {shoppingCart} add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;