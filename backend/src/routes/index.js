// src/routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth'); // Importa las rutas de autenticación

router.use('/api', authRoutes); // Usa las rutas de autenticación bajo el prefijo /api

module.exports = router;
