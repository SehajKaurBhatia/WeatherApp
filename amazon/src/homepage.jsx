import Banner from './banner';
import { useState } from 'react';
import './homepage.css';

function Home() {
  const [imgIndex, setImgIndex] = useState(0); 
  const [darkMode, setDarkMode] = useState(false); 

  const images = [
    "./public/images/Az1.jpg",
    "./public/images/Az2.jpg",
    "./public/images/Az3.jpg",
    "./public/images/Az4.jpg"
  ];

  const handleNext = () => {
    const nextIndex = (imgIndex + 1) % images.length;
    setImgIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = (imgIndex - 1 + images.length) % images.length;
    setImgIndex(nextIndex);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <>
      <Banner />
      <div className={`containerH ${darkMode ? 'dark-mode' : ''}`}>
        <img id="homeImg" src={images[imgIndex]} alt="Home Image" />
        <div className="imgs">
          <img src="./images/ind.png" alt="Image 1"></img>
          <img src="./images/ind2.png" alt="Image 2"></img>
          <img src="./images/ind3.png" alt="Image 3"></img>
          <img src="./images/ind4.png" alt="Image 4"></img>
        </div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        
      </div>
      <button style={{backgroundColor:'black',transform:'translateY(120px)'}} onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </>
  );
}

export default Home;
