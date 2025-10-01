import React, { useState, useEffect } from 'react';
import { getActiveNews } from '../services/newsService';
import NewsCard from './NewsCard';
import './NewsList.css';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getActiveNews();
        setNews(response.data);
      } catch (error) {
        console.error('Error al cargar noticias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="news-loading">Cargando noticias...</div>;
  }

  if (news.length === 0) {
    return <div className="news-empty">No hay noticias disponibles</div>;
  }

  return (
    <div className="news-section">
      <h2 className="section-title">Noticias</h2>
      <div className="news-container">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;