/*import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import NewsList from '../components/NewsList';
import ComplaintForm from '../components/ComplaintForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <ImageCarousel />
      </div>
      
      <div className="content">
        <div className="section">
          <h2 className="section-title">Bienvenidos a la Caja Nacional de Salud - Oruro</h2>
          <p className="section-description">
            La Caja Nacional de Salud es una institución dedicada a brindar servicios de salud de calidad 
            a todos sus afiliados. En nuestra sede de Oruro, trabajamos día a día para mejorar la salud 
            y el bienestar de nuestra comunidad.
          </p>
        </div>
        
        <NewsList />
        
        <ComplaintForm />
      </div>
    </div>
  );
};

export default Home;*/

import React, { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import NewsList from '../components/NewsList';
import ComplaintForm from '../components/ComplaintForm';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular carga de componentes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home">
      <div className="hero">
        <ImageCarousel />
      </div>
      
      <div className="content">
        <div className="section">
          <h2 className="section-title">Bienvenidos a la Caja Nacional de Salud - Oruro</h2>
          <p className="section-description">
            La Caja Nacional de Salud es una institución dedicada a brindar servicios de salud de calidad 
            a todos sus afiliados. En nuestra sede de Oruro, trabajamos día a día para mejorar la salud 
            y el bienestar de nuestra comunidad.
          </p>
        </div>
        
        <NewsList />
        
        <ComplaintForm />
      </div>
    </div>
  );
};

export default Home;