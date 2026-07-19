import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000"
})

export async function feed(){
    const response = api.get("/feed")
    return response.data
}