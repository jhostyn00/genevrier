'use client';

import React, {useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Perfume1 } from './Perfume1';
import { Perfume2 } from './Perfume2';
import { Perfume3 } from './Perfume3';
import styles from './Slider.module.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Suponiendo que siempre haya 3 divs
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Suponiendo que siempre haya 3 divs
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevSlide} className={styles.prev}>←</button>
      <div className={styles.sliderContainer} 
      >
        {/* Aquí están los divs con contenido dentro */}
        {currentIndex === 0 && <div className={styles.slide} style={{ backgroundColor: 'red' }}>
          <Canvas camera={{ position: [0, 0, 10], fov: 100 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />            
            <Perfume1 />
          </Canvas>
        </div>}
        {currentIndex === 1 && <div className={styles.slide} style={{ backgroundColor: 'blue' }}>
          <Canvas camera={{ position: [0, 0, 10], fov: 100 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Perfume2 />
          </Canvas>
        </div>}
        {currentIndex === 2 && <div className={styles.slide} style={{ backgroundColor: 'green' }}>
          <Canvas camera={{ position: [0, 0, 10], fov: 100 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Perfume3 />
          </Canvas>
        </div>}
      </div>
      <button onClick={nextSlide} className={styles.next}>→</button>
    </div>
  );
};

export default Slider;










