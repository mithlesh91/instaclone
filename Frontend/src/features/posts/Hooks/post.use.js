import { PostContex } from "../PostContext";
import { useContext } from "react";
import { feed } from "../service/post.api";


export function usepost() {
    const context = useContext(PostContex)
    const { loading, setloading, post, setpost, feed, setfeed } = context;

    async function feedhandle() {
        setloading(true)
        try {
            const data = await feed()
            setfeed(data.posts)
        }
        catch (err) {
            console.error(err)
        } finally {
            setloading(false)
        }
    }

    return { loading, feed ,feedhandle}
}