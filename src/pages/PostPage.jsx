import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function PostPage(){
  const { getPost,posts } = usePosts()
	const params = useParams()

	useEffect( ()  => {
		async function loadPost(){
			await getPost(params.id)
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
					<h1 className="m-5">Aqui ira la ubicación</h1>
				</div>
			</div>
			<div className="border p-5 mt-2">
				<div className="flex justify-between">
        			<h1 className="font-bold text-3xl">Ubicación</h1>
      			</div>
				<div className="flex justify-between">
					<h1 className="m-5">Aqui ira la ubicación</h1>
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