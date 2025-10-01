const { Complaint } = require('../models');

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.findAll({
      order: [['fecha_creacion', 'DESC']],
    });
    res.json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener quejas' });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const { id } = req.params;
    const complaint = await Complaint.findByPk(id);
    
    if (!complaint) {
      return res.status(404).json({ message: 'Queja no encontrada' });
    }
    
    res.json(complaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la queja' });
  }
};

const createComplaint = async (req, res) => {
  try {
	 console.log('Datos de queja recibidos:', req.body);
    const { nombre, email, celular, mensaje } = req.body;
    
    if (!nombre || !email || !celular || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    
    const newComplaint = await Complaint.create({
      nombre,
      email,
      celular,
      mensaje,
      estado: 'sin atender',
    });
    
	 console.log('Queja creada con ID:', newComplaint.id);
	
     res.status(201).json({
      id: newComplaint.id,
      nombre: newComplaint.nombre,
      email: newComplaint.email,
      celular: newComplaint.celular,
      mensaje: newComplaint.mensaje,
      estado: newComplaint.estado,
      fecha_creacion: newComplaint.fecha_creacion,
    });
//	res.status(201).json(newComplaint);
  } catch (error) {
    console.error('Error al crear la queja:', error);
    res.status(500).json({ message: 'Error al crear la queja' });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    
    if (!estado || !['atendida', 'en proceso', 'sin atender'].includes(estado)) {
      return res.status(400).json({ message: 'Estado inválido' });
    }
    
    const complaint = await Complaint.findByPk(id);
    
    if (!complaint) {
      return res.status(404).json({ message: 'Queja no encontrada' });
    }
    
    complaint.estado = estado;
    complaint.fecha_actualizacion = new Date();
    
    await complaint.save();
    
    res.json(complaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el estado de la queja' });
  }
};

module.exports = {
  getAllComplaints,
  getComplaintById,
  createComplaint,
  updateComplaintStatus,
};