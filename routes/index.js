const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {users, jwt_secret} = require("../data");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/login', function (req, res, next) {
    const {username, password} = req.body;
    const user = users.find((user) => {
        return user.password === password && user.username === username;
    });
    if (!user) {
        return res.status(401).json({message: 'Invalid username or password'});
    }

    const token = jwt.sign(user, jwt_secret);

    res.json({
        access_token: token,
    });
});

module.exports = router;
