import { createContext, useContext, useState } from "react"
import { getAllPostsRequest,getMyPostsRequest, getPostRequest, createPostRequest, updatePostRequest, deletePostRequest } from "../api/posts"

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
            const res = await getAllPostsRequest()
            setPosts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getPost = async (id) => {
        try {
            const res = await getPostRequest(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const getMyPosts = async (id) => {
        try {
            const res = await getMyPostsRequest(id)
            setPosts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostContext.Provider value={{
            posts,
            getPosts,
            getPost,
            getMyPosts,
        }}>
            {children}
        </PostContext.Provider>
    )
}