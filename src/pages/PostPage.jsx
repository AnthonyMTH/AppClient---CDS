import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

 function PostPage(){
	const { user, isAuthenticated } = useAuth()
	const { register, setValue } = useForm()
  	const { getPost, posts } = usePosts()
	const [ post, setpost ] = useState([])
	const [ verificator, setverificator] = useState([])
	const params = useParams()

	useEffect( ()  => {
		async function loadPost(){
			const post_ = await getPost(params.id)
			setpost(post_)
		}
		async function verificatorPost(){
			setverificator(false)
			const post_ = await getPost(params.id)
			if(post_.user == user.id){
				setverificator(true)
			}
		}
		loadPost()
		verificatorPost()
	}, []);

  return (
		<div className="m-5">
			<div className="border p-5">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl">Descripción</h1>
					{verificator ? (
						<>
						<div>
							<Link to={`/posts/`} className="rounded-lg border border-blue-300 text-blue-300 p-2 hover:bg-blue-300 hover:text-white">
							Editar
							</Link>
							<Link to={`/posts/`} className="rounded-lg border border-blue-300 text-blue-300 p-2 ml-2 hover:bg-blue-300 hover:text-white">
							Eliminar
							</Link>
						</div>
						</>
					) : (<></>)}
      			</div>
				<div className="flex justify-between">
					<p className="m-5">{post.description}</p>
				</div>
			</div>
			<div className="flex justify-center mt-10 ">
				{verificator ? (<></>
				) : (<>
				<Link to={`/posts/`} className="rounded-lg border border-cyan-600 text-cyan-600 p-2 hover:bg-cyan-600 hover:text-white">
           			Contactar
          		</Link>
				</>)}
			</div>
		</div>
	)
}

export default PostPage