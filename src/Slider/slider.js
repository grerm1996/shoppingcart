import './slider.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Slider = (props) => {

    const [images, setImages] = useState([
        { src: process.env.PUBLIC_URL + '/booksplash.jpg', alt: 'books', isActive: true },
        { src: process.env.PUBLIC_URL + '/booksplash2.jpg', alt: 'books', isActive: false },
        { src: process.env.PUBLIC_URL + '/booksplash3.avif', alt: 'books', isActive: false }
    ]); 

    const [showSlider, setShowSlider] = useState(false);

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
  }

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowSlider(true);
      }, 100);

      return () => clearTimeout(timeout);
    }, []);
  
    

   useEffect(() => {
    const interval = setInterval(() => {
      setImages(prevImages => {
        const updatedImages = [...prevImages];
        const activeIndex = updatedImages.findIndex(image => image.isActive);
        const nextIndex = (activeIndex + 1) % updatedImages.length;

        updatedImages.forEach((image, index) => {
          image.isActive = index === nextIndex;
        });

        return updatedImages;
      });
    }, 4000);

    return () => clearInterval(interval);
    }, []);

  return (
    <div className='sliderContainer'>
      <ul className='carousel'>
        {images.map((image, index) => (
          <li key={index} className={`slide ${image.isActive ? 'active' : ''}`}>
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
      
      <div className="welcome">
        <h2>Welcome to BookCart</h2>
        <h3>Your next great read is waiting.</h3>
        <Link to='/shoppingcart/products' style={linkStyle} >
          <button className="welcomebtn" onClick={()=> props.setActivePage('products')}>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;