import React, { useState, useEffect } from 'react';
import './ComplaintManagement.css';

const ComplaintManagement = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setComplaints([
        { id: 1, nombre: 'Juan Perez', email: 'juan@example.com', celular: '71234567', estado: 'sin atender', fecha_creacion: '2023-01-01' },
        { id: 2, nombre: 'Maria Lopez', email: 'maria@example.com', celular: '72345678', estado: 'en proceso', fecha_creacion: '2023-01-02' },
        { id: 3, nombre: 'Carlos Rodriguez', email: 'carlos@example.com', celular: '73456789', estado: 'atendida', fecha_creacion: '2023-01-03' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const updateStatus = (id, status) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, estado: status } : complaint
    ));
  };

  if (loading) {
    return <div className="loading">Cargando quejas...</div>;
  }

  return (
    <div className="complaint-management">
      <h2>Gestión de Quejas</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.nombre}</td>
                <td>{complaint.email}</td>
                <td>{complaint.celular}</td>
                <td>
                  <span className={`status ${complaint.estado}`}>
                    {complaint.estado}
                  </span>
                </td>
                <td>{complaint.fecha_creacion}</td>
                <td>
                  <select 
                    value={complaint.estado} 
                    onChange={(e) => updateStatus(complaint.id, e.target.value)}
                    className="form-control form-control-sm"
                  >
                    <option value="sin atender">Sin atender</option>
                    <option value="en proceso">En proceso</option>
                    <option value="atendida">Atendida</option>
                  </select>
                  <button className="btn btn-sm btn-info ml-2">Imprimir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintManagement;