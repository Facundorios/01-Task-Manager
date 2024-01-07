import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <p className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </p>
        ))}
        <h1 className="text-3xl font-bold my-2  ">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {" "}
              Email is required for the registration{" "}
            </p>
          )}
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {" "}
              Password is required for the registration{" "}
            </p>
          )}
          <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Login</button>
          <p className="flex gap-x-2 justify-between">
            Don't have an account?{" "}
            <Link to="/register" className=" text-sky-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
