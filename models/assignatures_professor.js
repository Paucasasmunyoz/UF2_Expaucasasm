const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignatures_professor', {
    ASSIGPROF_ASSIG_CODI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    ASSIGPROF_PROF_DNI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'assignatures_professor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ASSIGPROF_ASSIG_CODI" },
          { name: "ASSIGPROF_PROF_DNI" },
        ]
      },
    ]
  });
};
