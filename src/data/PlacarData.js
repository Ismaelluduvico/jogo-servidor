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
    return database.query(`select * from resultado r inner join usuarios u on r.usuarioid = u.id 
where r.dificuldade = $1`, [dificuldade]);
};

//Mostra resultado por dificuldade e usuario
exports.resultadoPorDificuldadeUsuario = function (dificuldade, usuarioid){
    return database.query(`select r.*, u.nomecompleto from resultado r inner join usuarios u on r.usuarioid = u.id 
where r.dificuldade = $1 and u.id = $2`, [dificuldade, usuarioid]);
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
    console.log({id, dificuldade, questoescorretas, questoeserradas, usuarioid})
    return database.query(`update resultado set dificuldade = $1, questoescorretas = $2, questoeserradas = $3, usuarioid = $4 where id = $5`,[dificuldade, questoescorretas, questoeserradas, usuarioid, id]);
};

//Excluir resultado
exports.deleteResultado = function (id){
    return database.query(`delete from resultado where id = ${id} `)
};