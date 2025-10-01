import React, { useState, useEffect } from 'react';
import './ReportManagement.css';

const ReportManagement = ({ role }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setReports([
        { id: 1, nombre: 'Reporte de Usuarios', tipo: 'usuarios', fecha_generacion: '2023-01-01' },
        { id: 2, nombre: 'Reporte de Noticias', tipo: 'noticias', fecha_generacion: '2023-01-02' },
        { id: 3, nombre: 'Reporte de Quejas', tipo: 'quejas', fecha_generacion: '2023-01-03' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const generateReport = (type) => {
    alert(`Generando reporte de tipo: ${type}`);
  };

  if (loading) {
    return <div className="loading">Cargando reportes...</div>;
  }

  return (
    <div className="report-management">
      <h2>Gestión de Reportes</h2>
      
      <div className="report-actions">
        <h3>Generar Nuevo Reporte</h3>
        <div className="button-group">
          {role === 'admin' && (
            <button 
              className="btn btn-primary" 
              onClick={() => generateReport('usuarios')}
            >
              Reporte de Usuarios
            </button>
          )}
          {(role === 'admin' || role === 'rrpp') && (
            <button 
              className="btn btn-primary" 
              onClick={() => generateReport('noticias')}
            >
              Reporte de Noticias
            </button>
          )}
          {(role === 'admin' || role === 'gescalidad') && (
            <button 
              className="btn btn-primary" 
              onClick={() => generateReport('quejas')}
            >
              Reporte de Quejas
            </button>
          )}
        </div>
      </div>
      
      <div className="report-list">
        <h3>Reportes Generados</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.nombre}</td>
                  <td>{report.tipo}</td>
                  <td>{report.fecha_generacion}</td>
                  <td>
                    <button className="btn btn-sm btn-info">
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportManagement;