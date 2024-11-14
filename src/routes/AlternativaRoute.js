//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AlternativaController');

//Rota de adicionar uma Alternativa
router.post('/', controller.postAlternativa);

//Rota de mostrar todas as Alternativas 
router.get('/:questaoid', controller.getAlternativas);

//Rota de atualizar uma Alternativa
router.put('/:id', controller.putAlternativa);

module.exports = router;