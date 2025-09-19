import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import translations from "../data/Transalator";

const Footer = () => {
  const [lang, setLang] = useState("en");
  const [email, setEmail] = useState("");
  const t = translations[lang];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-10 md:py-44 md:h-screen flex flex-col justify-between">
      <div className="max-w-7xl ml-auto mr-auto w-full">
        {/* Brand at top left */}
        <div className="mb-10 text-left">
          <h1 className="text-5xl font-bold text-blue-500 tracking-wide">FOODIE</h1>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 text-left">
          {/* Brand Description & Newsletter */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{t.brand}</h2>
            <p className="text-xl font-semibold leading-relaxed mb-6">{t.description}</p>

            <form onSubmit={handleSubscribe} className="flex flex-col">
              <label htmlFor="email" className="text-xl mb-6 text-white font-medium">
                {t.subscribe}
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 p-3 rounded-l bg-gray-800 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 px-4 text-black font-bold rounded-r hover:bg-blue-600 transition"
                >
                  {t.subscribeBtn}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-3xl font-bold text-white mb-12">{t.quickLinks}</h4>
            <ul className="space-y-8 text-xl font-semibold">
              <li><Link to="/" className="hover:text-blue-400 transition">{t.home}</Link></li>
              <li><Link to="/menu" className="hover:text-blue-400 transition">{t.menu}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">{t.about}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">{t.contact}</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-3xl font-semibold text-white mb-12">{t.support}</h4>
            <ul className="space-y-6 text-xl font-semibold">
              <li><a href="#faqs" className="hover:text-blue-400 transition">{t.faqs}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">{t.help}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">{t.terms}</a></li>
            </ul>
          </div>

          {/* Social + Language Switch */}
          <div>
            <h4 className="text-3xl font-semibold text-white mb-4">{t.connect}</h4>
            <div className="flex justify-start gap-6 text-white text-2xl mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition"><FaLinkedinIn /></a>
            </div>

            <div className="mt-4">
              <label htmlFor="lang" className="block text-base font-medium mb-2">{t.language}:</label>
              <select
                id="lang"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-gray-800 text-white px-3 py-2 rounded-md"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-lg text-gray-300 mt-10">
        &copy; {new Date().getFullYear()} {t.brand}. {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
