const usermodel = require('../models/user.models')
// const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function registercontrollers(req, res) {
    const { username, email, bio, profileImage, password } = req.body

    const isuserisalreadexists = await usermodel.findOne({
        $or: [
            {
                username
            },
            {
                email
            }
        ]
    })

    if (isuserisalreadexists) {
        return res.status(409).json({
            message: 'this user is already exists' + (isuserisalreadexists.email) === email ? "eamil is already exists" : "user is already exists"
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex')
    const hash = await bcrypt.hash(password, 10)

    const user = await usermodel.create({
        username,
        password: hash,
        profileImage,
        bio,
        email
    })
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.jwt_scwret, { expiresIn: '1d' }
    )
    res.cookie('jwt_token', token)

    res.status(201).json({
        message: 'user have registerd',
       user

    })

}

async function logingcontrollers(req, res) {
    const { username, email, password } = req.body
    //  username and password
    //  email and password
    const user = await usermodel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "user is not found"
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex')

    const ispasswordexists = await bcrypt.compare(password, user.password)

    if (!ispasswordexists) {
        return res.status(401).json({
            message: 'password is invaled'
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.jwt_scwret
    )
    res.cookie('login_jwtscwertcode', token)

    res.status(201).json({
        message: "login successful",
        user
    })


}

async function get_me_controllers(req, res) {
    const userid = req.user.id
    const user = await usermodel.findById(userid)
    return res.status(200).json({
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

async function logout(req,res) {
    res.clearCookie("login_jwtscwertcode")

    res.status(200).json({
        message:"successfully logout"
    })
    
}

module.exports = {
    registercontrollers,
    logingcontrollers,
    get_me_controllers,
    logout
}