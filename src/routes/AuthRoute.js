//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController.js');
const checkToken = require('../middlewares/checkToken.js');
const addUserId = require('../middlewares/addUserId.js');

//Rota de login
router.post('/login', controller.login);
router.put('/update', checkToken, addUserId, controller.updateUser);

module.exports = router;