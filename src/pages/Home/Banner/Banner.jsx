import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-5 py-32 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Save Lives. Donate Blood Today!
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">
            Join our community of donors and help those in need. Make a
            difference by donating blood or creating a request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-red-500 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition"
            >
              Join as a Donor
            </button>

            <button
              onClick={() => navigate("/search")}
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-red-500 transition"
            >
              Search Donors
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://i.ibb.co.com/PZ6nK6Hv/banar.webp"
            alt="Blood"
            className="w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

