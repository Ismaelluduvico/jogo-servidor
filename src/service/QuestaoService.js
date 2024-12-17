const questoesData = require('../data/QustaoData')

//serviço de mostrar todas as questão
 exports.getQuestoes = function () {
    return questoesData.getQuestoes();
 };

 //serviço de mostrar uma questão
 exports.buscarQuestao = function (id) {
   return questoesData.buscarQuestao(id);
};

//serviço de mostra questões por dificuldade
exports.buscarQuestaoDificuldade = function (dificuldade) {
   return questoesData.buscarQuestaoDificuldade(dificuldade);
};

//serviço de adicionar uma questão
 exports.addQuestao = function (enuciado, dificuldade, topicoid) {
    return questoesData.addQuestao(enuciado, dificuldade, topicoid);
 };

 //serviço de atualizar uma questão
 exports.updateQuestao = function (dados) {
    return questoesData.updateQuestao(dados);
 };

 //serviço de deletar um aluno
 exports.deleteQuestao = function (id) {
   return questoesData.deleteQuestao(id);
 }