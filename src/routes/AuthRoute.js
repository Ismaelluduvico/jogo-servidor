//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController.js');

//Rota de login
router.post('/login', controller.login);

module.exports = router;