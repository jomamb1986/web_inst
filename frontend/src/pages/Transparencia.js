import React, { useState, useEffect } from 'react';
import { getActiveNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';
import './Transparencia.css';

const Transparencia = () => {
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

  return (
    <div className="transparencia-page">
      <div className="container">
        <h1 className="page-title">Transparencia</h1>
        
        <div className="content-section">
          <h2>Compromiso con la Transparencia</h2>
          <p>
            En la Caja Nacional de Salud - Oruro, estamos comprometidos con la transparencia en todas 
            nuestras acciones. Creemos que la rendición de cuentas es fundamental para construir 
            confianza con nuestros afiliados y la comunidad en general.
          </p>
          <p>
            A través de esta sección, ponemos a disposición del público información relevante sobre 
            nuestras actividades, gestión financiera y proyectos en desarrollo.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Informes de Gestión</h2>
          <p>
            Ponemos a su disposición nuestros informes de gestión periódicos, donde detallamos nuestras 
            actividades, logros y desafíos. Estos documentos reflejan nuestro compromiso con la 
            transparencia y la rendición de cuentas.
          </p>
          <div className="documents-list">
            <div className="document-item">
              <h3>Informe Anual 2022</h3>
              <p>Resumen de actividades y resultados del año 2022</p>
              <button className="btn btn-primary">Descargar PDF</button>
            </div>
            <div className="document-item">
              <h3>Informe Trimestral Ene-Mar 2023</h3>
              <p>Resultados del primer trimestre del año 2023</p>
              <button className="btn btn-primary">Descargar PDF</button>
            </div>
            <div className="document-item">
              <h3>Balance Financiero 2022</h3>
              <p>Informe financiero auditado correspondiente al año 2022</p>
              <button className="btn btn-primary">Descargar PDF</button>
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <h2>Proyectos en Desarrollo</h2>
          <p>
            Mantenemos informada a la comunidad sobre los proyectos que estamos desarrollando para 
            mejorar nuestros servicios y ampliar nuestra cobertura.
          </p>
          <div className="projects-list">
            <div className="project-item">
              <h3>Ampliación del Servicio de Emergencias</h3>
              <p>Ampliación y modernización de nuestras instalaciones de emergencia para brindar una atención más rápida y eficiente.</p>
              <p><strong>Estado:</strong> En ejecución</p>
              <p><strong>Avance:</strong> 65%</p>
            </div>
            <div className="project-item">
              <h3>Implementación de Historia Clínica Digital</h3>
              <p>Modernización de nuestro sistema de historias clínicas para mejorar la atención y facilitar el acceso a la información.</p>
              <p><strong>Estado:</strong> En planificación</p>
              <p><strong>Avance:</strong> 15%</p>
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <h2>Últimas Comunicaciones</h2>
          {loading ? (
            <div className="news-loading">Cargando comunicaciones...</div>
          ) : news.length === 0 ? (
            <div className="news-empty">No hay comunicaciones disponibles</div>
          ) : (
            <div className="news-container">
              {news.slice(0, 3).map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transparencia;