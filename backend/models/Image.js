/*module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('imagenes_marquesina', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    creado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
  });

  return Image;
};*/
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('imagenes_marquesinas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    creado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
  }, {
    timestamps: false, // Deshabilitar timestamps automáticos
    tableName: 'imagenes_marquesinas' // Especificar explícitamente el nombre de la tabla
  });

  return Image;
};