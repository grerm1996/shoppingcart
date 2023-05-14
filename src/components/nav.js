import { Link } from 'react-router-dom';
import {useEffect} from 'react';

import './nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = (props) => {


    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    let quantities = props.cartItems.map(item => item.quant);

    useEffect(() => {
        let cartNumber = document.getElementById('cartNumber');
        if (props.cartItems.length !== 0) {
            cartNumber.classList.add('bignumb');
            setTimeout(() => {
                cartNumber.classList.remove("bignumb");
            }, 300);
        }
        let itemTotal = props.cartItems.reduce(function(total, item) {
            return total + parseInt(item.quant);
          }, 0);
        cartNumber.textContent = itemTotal;
  }, [quantities]);


    return (
        <div id='navbar'>

            <ul>
                <Link to='/' style={linkStyle} >
                    <li>Home</li>
                </Link>

                <Link to='./products' style={linkStyle} >
                    <li>Products</li>
                </Link>

                <Link to='/cart' style={linkStyle}>
                    <li><ShoppingCartIcon /> <span id='cartNumber'>0</span> items</li>
                </Link>
            </ul>

        </div>
    )
};

export default Nav;