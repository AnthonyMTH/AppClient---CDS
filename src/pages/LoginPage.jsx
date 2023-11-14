import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signIn, errors: signInErrors} = useAuth()

  const onSubmit = handleSubmit((data) => {
    signIn(data)
  })

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="bg-slate-100 max-w-md w-full p-10 rounded-md">
        {
          signInErrors.map((error,i) => (
            <div className="bg-red-500 p-2 text-white" key ={i}>
              {error}
            </div>
          ))
        }
        <form
          onSubmit={onSubmit}
        >
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <p className="bg-red-500">Email is required</p>}

          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="bg-red-500">Password is required</p>
          )}

          <button
            className="bg-blue-500 text-white rounded-md p-2 m-4 mx-2 font-bold hover:bg-blue-400"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="flex justify-between gap-x-2 text-sm mt-7">
          Don't have an account?
          <Link to="/register" className="text-sky-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
