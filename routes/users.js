const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/auth.middlewares');


/* GET users listing. */
router.get('/', verifyToken, function (req, res, next) {
    res.json(req.user);
});


module.exports = router;
