const express = require('express');
const router = express.Router('../pages/usua');
const UsuarioController = require('../controllers/usuarioController');
const { default: Usuario } = require('../pages/usuario/detalhes');

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SerachAOne);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

module.exports = Router;




