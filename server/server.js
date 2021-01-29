require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// parse application/x-www-form-urlencoded--> procesar peticiones form
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json--> procesar peticiones json
app.use(bodyParser.json());

//habilitar public
app.use(express.static(path.resolve(__dirname, '../public')));

// configuración global de rutas
app.use(require('./routes/index'));

//mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: true,
        dropDups: true
    })
    .then((res) => {
        console.log('Base de datos ONLINE');
    })
    .catch((err) => {
        throw err;
    });

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Escuchando el puerto: ${port}`);
})