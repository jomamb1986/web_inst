const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const imageController = require('../controllers/imageController');

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
router.get('/', imageController.getAllImages);
router.get('/:id', imageController.getImageById);

// Rutas protegidas
router.post('/', authenticateToken, authorizeRoles('admin', 'rrpp'), upload.single('imagen'), imageController.uploadImage);
router.put('/:id/estado', authenticateToken, authorizeRoles('admin', 'rrpp'), imageController.updateImageStatus);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'rrpp'), imageController.deleteImage);

module.exports = router;