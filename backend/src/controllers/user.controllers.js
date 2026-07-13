const usermodel = require('../models/follow.model')
const postmodel = require('../models/post.models')
const likemodel = require('../models/likes.modes')

async function userfollowcontorllers(req, res) {

    const followerusername = req.user.username
    const followeeusername = req.params.username

    if(followerusername===followeeusername){
        return res.status(401).json({
            message:"you can't follow yourself"
        })
    }

    const isalreadyfollow = await usermodel.findOne({
        follower:followerusername,
        followee:followeeusername
    })

    if(isalreadyfollow){
        return res.status(200).json({
            message:"you have follow already"
        })
    }

    const followrecod = await usermodel.create({
        follower: followerusername,
        followee: followeeusername
    })

    res.status(201).json({
        message: `your are follow me ${followeeusername}`,
        follow: followrecod
    })



}

async function userunfollowcontroller(req,res){
    const followerusername = req.user.username
    const followeeusername = req.params.username

    const isuserisfollowing = await usermodel.findOne({
        follower:followerusername,
        followee:followeeusername
    })

    if(!isuserisfollowing){
        return res.status(200).json({
            message:`your are not following ${followeeusername}`
        })
    }

    await usermodel.findByIdAndDelete(isuserisfollowing._id)
    res.status(200).json({
        message:`you have unfolllow ${followeeusername}`
    })



    
}

async function likepostcontrollers(req,res) {
     const username = req.user.username
     const postid = req.params.postid.trim()
     
     const post = await postmodel.findById(postid)
     if(!post){
        return res.status(401).json({
            message:'post is not found'
        })
     }
     
     const like = await likemodel.create({
        post:postid,
        user:username
     })
     return res.status(200).json({
        message:'post like is successuflly',
        like
     })
}

module.exports = {
    userfollowcontorllers,
    userunfollowcontroller,
    likepostcontrollers
}