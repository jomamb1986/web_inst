import api from './api';

export const getAllReports = async () => {
  try {
    const response = await api.get('/reports');
    return response;
  } catch (error) {
    throw error;
  }
};

export const generateComplaintsReport = async () => {
  try {
    const response = await api.post('/reports/quejas');
    return response;
  } catch (error) {
    throw error;
  }
};

export const generateNewsReport = async () => {
  try {
    const response = await api.post('/reports/noticias');
    return response;
  } catch (error) {
    throw error;
  }
};

export const generateUsersReport = async () => {
  try {
    const response = await api.post('/reports/usuarios');
    return response;
  } catch (error) {
    throw error;
  }
};