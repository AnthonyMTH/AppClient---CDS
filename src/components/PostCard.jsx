import { usePosts } from "../context/PostContext"
import { Link } from 'react-router-dom'

function PostCard({ post }) {

  return (
    <div>
        <p>{post.description}</p>
        <p>{new Date(post.date).toLocaleDateString()}</p>
        <Link to={`/posts/${post._id}`}>Más información</Link>
    </div>
  )
}

export default PostCard