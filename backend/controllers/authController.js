const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (req, res) => {
  try {
    console.log('=== INICIO DE LOGIN ===');
    const { email, password } = req.body;
    console.log('Email recibido:', email);
    console.log('Password recibido:', password ? '[OCULTO]' : '[NO PROPORCIONADO]');
    
    if (!email || !password) {
      console.log('ERROR: Faltan email o password');
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    
    console.log('Buscando usuario en la base de datos...');
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      console.log('ERROR: Usuario no encontrado:', email);
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    
    console.log('Usuario encontrado:', user.email);
    console.log('Contraseña almacenada:', user.password);
    console.log('Verificando contraseña...');
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Contraseña válida:', isPasswordValid);
    
    if (!isPasswordValid) {
      console.log('ERROR: Contraseña inválida');
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    
    console.log('Contraseña válida, generando token...');
    const token = jwt.sign(
      { id: user.id, email: user.email, rol: user.rol },
      process.env.JWT_SECRET || 'secreto_por_defecto',
      { expiresIn: '24h' }
    );
    
    console.log('Login exitoso para:', user.email);
    console.log('Token generado:', token.substring(0, 20) + '...');
    
    res.json({
      token,
      user: {
        id: user.id,
        nombres: user.nombres,
        ap_pat: user.ap_pat,
        ap_mat: user.ap_mat,
        email: user.email,
        rol: user.rol,
      },
    });
  } catch (error) {
    console.error('ERROR EN LOGIN:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  login,
};