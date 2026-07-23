import React, { useEffect } from 'react'
import '../share/style.scss'
import Post from '../Component/Post'
// import Nav from "../Page/Nav"
import { postuse } from '../Hooks/post.use'
const Feed = () => {
    const { loading, feed, feedhandle } = postuse()
    useEffect(() => {
        feedhandle()
    }, [])
    if (loading || !feed) {
       return <main><h1>feed is loading....</h1></main>
    }
    console.log(feed)
    return (
        <main className='post'>
            {
                feed.map(Posts=>{
                    console.log("Posts",Posts)
                    return <Post user={Posts.user} posts={Posts}/>
                })
                
              
            }
        </main>
    )
}

export default Feed
