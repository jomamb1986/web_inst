const { News } = require('../models');

const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      where: { activa: true },
      order: [['fecha_publicacion', 'DESC']],
    });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener noticias' });
  }
};

const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const newsItem = await News.findByPk(id);
    
    if (!newsItem) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }
    
    res.json(newsItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la noticia' });
  }
};

const createNews = async (req, res) => {
  try {
    const { titulo, contenido, fecha_expiracion } = req.body;
    const userId = req.user.id;
    
    if (!titulo || !contenido) {
      return res.status(400).json({ message: 'Título y contenido son requeridos' });
    }
    
    let imagePath = null;
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }
    
    const newNews = await News.create({
      titulo,
      contenido,
      imagen: imagePath,
      activa: true,
      fecha_expiracion: fecha_expiracion || null,
      creado_por: userId,
    });
    
    res.status(201).json(newNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la noticia' });
  }
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, contenido, activa, fecha_expiracion } = req.body;
    
    const newsItem = await News.findByPk(id);
    
    if (!newsItem) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }
    
    // Actualizar datos
    if (titulo !== undefined) newsItem.titulo = titulo;
    if (contenido !== undefined) newsItem.contenido = contenido;
    if (activa !== undefined) newsItem.activa = activa;
    if (fecha_expiracion !== undefined) newsItem.fecha_expiracion = fecha_expiracion;
    
    // Actualizar imagen si se proporciona una nueva
    if (req.file) {
      newsItem.imagen = `/uploads/${req.file.filename}`;
    }
    
    newsItem.fecha_actualizacion = new Date();
    
    await newsItem.save();
    
    res.json(newsItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la noticia' });
  }
};

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    
    const newsItem = await News.findByPk(id);
    
    if (!newsItem) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }
    
    // Eliminación lógica
    newsItem.activa = false;
    newsItem.fecha_actualizacion = new Date();
    
    await newsItem.save();
    
    res.json({ message: 'Noticia eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la noticia' });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};