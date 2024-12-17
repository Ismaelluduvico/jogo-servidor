const questoesService = require('../service/QuestaoService')

//Adicionar uma questao
exports.postQuestao = async (req, res, next) => {
    const {enuciado, dificuldade, topicoid} = req.body
    const id = await questoesService.addQuestao(enuciado, dificuldade, topicoid)
    res.status(201).send(id)
};

//Buscar todas as questoes
exports.getQuestoes = async(req, res, next) => {
    const questoes = await questoesService.getQuestoes()
    res.json(questoes)
};

//Buscar uma questão
exports.buscarQuestao = async(req, res, next) => {
    try {
        const {id} = req.params;
        const questao = await questoesService.buscarQuestao(id)
        res.json(questao)
    } catch (error) {
        
    }
};

//Buscar questões por dificuldade
exports.buscarQuestaoDificuldade = async(req, res, next) => {
    try {
        const {dificuldade} = req.params;
        const reslutado = await questoesService.buscarQuestaoDificuldade(dificuldade);
        res.json(reslutado)
    } catch (error) {
        
    }
}

//Atuzlizar uma questao
exports.putQuestao = async(req, res, next) => {
    try {
        const id = req.params.id;
    const dados = req.body;
    await questoesService.updateQuestao({...dados, id: id})

    res.status(201).send(`Atualizado com sucesso! ${id}`);
    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};
//Deletetar uma questão
exports.deleteQuestao = async(req, res, next) => {
    try {
        const id = req.params.id;
        await questoesService.deleteQuestao(id)
        res.status(200).send(`Deletado com sucesso! ${id}`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};