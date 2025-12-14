import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();

    const handleRegistration = (data) =>{
        console.log('Afterreg isrtrfgghb ',data)

    }


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
              {...register("name")}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>

          {/* Avatar */}
          <div>
            <label className="label">Avatar</label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="label">Blood Group</label>
            <select
              {...register("bloodGroup")}
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
          </div>

          {/* District */}
          <div>
            <label className="label">District</label>
            <select
              {...register("district")}
              className="select select-bordered w-full"
            >
              <option value="">Select District</option>
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="label">Upazila</label>
            <select
              {...register("upozila")}
              className="select select-bordered w-full"
            >
              <option value="">Select Upazila</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="input input-bordered w-full"
              placeholder="Confirm Password"
            />
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

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import axios from "axios";

// // District & Upazila data (উদাহরণ)
// const areaData = {
//   Dhaka: ["Savar", "Dhamrai", "Keraniganj"],
//   Chattogram: ["Patiya", "Sitakunda", "Anwara"],
//   Khulna: ["Batiaghata", "Dumuria", "Phultala"],
// };

// const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// const Register = () => {
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [upazilas, setUpazilas] = useState([]);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   // Update upazila list when district changes
//   useEffect(() => {
//     if (selectedDistrict) {
//       setUpazilas(areaData[selectedDistrict]);
//     } else {
//       setUpazilas([]);
//     }
//   }, [selectedDistrict]);

//   const onSubmit = async (data) => {
//     try {
//       let avatarURL = "";

//       // Upload avatar to ImgBB (optional)
//       if (avatarFile) {
//         const formData = new FormData();
//         formData.append("image", avatarFile);

//         const res = await axios.post(
//           "https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY",
//           formData
//         );

//         avatarURL = res.data.data.display_url;
//       }

//       const userData = {
//         name: data.fullname,
//         email: data.email,
//         password: data.password,
//         bloodGroup: data.bloodGroup,
//         district: data.district,
//         upazila: data.upazila,
//         avatar: avatarURL,
//       };

//       // Send data to backend
//       const result = await axios.post("http://localhost:5000/user", userData);
//       console.log(result.data);
//       alert("User registered successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <section className="flex justify-center items-center min-h-screen bg-gray-50">
//       <motion.div
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-red-600">
//           Register as Donor
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//           {/* Name */}
//           <div>
//             <label className="font-semibold">Full Name</label>
//             <input
//               {...register("fullname", { required: "Name is required" })}
//               type="text"
//               className="input input-bordered w-full mt-1 rounded-md"
//               placeholder="Your Name"
//             />
//             {errors.fullname && (
//               <p className="text-red-500 text-sm">{errors.fullname.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="font-semibold">Email</label>
//             <input
//               {...register("email", { required: "Email is required" })}
//               type="email"
//               className="input input-bordered w-full mt-1 rounded-md"
//               placeholder="Your Email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Avatar */}
//           <div>
//             <label className="font-semibold">Avatar</label>
//             <input
//               type="file"
//               onChange={(e) => setAvatarFile(e.target.files[0])}
//               className="file-input file-input-bordered w-full mt-1 rounded-md"
//             />
//           </div>

//           {/* Blood Group */}
//           <div>
//             <label className="font-semibold">Blood Group</label>
//             <select
//               {...register("bloodGroup", { required: "Select blood group" })}
//               className="select select-bordered w-full mt-1 rounded-md"
//             >
//               <option value="">Select Blood Group</option>
//               {bloodGroups.map((bg) => (
//                 <option key={bg} value={bg}>
//                   {bg}
//                 </option>
//               ))}
//             </select>
//             {errors.bloodGroup && (
//               <p className="text-red-500 text-sm">
//                 {errors.bloodGroup.message}
//               </p>
//             )}
//           </div>

//           {/* District */}
//           <div>
//             <label className="font-semibold">District</label>
//             <select
//               {...register("district", { required: "Select district" })}
//               onChange={(e) => setSelectedDistrict(e.target.value)}
//               className="select select-bordered w-full mt-1 rounded-md"
//             >
//               <option value="">Select District</option>
//               {Object.keys(areaData).map((district) => (
//                 <option key={district} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//             {errors.district && (
//               <p className="text-red-500 text-sm">{errors.district.message}</p>
//             )}
//           </div>

//           {/* Upazila */}
//           <div>
//             <label className="font-semibold">Upazila</label>
//             <select
//               {...register("upazila", { required: "Select upazila" })}
//               className="select select-bordered w-full mt-1 rounded-md"
//             >
//               <option value="">Select Upazila</option>
//               {upazilas.map((upazila) => (
//                 <option key={upazila} value={upazila}>
//                   {upazila}
//                 </option>
//               ))}
//             </select>
//             {errors.upazila && (
//               <p className="text-red-500 text-sm">{errors.upazila.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="font-semibold">Password</label>
//             <input
//               {...register("password", { required: "Password is required" })}
//               type="password"
//               className="input input-bordered w-full mt-1 rounded-md"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="font-semibold">Confirm Password</label>
//             <input
//               {...register("confirmPassword", {
//                 required: "Confirm password is required",
//                 validate: (value) =>
//                   value === watch("password") || "Passwords do not match",
//               })}
//               type="password"
//               className="input input-bordered w-full mt-1 rounded-md"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md mt-3">
//             Register Now
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-red-500 underline">
//             Login
//           </a>
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Register;
