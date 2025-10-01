/*const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

// Importar modelos
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Image = require('./Image')(sequelize, Sequelize.DataTypes);
const News = require('./News')(sequelize, Sequelize.DataTypes);
const Complaint = require('./Complaint')(sequelize, Sequelize.DataTypes);
const Report = require('./Report')(sequelize, Sequelize.DataTypes);

// Definir relaciones
User.hasMany(Image, { foreignKey: 'creado_por' });
Image.belongsTo(User, { foreignKey: 'creado_por' });

User.hasMany(News, { foreignKey: 'creado_por' });
News.belongsTo(User, { foreignKey: 'creado_por' });

User.hasMany(Report, { foreignKey: 'generado_por' });
Report.belongsTo(User, { foreignKey: 'generado_por' });

module.exports = {
  sequelize,
  User,
  Image,
  News,
  Complaint,
  Report,
};*/
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Variables de entorno cargadas:');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '[OCULTO]' : '[NO DEFINIDA]');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: false, // Deshabilitar timestamps globalmente
      underscored: true, // Usar underscore en lugar de camelCase
    }
  }
);
// Importar modelos
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Image = require('./Image')(sequelize, Sequelize.DataTypes);
const News = require('./News')(sequelize, Sequelize.DataTypes);
const Complaint = require('./Complaint')(sequelize, Sequelize.DataTypes);
const Report = require('./Report')(sequelize, Sequelize.DataTypes);

// Definir relaciones
User.hasMany(Image, { foreignKey: 'creado_por' });
Image.belongsTo(User, { foreignKey: 'creado_por' });

User.hasMany(News, { foreignKey: 'creado_por' });
News.belongsTo(User, { foreignKey: 'creado_por' });

User.hasMany(Report, { foreignKey: 'generado_por' });
Report.belongsTo(User, { foreignKey: 'generado_por' });

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = {
  sequelize,
  User,
  Image,
  News,
  Complaint,
  Report,
};