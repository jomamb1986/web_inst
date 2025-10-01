import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Caja Nacional de Salud - Oruro</h3>
            <p>Brindando servicios de salud de calidad a todos nuestros afiliados.</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/transparencia">Transparencia</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Dirección: Calle Bolívar #123, Oruro, Bolivia</p>
            <p>Teléfono: (591) 2-5251234</p>
            <p>Email: info@cnsoruro.bo</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Caja Nacional de Salud - Oruro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;