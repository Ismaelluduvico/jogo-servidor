const topicoData = require('../data/TopicoData')

//Adiconar novo topico
exports.addTopico = async function(titulo){
    const result = await topicoData.addTopico(titulo);
    return result 
};

//Atualizar topico
exports.updateTopico = function (dados) {
    return topicoData.updateTopico(dados);
    
};

//serviço de deletar um topico
exports.deleteTopico = function (id) {
    return topicoData.deleteTopico(id);
};

//Selecionar todos os topicos
exports.getTopicos = function () {
    return topicoData.getTopicos();
 };

//Buscar um topico
exports.buscarTopico = function (id) {
    return topicoData.buscarTopico(id);
};