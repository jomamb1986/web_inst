const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const reportController = require('../controllers/reportController');

// Rutas protegidas
router.get('/', authenticateToken, authorizeRoles('admin', 'rrpp', 'gescalidad'), reportController.getAllReports);
router.post('/quejas', authenticateToken, authorizeRoles('admin', 'gescalidad'), reportController.generateComplaintsReport);
router.post('/noticias', authenticateToken, authorizeRoles('admin', 'rrpp'), reportController.generateNewsReport);
router.post('/usuarios', authenticateToken, authorizeRoles('admin'), reportController.generateUsersReport);

module.exports = router;