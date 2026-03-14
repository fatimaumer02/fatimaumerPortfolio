import React, { useState } from "react";

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState("all");

    const skills = [
        // Frontend Skills
        { id: 1, name: "HTML5", level: 90, category: "frontend" },
        { id: 2, name: "CSS3", level: 85, category: "frontend" },
        { id: 3, name: "React", level: 85, category: "frontend" },
        { id: 4, name: "Tailwind CSS", level: 90, category: "frontend" },
        { id: 5, name: "TypeScript", level: 75, category: "frontend" },
        { id: 6, name: "Next.js", level: 70, category: "frontend" },
        { id: 7, name: "Bootstrap", level: 65, category: "frontend" },
        { id: 8, name: "React Native", level: 65, category: "frontend" },
        { id: 9, name: "Expo", level: 65, category: "frontend" },

        // Backend Skills
        { id: 10, name: "Node.js", level: 80, category: "backend" },
        { id: 11, name: "Express.js", level: 78, category: "backend" },
        { id: 12, name: "MongoDB", level: 75, category: "backend" },
        { id: 13, name: "REST API", level: 85, category: "backend" },
        { id: 14, name: "Firebase", level: 72, category: "backend" },

        // Languages
        { id: 15, name: "JavaScript", level: 88, category: "languages" },
        // { id: 16, name: "TypeScript", level: 75, category: "languages" },
        { id: 17, name: "Python", level: 70, category: "languages" },
        { id: 18, name: "C++", level: 60, category: "languages" },

        // Tools
        { id: 29, name: "Git", level: 82, category: "tools" },
        { id: 20, name: "VS Code", level: 90, category: "tools" },
        { id: 21, name: "Figma", level: 78, category: "tools" },
        { id: 22, name: "Postman", level: 80, category: "tools" },
        { id: 23, name: "Vite", level: 80, category: "tools" },
    ];

    const filterButtons = [
        { id: "all", label: "All Skills" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend & DB" },
        { id: "languages", label: "Languages" },
        { id: "tools", label: "Tools" },
    ];

    const filteredSkills = activeFilter === "all"
        ? skills
        : skills.filter(skill => skill.category === activeFilter);

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Decorative floating bubbles */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                        <span className="text-white">My</span>
                        {" "}
                        <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
                        Technologies and tools I work with
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-16">
                    {filterButtons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => setActiveFilter(button.id)}
                            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 ${activeFilter === button.id
                                    ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/50'
                                    : 'bg-slate-800/50 dark:bg-gray-800/50 text-gray-300 border-2 border-cyan-500/30 hover:border-cyan-400/50 hover:bg-slate-800/70'
                                }`}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:-translate-y-2 group cursor-pointer"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: 'fadeIn 0.5s ease-in-out forwards',
                                opacity: 0
                            }}
                        >
                            {/* Skill Name */}
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                {skill.name}
                            </h3>

                            {/* Progress Bar */}
                            <div className="relative">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">Proficiency</span>
                                    <span className="text-cyan-400 font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300">{skill.level}%</span>
                                </div>
                                <div className="w-full h-3 bg-slate-800 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="h-full bg-linear-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-400 group-hover:to-blue-500 relative overflow-hidden"
                                        style={{
                                            width: `${skill.level}%`,
                                            animation: 'fillBar 1s ease-out forwards'
                                        }}
                                    >
                                        {/* Shine effect on hover */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-100% group-hover:translate-x-100% transition-transform duration-700"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* No skills message */}
                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No skills found in this category.</p>
                    </div>
                )}

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fillBar {
          from {
            width: 0;
          }
        }
      `}</style>
        </section>
    );
}