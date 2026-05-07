import React from "react";

export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-800 via-blue-800 to-slate-800 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Passionate About</span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Creating Digital Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout for Laptop */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - About Content */}
          <div className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Who I Am
            </h3>
            
            <div className="space-y-4 sm:space-y-5">
              <p className="text-gray-200 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                Hi, I'm <span className="text-cyan-300 font-semibold">Fatima</span>—a creative developer with a passion for turning ideas into beautiful, functional digital experiences. I'm on an exciting journey of learning and growth in the world of web development.
              </p>
              
              <p className="text-gray-200 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                What started as curiosity about how websites work has evolved into a deep passion for <span className="text-cyan-300 font-semibold">front-end development</span> and <span className="text-cyan-300 font-semibold">UI/UX design</span>. I love the challenge of combining creativity with code to build interfaces that are both stunning and user-friendly.
              </p>
              
              <p className="text-gray-200 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                I believe that great design shouldn't be complicated—it should be intuitive, accessible, and delightful. Every project is an opportunity to learn something new and push my skills further.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Approach */}
          <div className="space-y-6 lg:space-y-8">
            {/* What I'm Learning Card */}
            <div className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                My Focus
              </h3>
              
              <div className="space-y-4 sm:space-y-5">
                <p className="text-gray-200 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  I  focus on building  <span className="text-cyan-300 font-semibold">responsive, scalable, and performance-driven applications</span>. Every project I work on is guided by clarity, usability, and purpose. My approach combines strategic thinking with attention to detail. From wireframes to deployment, I ensure each product delivers value and impact.
                </p>
                
                <p className="text-gray-200 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  I am constantly exploring new tools and trends to stay ahead in the evolving tech landscape. My ultimate goal is to <span className="text-cyan-300 font-semibold">craft seamless experiences</span> where design and technology work together harmoniously.
                </p>
                
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-300 text-sm sm:text-base">Always Learning</div>
              </div>
              <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">✨</div>
                <div className="text-gray-300 text-sm sm:text-base">Detail Oriented</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Centered Below */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 lg:mt-16">
          <a
            href="/FatimaUmerCV.pdf"
            download
            className="px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          
          <a
            href="/contact"
            className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-300 rounded-full font-semibold text-base sm:text-lg hover:bg-cyan-400/20 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Talk
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}