var db = require("../fake_db");
var decodeToken = require("../helpers/decode-token")

function getAbout(req, res) {
    
    try {
        
        if (!req.headers.authorization) return res.sendStatus(401)

        let token = req.headers.authorization.slice(8, req.headers.authorization.length)
        const payload = decodeToken(token)

        const login = payload.login;

        const user = db.find(
            function (user) {
                return user.login == login
            }
        )

        if (!user) {
            let err = res.status(422)
            throw err
        }

        
        res.send(JSON.stringify('Test Test Test'))
    }
    catch (err) {
        return err;
    }
}
module.exports = {
    getAbout
}