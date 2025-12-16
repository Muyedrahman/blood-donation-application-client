import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { districts, upazilas } = useLoaderData();
  const districtList = districts[2].data;
  const upazilaList = upazilas[2].data;

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const password = useWatch({ control, name: "password" });

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Filter Upazilas based on selected District
  useEffect(() => {
    if (!selectedDistrict) {
      setFilteredUpazilas([]);
      return;
    }
    const district = districtList.find((d) => d.name === selectedDistrict);
    if (district) {
      const matched = upazilaList.filter((u) => u.district_id === district.id);
      setFilteredUpazilas(matched);
    }
  }, [selectedDistrict, districtList, upazilaList]);

  const handleRegistration = async (data) => {
    const imageFile = data.avatar[0];

    try {
      // 1. Create Firebase user
      await registerUser(data.email, data.password);

      // 2. Upload Avatar to imgBB
      const formData = new FormData();
      formData.append("image", imageFile);
      const imgURL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`;
      const res = await axios.post(imgURL, formData);

      // 3. Update Firebase Profile
      await updateUserProfile({
        displayName: data.name,
        photoURL: res.data.data.url,
      });

      // 4. Save User to MongoDB
      const newUser = {

        name: data.name,
        email: data.email,
        bloodGroup: data.bloodGroup,
        district: data.district,
        upazila: data.upazila,
        role: "donor", // default role
        status: "active", // default status
      };
      await axios.post("http://localhost:3000/donors", newUser);

      // 5. Success Alert
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Welcome! You can now login or go to dashboard.",
      });
      //    dashboard
      navigate(location.state || "/");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Email Already Exists",
          text: "This email is already registered. Please login!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Something went wrong. Try again.",
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register as Donor
        </h2>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">
          {/* Name */}
          <input
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Avatar */}
          <input
            type="file"
            {...register("avatar", { required: "Avatar is required" })}
            className="file-input w-full"
          />

          {/* Blood Group */}
          <select
            {...register("bloodGroup", { required: "Blood group is required" })}
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

          {/* District */}
          <select
            {...register("district", { required: "District is required" })}
            className="select select-bordered w-full"
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districtList.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            {...register("upazila", { required: "Upazila is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select Upazila</option>
            {filteredUpazilas.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>

          {/* Password */}
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
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Password does not match",
            })}
            className="input input-bordered w-full"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          <button className="bg-red-500 text-white py-3 rounded-md w-full">
            Register
          </button>

          <p className="text-center">
            Already have account?
            <Link to="/login" className="text-red-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
