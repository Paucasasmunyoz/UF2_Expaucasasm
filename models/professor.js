const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professor', {
    PROF_DNI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    PROF_NOM: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROF_COGNOM_1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROF_COGNOM_2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROF_ADRECA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PROF_CODI_POSTAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROF_POBLACIO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PROF_COMARCA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PROF_TELEFON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PROF_DATA_NAIXEMENT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PROF_CASAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PROF_E_MAIL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PROF_CATEGORIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PROF_SOU: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    PROF_DEPT_CODI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROF_DATA_ENTRADA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'professor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROF_DNI" },
        ]
      },
    ]
  });
};
