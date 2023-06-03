import './cart.css';
import {useEffect} from 'react';
import CartItem from './cartitem';


const Cart = (props) => {


    // whenever cart items change, the total price is recalculated and displayed
    useEffect(() => {
        let totalPriceDisplay = document.getElementById('totalPriceDisplay');
        let totalPrice = props.cartItems.reduce(function(total, item) {
            return total + parseInt(item.price) * parseInt(item.quant);
          }, 0);
          totalPriceDisplay.textContent = totalPrice;
  }, [props.cartItems]);





    return (
        <div id="cart">
            <h1>Your Shopping Cart</h1>
            
            <div id='cartcardcontainer'>

                {props.cartItems.map((book)=>{
                    return (
                        <div className='cartcard'>
                            <div className='bookinfo'>
                                <p class='title'>{book.title}</p>
                                <img className='cartimg' src={process.env.PUBLIC_URL + book.image} alt={book.title} />
                                <p>Quantity: {book.quant}  /  <button className='delBtn' onClick={() => props.removeFromCart(book)}>Remove from cart</button></p>
                            </div>
                            <p className='price'>${book.price}.00 × {book.quant}</p>
                        </div>
                    )})}
                        
            </div>
            <div id='totalContainer'>
                <h2>Your total order comes to $<span id='totalPriceDisplay'></span>.00</h2>
                <button className='checkoutBtn'>Proceed to checkout</button>
            </div>
        </div>)
};

export default Cart;