const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const { default: Usuario } = require('../pages/usuario/detalhes');

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchA11);
router.get('/usuarios/:id', UsuarioController.SerachAOne);
router.put('/usuarios/:id', UsuarioController.Update);

module.exports = Router;




