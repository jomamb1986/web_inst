import React, { useState, useEffect } from 'react';
import './ImageManagement.css';

const ImageManagement = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setImages([
        { id: 1, nombre: 'Imagen 1', ruta: '/uploads/image1.jpg', activa: true },
        { id: 2, nombre: 'Imagen 2', ruta: '/uploads/image2.jpg', activa: true },
        { id: 3, nombre: 'Imagen 3', ruta: '/uploads/image3.jpg', activa: false },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Cargando imágenes...</div>;
  }

  return (
    <div className="image-management">
      <h2>Gestión de Imágenes</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <div className="image-placeholder">
              {image.nombre}
            </div>
            <div className="image-info">
              <p>{image.nombre}</p>
              <div className="image-actions">
                <button className="btn btn-sm btn-primary">Editar</button>
                <button className="btn btn-sm btn-danger">
                  {image.activa ? 'Desactivar' : 'Activar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManagement;