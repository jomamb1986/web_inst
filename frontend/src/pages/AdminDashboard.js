import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminMenu from '../components/AdminMenu';
import UserManagement from '../components/UserManagement';
import ImageManagement from '../components/ImageManagement';
import NewsManagement from '../components/NewsManagement';
import ComplaintManagement from '../components/ComplaintManagement';
import ReportManagement from '../components/ReportManagement';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (!loading && (!user || user.rol !== 'admin')) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!user || user.rol !== 'admin') {
    return null;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'images':
        return <ImageManagement />;
      case 'news':
        return <NewsManagement />;
      case 'complaints':
        return <ComplaintManagement />;
      case 'reports':
        return <ReportManagement role="admin" />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1 className="dashboard-title">Panel de Administrador</h1>
        <div className="dashboard-content">
          <div className="sidebar">
            <AdminMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="main-content">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;