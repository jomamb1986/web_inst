/*module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('noticias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(255),
    },
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    fecha_publicacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_expiracion: {
      type: DataTypes.DATE,
    },
    creado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return News;
};*/
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('noticias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(255),
    },
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    fecha_publicacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_expiracion: {
      type: DataTypes.DATE,
    },
    creado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false, // Deshabilitar timestamps automáticos
    tableName: 'noticias' // Especificar explícitamente el nombre de la tabla
  });

  return News;
};