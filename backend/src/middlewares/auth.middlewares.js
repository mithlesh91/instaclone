const jwt = require('jsonwebtoken')
async function identifyuser(req, res, next) {
    const token = req.cookies.login_jwtscwertcode

    if (!token) {
        return res.status(401).json({
            message: "token is not provided ,unauthorized"
        })
    }

    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.jwt_scwret)

    } catch (err) {
        return res.status(401).json({
            message: "user is not authorized"
        })
    }
   req.user = decoded
   next()
}

module.exports=identifyuser