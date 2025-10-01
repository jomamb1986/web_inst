const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const newsController = require('../controllers/newsController');

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Rutas públicas
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);

// Rutas protegidas
router.post('/', authenticateToken, authorizeRoles('admin', 'rrpp'), upload.single('imagen'), newsController.createNews);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'rrpp'), upload.single('imagen'), newsController.updateNews);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'rrpp'), newsController.deleteNews);

module.exports = router;