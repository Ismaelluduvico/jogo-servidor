const placarData = require('../data/PlacarData')

//serviço de mostrar todos os placares
 exports.getResultados = function () {
    return placarData.getResultados();
 };

//serviço de adicionar um placar
 exports.addResultado = function (dificuldade, questoescorretas, questoeserradas, usuarioid) {
    return placarData.addResultado(dificuldade, questoescorretas, questoeserradas, usuarioid);
 };

//serviço de mostrar um placar
 exports.showPlacar = function (id) {
   return placarData.showPlacar(id);
 };

 //serviço de mostrar placr por dificuldade
 exports.resultadoPorDificuldade = function (dificuldade) {
   return placarData.resultadoPorDificuldade(dificuldade);
 };

 //serviço de mostrar placr por dificuldade
 exports.resultadoPorDificuldadeUsuario = function (dificuldade, usuarioid) {
  return placarData.resultadoPorDificuldadeUsuario(dificuldade, usuarioid);
};

 //serviço de mostrar placr por usuario
 exports.resultadoPorUsuario = function (userId) {
   return placarData.resultadoPorUsuario(userId);
 };

 //serviço de atualizar um placar
 exports.updateResultado = function (dados) {
    return placarData.updateResultado(dados);
 };

 //serviço de deletar um placar
 exports.deleteResultado = function (id) {
   return placarData.deleteResultado(id);
 }