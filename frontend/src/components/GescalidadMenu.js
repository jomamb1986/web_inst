import React from 'react';
import './GescalidadMenu.css';

const GescalidadMenu = ({ activeTab, setActiveTab }) => {
  return (
    <div className="gescalidad-menu">
      <h2>Panel de Gestión de Calidad</h2>
      <ul className="menu-list">
        <li>
          <button 
            className={`menu-button ${activeTab === 'complaints' ? 'active' : ''}`}
            onClick={() => setActiveTab('complaints')}
          >
            Gestión de Quejas
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

export default GescalidadMenu;