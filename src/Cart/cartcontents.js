const CartContents = (props) => {

    return (

        <div id='cartcardcontainer'>

            {props.cartItems.map((book)=>{
                return (
                    <div className='cartcard'>
                        <div className='bookinfo'>
                            <p className='title'>{book.title}</p>
                            <img className='cartimg' src={process.env.PUBLIC_URL + book.image} alt={book.title} />
                            <p>Quantity: {book.quant}  /  <button className='delBtn' onClick={() => props.removeFromCart(book)}>Remove from cart</button></p>
                        </div>
                        <p className='price'>${book.price}.00 × {book.quant}</p>
                    </div>
                )})}
                    
        </div>
    )
}

export default CartContents