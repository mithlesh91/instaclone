const usermodel = require('../models/user.models')
const postmodel = require('../models/post.models')
const likemodel = require('../models/likes.modes')
const followmodel = require('../models/follow.model')

async function userfollowcontorllers(req, res) {

    const followerusername = req.user.username
    const followeeusername = req.params.username

    if (followerusername === followeeusername) {
        return res.status(401).json({
            message: "you can't follow yourself"
        })
    }

    const isalreadyfollow = await followmodel.findOne({
        follower: followerusername,
        followee: followeeusername
    })

    if (isalreadyfollow) {
        return res.status(200).json({
            message: "you have follow already"
        })
    }

    const followrecod = await followmodel.create({
        follower: followerusername,
        followee: followeeusername
    })

    res.status(201).json({
        message: `your are follow me ${followeeusername}`,
        follow: followrecod
    })



}

async function userunfollowcontroller(req, res) {
    const followerusername = req.user.username
    const followeeusername = req.params.username

    const isuserisfollowing = await followmodel.findOne({
        follower: followerusername,
        followee: followeeusername
    })

    if (!isuserisfollowing) {
        return res.status(200).json({
            message: `your are not following ${followeeusername}`
        })
    }

    await followmodel.findByIdAndDelete(isuserisfollowing._id)
    res.status(200).json({
        message: `you have unfolllow ${followeeusername}`
    })




}

async function likepostcontrollers(req, res) {

    console.log("Model Name:", usermodel.modelName);
    console.log("Collection Name:", usermodel.collection.name);


    const username = req.user.username
    console.log(req.user)
    const postid = req.params.postid

    const post = await postmodel.findById(postid)
    console.log("post", post)
    if (!post) {
        return res.status(401).json({
            message: 'post is not found'
        })
    }
    const user = await usermodel.findOne({ username: username })
    console.log("user", user)
    if (!user) {
        return res.status(400).json({
            message: "user is not register"
        })
    }

    const like = await likemodel.create({
        post: postid,
        user: username
    })
    return res.status(200).json({
        message: 'post like is successuflly',
        like
    })
}

async function unLikePostController(req, res) {
    const postId = req.params.postid
    const username = req.user.username

    const isLiked = await likemodel.findOne({
        post: postId,
        user: username
    })

    if (!isLiked) {
        return res.status(400).json({
            message: "Post didn't like"
        })
    }

    await likemodel.findOneAndDelete(isLiked)

    return res.status(200).json({
        message: "post un liked successfully."
    })
}
module.exports = {
    userfollowcontorllers,
    userunfollowcontroller,
    likepostcontrollers,
    unLikePostController
}