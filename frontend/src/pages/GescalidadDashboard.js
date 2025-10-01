import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GescalidadMenu from '../components/GescalidadMenu';
import ComplaintManagement from '../components/ComplaintManagement';
import ReportManagement from '../components/ReportManagement';
import './GescalidadDashboard.css';

const GescalidadDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('complaints');

  useEffect(() => {
    if (!loading && (!user || user.rol !== 'gescalidad')) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!user || user.rol !== 'gescalidad') {
    return null;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'complaints':
        return <ComplaintManagement />;
      case 'reports':
        return <ReportManagement role="gescalidad" />;
      default:
        return <ComplaintManagement />;
    }
  };

  return (
    <div className="gescalidad-dashboard">
      <div className="container">
        <h1 className="dashboard-title">Panel de Gestión de Calidad</h1>
        <div className="dashboard-content">
          <div className="sidebar">
            <GescalidadMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="main-content">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GescalidadDashboard;