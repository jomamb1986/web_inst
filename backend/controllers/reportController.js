const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { User, Complaint, News, Image, Report } = require('../models');

const generateComplaintsReport = async (req, res) => {
  try {
    const complaints = await Complaint.findAll({
      order: [['fecha_creacion', 'DESC']],
    });
    
    const fileName = `reporte_quejas_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, '../uploads/reports', fileName);
    
    // Asegurar que el directorio exista
    const reportsDir = path.dirname(filePath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    
    // Encabezado
    doc.fontSize(20).text('Reporte de Quejas', { align: 'center' });
    doc.fontSize(12).text(`Fecha: ${new Date().toLocaleDateString()}`, { align: 'center' });
    doc.moveDown();
    
    // Tabla de quejas
    complaints.forEach((complaint, index) => {
      doc.fontSize(14).text(`Queja #${index + 1}`);
      doc.fontSize(12).text(`Nombre: ${complaint.nombre}`);
      doc.text(`Email: ${complaint.email}`);
      doc.text(`Celular: ${complaint.celular}`);
      doc.text(`Estado: ${complaint.estado}`);
      doc.text(`Fecha: ${new Date(complaint.fecha_creacion).toLocaleDateString()}`);
      doc.text(`Mensaje: ${complaint.mensaje}`);
      doc.moveDown();
    });
    
    doc.end();
    
    // Guardar registro del reporte en la base de datos
    const newReport = await Report.create({
      nombre: fileName,
      tipo: 'quejas',
      ruta: `/uploads/reports/${fileName}`,
      generado_por: req.user.id,
    });
    
    res.status(201).json({
      message: 'Reporte generado correctamente',
      report: newReport,
      downloadUrl: `/uploads/reports/${fileName}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al generar el reporte' });
  }
};

const generateNewsReport = async (req, res) => {
  try {
    const news = await News.findAll({
      order: [['fecha_publicacion', 'DESC']],
    });
    
    const fileName = `reporte_noticias_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, '../uploads/reports', fileName);
    
    // Asegurar que el directorio exista
    const reportsDir = path.dirname(filePath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    
    // Encabezado
    doc.fontSize(20).text('Reporte de Noticias', { align: 'center' });
    doc.fontSize(12).text(`Fecha: ${new Date().toLocaleDateString()}`, { align: 'center' });
    doc.moveDown();
    
    // Tabla de noticias
    news.forEach((newsItem, index) => {
      doc.fontSize(14).text(`Noticia #${index + 1}`);
      doc.fontSize(12).text(`Título: ${newsItem.titulo}`);
      doc.text(`Estado: ${newsItem.activa ? 'Activa' : 'Inactiva'}`);
      doc.text(`Fecha: ${new Date(newsItem.fecha_publicacion).toLocaleDateString()}`);
      doc.text(`Contenido: ${newsItem.contenido.substring(0, 100)}...`);
      doc.moveDown();
    });
    
    doc.end();
    
    // Guardar registro del reporte en la base de datos
    const newReport = await Report.create({
      nombre: fileName,
      tipo: 'noticias',
      ruta: `/uploads/reports/${fileName}`,
      generado_por: req.user.id,
    });
    
    res.status(201).json({
      message: 'Reporte generado correctamente',
      report: newReport,
      downloadUrl: `/uploads/reports/${fileName}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al generar el reporte' });
  }
};

const generateUsersReport = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'nombres', 'ap_pat', 'ap_mat', 'email', 'rol', 'activo', 'fecha_creacion'],
      order: [['fecha_creacion', 'DESC']],
    });
    
    const fileName = `reporte_usuarios_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, '../uploads/reports', fileName);
    
    // Asegurar que el directorio exista
    const reportsDir = path.dirname(filePath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    
    // Encabezado
    doc.fontSize(20).text('Reporte de Usuarios', { align: 'center' });
    doc.fontSize(12).text(`Fecha: ${new Date().toLocaleDateString()}`, { align: 'center' });
    doc.moveDown();
    
    // Tabla de usuarios
    users.forEach((user, index) => {
      doc.fontSize(14).text(`Usuario #${index + 1}`);
      doc.fontSize(12).text(`Nombre: ${user.nombres} ${user.ap_pat} ${user.ap_mat}`);
      doc.text(`Email: ${user.email}`);
      doc.text(`Rol: ${user.rol}`);
      doc.text(`Estado: ${user.activo ? 'Activo' : 'Inactivo'}`);
      doc.text(`Fecha: ${new Date(user.fecha_creacion).toLocaleDateString()}`);
      doc.moveDown();
    });
    
    doc.end();
    
    // Guardar registro del reporte en la base de datos
    const newReport = await Report.create({
      nombre: fileName,
      tipo: 'usuarios',
      ruta: `/uploads/reports/${fileName}`,
      generado_por: req.user.id,
    });
    
    res.status(201).json({
      message: 'Reporte generado correctamente',
      report: newReport,
      downloadUrl: `/uploads/reports/${fileName}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al generar el reporte' });
  }
};

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll({
      include: [{ model: User, attributes: ['nombres', 'ap_pat'] }],
      order: [['fecha_generacion', 'DESC']],
    });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener reportes' });
  }
};

module.exports = {
  generateComplaintsReport,
  generateNewsReport,
  generateUsersReport,
  getAllReports,
};