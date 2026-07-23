const jwt = require('jsonwebtoken')
async function identifyuser(req, res, next) {
    const token = req.cookies.login_jwtscwertcode

    if (!token) {
        return res.status(401).json({
            message: "please login "
        })
    }

    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.jwt_scwret)

    } catch (err) {
        return res.status(401).json({
            message: "please login again something error "
        })
    }
   req.user = decoded
   next()
}

module.exports=identifyuser