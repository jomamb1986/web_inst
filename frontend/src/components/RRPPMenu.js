import React from 'react';
import './RRPPMenu.css';

const RRPPMenu = ({ activeTab, setActiveTab }) => {
  return (
    <div className="rrpp-menu">
      <h2>Panel de RRPP</h2>
      <ul className="menu-list">
        <li>
          <button 
            className={`menu-button ${activeTab === 'images' ? 'active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            Gestión de Imágenes
          </button>
        </li>
        <li>
          <button 
            className={`menu-button ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Gestión de Noticias
          </button>
        </li>
        <li>
          <button 
            className={`menu-button ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Generar Reportes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RRPPMenu;