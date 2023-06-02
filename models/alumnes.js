const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumnes', {
    ALUMN_DNI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    ALUMN_NOM: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ALUMN_COGNOM_1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ALUMN_COGNOM_2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ALUMN_ADRECA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ALUMN_CODI_POSTAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ALUMN_POBLACIO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ALUMN_COMARCA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ALUMN_TELEFON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ALUMN_DATA_NAIXEMENT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ALUMN_CASAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ALUMN_E_MAIL: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alumnes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ALUMN_DNI" },
        ]
      },
    ]
  });
};
