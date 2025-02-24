require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Asegúrate de que FRONTEND_URL esté configurada correctamente en el archivo .env
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(routes);

app.get('/', (req, res) => {
  res.send('Servidor Backend en funcionamiento');
});

const dbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mi-base-de-datos';
mongoose.connect(dbUri).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error al conectar a MongoDB', err);
});

module.exports = app;
