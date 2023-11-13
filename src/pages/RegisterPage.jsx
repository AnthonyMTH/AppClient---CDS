import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="bg-slate-100 max-w-md w-full p-10 rounded-md">
        <form
          onSubmit={handleSubmit((values) => {
            console.log(values);
          })}
        >
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="password"
            {...register("confirm-password", { required: true })}
            placeholder="Confirm password"
          />
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone"
          />
          <input
            className="w-full bg-slate-200 rounded-md p-2 m-2"
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
          />

          <button
            className="bg-green-700 text-white rounded-md p-2 m-4 mx-2 font-bold hover:bg-green-600"
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="flex justify-between gap-x-2 text-sm mt-7">
          Already have an account?
          <Link to="/login" className="text-sky-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
