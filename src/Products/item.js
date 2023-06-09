import React, {useState, useEffect} from 'react';
import './item.css';

const Item = (props) => {

    const [quant, setQuant] = useState(1);

    let handleChange = (e) => {
        setQuant(e.target.value);
    }

    let addToCart = () => {
        let matchingItem = props.cartItems.filter(item => item.title == props.title);
        console.log('matching item:' + matchingItem);
        if (matchingItem == '') {
            let newItem = {
                title: props.title,
                image: props.image,
                price: props.price,
                quant: parseInt(quant),
            }
            console.log(newItem);
            props.setCartItems(prevCartItems => [...prevCartItems, newItem]);
            console.log(props.cartItems)
        } else {
            let updatedItems = props.cartItems.map(item => {
                if (item.title === props.title) {
                  return {
                    ...item,
                    quant: item.quant + parseInt(quant)
                  };
                } else {
                  return item;
                }
              });
          
              props.setCartItems(updatedItems);
        }
    }
    
    return (
        <div className = 'itemcontainer'>
            <img className='productimg' src={process.env.PUBLIC_URL + props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>${props.price}.00</p>
            <div className='quantdiv'>
                <input type='number' id='quantity' min='1' placeholder='1' onChange={handleChange} value={quant}></input>
                <button className='addBtn' onClick={ addToCart }>Add to cart</button>
            </div>
            
        </div>
    )

}

export default Item;