const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');
const checkToken = require('../middlewares/checkToken');
const addUserId = require('../middlewares/addUserId');

//Rota de cadastro
router.post('/cadastro', controller.cadastroUsuario);

//Rota buscar dados do usuario
router.get('/', checkToken, addUserId, controller.buscarUsuario);

//Rota buscar dados do usuario Alunos
router.get('/dadosaluno/:id', checkToken, controller.buscarDetalheAluno);

//Rota buscar dados do usuario Alunos
router.get('/todosalunos/:tipo', checkToken, controller.buscarUsuarioAluno);

// Rota de atualização
router.put('/', checkToken, addUserId, controller.updateUsuario);

// Rotas de atualização de aluno
router.put('/atualizaraluno/:id', checkToken, controller.updateUsuarioAluno);

//Rota Deletar
router.delete('/delete', checkToken, addUserId, controller.deleteUsuario);

//Rota Deletar Aluno
router.delete('/deletaluno/:id', checkToken, controller.deleteUsuarioAluno);

module.exports = router;