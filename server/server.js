require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


// parse application/x-www-form-urlencoded--> procesar peticiones form
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json--> procesar peticiones json
app.use(bodyParser.json());

app.get('/usuario', function (req, res) {
  res.json('get usuarios');
});

// crear registro
app.post('/usuario', function (req, res) {
  let body = req.body;
  if(body.nombre===undefined){
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });
  }else{
    res.json({
      persona:body
    });
  }
});

// actualizar registro
app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', function (req, res) {
  res.json('delete usuarios');
});

mongoose.connect(`mongodb://localhost:27017/cafe`,(err,res)=>{
  if(err) throw err;
  console.log('Base de datos ONLINE');
});

const port = process.env.PORT;
app.listen(port,()=>{
  console.log(`Escuchando el puerto: ${port}`);
})