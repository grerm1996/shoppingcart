import {useState, useEffect} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CheckoutBtn = (props) => {

    const [shippingMsg, setShippingMsg] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (0 < props.totalPrice && props.totalPrice < 50) {
            setShippingMsg(`Add $${50 - props.totalPrice}.00 to your order to qualify for free shipping!`);
        } else {
            setShippingMsg('This order qualifies for free shipping!')
        }
    }, [props.totalPrice]);

        function handleModalBtn() {
            if (props.totalPrice === 0) {
                return
            }
            else {
                setShowModal(!showModal);
              }
        }
        

        return (


            <div id='totalContainer'>
                <h2>Your order subtotal comes to ${props.totalPrice}.00{showModal}</h2>
                <p id='shippingMsg'>{shippingMsg}</p>
                
                <button className='checkoutBtn' onClick={handleModalBtn}>Proceed to checkout</button>

                {showModal && (
                <div className='modalOverlay'>
                    <div className='modal'>
                        <h2>Order confirmed</h2>
                        <img src = {process.env.PUBLIC_URL + '/truck1.jpg'} className='truck' ></img>
                        <p>The order has been charged to your credit card, and your books are on their way! Thanks!</p>
                        <HighlightOffIcon className='closebtn' alt='Exit confirmation message' onClick={handleModalBtn}/>
                    </div>
                </div>
                )}
            </div>
        )
}

export default CheckoutBtn