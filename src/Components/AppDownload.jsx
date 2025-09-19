import React, { useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AppDownload = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-blue-50 py-20 px-6">
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Place your <span className="text-blue-500">order</span> in seconds
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Download our mobile app and start enjoying fast food delivery at your fingertips.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.chowdeck.android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition"
          >
            <FaGooglePlay className="text-2xl" />
            <div className="text-left">
              <p className="text-xs">GET IT ON</p>
              <p className="text-base font-bold -mt-1">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com/ng/app/chowdeck/id1630932419"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition"
          >
            <FaApple className="text-2xl" />
            <div className="text-left">
              <p className="text-xs">Download on the</p>
              <p className="text-base font-bold -mt-1">App Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
