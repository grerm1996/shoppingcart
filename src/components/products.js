import Item from './item';
import React, { useState } from 'react';
import './products.css';


const Products = (props) => {

    const product = (image, title, price, author) => {
        return {image, title, price, author}
    };

    const productArray = [
        product('./blazing.jpg', 'The Blazing World', '13', 'Jonathan Healey'),
        product('./architects.jpg', 'Architects of Occupation', '18', 'Dayna L. Barnes'),
        product('./cigarette.jpg', 'The Cigarette Century', '14', 'Allan M. Brandt'),
        product('./liberty.jpg', 'Until We Have Won Our Liberty', '20', 'Evan Lieberman'),
        product('./lioncity.jpg', 'Lion City', '10', 'Jeevan Vasagar'),
        product('./russo.jpg', 'The Russo-Ukrainian War', '15', 'Serhii Plokhy'),
        product('./streets.jpg', 'Streets of Gold', '15', 'Ran Abramitzky & Leah Boustan'),
        product('./wrestling.jpg', 'Wrestling with His Angel', '18', 'Sidney Blumenthal'),
    ]


 
  


    return (
        <div id='productcontainer'>
            {productArray.map((book)=>{
                return (< Item image={book.image} title={book.title} price={book.price} author={book.author} setCartItems={props.setCartItems} cartItems={props.cartItems}/>)
            })}

        </div>
    
    )
};

export default Products;