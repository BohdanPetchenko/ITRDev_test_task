var db = require("../fake_db");
var jwt = require('jsonwebtoken');
var { secretKey } = require('../config/auth.config');

function loginUser(req, res) {
    try {
        if (!req.body) return res.sendStatus(400);

        const login = req.body.login;
        const password = req.body.password;

        const user = db.find(
            function (user) {
                return user.login == login
            }
        )

        if (!user) {
            let err = res.status(422)
            throw err
        }

        if (user.password !== password) {            
            let err = res.status(422)
            throw err
        }

        const token = jwt.sign({            
            name: user.name,            
            login: user.login,            
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 * 60 // generate token with some expiration time
        }, secretKey);

        res.send(JSON.stringify(token));
    }
    catch (err) {
        return err
    }
}

module.exports = { loginUser }