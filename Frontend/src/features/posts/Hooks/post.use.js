import { PostContex } from "../PostContext";
import { useContext, useEffect } from "react";
import { feedcontroller, Createpost,likepost,unlikepost } from "../service/post.api";


export function postuse() {
    const context = useContext(PostContex)
    const { loading, setloading, post, setpost, feed, setfeed } = context;

    async function feedhandle() {
        setloading(true)
        try {
            const data = await feedcontroller()
            console.log("console all feed data", data)
            setfeed(data.posts)
        }
        catch (err) {
            console.error(err)
        } finally {
            setloading(false)
        }
    }

    async function posthandle(image, caption) {
        setloading(true)
        try {
            const data = await Createpost(image, caption)
            setfeed([data.post, ...feed])
        }
        catch (err) {
            console.error(err)
        } finally {
            setloading(false)
        }
    }

    async function likehandle (postid){
        setloading(true)
        try{
        const data = await likepost(postid)
        await feedhandle()
        } 
        catch (err){
            console.error(err)
        }finally{
            setloading(false)
        }       
    }

    async function unlikehandle (postid){
        setloading(true)
        try{
        const data = await unlikepost(postid)
        await feedhandle()
        } 
        catch (err){
            console.error(err)
        }finally{
            setloading(false)
        }       
    }
    // useEffect(() => {
    //     feedhandle()
    // },[])
    return { loading, feed, feedhandle, posthandle,likehandle,unlikehandle }
}