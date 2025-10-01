const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const userController = require('../controllers/userController');

// Rutas protegidas
router.get('/', authenticateToken, authorizeRoles('admin'), userController.getAllUsers);
router.get('/:id', authenticateToken, userController.getUserById);
router.post('/', authenticateToken, authorizeRoles('admin'), userController.createUser);
router.put('/:id', authenticateToken, authorizeRoles('admin'), userController.updateUser);
router.put('/:id/contrasena', authenticateToken, userController.changePassword);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), userController.deleteUser);

module.exports = router;