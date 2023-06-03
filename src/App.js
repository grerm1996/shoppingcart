import { useState, useEffect } from 'react';

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
          <div>
              <img src={currentImage} />
          </div>
      )




  return (
    <div className="App">
      <img src={currentImage}></img>
    </div>
  )

}

export default App;
