import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const linkClass = (path) =>
    `text-sm md:text-base px-4 py-2 transition rounded-md ${
      location.pathname === path
        ? "text-green-700 font-bold"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-xl font-bold text-green-700">
          ColdMail
        </Link>
        <div className="flex gap-2 md:gap-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/generate" className={linkClass("/generate")}>
            Generate
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
