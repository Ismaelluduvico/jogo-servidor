const placarService = require('../service/PlacarService')

//Adicionar um placar
exports.addResultado = async (req, res, next) => {
    const { dificuldade, questoescorretas, questoeserradas, usuarioid } = req.body
    // await placarService.addResultado(dificuldade, questoescorretas, questoeserradas, usuarioid)
    // 
    const reslutado = await placarService.resultadoPorDificuldadeUsuario(dificuldade, usuarioid)
    console.log(reslutado)
    switch (reslutado[0]) {
        case undefined:
            await placarService.addResultado(dificuldade, questoescorretas, questoeserradas, usuarioid)
            break;
        default:
            if (reslutado[0].questoescorretas < parseInt(questoescorretas)) {
                await placarService.updateResultado({ ...reslutado[0], questoescorretas, questoeserradas})
            }
            break;
    }
    res.status(201).send("")
};

//Buscar todos os placares
exports.getResultados = async (req, res, next) => {
    const placares = await placarService.getResultados()
    res.json(placares)
};

//Buscarplacra por dificuldade
exports.resultadoPorDificuldade = async (req, res, next) => {
    try {
        const { dificuldade } = req.params;
        const resultado = await placarService.resultadoPorDificuldade(dificuldade)
        res.json(resultado)
    } catch (error) {

    }
};

//Buscar placra por usuario
exports.resultadoPorUsuario = async (req, res, next) => {
    try {
        const { usuarioid } = req.params;
        const resultado = await placarService.resultadoPorUsuario(usuarioid)
        res.json(resultado)
    } catch (error) {

    }
};

//Atuzlizar um placar
exports.updateResultado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        await placarService.updateResultado({ ...dados, id: id })

        res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};
//Deletetar um placar
exports.deleteResultado = async (req, res, next) => {
    try {
        const id = req.params.id;
        await placarService.deleteResultado(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};