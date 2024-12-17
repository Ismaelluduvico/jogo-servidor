const { trace } = require('../routes/AuthRoute');
const UsuarioService = require('../service/UsuarioService');

//Login
exports.login = async (req, res) => {
    const { nomeusuario, senha } = req.body
    const [result] = await UsuarioService.checkPassword(nomeusuario, senha)

    if (!result) {
        res.status(401).json({ error: true, message: "Usuário ou senha inválidos" });
        return;
    }
    //Jason Web Token
    const jwt = require('jsonwebtoken');
    const dadosUsuario = {
        id: result.id,
        nomeusuario: result.nomeusuario,
        tipo: result.tipousuario,
        turma: result.turma,
        nomecompleto: result.nomecompleto
    };
    const chavePrivada = "senhateste";
    jwt.sign(dadosUsuario, chavePrivada, { expiresIn: '240h' }, (err, token) => {
        if (err) {
            res.status(500).json({ error: true, message: "Erro interno" });
            return;
        }
        res.status(200).json({ token });
    });
};

exports.updateUser = async (req, res) => {
    const { nomeusuario, senha, novasenha, turma, nomecompleto, userId} = req.body;

    const [result] = await UsuarioService.checkPasswordById(userId, senha);

    if (!result) {
        res.status(401).json({ error: true, message: "Usuário ou senha inválidos" });
        return;
    }
    const params = {
        id: userId,
        nomeusuario,
        nomecompleto,
        novasenha,
        turma,
        tipo: result.tipousuario
    }
    console.log(params)
    await UsuarioService.updateUsuario(params);
    res.status(200).json({ success: true });
}