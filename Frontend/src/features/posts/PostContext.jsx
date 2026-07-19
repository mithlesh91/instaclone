import { createContext, useState } from "react";

export const PostContex = createContext()

export const PostContexProvider = ({ children }) => {
    const [loading, setloading] = useState(false)
    const [feed, setfeed] = useState("")
    const [post, setpost] = useState("")

    return (
        <PostContex.Provider value={{ loading, setloading, feed, setfeed, post, setpost }}>
            {children}
        </PostContex.Provider>
    )

}