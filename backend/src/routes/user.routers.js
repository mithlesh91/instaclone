const express = require('express')
const usercontrollers = require('../controllers/user.controllers')
const identify = require('../middlewares/auth.middlewares')

const userrouters = express.Router()

userrouters.post('/follow/:username', identify, usercontrollers.userfollowcontorllers)

userrouters.post('/unfollow/:username', identify, usercontrollers.userunfollowcontroller)

userrouters.post('/likes/:postid',identify,usercontrollers.likepostcontrollers)



module.exports = userrouters