const database = require('../infra/database');

//Adicionar um novo topico
exports.addTopico = function (titulo){
    return database.query(`insert into topicos (titulo) values ($1)`, [titulo]);
};

//Atualizar topico
exports.updateTopico = function ({id, titulo}){
    return database.query(`update topicos set titulo = '${titulo}' where id = ${id}`);
};
//Deletar topico
exports.deleteTopico = function (id){
    return database.query(`delete from topicos where id = ${id} `)
};

//Buscar todos os topico
exports.getTopicos = function (){
    return database.query(`select * from topicos`);
};

//Buscar um topico
exports.buscarTopico = function (id) {
    return database.query(`select * from topicos where id = ${id}`);
};