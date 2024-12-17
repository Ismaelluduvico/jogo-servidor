const UsuarioData = require('../data/UsuarioData');

exports.novoUsuario = async function (nomeusuario, senha, turma, nomecompleto, tipo) {
    const result = await UsuarioData.createUser(nomeusuario, senha, turma, nomecompleto, tipo);
    return result
};

//Buscar usuario
exports.buscarUsuario = function (id) {
    return UsuarioData.buscarUsuario(id);
};

exports.buscarUsuarioAluno = function (tipo) {
    return UsuarioData.buscarUsuarioAluno(tipo);
};

exports.checkPassword = function (nomeUsuario, senha) {
    return UsuarioData.checkPassword(nomeUsuario, senha);
}

exports.checkPasswordById = function (id, senha) {
    return UsuarioData.checkPasswordById(id, senha);
}

exports.updateUsuario = async function (params) {
    const result = await UsuarioData.updateUsuario(params);
    result
}

//exports.updateUsuario = function (dados) {
//    return UsuarioData.updateUsuario(dados);
//};

exports.deleteUsuario = function (id) {
    return UsuarioData.deleteUsuario(id);
}
//serviço de adicionar um aluno
//  exports.addAluno = function (nome, senha) {
//     return UsuarioData.addAluno(nome, senha);
//  };
