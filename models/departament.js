const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departament', {
    DEPT_CODI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DEPT_NOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEPT_UBICACIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEPT_TELEFON: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEPT_PROF_DNI: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'departament',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DEPT_CODI" },
        ]
      },
    ]
  });
};
