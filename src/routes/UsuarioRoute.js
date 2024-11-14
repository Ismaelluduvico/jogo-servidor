const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

//Rota de cadastro
router.post('/cadastro', controller.cadastroUsuario);
//Rota buscar dados do usuario
router.get('/:id', controller.buscarUsuario);

//Rota buscar dados do usuario Alunos
router.get('/todosalunos/:tipo', controller.buscarUsuarioAluno);

// Rota de atualização
router.put('/:id', controller.updateUsuario);
//Rota Deletar
router.delete('/:id', controller.deleteUsuario);

module.exports = router;