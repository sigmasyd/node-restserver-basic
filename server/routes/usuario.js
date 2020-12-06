const express = require('express');
const app = express();

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

module.exports = app;