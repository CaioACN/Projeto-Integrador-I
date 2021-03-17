const express = require('express');

const router = express.Router();

const UsuarioController = require('./controllers/usuarioController');

const http = require('http');

const status = require('http-status');

const sequelize = require('./src/');

router.post('/usuarios', UsuarioController.Insert);

module.exports = router;