const express=require('express');
const mysql=require('mysql2');
const app=express();
const cors = require("cors");


app.use(cors(), express.json());

port=4080;

app.listen(port, () => {
  console.log(`Port::${port}`);
});

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'admin123',
  database:'universitat'
})

connection.connect((err)=>{
  if(err)throw err;
  console.log("Connectat a MySQL")
})


const SequelizeAuto = require('sequelize-auto');
const Sequelize=require('sequelize');
const {initModels} = require("./models/init-models");



//CREAR ORM AUTOMÀTIC  (només ho utlitzo per crear els models)
// const auto = new SequelizeAuto('universitat', 'root',
//   'admin123', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });
//
//
// auto.run((err) => {
//   if (err) throw err;
//   console.log(auto.tables);
//   console.log(auto.foreignKeys);
//   console.log(auto.getForeignKeys());
//   console.log(auto.schema);
//   console.log(auto.options);
// });


//CONNEXIO POSTERIOR (connexio un cop els models ja estan creats)
const auto = new Sequelize('universitat', 'root',
  'admin123', {
    host: 'localhost',
    dialect: 'mysql'
  });

const models = initModels(auto);


//CONNECTORS------------------------------------------------------------

//SELECT
app.get('/ex1',(req, res)=>{
  connection.query('SELECT prof_dni, prof_nom, prof_cognom_1, prof_cognom_2, prof_telefon\n' +
    'FROM professor, departament\n' +
    'WHERE prof_dept_codi=dept_codi\n' +
    'AND prof_categoria=\'Associat\'\n' +
    'AND dept_nom!=\'INFORMATICA I MATEMATICA APLICADA\'', (err, rows)=>{
    if(err) throw err;
    console.log("info: ", rows);
    connection.end();
    res.json(rows);
  })
})


app.get('/ex3', async (req, res)=>{
  const matr_alum_dnii=await models.matricula.findOne({attributes:
      ['MATR_ALUM_DNI'], where:{MATR_NOTA:10}}).then((h)=>
  {
    return h.MATR_ALUM_DNI;
  })
  const p= await models.alumnes.findAll({where:
      {ALUMN_DNI: matr_alum_dnii}});
  res.send(p)
  console.log(p)
})

app.post('/ex4', async (req, res)=>{
  const alterTableQuery = 'ALTER TABLE professor DROP COLUMN prof_casat';


  connection.query(alterTableQuery, function(error, results, fields) {
    if (error) {
      console.error('Ja esta esborrat');
    }

    console.log('FET');
  });
});
