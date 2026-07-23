import { PostContex } from "../PostContext";
import { useContext, useEffect } from "react";
import { feedcontroller, Createpost } from "../service/post.api";


export function postuse() {
    const context = useContext(PostContex)
    const { loading, setloading, post, setpost, feed, setfeed } = context;

    async function feedhandle() {
        setloading(true)
        try {
            const data = await feedcontroller()
            console.log("api data", data)
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
    useEffect(() => {
        feedhandle()
    },[])
    return { loading, feed, feedhandle, posthandle }
}