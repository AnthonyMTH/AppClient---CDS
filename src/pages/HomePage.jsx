import React, { useEffect } from "react";
import { usePosts } from "../context/PostContext";
import PostCard from "../components/PostCard";

function HomePage () {

  const { getPosts, posts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <div className="flex justify-between">
        <p>Listado de mascotas</p>
        <button className="rounded-lg border-solid border-blue-300 text-blue-300">
          Añadir +
        </button>
      </div>
      
      <div className='grid md:grid-cols-3 gap-2 sm:grid-cols-2'>
      {
        posts.map((post) => (
          <PostCard post={post} key={post._id}/>
        ))
      }
    </div>
    </div>
  );
};

export default HomePage