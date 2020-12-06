require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use( require('./routes/usuario') );

// parse application/x-www-form-urlencoded--> procesar peticiones form
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json--> procesar peticiones json
app.use(bodyParser.json());

mongoose.connect(`mongodb://localhost:27017/cafe`,(err,res)=>{
  if(err) throw err;
  console.log('Base de datos ONLINE');
});

const port = process.env.PORT;
app.listen(port,()=>{
  console.log(`Escuchando el puerto: ${port}`);
})