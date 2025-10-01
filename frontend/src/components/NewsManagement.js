import React, { useState, useEffect } from 'react';
import './NewsManagement.css';

const NewsManagement = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setNews([
        { id: 1, titulo: 'Noticia 1', contenido: 'Contenido de la noticia 1...', activa: true },
        { id: 2, titulo: 'Noticia 2', contenido: 'Contenido de la noticia 2...', activa: true },
        { id: 3, titulo: 'Noticia 3', contenido: 'Contenido de la noticia 3...', activa: false },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Cargando noticias...</div>;
  }

  return (
    <div className="news-management">
      <h2>Gestión de Noticias</h2>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h3>{item.titulo}</h3>
            <p>{item.contenido}</p>
            <div className="news-actions">
              <button className="btn btn-sm btn-primary">Editar</button>
              <button className="btn btn-sm btn-danger">
                {item.activa ? 'Desactivar' : 'Activar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsManagement;