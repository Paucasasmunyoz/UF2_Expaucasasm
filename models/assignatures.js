const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignatures', {
    ASSIG_CODI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    ASSIG_NOM: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ASSIG_CREDITS: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    ASSIG_DNI_PROFESSOR_RESP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ASSIG_SEMESTRE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASSIG_CURS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASSIG_TIPUS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ASSIG_CARRERA: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assignatures',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ASSIG_CODI" },
        ]
      },
    ]
  });
};
