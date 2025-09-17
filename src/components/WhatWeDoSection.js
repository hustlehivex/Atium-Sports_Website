import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const WhatWeDoSection = () => {
  return (
     <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-white">
      {/* Left Side: Sketch Building */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/building-sketch.png"
          alt="Building Sketch"
          className="w-4/5 md:w-full max-w-md"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 text-left md:pl-12">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
          lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Eget purus lectus viverra in semper nec
          pretium mus.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <p className="text-gray-600">Value - Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <p className="text-gray-600">Value - Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <p className="text-gray-600">Value - Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <p className="text-gray-600">Value - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-md shadow-md hover:opacity-90 transition">
          Explore our Services
        </button>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
