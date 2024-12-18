const placarService = require('../service/PlacarService')

//Adicionar um placar
exports.addResultado = async (req, res, next) => {
    try {
        // Input validation
        const { dificuldade, questoescorretas, questoeserradas, userId:  usuarioid } = req.body;

        // Validate required fields
        if (!dificuldade || usuarioid === undefined || 
            questoescorretas === undefined || questoeserradas === undefined) {
            return res.status(400).json({ 
                message: 'Campos obrigatórios estão faltando' 
            });
        }

        // Validate data types and ranges
        if (!['Facil', 'Medio', 'Dificil'].includes(dificuldade)) {
            return res.status(400).json({ 
                message: 'Nível de dificuldade inválido' 
            });
        }

        const parsedCorretas = parseInt(questoescorretas);
        const parsedErradas = parseInt(questoeserradas);

        if (isNaN(parsedCorretas) || isNaN(parsedErradas) || 
            parsedCorretas < 0 || parsedErradas < 0) {
            return res.status(400).json({ 
                message: 'Valores de respostas inválidos' 
            });
        }

        // Fetch existing result for the user and difficulty level
        const resultadoExistente = await placarService.resultadoPorDificuldadeUsuario(
            dificuldade, 
            usuarioid
        );

        // No existing result - create new record
        if (!resultadoExistente || resultadoExistente.length === 0) {
            await placarService.addResultado(
                dificuldade, 
                parsedCorretas, 
                parsedErradas, 
                usuarioid
            );

            return res.status(201).json({ 
                message: 'Novo resultado adicionado com sucesso' 
            });
        }

        // Compare with existing result - update if new result is better
        const resultadoAtual = resultadoExistente[0];
        if (parsedCorretas > resultadoAtual.questoescorretas) {
            await placarService.updateResultado({
                ...resultadoAtual,
                questoescorretas: parsedCorretas,
                questoeserradas: parsedErradas
            });

            return res.status(200).json({ 
                message: 'Resultado atualizado com sucesso' 
            });
        }

        // If no update is needed, still return a success response
        return res.status(200).json({ 
            message: 'Resultado mantido' 
        });

    } catch (error) {
        // Centralized error handling
        console.error('Erro ao processar resultado:', error);
        
        // Diferencia entre erros de banco de dados e outros
        if (error.name === 'DatabaseError') {
            return res.status(500).json({ 
                message: 'Erro no banco de dados', 
                details: error.message 
            });
        }

        // Erro genérico
        return res.status(500).json({ 
            message: 'Erro interno do servidor', 
            details: 'Não foi possível processar o resultado' 
        });
    }
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
        // Correct way to extract usuarioid from params
        const { userId } = req.params;
        
        const resultado = await placarService.resultadoPorUsuario(userId)
        res.json(resultado)
    } catch (error) {
        // It's important to handle errors
        console.error('Erro ao buscar resultados:', error);
        res.status(500).json({ 
            message: 'Erro ao buscar resultados', 
            error: error.message 
        });
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