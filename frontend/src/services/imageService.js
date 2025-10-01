import api from './api';

export const getActiveImages = async () => {
  try {
    const response = await api.get('/images');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getImageById = async (id) => {
  try {
    const response = await api.get(`/images/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (formData) => {
  try {
    const response = await api.post('/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateImageStatus = async (id, active) => {
  try {
    const response = await api.put(`/images/${id}/estado`, { activa: active });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await api.delete(`/images/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};