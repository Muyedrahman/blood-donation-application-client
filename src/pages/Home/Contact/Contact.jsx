import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have questions? We are always here to help you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="border border-gray-300 px-4 py-3 rounded-md md:col-span-2 h-32 focus:ring-2 focus:ring-gray-400 outline-none"
            ></textarea>

            <button className="bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition md:col-span-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Phone */}
        <div className="mt-8 text-center text-gray-700 flex flex-col items-center">
          <FaPhoneAlt className="text-red-500 text-2xl mb-2" />
          <p className="text-lg font-medium">Phone: +880 171 256 7890</p>
          <p className="text-lg font-medium">Phone: +880 161 256 7890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
