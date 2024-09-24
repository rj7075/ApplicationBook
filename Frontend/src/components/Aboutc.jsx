import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are a dynamic and passionate team dedicated to creating innovative
          and impactful solutions for our clients. Our mission is to bring ideas
          to life by leveraging the latest technologies and delivering
          exceptional user experiences.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We aim to be a leader in the industry by consistently pushing the
            boundaries of what’s possible, providing top-notch services, and
            building long-lasting relationships with our clients. Our goal is to
            empower businesses and individuals to achieve their full potential.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to deliver high-quality solutions tailored to the
            specific needs of our clients. We focus on innovation, creativity,
            and precision, ensuring that each project exceeds expectations. Our
            customer-first approach ensures that our clients’ success is our
            success.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team consists of talented professionals from diverse
            backgrounds, each bringing their own unique expertise to the table.
            Together, we collaborate to turn challenges into opportunities and
            make impactful changes in the world of technology and design.
          </p>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
