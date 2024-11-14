const UsuarioService = require('../service/UsuarioService');

//Cadastro usuario
exports.cadastroUsuario = async (req, res) => {
    const { nomeusuario, senha, turma, nomecompleto, tipo } = req.body;
    try {
        const result = await UsuarioService.novoUsuario(nomeusuario, senha, turma, nomecompleto, tipo);
        if (typeof result === "object" && result.status) {
            return res.status(result.status).send(result.msg);
        }
        return res.status(201).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send();
    }
};

//Buscar usuario
exports.buscarUsuario = async(req, res, next) => {
    try {
        const {id} = req.params;
        const usuario = await UsuarioService.buscarUsuario(id)
        res.json(usuario)
    } catch (error) {
        
    }
};

exports.buscarUsuarioAluno = async(req, res, next) => {
    try {
        const {tipo} = req.params;
        const usuario = await UsuarioService.buscarUsuarioAluno(tipo)
        res.json(usuario)
    } catch (error) {
        
    }
};
//Alualizar usuario
exports.updateUsuario = async(req, res, next) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        const result = await UsuarioService.updateUsuario({...dados, id: id});
        if (typeof result === "object" && result.status) {
            return res.status(result.status).send(result.msg);
        }
        return res.status(201).send();
    } catch (error) {
        res.status(500).send("ocorreu um erro")
    }
};

//Deletar usuario
exports.deleteUsuario = async(req, res, next) => {
    try {
        const id = req.params.id;
        await UsuarioService.deleteUsuario(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};