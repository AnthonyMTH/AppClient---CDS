import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePosts } from "../context/PostContext";
import { useState } from "react";
import NavBar from "../components/NavBar";


function PostFormPage() {
  const { register, handleSubmit, formState: { errors },setValue } = useForm();
  const { isAuthenticated } = useAuth();
  const { createPost } = usePosts();
  const navigate  = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
    console.log(values);
    const res = {
      description: values.description,
      photo: values.image[0],
    };

    await createPost(res);

    // Después de que la creación del post se completa, realiza la redirección
    navigate("/my-posts");
  } catch (error) {
    console.error("Error al crear el post", error);
  }
  });

  return (
    <>
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="bg-slate-100 max-w-md w-full p-10 rounded-md">
        {isAuthenticated ? (
        <>
        
        </>
        ) : (
          <>

          </>
        ) }
        <h1 className="text-2xl font-bold flex justify-center">Añadir Publicación</h1>
        <form onSubmit={onSubmit}>
          <textarea
            className="w-full bg-slate-200 rounded-md p-10 m-2"
            type="text" autoComplete="off"
            {...register("description", { required: true })}
            placeholder="Descripción"
          />
          {errors.description && <p className="text-red-500">Descripción es requerida</p>}

          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="file"
            {...register("image", { required: true })}
          />
          {errors.image && <p className="text-red-500">Subir Fotografía es requerido</p>}
          


          <button
            className="bg-blue-500 text-white rounded-md p-2 m-2 mx-2 font-bold hover:bg-blue-400"
            type="submit" display="flex" justify-content="center"
          >
            Guardar
          </button>
        </form>
      </div>
      </div>
    </>
  );
  
}

export default PostFormPage;

/*
          

          <textarea
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text" autoComplete="off"
            {...register("telefono", { required: true })}
            placeholder="Teléfono"
          />
          {errors.telefono && <p className="text-red-500">Teléfono es requerido</p>}

          <textarea
            className="w-full bg-slate-200 rounded-md p-10 m-2"
            type="text" autoComplete="off"
            {...register("direccion", { required: true })}
            placeholder="Dirección"
          />
          {errors.direccion && <p className="text-red-500">Dirección es requerida</p>}
*/