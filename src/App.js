import { useState, useEffect } from 'react';
import './home.css';
import Slider from './Slider/slider';

function App() {

  const [currentImage, setCurrentImage] = useState([]);

  const images = ['a', 'aa'];

      useEffect(() => {
          const intervalId = setInterval(() => {
              setCurrentImage(images[Math.floor(Math.random() * images.length)]);
          }, 5000)
          
          return () => clearInterval(intervalId);
      }, [])
  
      return (
          <div className='homepage'>
              <Slider />
          </div>
      )
}

export default App;
