const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula', {
    MATR_ALUM_DNI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    MATR_ASSIG_CODI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    MATR_CONVOCATORIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MATR_NOTA: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matricula',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MATR_ALUM_DNI" },
          { name: "MATR_ASSIG_CODI" },
          { name: "MATR_CONVOCATORIA" },
        ]
      },
    ]
  });
};
