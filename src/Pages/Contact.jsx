import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Contact Us</h2>
          <p className="text-lg mb-6 text-gray-600">
            Got a question or want to place an order? Reach out to us anytime — we’re happy to help!
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500" />
              <span>(+234) 704 155 4896</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500" />
              <span>iboluwatife122@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          action="mailto:iboluwatife122@gmail.com"
          method="post"
          encType="text/plain"
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-md font-semibold w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
