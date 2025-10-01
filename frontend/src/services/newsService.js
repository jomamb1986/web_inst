import api from './api';

export const getActiveNews = async () => {
  try {
    const response = await api.get('/news');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createNews = async (formData) => {
  try {
    const response = await api.post('/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateNews = async (id, formData) => {
  try {
    const response = await api.put(`/news/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await api.delete(`/news/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};