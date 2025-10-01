/*import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCurrentUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verificar token y obtener usuario
      getCurrentUser()
        .then(response => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem('token');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

/*  const login = async (userData) => {
    // La función login se maneja en authService
    // Este contexto solo actualiza el estado del usuario
  };*/
/*  const login = async (userData) => {
  try {
    const response = await loginService(userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    }
    return response;
  } catch (error) {
    throw error;
  }
};

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);*/
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCurrentUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verificar token y obtener usuario
      getCurrentUser()
        .then(response => {
          setUser(response.data);
        })
        .catch(err => {
          console.error('Error al obtener usuario:', err);
          localStorage.removeItem('token');
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (userData) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        setError(null);
      }
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};