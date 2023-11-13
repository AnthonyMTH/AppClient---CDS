import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>{
    if (isAuthenticated) navigate('/posts')
  },[isAuthenticated] )

  const onSubmit = handleSubmit(async (values) => {
    signUp(values)
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="bg-slate-100 max-w-md w-full p-10 rounded-md">
        {
          registerErrors.map((error,i) => (
            <div className="bg-red-500 p-2 text-white" key ={i}>
              {error}
            </div>
          ))
        }
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          {
            errors.username && (
              <p className="text-red-500">Username is required</p>
          )}
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {
            errors.email && (
              <p className="text-red-500">Email is required</p>
          )}
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {
            errors.password && (
              <p className="text-red-500">Password is required</p>
          )}
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="password"
            {...register("confirm-password", { required: true })}
            placeholder="Confirm password"
          />
          {
            errors.password && (
              <p className="text-red-500"> Confirm password is required</p>
          )}
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone"
          />
          {
            errors.phone && (
              <p className="text-red-500">Phone is required</p>
          )}
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
          />
          {
            errors.address && (
              <p className="text-red-500">Address is required</p>
          )}
          <button
            className="bg-green-700 text-white rounded-md p-2 m-4 mx-2 font-bold hover:bg-green-600"
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="flex justify-between gap-x-2 text-sm mt-7">
          Already have an account?
          <Link to="/login" className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
