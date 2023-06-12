const CartContents = (props) => {


    const changeQuantity = (book, e) => {
        const newItems = props.cartItems.map((item) => {
          if (item === book) {
            return {...item, quant: e.target.value};
          }
          return item;
        });
      
        props.setCartItems(newItems);
      };

    return (

        <div id='cartcardcontainer'>

            {props.cartItems.map((book)=>{
                return (
                    <div className='cartcard'>
                        <div className='bookinfo'>
                            <p className='title'>{book.title}</p>
                            <img className='cartimg' src={process.env.PUBLIC_URL + book.image} alt={book.title} />
                            <p>Quantity: <input type='number' id='quantity' min='1' placeholder='1' onChange={(e)=>changeQuantity(book, e)} value={book.quant}></input>  /  <button className='delBtn' onClick={() => props.removeFromCart(book)}>Remove from cart</button></p>
                        </div>
                        <p className='price'>${book.price}.00 × {book.quant}</p>
                    </div>
                )})}
                    
        </div>
    )
}

export default CartContents