import './slider.css';
import {useState, useEffect} from 'react';

const Slider = () => {

    const [images, setImages] = useState([
        { src: process.env.PUBLIC_URL + '/booksplash.jpg', alt: 'books', isActive: true },
        { src: process.env.PUBLIC_URL + '/booksplash2.jpg', alt: 'books', isActive: false },
        { src: process.env.PUBLIC_URL + '/booksplash3.avif', alt: 'books', isActive: false }
    ]); 

  
    

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
    }, 3000);

    return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <ul className='carousel'>
        {images.map((image, index) => (
          <li key={index} className={`slide ${image.isActive ? 'active' : ''}`}>
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;