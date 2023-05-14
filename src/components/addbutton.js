/* import './item.css';
import React, {useState} from 'react'

const AddBtn = (props) => {


    let addToCart = () => {
        let matchingItem = props.cartItems.filter(item => item.title == props.title);
        if (matchingItem == []) {
            let newItem = {
                title: props.title,
                image: props.image,
                price: props.price,
                quant: quant
            }
            props.addToCart(newItem);
        } else {
            matchingItem.quant 
        }
    }





    return (
    <div>
        <input type='number' id='quantity' min='1' placeholder='1' onChange={handleChange} value={quant}></input>
        <button onClick={ addToCart }>Add to cart</button>
    </div>
    )
};

export default AddBtn; */