const mongoose = require('mongoose')

const likeschema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        requird: [true, 'post id is required for creating likes']
    },
    user: {
        type: String,
        requird: [true, 'username is requird for creating post']
    }
}, {
    timestamps: true
}
)

likeschema.index({post:1,user:1},{unique:true})

const likemodel = mongoose.model('likes',likeschema)

module.exports=likemodel