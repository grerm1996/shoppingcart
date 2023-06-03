import { Link } from 'react-router-dom';
import {useEffect, useState, useMemo} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons"


import './nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = (props) => {
    const [activePage, setActivePage] = useState(['home']);

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    let quantities = useMemo(()=>{
        return props.cartItems.map(item => item.quant);
    }, [props.cartItems]);

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
  }, [props.cartItems]);


    return (
        <div id='navbar'>

            <ul>
                <Link to='/' style={linkStyle} onClick={() => setActivePage('home')}>
                    <li id={activePage==='home' ? 'activehome' : ''} className='navlink homelink'>BookCart <FontAwesomeIcon icon={faBook} /></li>
                </Link>

                <Link to='./products' style={linkStyle} onClick={() => setActivePage('products')}  >
                    <li id={activePage==='products' ? 'active' : ''} className='navlink'>Products</li>
                </Link>

                <Link to='/cart' style={linkStyle} onClick={() => setActivePage('cart')}>
                    <li id={activePage==='cart' ? 'active' : ''} className='navlink' ><ShoppingCartIcon /> <span id='cartNumber'>0</span> items</li>
                </Link>
            </ul>

        </div>
    )
};

export default Nav;