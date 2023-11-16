import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PostFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {    
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit((data) => {    
    console.log(data);    
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="bg-slate-100 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Nueva Publicación</h1>
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text" autoComplete="off"
            {...register("descripcion", { required: true })}
            placeholder="Descripción"
          />
          {errors.descripcion && <p className="text-red-500">Descripción es requerida</p>}

          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="file"
            {...register("foto", { required: true })}
          />
          {errors.foto && <p className="text-red-500">Subir Fotografía es requerido</p>}

          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text" autoComplete="off"
            {...register("telefono", { required: true })}
            placeholder="Teléfono"
          />
          {errors.telefono && <p className="text-red-500">Teléfono es requerido</p>}

          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text" autoComplete="off"
            {...register("direccion", { required: true })}
            placeholder="Dirección"
          />
          {errors.direccion && <p className="text-red-500">Dirección es requerida</p>}

          <button
            className="bg-blue-500 text-white rounded-md p-2 m-4 mx-2 font-bold hover:bg-blue-400"
            type="submit"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostFormPage;
