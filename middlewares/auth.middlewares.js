const jwt = require('jsonwebtoken');
const {users, jwt_secret} = require("../data");

exports.verifyToken = async function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'Unauthorized'});
    }
    let token = req.headers.authorization.split(' ')[1];

    try {
        token = jwt.verify(token, jwt_secret);
        if (!token) {
            return res.status(401).send({message: 'Unauthorized'});
        }
    } catch (err) {
        return res.status(401).send(err);
    }


    try {
        req.user = token;
        next();
    } catch (err) {
        return res.status(401).send({message: 'Unauthorized'});
    }
}
