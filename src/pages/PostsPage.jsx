import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function PostsPage(){
		const { user } = useAuth()
    const { getMyPosts,posts } = usePosts()
		const params = useParams()

	useEffect( ()  => {
		async function loadPosts(){
				const userPost = await getMyPosts(user.id)
				console.log(userPost)
		}
		loadPosts()
	}, []);


    return (
        <div className="m-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Listado de mis mascotas</h1>
        <Link to={`/posts/`} className="rounded-lg border border-blue-300 text-blue-300 p-2 hover:bg-blue-300 hover:text-white">
            Añadir +
        </Link>
      </div>
      
      <div className='grid md:grid-cols-3 gap-2 sm:grid-cols-2 mt-5'>
      {
        posts.map((post) => (
          <PostCard post={post} key={post._id}/>
        ))
      }
    	</div>
    </div>
  )
}

export default PostsPage