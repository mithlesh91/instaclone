import React from 'react'
import { useState,useRef } from 'react'
import './styles/Posts.scss'

const Posts = () => {
    const [caption, setcaption] = useState("")
    const [user, setuser] = useState("")
    const PostImageValue = useRef("")

    function formhandle(e){
       e.preventDefault()
       console.log(user)
       console.log(PostImageValue)
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
                        onSubmit={()=>{console.log(PostImageValue.current.files[0])}}
                        type="file" id='image' name='postImage' 
                        placeholder='selectImage' 
                        />
                    </div>
                    <div className="users">
                        <label htmlFor="users">Username</label>
                        <input 
                        value={user}
                        onChange={(e)=>{setuser(e.target.value)}}
                        type="text" id='users' 
                        placeholder='Enter username' 
                        />
                    </div>
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
