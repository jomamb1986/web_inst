/*module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('quejas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(20),
      defaultValue: 'sin atender',
      validate: {
        isIn: [['atendida', 'en proceso', 'sin atender']],
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return Complaint;
};*/
module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('quejas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(20),
      defaultValue: 'sin atender',
      validate: {
        isIn: [['atendida', 'en proceso', 'sin atender']],
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false, // Deshabilitar timestamps automáticos
    tableName: 'quejas' // Especificar explícitamente el nombre de la tabla
  });

  return Complaint;
};