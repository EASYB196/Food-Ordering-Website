import React from "react";
import TestimonialData from "../data/TestimonialData";
import { FaStar, FaUserTie, FaSmile, FaUtensils } from "react-icons/fa";
// import image from '../assets/image/BBQ Chicken.jpg'
import image1 from "../assets/image/chef2.jpeg";
import image2 from "../assets/image/image-emily.jpg";
import image3 from "../assets/image/image-jennie.jpg";

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* About Section */}
      <div className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={image1}
            alt="Our Kitchen"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-blue-600">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            <span className="font-bold text-gray-900">Foodie</span> isn’t just a
            name — it’s a promise. A promise of fresh, flavorful, and expertly
            crafted meals, served fast and delivered with love. Whether you're
            fueling a busy day or indulging in a weekend treat, we're here to
            make every meal unforgettable.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Backed by passionate chefs and a dedicated team, we blend culinary
            excellence with top-tier service. From the classics you adore to
            dishes that surprise and delight, each bite is made to impress.
            Experience food the way it’s meant to be — comforting, creative, and
            absolutely crave-worthy.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">
          What Our Customers Say
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {TestimonialData.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 space-y-4 hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mx-auto"
              />
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <h4 className="font-semibold text-blue-600">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-500 mb-12">
          Meet the Team
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Chef Bayo",
              role: "Head Chef",
              img: image1,
            },
            {
              name: "Sarah N.",
              role: "Customer Service Lead",
              img: image2,
            },
            {
              name: "Michael K.",
              role: "Operations Manager",
              img: image3,
            },
          ].map((team, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6">
              <img
                src={team.img}
                alt={team.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold">{team.name}</h4>
              <p className="text-blue-500">{team.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-blue-50 py-16 px-6">
        <h3 className="text-3xl font-bold text-blue-500 text-center mb-12">
          Fun Facts
        </h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <FaUtensils className="text-4xl text-blue-500 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">150+</h4>
            <p className="text-gray-600">Dishes Served</p>
          </div>
          <div>
            <FaSmile className="text-4xl text-blue-500 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">98%</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <FaUserTie className="text-4xl text-blue-500 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">10+</h4>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div>
            <FaStar className="text-4xl text-blue-500 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">4.9/5</h4>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
