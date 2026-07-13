require('dotenv').config()
const app=require('./src/app')
const database =require('./src/config/database')
database()
app.listen(3000,()=>{
    console.log("port chal raha hai")
})