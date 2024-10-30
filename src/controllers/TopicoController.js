const topicoService = require('../service/TopicoService');

//adicionar novo topico
exports.cadastroTopico = async (req, res) => {
    const {titulo} = req.body
    try{
        await topicoService.addTopico(titulo)
        res.status(201). send("Opreação concluida com sucesso!!")
    }catch (error) {
        console.log(error);
        return res.status(500).send("Não foi possivel Cadastrar");
    } 
};

//Atualizar topico
exports.updateTopico = async (req, res) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        await topicoService.updateTopico({...dados, id: id})
        console.log(dados)
        res.status(201).send("Requisição recebida com sucesso!");
    } catch (error) {
        res.status(500).send("Não foi possivel atualizar");
    }
};

//Deletar topico
exports.deleteTopico = async(req, res, next) => {
    try {
        const id = req.params.id;
        await topicoService.deleteTopico(id)
        res.status(200).send(`Topico deletado`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Buscar todos os topicos
exports.getTopicos = async(req, res, next) => {
    const topico = await topicoService.getTopicos()
    res.json(topico)
};

//Buscar Topico
exports.buscarTopico = async(req, res, next) => {
    try {
        const {id} = req.params;
        const topico = await topicoService.buscarTopico(id)
        res.json(topico)
    } catch (error) {
        res.status(500).send("ocorreu um erro")
    }
};