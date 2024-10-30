//Arquivo de rota para topico
const express = require('express');
const router = express.Router();
const controller = require('../controllers/TopicoController');

//rota de adicionar Topico
router.post('/cadastrotopico', controller.cadastroTopico);
//rota de atualizar Topico
router.put('/:id', controller.updateTopico);
//rota deletar topico
router.delete('/:id', controller.deleteTopico);
//rota de buscar todos os topicos
router.get('/', controller.getTopicos);
//rota buscar topico
router.get('/:id', controller.buscarTopico);

module.exports = router;