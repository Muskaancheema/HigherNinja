import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-950 via-gray-900 to-black text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
           <h1 className='text-2xl font-bold'>Hire<span className='text-red-500'>Ninja</span></h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            The next-gen job portal built for talent & recruiters.  
            Smarter hiring. Faster careers. Future-ready work.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">
              Find Jobs
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Post a Job
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Career Insights
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Internship Hub
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Hiring Solutions
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Get weekly job trends & AI-powered career tips.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-sm outline-none"
            />
            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Join
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <FaLinkedin className="hover:text-indigo-400 cursor-pointer" />
            <FaGithub className="hover:text-indigo-400 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HireSphere — Built for the Future of Work 🚀
      </div>
    </footer>
  );
};

export default Footer;
