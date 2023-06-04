/* const CartItem = (props) => {

    const [quant, setQuant] = useState(props.book.quant);

    let handleChange = (e) => {
        setQuant(e.target.value);
    }

    return (
        
        <div className='cartcard'>
            <div className='bookinfo'>
                <p class='title'>{props.book.title}</p>
                <img src={process.env.PUBLIC_URL + props.book.image} alt={props.book.title} />
                <p>Quantity: <input type='number' id='quantity' min='1' onChange=} value={props.book.quant}></input>  /  <button className='delBtn' onClick={() => props.removeFromCart(props.book)}>Remove from cart</button></p>
            </div>
            <p className='price'>${props.book.price}.00 × {props.book.quant}</p>
        </div>
    )

}

export default CartItem; */