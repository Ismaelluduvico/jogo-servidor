const placarService = require('../service/PlacarService')

//Adicionar um placar
exports.postPlacar = async (req, res, next) => {
    const {pontos, aluno_id, capitulo_id, acertos, performance} = req.body
    await placarService.addPlacar(pontos, aluno_id, capitulo_id, acertos, performance)
    res.status(201). send("")
};

//Buscar todos os placares
exports.getPlacar = async(req, res, next) => {
    const placares = await placarService.getPlacares()
    res.json(placares)
};

//Buscar um placar
exports.getOnePlacar = async(req, res, next) => {
    const id = req.params.id;
    const placar = await placarService.showPlacar(id)
    res.json(placar)
};

//Atuzlizar um placar
exports.putPlacar = async(req, res, next) => {
    try {
        const id = req.params.id;
    const dados = req.body;
    await placarService.updatePlacar({...dados, id: id})

    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};
//Deletetar um placar
exports.deletePlacar = async(req, res, next) => {
    try {
        const id = req.params.id;
        await placarService.deletePlacar(id)
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};