const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todos os placares
exports.getPlacares = function (){
    return database.query('select * from placar');
};

//Mostra um placar
exports.showPlacar = function (id){
    return database.query(`select * from placar where id = ${id}`);
};

//Adicionar um novo placar
exports.addPlacar = function (pontos, aluno_id, capitulo_id, acertos, performance){
    return database.query(`insert into placar (pontos, aluno_id, capitulo_id, acertos, performance) values ('${pontos}', '${aluno_id}', '${capitulo_id}', '${acertos}', '${performance}')`);
};

//Atualizar placar
exports.updatePlacar = function ({id, pontos, aluno_id, capitulo_id, acertos, performance}){
    return database.query(`update placar set pontos = '${pontos}', aluno_id = '${aluno_id}', capitulo_id = '${capitulo_id}', acertos = '${acertos}', performance = '${performance}' where id = ${id}`);
};

//Excluir placar
exports.deletePlacar = function (id){
    return database.query(`delete from placar where id = ${id} `)
};