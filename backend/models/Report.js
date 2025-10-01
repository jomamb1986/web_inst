/*module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('reportes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fecha_generacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    generado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
  });

  return Report;
};*/
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('reportes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fecha_generacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    generado_por: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
  }, {
    timestamps: false, // Deshabilitar timestamps automáticos
    tableName: 'reportes' // Especificar explícitamente el nombre de la tabla
  });

  return Report;
};