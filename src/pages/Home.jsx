import React from "react";
import profileImg from "../assets/profile.png";

export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative floating bubbles across entire background */}
      {/* Top section */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-32 left-1/3 w-12 h-12 bg-cyan-300/50 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
      <div className="absolute top-40 right-10 w-8 h-8 bg-blue-500/60 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      
      {/* Middle section */}
      <div className="absolute top-1/3 left-20 w-14 h-14 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/2 right-16 w-10 h-10 bg-blue-400/50 rounded-full animate-bounce" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-cyan-300/30 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-500/45 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      {/* Bottom section */}
      <div className="absolute bottom-40 left-1/4 w-18 h-18 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>
      <div className="absolute bottom-32 right-1/4 w-14 h-14 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDuration: '3.2s' }}></div>
      <div className="absolute bottom-20 left-16 w-10 h-10 bg-cyan-500/55 rounded-full animate-pulse" style={{ animationDuration: '2.2s' }}></div>
      <div className="absolute bottom-16 right-20 w-8 h-8 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-cyan-400/35 rounded-full blur-md animate-pulse"></div>
      
      {/* Corner accents */}
      <div className="absolute top-5 left-5 w-6 h-6 bg-blue-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-5 right-5 w-6 h-6 bg-cyan-400/70 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-5 left-5 w-6 h-6 bg-blue-500/70 rounded-full animate-ping" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-5 right-5 w-6 h-6 bg-cyan-500/70 rounded-full animate-ping" style={{ animationDuration: '2.8s' }}></div>
      
      {/* Extra floating bubbles */}
      <div className="absolute top-1/4 right-1/2 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3.5s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Image */}
        <div className="flex justify-center lg:justify-start ml-16 order-2 lg:order-1">
          <div className="relative w-full max-w-sm">
            {/* Decorative border with gradient */}
            <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-br from-cyan-400 via-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-xl"></div>
            
            {/* Image container with border */}
            <div className="relative bg-linear-to-br from-blue-600 to-cyan-600 p-1 rounded-3xl shadow-2xl">
              <div className="bg-slate-800 dark:bg-gray-800 rounded-3xl overflow-hidden">
                <img 
                  src={profileImg}
                  alt="Fatima" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl"
                />
              </div>
            </div>
            
            {/* Small decorative dots on image */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-cyan-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full shadow-lg opacity-70"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          {/* Available badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-medium text-sm">Available for work</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Creative</span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Technologist
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 dark:text-gray-300 text-base sm:text-xl mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
            Crafting elegant, user-friendly digital experiences that solve real-world challenges. 
            Specializing in <span className="text-cyan-300 font-semibold">full-stack web applications</span> and intuitive, human-centered <span className="text-cyan-300 font-semibold">UI/UX design.</span>
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0 mb-8">
            <a
              href="/projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 text-center"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-300 rounded-full font-semibold hover:bg-cyan-400/20 transform hover:scale-105 transition-all duration-300 text-center"
            >
              Get in touch
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start px-4 lg:px-0">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/fatimaumer02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600/20 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/fatimaumer02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-600/20 border-2 border-gray-500/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-gray-500/50 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/fatima_0217"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-indigo-600/20 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-110 transition-all duration-300"
              aria-label="Discord"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="https://fatimaumer862@gmail.com"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-red-600/20 border-2 border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300"
              aria-label="Gmail"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}