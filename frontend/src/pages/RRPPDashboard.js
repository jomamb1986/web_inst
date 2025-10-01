import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import RRPPMenu from '../components/RRPPMenu';
import ImageManagement from '../components/ImageManagement';
import NewsManagement from '../components/NewsManagement';
import ReportManagement from '../components/ReportManagement';
import './RRPPDashboard.css';

const RRPPDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('images');

  useEffect(() => {
    if (!loading && (!user || user.rol !== 'rrpp')) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!user || user.rol !== 'rrpp') {
    return null;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'images':
        return <ImageManagement />;
      case 'news':
        return <NewsManagement />;
      case 'reports':
        return <ReportManagement role="rrpp" />;
      default:
        return <ImageManagement />;
    }
  };

  return (
    <div className="rrpp-dashboard">
      <div className="container">
        <h1 className="dashboard-title">Panel de RRPP</h1>
        <div className="dashboard-content">
          <div className="sidebar">
            <RRPPMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="main-content">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRPPDashboard;