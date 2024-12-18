//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlacarController');
const addUserId = require('../middlewares/addUserId');

//Rota de adicionar um placar
router.post('/', addUserId, controller.addResultado);

//Rota de mostrar todos os placares 
router.get('/', controller.getResultados);

//Rota de mostra placar por dificuldade
router.get('/:dificuldade', controller.resultadoPorDificuldade);

//Rota de mostra placar por usuario
router.get('/reslutado/:userId', controller.resultadoPorUsuario);

//Rota de atualizar um placar
router.put('/:id', controller.updateResultado);

//Rota de deletar um placar
router.delete('/:id', controller.deleteResultado);

module.exports = router;