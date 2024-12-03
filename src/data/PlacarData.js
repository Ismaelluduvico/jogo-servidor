const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todos os resultados
exports.getResultados = function (){
    return database.query('select * from resultado');
};

//Mostra um resultado
exports.showResultado = function (id){
    return database.query(`select * from resultado where id = ${id}`);
};

//Mostra resultado por dificuldade
exports.resultadoPorDificuldade = function (dificuldade){
    return database.query('select * from resultado where dificuldade = $1', [dificuldade]);
};

//Mostra resultado por usuario
exports.resultadoPorUsuario = function (usuarioid){
    return database.query(`select * from resultado where usuarioid = ${usuarioid}`);
};

//Adicionar um novo resultado
exports.addResultado = function (dificuldade, questoescorretas, questoeserradas, usuarioid){
    return database.query(`insert into resultado (dificuldade, questoescorretas, questoeserradas, usuarioid) values ('${dificuldade}', '${questoescorretas}', '${questoeserradas}', '${usuarioid}')`);
};

//Atualizar resultado
exports.updateResultado = function ({id, dificuldade, questoescorretas, questoeserradas, usuarioid}){
    return database.query(`update resultado set dificuldade = '${dificuldade}', questoescorretas = '${questoescorretas}', questoeserradas = '${questoeserradas}', usuarioid = '${usuarioid}' where id = ${id}`);
};

//Excluir resultado
exports.deleteResultado = function (id){
    return database.query(`delete from resultado where id = ${id} `)
};