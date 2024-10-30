const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const QuestaoRoute = require('./routes/QuestaoRoute');
const AlternativaRoute = require('./routes/AlternativaRoute');
const PlacarRoute = require('./routes/PlacarRoute');
const AuthRoute = require('./routes/AuthRoute');
const TopicoRoute = require('./routes/TopicoRoute');
const UsuarioRoute = require('./routes/UsuarioRoute');

// Middlewares
const CheckToken = require('./middlewares/checkToken');

app.use(cors())
app.use(express.json())
app.use(require('body-parser').urlencoded({ extended: false }))
app.use('/', index);

//Rota de autenticação
app.use('/auth', AuthRoute);


//Rota de Usúario
app.use('/usuario', UsuarioRoute);
//Rota questao
app.use('/questao', CheckToken, QuestaoRoute);
//Rota topico
app.use('/topicos', TopicoRoute);
//Rota para alternativa
app.use('/alternativa', AlternativaRoute);
//Rota para placar
app.use('/placar', PlacarRoute);

module.exports = app;