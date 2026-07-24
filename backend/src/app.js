const express = require('express')
const morgan = require("morgan")

const cookiesparser = require('cookie-parser')
const cors = require('cors')

// routers
const routers = require('./routes/auth.routes')
const postrouter = require('./routes/post.routers')
const userrouters = require('./routes/user.routers')


const app = express()
app.use(morgan("dev"))

app.use(express.json())
app.use(cookiesparser())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

// using api and prefix
app.use('/api/auth', routers)
app.use('/api', postrouter)
app.use('/api',userrouters)
module.exports = app