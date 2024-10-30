//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlacarController');

//Rota de adicionar um placar
router.post('/', controller.postPlacar);

//Rota de mostrar todos os placares 
router.get('/', controller.getPlacar);

//Rota de mostra um placar
router.get('/:id', controller.getOnePlacar);

//Rota de atualizar um placar
router.put('/:id', controller.putPlacar);

//Rota de deletar um placar
router.delete('/:id', controller.deletePlacar);

module.exports = router;