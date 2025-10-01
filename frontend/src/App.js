/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Transparencia from './pages/Transparencia';
import LoginButton from './components/LoginButton';
import AdminDashboard from './pages/AdminDashboard';
import RRPPDashboard from './pages/RRPPDashboard';
import GescalidadDashboard from './pages/GescalidadDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/transparencia" element={<Transparencia />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/rrpp" element={<RRPPDashboard />} />
              <Route path="/gescalidad" element={<GescalidadDashboard />} />
            </Routes>
          </main>
          <LoginButton />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;*/
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Transparencia from './pages/Transparencia';
import LoginButton from './components/LoginButton';
import AdminDashboard from './pages/AdminDashboard';
import RRPPDashboard from './pages/RRPPDashboard';
import GescalidadDashboard from './pages/GescalidadDashboard';
import './App.css';

function App() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      // Redirigir al panel correspondiente si el usuario está en la página de inicio
      if (window.location.pathname === '/') {
        navigate(`/${user.rol}`);
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/rrpp" element={<RRPPDashboard />} />
            <Route path="/gescalidad" element={<GescalidadDashboard />} />
          </Routes>
        </main>
        <LoginButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;