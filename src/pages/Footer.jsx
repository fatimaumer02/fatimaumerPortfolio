import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, MessageCircle, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
    ],
    resources: [
      { name: "Experience", path: "/experience" },
      { name: "Skills", path: "/skills" },
      { name: "Contact", path: "/contact" },
    ]
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/fatimaumer02",
      color: "hover:text-blue-400 hover:scale-110"
    },
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/fatimaumer02",
      color: "hover:text-gray-300 hover:scale-110"
    },
    {
      icon: Mail,
      name: "Gmail",
      link: "https://fatimaumer862@gmail.com",
      color: "hover:text-red-400 hover:scale-110"
    },
    {
      icon: MessageCircle,
      name: "Discord",
      link: "https://discord.com/users/fatima_0217",
      color: "hover:text-indigo-400 hover:scale-110"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Decorative floating bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link 
              to="/"
              className="inline-block mb-6 group"
            >
              <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Fatima Umer
              </h3>
            </Link>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
              A passionate creative technologist crafting beautiful digital experiences. 
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left flex items-center gap-2 flex-wrap justify-center">
            © {currentYear} Fatima Umer. Made with 
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> 
            All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-50"></div>
    </footer>
  );
}