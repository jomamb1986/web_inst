/*import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { login } from '../services/authService';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogout }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Cerrar modal con la tecla Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(formData);
      if (response.data) {
        // Login exitoso, el modal se cerrará automáticamente
        // porque el estado del usuario cambiará
      }
    } catch (err) {
      setError('Credenciales inválidas. Por favor, intente nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {user ? 'Panel de Usuario' : 'Iniciar Sesión'}
          </h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          {user ? (
            <div className="user-info">
              <p><strong>Nombre:</strong> {user.nombres} {user.ap_pat} {user.ap_mat}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Rol:</strong> {user.rol}</p>
              
              <div className="user-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    window.location.href = `/${user.rol}`;
                  }}
                >
                  Ir a mi Panel
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form">
              {error && <div className="alert alert-danger">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;*/
/*
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { login } from '../services/authService';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogout }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(formData);
      if (response.data) {
        // Redirigir al panel correspondiente
        window.location.href = `/${response.data.user.rol}`;
      }
    } catch (err) {
      setError('Credenciales inválidas. Por favor, intente nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {user ? 'Panel de Usuario' : 'Iniciar Sesión'}
          </h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          {user ? (
            <div className="user-info">
              <p><strong>Nombre:</strong> {user.nombres} {user.ap_pat} {user.ap_mat}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Rol:</strong> {user.rol}</p>
              
              <div className="user-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    window.location.href = `/${user.rol}`;
                  }}
                >
                  Ir a mi Panel
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form">
              {error && <div className="alert alert-danger">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;*/
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { login } from '../services/authService';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogout }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(formData);
      if (response.data) {
        // Cerrar el modal y dejar que la aplicación maneje la redirección
        onClose();
      }
    } catch (err) {
      setError('Credenciales inválidas. Por favor, intente nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {user ? 'Panel de Usuario' : 'Iniciar Sesión'}
          </h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          {user ? (
            <div className="user-info">
              <p><strong>Nombre:</strong> {user.nombres} {user.ap_pat} {user.ap_mat}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Rol:</strong> {user.rol}</p>
              
              <div className="user-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    window.location.href = `/${user.rol}`;
                  }}
                >
                  Ir a mi Panel
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form">
              {error && <div className="alert alert-danger">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;