/*module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ap_pat: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ap_mat: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['admin', 'rrpp', 'gescalidad']],
      },
    },
    activo: {
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
  });

  return User;
};*/
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ap_pat: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ap_mat: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['admin', 'rrpp', 'gescalidad']],
      },
    },
    activo: {
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
  }, {
    timestamps: false, // Deshabilitar timestamps automáticos
    tableName: 'usuarios' // Especificar explícitamente el nombre de la tabla
  });

  return User;
};