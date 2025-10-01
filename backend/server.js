const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Importar rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const imageRoutes = require('./routes/images');
const newsRoutes = require('./routes/news');
const complaintRoutes = require('./routes/complaints');
const reportRoutes = require('./routes/reports');

// Importar modelos
const { sequelize } = require('./models');

// Configuración
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3001', // Puerto del frontend
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/reports', reportRoutes);

// Sincronizar base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});