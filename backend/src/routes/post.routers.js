const express = require('express')
const postrouters = express.Router()
const controller = require('../controllers/post.controllers')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
const identifyuser = require('../middlewares/auth.middlewares')
// const feedcontroller = require("../controllers/post.controllers")



postrouters.post('/posts',identifyuser,upload.single("image"),controller.createpostcontrollers)

postrouters.get('/post',identifyuser,controller.getpostcontrollers)

postrouters.get('/details/:postid',identifyuser,controller.getdetails)

postrouters.get("/feed",identifyuser,controller.getFeedController)

module.exports=postrouters