import React from 'react';
import './AdminMenu.css';

const AdminMenu = ({ activeTab, setActiveTab }) => {
  return (
    <div className="admin-menu">
      <h2>Panel de Administrador</h2>
      <ul className="menu-list">
        <li>
          <button 
            className={`menu-button ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Gestión de Usuarios
          </button>
        </li>
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

export default AdminMenu;