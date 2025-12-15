import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = async (data) => {
    console.log("Login form data:", data);
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user)
    })
    .catch(error =>{
        console.log(error)
    })

    // এখানে ami API call করতে pari
    // fetch("YOUR_SERVER_API/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));
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
            <a href="/register" className="text-red-500 underline">
              Register
            </a>
          </p>
          {/* Google Login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {

//       const { register, handleSubmit } = useForm();

//        const handleLogin = async () => {};

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-sm shadow-xl bg-base-100">
//         <div className="card-body">
//           <h2 className="text-2xl font-bold text-center">Login Naw</h2>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit(handleLogin)} className="grid gap-5">
//             <div>
//               <label className="font-semibold">Email</label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 className="input input-bordered bg-red-50/30 w-full rounded-md mt-1"
//                 placeholder="Enter email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="font-semibold">Password</label>
//               <input
//                 {...register("password")}
//                 type="password"
//                 className="input input-bordered bg-red-50/30 w-full rounded-md mt-1"
//                 placeholder="***"
//                 required
//               />
//             </div>

//             {/* Login Button */}
//             <div className="form-control mt-4">
//               <button className="btn bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition w-full mt-4 w-full">
//                 Login
//               </button>
//             </div>
//           </form>

//           <p className="text-center mt-4">
//             Register Naw !
//             <a href="/register" className="text-red-500 underline">
//               Register
//             </a>
//           </p>

//           {/* Divider */}
//           <div className="divider">OR</div>

//           {/* Google Login */}
//           <button className="btn py-3 rounded-md font-semibold hover:bg-red-600 transition mt-4 btn-outline w-full flex items-center gap-2">
//             <FcGoogle className="text-xl" />
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
