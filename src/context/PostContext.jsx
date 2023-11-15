import { createContext, useContext, useState } from "react"
import { getPostRequest, getPostsRequest, createPostRequest, updatePostRequest, deletePostRequest } from "../api/posts"

const PostContext = createContext()

export const usePosts = () => {
    const context = useContext(PostContext)

    if (!context) {
        throw new Error('UsePosts must be used within a PostProvider')
    }

    return context
}

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await getPostsRequest()
            setPosts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostContext.Provider value={{
            posts,
            getPosts
        }}>
            {children}
        </PostContext.Provider>
    )
}