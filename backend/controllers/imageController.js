const { Image } = require('../models');
const path = require('path');
const fs = require('fs');

const getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll({
      where: { activa: true },
      order: [['fecha_creacion', 'DESC']],
    });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener imágenes' });
  }
};

const getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByPk(id);
    
    if (!image) {
      return res.status(404).json({ message: 'Imagen no encontrada' });
    }
    
    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la imagen' });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha subido ninguna imagen' });
    }
    
    const { filename, path: filePath } = req.file;
    const userId = req.user.id;
    
    const newImage = await Image.create({
      nombre: filename,
      ruta: `/uploads/${filename}`,
      activa: true,
      creado_por: userId,
    });
    
    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
};

const updateImageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { activa } = req.body;
    
    if (typeof activa !== 'boolean') {
      return res.status(400).json({ message: 'Estado inválido' });
    }
    
    const image = await Image.findByPk(id);
    
    if (!image) {
      return res.status(404).json({ message: 'Imagen no encontrada' });
    }
    
    image.activa = activa;
    image.fecha_actualizacion = new Date();
    
    await image.save();
    
    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el estado de la imagen' });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    
    const image = await Image.findByPk(id);
    
    if (!image) {
      return res.status(404).json({ message: 'Imagen no encontrada' });
    }
    
    // Eliminación lógica
    image.activa = false;
    image.fecha_actualizacion = new Date();
    
    await image.save();
    
    res.json({ message: 'Imagen eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la imagen' });
  }
};

module.exports = {
  getAllImages,
  getImageById,
  uploadImage,
  updateImageStatus,
  deleteImage,
};