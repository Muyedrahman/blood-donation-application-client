import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

//   console.log('in the login page', location);

  const handleLogin = async (data) => {
    console.log("Login form data:", data);

    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user)
        navigate(location?.state || '/')
    })
    .catch(error =>{
        console.log(error)
    })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome back </h2>
          <p className=" font-bold text-center">Please Login </p>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="grid gap-5 mt-4"
          >
            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered bg-red-50/30 w-full rounded-md mt-1"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input input-bordered bg-red-50/30 w-full rounded-md mt-1"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      Password must be 6 characters or long
                    </p>
                  )}
                </p>
              )}
            </div>

            {/* Login Button */}
            <div className="form-control mt-4">
              <button className="btn bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition w-full">
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="text-center mt-4">
            Don't have an account?
            <Link state={location.state} className="text-red-500 underline" to="/register">
              Register
            </Link>
          </p>
          {/* Google Login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
