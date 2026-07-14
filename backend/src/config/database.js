const mongoose = require('mongoose')
async function connecttoDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DBtoconnect")
   

}

module.exports = connecttoDB