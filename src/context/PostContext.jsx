import { createContext, useContext, useState } from "react"

const PostContext = createContext()

export const usePosts = () => {
    const context = useContext(PostContext)

    if (!context) {
        throw new Error('UsePosts must be used within a PostProvider')
    }

    return context
}

function PostContext() {
  return (
    <div>PostContext</div>
  )
}

export default PostContext 