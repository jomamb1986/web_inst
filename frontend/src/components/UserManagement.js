import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setUsers([
        { id: 1, nombres: 'Juan', ap_pat: 'Perez', ap_mat: 'Gomez', email: 'juan@example.com', rol: 'admin', activo: true },
        { id: 2, nombres: 'Maria', ap_pat: 'Lopez', ap_mat: 'Sanchez', email: 'maria@example.com', rol: 'rrpp', activo: true },
        { id: 3, nombres: 'Carlos', ap_pat: 'Rodriguez', ap_mat: 'Fernandez', email: 'carlos@example.com', rol: 'gescalidad', activo: true },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Cargando usuarios...</div>;
  }

  return (
    <div className="user-management">
      <h2>Gestión de Usuarios</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombres}</td>
                <td>{user.ap_pat}</td>
                <td>{user.ap_mat}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>{user.activo ? 'Activo' : 'Inactivo'}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Editar</button>
                  <button className="btn btn-sm btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;