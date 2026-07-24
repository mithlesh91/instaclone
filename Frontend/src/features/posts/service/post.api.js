import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function feedcontroller(){
    const response = await api.get("/api/feed")
    return response.data
}

export async function Createpost(image,caption) {
    const formdata = new FormData()
    formdata.append("image",image)
    formdata.append("caption",caption)

    console.log(formdata)

    const response = await api.post("/api/posts",formdata)
    console.log("response",response)
    return response.data
}

export async function likepost(postid) {

    const response = await api.post("/api/likes/" + postid)
    return response.data
    
}

export async function unlikepost(postid) {

    const response = await api.post("/api/unlikes/" + postid)
    return response.data
    
}