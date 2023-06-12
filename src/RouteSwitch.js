import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./Products/products";
import Cart from "./Cart/cart";
import Nav from './Nav/nav';
import Footer from './Footer/footer';
import Slider from './Slider/slider';
import './wrapper.css'

const RouteSwitch = () => {

  const [cartItems, setCartItems] = useState([]);

const removeFromCart = (item) => {
  const updatedCartItems = cartItems.filter((cartItem) => {
    return cartItem !== item;})
  setCartItems(updatedCartItems);
  console.log('deleted ' + {item})
  };

  
  
  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart}/>}
        />
        <Route path="/products" element={<Products setCartItems={setCartItems} cartItems={cartItems}/>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;