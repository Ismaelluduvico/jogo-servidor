const database = require('../infra/database');

//Criar usuario
exports.createUser = function (nomeusuario, senha, turma, nomecompleto, tipo = "aluno") {
    return userNameExists(nomeusuario).then(res => {
        if (res) {
            return {status: 400, msg: "Nome de usuario já existe"};
        } else {
            return database.query(
                `insert into usuarios (nomeusuario, senha, turma, nomecompleto, tipousuario) 
                values ($1, $2, $3, $4, $5)`, [nomeusuario, senha, turma, nomecompleto, tipo]
            ).then(() => {
                return {status: 200, msg: "Usuário criado com sucesso"};
            }).catch(err => {
                return {status: 500, msg: "Erro ao criar usuário", error: err};
            });
        }
    }).catch(err => {
        return {status: 500, msg: "Erro ao verificar nome de usuário", error: err};
    });
};

//Pegar informações do usuario
exports.buscarUsuario = function (id) {
    return database.query(`select * from usuarios where id = ${id}`)
};

//Checar senha
exports.checkPassword = function (nomeusuario, senha) {
    return database.query('select * from usuarios where nomeusuario = $1 and senha = $2', [nomeusuario, senha]);
};

//Atualizar usuario
exports.updateUsuario = function ({ id, nomeusuario, senha, turma, nomecompleto, tipo }) {
    return userNameExists(nomeusuario).then(res => {
        if (res) {
            return {status: 400, msg: "Nome de usuario já existe"};
        } else {
            return database.query(`update usuarios set nomeusuario = '${nomeusuario}', senha = '${senha}', turma = '${turma}', 
                nomecompleto = '${nomecompleto}', tipousuario = '${tipo}' where id = ${id}`).then(() => {
                return {status: 200, msg: "Usuário criado com sucesso"};
                }).catch(err => {
                    return {status: 500, msg: "Erro ao criar usuário", error: err};
                });
        }
    }).catch(err => {
        return {status: 500, msg: "Erro ao verificar nome de usuário", error: err};
    }); 
};

exports.deleteUsuario = function (id) {
    return database.query(`delete from usuarios where id = ${id} `)
};


async function userNameExists(nomeusuario) {
    const result = await database.query(`select * from usuarios where nomeusuario = $1`, [nomeusuario])
    return result.length > 0
};