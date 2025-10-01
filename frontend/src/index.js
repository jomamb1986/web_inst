import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext'; // <-- IMPORTAR EL AUTHPROVIDER

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>  {/* <-- ENVOLVER APP CON AUTHPROVIDER */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();