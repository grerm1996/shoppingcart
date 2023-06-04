import './cart.css';
import {useEffect, useState} from 'react';
import CheckoutBtn from './checkoutbtn';
import CartContents from './cartcontents';


const Cart = (props) => {

    const [totalPrice, setTotalPrice] = useState([0]);


    // whenever cart items change, the total price is recalculated and displayed
    useEffect(() => {
        setTotalPrice(props.cartItems.reduce(function(total, item) {
            return total + parseInt(item.price) * parseInt(item.quant);
          }, 0))
    }, [props.cartItems]);



    return (
        <div id="cart">
            <h1>Your Shopping Cart</h1>

            {props.cartItems.length > 0 ? (
                <>
                    <CartContents cartItems={props.cartItems} removeFromCart={props.removeFromCart} />
                    <CheckoutBtn totalPrice={totalPrice} />
                </>
                ) : (
                <div className='empty'>
                    <p className='emptymsg'>Your cart is still empty.</p>
                    <img className='emptycartimg' src={process.env.PUBLIC_URL + '/emptycart.jpg'} alt='empty shopping cart'></img>
                    <p class='imgcredit'><a href="https://www.freepik.com/free-vector/shopping-cart-realistic_2869599.htm#query=shopping%20cart&position=0&from_view=search&track=ais">(Image by macrovector</a> on Freepik)</p>
                    <p>Did you know that shipping is free for orders of at least $50?</p>
                </div>
                )}
        </div>)
};

export default Cart;