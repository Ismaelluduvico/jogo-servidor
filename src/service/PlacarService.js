const placarData = require('../data/PlacarData')

//serviço de mostrar todos os placares
 exports.getPlacares = function () {
    return placarData.getPlacares();
 };

//serviço de adicionar um placar
 exports.addPlacar = function (pontos, aluno_id, capitulo_id, acertos, performance) {
    return placarData.addPlacar(pontos, aluno_id, capitulo_id, acertos, performance);
 };

//serviço de mostrar um placar
 exports.showPlacar = function (id) {
   return placarData.showPlacar(id);
 };

 //serviço de atualizar um placar
 exports.updatePlacar = function (dados) {
    return placarData.updatePlacar(dados);
 };

 //serviço de deletar um placar
 exports.deletePlacar = function (id) {
   return placarData.deletePlacar(id);
 }