import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/logo192.png" alt="Caja Nacional de Salud - Oruro" />
              <span>Caja Nacional de Salud - Oruro</span>
            </Link>
          </div>
          
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
              <li><Link to="/nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link></li>
              <li><Link to="/transparencia" onClick={() => setMobileMenuOpen(false)}>Transparencia</Link></li>
              {user && (
                <li><Link to={`/${user.rol}`} onClick={() => setMobileMenuOpen(false)}>Panel</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;