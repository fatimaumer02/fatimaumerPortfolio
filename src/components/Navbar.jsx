import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-linear-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20 dark:border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="relative group cursor-pointer"
        >
          <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide relative z-10 transition-all duration-300 hover:scale-105 hover:tracking-wider">
            Fatima Umer
          </div>

          {/* Animated glow effect - continuous pulse */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-400/30 via-blue-400/30 to-cyan-500/30 blur-xl animate-pulse -z-10 rounded-lg"></div>

          {/* Extra glow on hover */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-400/50 via-blue-400/50 to-cyan-500/50 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 scale-110 rounded-lg"></div>

          {/* Sparkle effect on corners */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.2s' }}></div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="cursor-pointer text-gray-100 hover:text-cyan-300 transition-all duration-300 font-medium relative group text-sm tracking-wide"
              >
                {link.name}
                {/* Active underline - shows when link is active */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-blue-800/30 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-linear-to-b from-slate-900 to-blue-900 dark:from-gray-900 dark:to-gray-800 border-t border-cyan-500/20 dark:border-gray-700/30">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 sm:px-6 py-3 sm:py-4 text-gray-100 hover:bg-blue-800/30 dark:hover:bg-gray-700/50 hover:text-cyan-300 cursor-pointer transition-all duration-200 border-b border-cyan-500/10 dark:border-gray-700/20 text-sm sm:text-base relative ${
                  isActive ? "bg-blue-800/20 text-cyan-300" : ""
                }`}
              >
                {link.name}
                {/* Active indicator for mobile - left border */}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-400 to-blue-400"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}