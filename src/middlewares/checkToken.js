module.exports = (req, res, next) => {
    const jwt = req.headers?.authorization?.split(' ')[1];
    chavePrivada = "senhateste";

    //Validando JWT
    const jwtService = require('jsonwebtoken');
    jwtService.verify(jwt, chavePrivada, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).send({ message: 'Token inválido' });
        }
        req.userInfo = decoded;
        next();
    });
};