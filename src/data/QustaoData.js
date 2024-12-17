const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Buscar todas as questoes
exports.getQuestoes = function (){
    return database.query('select * from questao');
};

//Buscar uma questão
exports.buscarQuestao = function (id) {
    return database.query(`select * from questao where id = ${id}`)
};

//Buscar todas as questões por dificuldade
//Buscar uma questão
exports.buscarQuestaoDificuldade = function (dificuldade) {
    return database.query(`select * from questao where dificuldade = $1`, [dificuldade])
};

//Adicionar uma nova questao
exports.addQuestao = function (enuciado, dificuldade, topicoid){
    const insertQuestao = database.query(`insert into questao (enuciado, dificuldade, topicoid) values ('${enuciado}', '${dificuldade}', '${topicoid}') RETURNING id`);
    return insertQuestao
};

//Atualizar questao
exports.updateQuestao = function ({id, enuciado, dificuldade, topicoid}){
    return database.query(`update questao set enuciado = '${enuciado}', dificuldade = '${dificuldade}', topicoid = '${topicoid}' where id = ${id}`);
};

//Excluir questao
exports.deleteQuestao = function (id){
    return database.query(`delete from questao where id = ${id} `)
};