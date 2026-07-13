const mongoose = require('mongoose')

const userschma = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "this username is already exists"],
        required: [true, 'username is required']
    },
    email: {
        type: String,
        unique: [true, 'this email is already exists'],
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    bio: String,
    profileImage: {
        type: String,
        default:"https://ik.imagekit.io/0gusltxrt/default-avatar-profile-social-media-260nw-1920331226.webp"
    }
})

const usermodel = mongoose.model('user',userschma)

module.exports =usermodel;