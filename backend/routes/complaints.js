const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const complaintController = require('../controllers/complaintController');

// Rutas públicas
router.post('/', complaintController.createComplaint);

// Rutas protegidas
router.get('/', authenticateToken, authorizeRoles('admin', 'gescalidad'), complaintController.getAllComplaints);
router.get('/:id', authenticateToken, authorizeRoles('admin', 'gescalidad'), complaintController.getComplaintById);
router.put('/:id/estado', authenticateToken, authorizeRoles('admin', 'gescalidad'), complaintController.updateComplaintStatus);

module.exports = router;