import React, { useState, useEffect } from 'react';
import { getActiveImages } from '../services/imageService';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getActiveImages();
        setImages(response.data);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (loading) {
    return <div className="carousel-loading">Cargando imágenes...</div>;
  }

  if (images.length === 0) {
    return <div className="carousel-empty">No hay imágenes disponibles</div>;
  }

  return (
    <div className="image-carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={`http://localhost:3000${image.ruta}`} alt={image.nombre} />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button className="carousel-control prev" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="carousel-control next" onClick={goToNext}>
            &gt;
          </button>
          
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;