const jwt = require("jsonwebtoken")

function checkToken(req, res, next) {
    let token = req.get("Authorization") || req.query.token 

    //console.log("Check Token: " + token)

    if(token) {
        //Remove "Bearer"
        token = token.replace("Bearer ", "")
        //check if valid and not expired
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if(error) {
                req.user = null
            } else {
                req.user = decoded.user
                req.exp = new Date(decoded.exp * 1000)
            }
        })
    } else {
        req.user = null
    }
    next()
}

module.exports = checkToken