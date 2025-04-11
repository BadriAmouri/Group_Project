import React from "react";
import teamImage from "../assets/image.jpg"; // Make sure the path is correct

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="relative flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={teamImage}
            alt="Team Member"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 w-full bg-orange-500 text-white p-8 space-y-4">
          <h2 className="text-2xl font-bold">About us</h2>
          <p className="text-sm">
            We are a passionate team focused on providing innovative solutions
            for modern businesses. Our goal is to empower organizations through
            cutting-edge technologies and exceptional services.
          </p>
          <p className="text-sm">
            With years of experience in the industry, we strive to deliver
            solutions that exceed expectations and drive success for our
            clients. Whether it's improving internal processes, optimizing
            performance, or enhancing user experience, we are committed to
            excellence.
          </p>
          <p className="text-sm">
            Our team is built on a foundation of collaboration, creativity, and
            dedication. We believe in the power of technology to transform and
            make a lasting impact on businesses and their communities.
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-orange-500 font-semibold rounded hover:bg-orange-100 transition">
            More on Our History
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
