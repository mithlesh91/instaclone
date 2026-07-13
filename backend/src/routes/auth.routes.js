const express = require('express')
const controllers = require('../controllers/auth.controllers')
const identfiy = require('../middlewares/auth.middlewares')

const routers = express.Router();

routers.post('/register',controllers.registercontrollers)

routers.post('/login',controllers.logingcontrollers )

routers.get('/get-me',identfiy,controllers.get_me_controllers)

module.exports = routers;