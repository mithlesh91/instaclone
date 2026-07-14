const postmodel = require('../models/post.models')
const likemodel = require("../models/likes.modes")
const Imagekit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const { Folders } = require('@imagekit/nodejs/resources/index.js')
const jwt = require('jsonwebtoken')


const imagekit = new Imagekit({
    privateKey: process.env.imagekit_praivate_Key
})


async function createpostcontrollers(req, res) {


    const file = await imagekit.files.upload({
        flie: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "test",
         folder: "/posts"
    })

    const post = await postmodel.create({
        caption: req.body.caption,
        image_url: file.url,
        user: req.user.id
    })
    res.status(201).json({
        message: "post is created",
        post
    })

}

async function getpostcontrollers(req, res) {


    const userid = req.user.id

    const posts = await postmodel.find()
    res.status(200).json({
        message: "post has fatched successfully",
        posts
    })

}

async function getdetails(req, res) {


    const userid = req.user.id
    const postid = req.params.postid

    const post = await postmodel.findById(postid)

    if (!post) {
        return res.status(404).json({
            message: 'post not found'
        })
    }

    const isvalieduser = post.user.toString() === userid

    if (!isvalieduser) {
        return res.status(403).json({
            message: 'forheaden content'
        })
    }

    return res.status(200).json({
        message: 'post fatched successfully',
        post
    })



}

async function getFeedController(req, res) {

    const user = req.user

    const posts = await Promise.all((await postmodel.find({}).populate("user").lean())
        .map(async (post) => {
            const isLiked = await likemodel.findOne({
                user: user.username,
                post: post._id
            })

            post.isLiked = Boolean(isLiked)

            return post
        }))



    res.status(200).json({
        message: "posts fetched successfully.",
        posts
    })
}


module.exports = {
    createpostcontrollers,
    getpostcontrollers,
    getdetails,
    getFeedController
}