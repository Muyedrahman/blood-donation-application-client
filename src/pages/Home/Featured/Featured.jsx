import React from "react";
import { FaHeartbeat, FaHospital, FaUserFriends } from "react-icons/fa";



const Featured = () => {
  return (
    <div className="my-8 max-w-6xl mx-auto px-5 text-center">
      <h2 className="text-3xl font-bold">Our Features</h2>
      <h2 className="text-3xl font-bold mb-12"> Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-2 border-gray-200">
          <div className="text-4xl flex items-center justify-center">
            <FaUserFriends className=" text-red-500 mb-4" />
          </div>
          <h3 className="font-bold text-xl mb-2">Find Donors Easily</h3>
          <p>Search blood donors in your area quickly and efficiently.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-2 border-gray-200">
          <div className="text-4xl flex items-center justify-center">
            <FaHospital className=" text-red-500 mb-4" />
          </div>
          <h3 className="font-bold text-xl mb-2">Create Donation Requests</h3>
          <p>Request blood and get notifications from nearby donors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-2 border-gray-200">
          <div className="text-4xl flex items-center justify-center">
            <FaHeartbeat className="items-center text-red-500 mb-4" />
          </div>
          <h3 className="font-bold text-xl mb-2">Help Save Lives</h3>
          <p>Your contribution can save lives and make a real impact.</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
