const bcrypt = require('bcrypt');
const { User } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'nombres', 'ap_pat', 'ap_mat', 'email', 'rol', 'activo', 'fecha_creacion'],
      order: [['fecha_creacion', 'DESC']],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ['id', 'nombres', 'ap_pat', 'ap_mat', 'email', 'rol', 'activo', 'fecha_creacion'],
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

const createUser = async (req, res) => {
  try {
    const { nombres, ap_pat, ap_mat, email, password, rol } = req.body;
    
    if (!nombres || !ap_pat || !email || !password || !rol) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    
    if (!['admin', 'rrpp', 'gescalidad'].includes(rol)) {
      return res.status(400).json({ message: 'Rol inválido' });
    }
    
    // Verificar si el email ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }
    
    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newUser = await User.create({
      nombres,
      ap_pat,
      ap_mat,
      email,
      password: hashedPassword,
      rol,
      activo: true,
    });
    
    // Devolver usuario sin contraseña
    const userResponse = {
      id: newUser.id,
      nombres: newUser.nombres,
      ap_pat: newUser.ap_pat,
      ap_mat: newUser.ap_mat,
      email: newUser.email,
      rol: newUser.rol,
      activo: newUser.activo,
      fecha_creacion: newUser.fecha_creacion,
    };
    
    res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, ap_pat, ap_mat, email, rol, activo } = req.body;
    
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    // Actualizar datos
    if (nombres !== undefined) user.nombres = nombres;
    if (ap_pat !== undefined) user.ap_pat = ap_pat;
    if (ap_mat !== undefined) user.ap_mat = ap_mat;
    if (email !== undefined) {
      // Verificar si el email ya existe en otro usuario
      if (email !== user.email) {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ message: 'El email ya está registrado' });
        }
        user.email = email;
      }
    }
    if (rol !== undefined && ['admin', 'rrpp', 'gescalidad'].includes(rol)) {
      user.rol = rol;
    }
    if (activo !== undefined) user.activo = activo;
    
    user.fecha_actualizacion = new Date();
    
    await user.save();
    
    // Devolver usuario sin contraseña
    const userResponse = {
      id: user.id,
      nombres: user.nombres,
      ap_pat: user.ap_pat,
      ap_mat: user.ap_mat,
      email: user.email,
      rol: user.rol,
      activo: user.activo,
      fecha_creacion: user.fecha_creacion,
      fecha_actualizacion: user.fecha_actualizacion,
    };
    
    res.json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Contraseña actual y nueva son requeridas' });
    }
    
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    // Verificar contraseña actual
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña actual incorrecta' });
    }
    
    // Hashear nueva contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    user.password = hashedPassword;
    user.fecha_actualizacion = new Date();
    
    await user.save();
    
    res.json({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la contraseña' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    // Eliminación lógica
    user.activo = false;
    user.fecha_actualizacion = new Date();
    
    await user.save();
    
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};