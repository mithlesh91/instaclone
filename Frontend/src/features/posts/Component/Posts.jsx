import React from 'react'
import { useState,useRef } from 'react'
import './styles/Posts.scss'
import { postuse } from '../Hooks/post.use'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
    const [caption, setcaption] = useState("")
    // const [user, setuser] = useState("")
    const PostImageValue = useRef("")
    const navigate = useNavigate()
    const {posthandle,loading,} =postuse()

    async function formhandle(e){
       e.preventDefault()
       const file = PostImageValue.current.files[0]
      await posthandle(file,caption)
      navigate("/")
    }

if(loading){
    return <main><h1>post is creating</h1></main>
}

    return (
        <main className="posts-page">
            <div className="posts-card">
                <h1>Create post</h1>
                <form onSubmit={formhandle}>
                    <div className="postImage">
                        <label className="upload-label" htmlFor="image">Select Image</label>
                        <input 
                        ref={PostImageValue}
                        type="file" id='image' name='postImage' 
                        placeholder='selectImage' 
                        />
                    </div>
                    {/* <div className="users">
                        <label htmlFor="users">Username</label>
                        <input 
                        value={user}
                        onChange={(e)=>{setuser(e.target.value)}}
                        type="text" id='users' 
                        placeholder='Enter username' 
                        />
                    </div> */}
                    <div className="caption">
                        <label htmlFor="caption">Caption</label>
                        <textarea 
                        value={caption}
                        onChange={(e)=>{setcaption(e.target.value)}}
                        name="caption" 
                        id="caption" placeholder="Write a caption..."></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Posts
