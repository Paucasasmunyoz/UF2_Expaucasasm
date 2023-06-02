var DataTypes = require("sequelize").DataTypes;
var _alumnes = require("./alumnes");
var _assignatures = require("./assignatures");
var _assignatures_professor = require("./assignatures_professor");
var _departament = require("./departament");
var _matricula = require("./matricula");
var _professor = require("./professor");

function initModels(sequelize) {
  var alumnes = _alumnes(sequelize, DataTypes);
  var assignatures = _assignatures(sequelize, DataTypes);
  var assignatures_professor = _assignatures_professor(sequelize, DataTypes);
  var departament = _departament(sequelize, DataTypes);
  var matricula = _matricula(sequelize, DataTypes);
  var professor = _professor(sequelize, DataTypes);


  return {
    alumnes,
    assignatures,
    assignatures_professor,
    departament,
    matricula,
    professor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
