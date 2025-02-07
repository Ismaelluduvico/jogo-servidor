const database = require('../infra/database');

//Criar usuario
exports.createUser = function (nomeusuario, senha, turma, nomecompleto, tipo = "aluno") {
    return userNameExists(nomeusuario).then(res => {
        if (res) {
            return { status: 400, msg: "Nome de usuario já existe" };
        } else {
            return database.query(
                `insert into usuarios (nomeusuario, senha, turma, nomecompleto, tipousuario) 
                values ($1, $2, $3, $4, $5)`, [nomeusuario, senha, turma, nomecompleto, tipo]
            ).then(() => {
                return { status: 200, msg: "Usuário criado com sucesso" };
            }).catch(err => {
                return { status: 500, msg: "Erro ao criar usuário", error: err };
            });
        }
    }).catch(err => {
        return { status: 500, msg: "Erro ao verificar nome de usuário", error: err };
    });
};

//Pegar informações do usuario
exports.buscarUsuario = function (id) {
    return database.query(`select nomecompleto, nomeusuario, turma from usuarios where id = ${id}`)
};

//Pegar informações do usuario do aluno
exports.buscarDetalheAluno = function (id) {
    return database.query(`select id, nomecompleto, nomeusuario, turma from usuarios where id = ${id}`)
};

//Pegar informações dos usuarios Aluno
exports.buscarUsuarioAluno = function (tipo) {
    return database.query('select * from usuarios where tipousuario = $1', [tipo])
};

//Checar senha
exports.checkPassword = function (nomeusuario, senha) {
    return database.query('select * from usuarios where nomeusuario = $1 and senha = $2', [nomeusuario, senha]);
};

exports.checkPasswordById = function (id, senha) {
    return database.query('select * from usuarios where id = $1 and senha = $2', [id, senha]);
}
//Atualizar usuario
exports.updateUsuario = function (id, params) {
    const fields = Object.keys(params).map(key => `${key} = '${params[key]}'`).join(', ');
    return userNameExists(params.nomeusuario).then(res => {
        if (res && res !== id) {
            return { status: 400, msg: "Nome de usuario já existe" };
        } else {
            return database.query(`update usuarios set ${fields} where id = ${id}`).then(() => {
                return { status: 200, msg: "Usuário atualizado com sucesso" };
            }).catch(err => {
                return { status: 500, msg: "Erro ao atualizar usuário", error: err };
            });
        }
    }).catch(err => {
        console.log(err);
        return { status: 500, msg: "Erro ao verificar nome de usuário", error: err };
    });
};

//Atualizar usuario aluno 
exports.updateUsuarioAluno = function ({ id, nomeusuario, turma, nomecompleto }) {

    return database.query(`update usuarios set nomeusuario = '${nomeusuario}', turma = '${turma}', 
                nomecompleto = '${nomecompleto}' where id = ${id}`).then(() => {
        return { status: 200, msg: "Usuário atualizado com sucesso" };
    }).catch(err => {
        return { status: 500, msg: "Erro ao criar usuário", error: err };
    });
};

exports.deleteUsuario = function (id) {
    return database.query(`delete from usuarios where id = ${id} `)
};

exports.deleteUsuarioAluno = function (id) {
    return database.query(`delete from usuarios where id = ${id} `)
};

async function userNameExists(nomeusuario) {
    const result = await database.query(`select * from usuarios where nomeusuario = $1`, [nomeusuario])
    return result.length > 0 && result[0].id
};