import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

 function PostPage(){
	const { register, setValue } = useForm()
  	const { getPost, posts } = usePosts()
	const params = useParams()
	
	useEffect( ()  => {
		async function loadPost(){
			const post = await getPost(params.id)
			console.log(post.description)
			setValue("description", post.description)
		}
		loadPost()
	}, []);
	

  return (
		<div className="m-5">
			<div className="border p-5">
				<div className="flex justify-between">
        			<h1 className="font-bold text-3xl">Descripción</h1>
      			</div>
				<div className="flex justify-between">
					<textarea readOnly className="m-5 resize-none outline-none"  {...register("description")}></textarea>
				</div>
			</div>
			<div className="flex justify-center mt-10 ">
					<Link to={`/posts/`} className="rounded-lg border border-cyan-600 text-cyan-600 p-2 hover:bg-cyan-600 hover:text-white">
           Contactar
          </Link>
			</div>
		</div>
	)
}

export default PostPage