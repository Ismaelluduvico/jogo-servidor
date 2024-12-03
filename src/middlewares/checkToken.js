module.exports = (req, res, next) => {
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZXVzdWFyaW8iOiJpc21hZWwiLCJ0aXBvIjoicHJvZmVzc29yIiwiaWF0IjoxNzMyMTM5MTg5LCJleHAiOjE3MzMwMDMxODl9.1L5qEZY28H2X5CYyAEBuFVWt-5xI4jpHjInqWwVqJXw";
    chavePrivada = "senhateste";

    //Validando JWT
    const jwtService = require('jsonwebtoken');
    jwtService.verify(jwt, chavePrivada, (err, decoded) => {
        console.log(decoded);
        if (err) {
            console.log(err)
            return res.status(401).send({ message: 'Token inválido' });
        }
        console.log(decoded);
        req.userInfo = decoded;
        next();
    });

};