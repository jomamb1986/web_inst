import React from 'react';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="news-card">
      {news.imagen && (
        <div className="news-image">
          <img src={`http://localhost:3000${news.imagen}`} alt={news.titulo} />
        </div>
      )}
      <div className="news-content">
        <h3 className="news-title">{news.titulo}</h3>
        <p className="news-date">{formatDate(news.fecha_publicacion)}</p>
        <p className="news-excerpt">
          {news.contenido.length > 150 
            ? `${news.contenido.substring(0, 150)}...` 
            : news.contenido}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;