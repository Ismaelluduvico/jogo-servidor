const alternativasData = require('../data/AlternativaData')

//serviço de mostrar alternativas
 exports.getAlternativas = function (questaoid) {
    return alternativasData.getAlternativas(questaoid);
 };

//serviço de adicionar uma alternativa
 exports.addAlternativa = function (resposta, certoerrado, questaoid) {
    return alternativasData.addAlternativa(resposta, certoerrado, questaoid);
 };

 //serviço de atualizar uma alternativa
 exports.updateAlternativa = function (dados) {
    return alternativasData.updateAlternativa(dados);
 };