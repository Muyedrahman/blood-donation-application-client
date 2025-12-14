import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("bloodGroup", data.bloodGroup);
    formData.append("district", data.district);
    formData.append("upozila", data.upozila);
    formData.append("avatar", data.avatar[0]); 

    console.log("FormData to submit:", formData);

    // API call 
    // fetch("YOUR_SERVER_API", { method: "POST", body: formData })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register as Donor
        </h2>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Avatar */}
          <div>
            <label className="label">Avatar</label>
            <input
              type="file"
              {...register("avatar", { required: "Avatar is required" })}
              className="file-input file-input-bordered w-full"
            />
            {errors.avatar && (
              <p className="text-red-500 text-sm">{errors.avatar.message}</p>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <label className="label">Blood Group</label>
            <select
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
              className="select select-bordered w-full"
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>

          {/* District */}
          <div>
            <label className="label">District</label>
            <select
              {...register("district", { required: "District is required" })}
              className="select select-bordered w-full"
            >
              <option value="">Select District</option>
           
            </select>
            {errors.district && (
              <p className="text-red-500 text-sm">{errors.district.message}</p>
            )}
          </div>

          {/* Upazila */}
          <div>
            <label className="label">Upazila</label>
            <select
              {...register("upozila", { required: "Upazila is required" })}
              className="select select-bordered w-full"
            >
              <option value="">Select Upazila</option>
        
            </select>
            {errors.upozila && (
              <p className="text-red-500 text-sm">{errors.upozila.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="input input-bordered w-full"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button className="bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition w-full mt-4">
            Register
          </button>

          <p className="text-center mt-4">
            Already have an account?
            <a href="/login" className="text-red-500 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

// import React from "react";
// import { useForm } from "react-hook-form";

// const Register = () => {
//     const { register, handleSubmit } = useForm();

//     const handleRegistration = (data) =>{
//         console.log('Afterreg isrtrfgghb ',data)

//     }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Register as Donor
//         </h2>

//         <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">
//           {/* Name */}
//           <div>
//             <label className="label">Name</label>
//             <input
//               type="text"
//               {...register("name")}
//               className="input input-bordered w-full"
//               placeholder="Your Name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="label">Email</label>
//             <input
//               type="email"
//               {...register('email', {required:true})}
//               className="input input-bordered w-full"
//               placeholder="Email"
//             />
//           </div>

//           {/* Avatar */}
//           <div>
//             <label className="label">Avatar</label>
//             <input
//               type="file"
//               {...register("image")}
//               className="file-input file-input-bordered w-full"
//             />
//           </div>

//           {/* Blood Group */}
//           <div>
//             <label className="label">Blood Group</label>
//             <select
//               {...register("bloodGroup")}
//               className="select select-bordered w-full"
//             >
//               <option value="">Select Blood Group</option>
//               <option>A+</option>
//               <option>A-</option>
//               <option>B+</option>
//               <option>B-</option>
//               <option>AB+</option>
//               <option>AB-</option>
//               <option>O+</option>
//               <option>O-</option>
//             </select>
//           </div>

//           {/* District */}
//           <div>
//             <label className="label">District</label>
//             <select
//               {...register("district")}
//               className="select select-bordered w-full"
//             >
//               <option value="">Select District</option>
//             </select>
//           </div>

//           {/* Upazila */}
//           <div>
//             <label className="label">Upazila</label>
//             <select
//               {...register("upozila")}
//               className="select select-bordered w-full"
//             >
//               <option value="">Select Upazila</option>
//             </select>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="label">Password</label>
//             <input
//               {...register("password",{
//                 required: true,
//                 minLength:6,
//               })}
//               type="password"
//               className="input input-bordered w-full"
//               placeholder="Password"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="label">Confirm Password</label>
//             <input
//               type="password"
//               {...register("confirmPassword")}
//               className="input input-bordered w-full"
//               placeholder="Confirm Password"
//             />
//           </div>

//           <button className="bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition w-full mt-4">
//             Register
//           </button>

//           <p className="text-center mt-4">
//             Already have an account? Register Naw !
//             <a href="/login" className="text-red-500 underline">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
