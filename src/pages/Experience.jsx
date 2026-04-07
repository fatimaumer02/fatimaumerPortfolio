import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Arch Technology.",
      period: "Feb 2026 - March 2026",
      location: "Remote",
      description: "Building responsive web applications using React and Tailwind CSS. Collaborating with design teams to create intuitive user interfaces.",
      skills: ["React Js", "Tailwind CSS",  "Git", "Node.js"]
    },
    // {
    //   id: 2,
    //   title: "Web Development Bootcamp",
    //   company: "CodeAcademy Pro",
    //   period: "Sep 2023 - Dec 2023",
    //   location: "Online",
    //   description: "Completed intensive full-stack web development program. Built multiple projects including e-commerce sites and portfolio websites.",
    //   skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    // },
    // {
    //   id: 3,
    //   title: "Freelance Web Designer",
    //   company: "Self-Employed",
    //   period: "Jun 2023 - Aug 2023",
    //   location: "Remote",
    //   description: "Designed and developed custom websites for small businesses. Focused on creating modern, mobile-responsive designs.",
    //   skills: ["UI/UX Design", "Figma", "HTML/CSS", "WordPress"]
    // }
  ];

  return (
    <section 
      id="experience" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute top-40 left-20 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">My</span>
            {" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            My journey in web development and design
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-400 via-blue-500 to-cyan-400 opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 z-10"></div>

                {/* Spacer for centering */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12'}`}>
                  <div className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                    {/* Period Badge */}
                    <div className="inline-block px-4 py-1.5 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full mb-4">
                      <span className="text-cyan-300 text-sm font-semibold">{exp.period}</span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-cyan-400 font-semibold text-base sm:text-lg">
                        {exp.company}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm sm:text-base">
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}