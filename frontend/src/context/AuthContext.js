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
          // Asegurarse de que response.data existe
          if (response && response.data) {
            setUser(response.data);
          } else {
            throw new Error('Respuesta inválida del servidor');
          }
        })
        .catch(err => {
          console.error('Error al obtener usuario:', err);
          localStorage.removeItem('token');
          setError(err.message || 'Error al verificar la sesión');
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
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        setError(null);
        return { success: true, data };
      } else {
        throw new Error('No se recibió un token válido');
      }
    } catch (error) {
      const errorMessage = error.message || 'Error al iniciar sesión';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setError(null);
  };

  // Valor del contexto con todas las funciones y estados
  const contextValue = {
    user,
    login,
    logout,
    loading,
    error
  };

  return (
    <AuthContext.Provider value={contextValue}>
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