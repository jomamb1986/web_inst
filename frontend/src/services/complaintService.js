import api from './api';
export const createComplaint = async (complaintData) => {
  try {
    const response = await api.post('/complaints', complaintData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllComplaints = async () => {
  try {
    const response = await api.get('/complaints');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getComplaintById = async (id) => {
  try {
    const response = await api.get(`/complaints/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateComplaintStatus = async (id, status) => {
  try {
    const response = await api.put(`/complaints/${id}/estado`, { estado: status });
    return response;
  } catch (error) {
    throw error;
  }
};