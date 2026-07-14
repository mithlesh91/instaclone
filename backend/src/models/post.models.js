const mongoose = require('mongoose')

const postschema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    image_url: {
        type: String,
        required: [true, "imgage_url is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, 'user  id is required for creating post']
    }
})

const postmodel = mongoose.model('post', postschema)

module.exports = postmodel;