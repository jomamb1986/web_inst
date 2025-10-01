import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';
import './LoginButton.css';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <button 
        className="login-button"
        onClick={() => setShowModal(true)}
      >
        {user ? 'Panel' : 'Login'}
      </button>
      
      {showModal && (
        <LoginModal 
          onClose={() => setShowModal(false)} 
          onLogout={handleLogout}
        />
      )}
    </>
  );
};

export default LoginButton;