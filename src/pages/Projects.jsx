import React from "react";
import { ExternalLink, Github } from "lucide-react";
import eventsystem from '../assets/event.png'
import restaurant from '../assets/restaurant.png'
import classpulse from '../assets/class.png'
import quiz from '../assets/quiz.png'
import car from '../assets/vehica.png'
import quote from '../assets/QM.png'
import portfolio from '../assets/portfolio.png'
import sjdesign from '../assets/SJ .png'
import tour from '../assets/tour.png'
import projmanag from '../assets/project.png'
import joke from '../assets/joke.png'
import cal from '../assets/calculator.png'
import profile from '../assets/profile-card.png'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Event Managemnent",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates and order tracking.",
      image: eventsystem,
      technologies: ["React", "TailwindCSS", "Firebase", "Figma"],
      liveLink: "https://event-management-system-hazel.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Event-Management-System",
      category: "Full Stack"
    },
     {
      id: 2,
      title: "Resturtant Website",
      description: "A modern and responsive restaurant website showcasing menus, services, and reservations. Built with HTML, CSS, and JavaScript for a seamless user experience.",
      image: restaurant,
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      liveLink: "https://restaurant-website-ucd9.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Restaurant-Website",
      category: "Frontend"
    },
       {
      id: 13,
      title: "Class Pulse App",
      description: "A responsive Class Pulse app UI that displays classroom schedules, notifications, or student progress in a clean interface.",
      image: classpulse,
      technologies: ["React Native", "Expo", "Tailwind CSS","Firebase" ],
      liveLink: "https://youtu.be/BlDR_A0ZH18?si=Mf2Cx55u7pZHM1bi",
      githubLink: "https://github.com/fatimaumer02/Class-Pulse-App",
      category: "Expo "
    },
    {
      id: 4,
      title: "Quiz App",
      description: "An interactive web-based quiz app that tests knowledge with multiple-choice questions. Built with HTML, CSS, and JavaScript for a fun and engaging experience.",
      image: quiz,
      technologies: ["HTML", "CSS", "JavaScript",],
      liveLink: "https://quiz-one-alpha-59.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Quiz",
      category: "Frontend"
    },

    {
      id: 3,
      title: "Car Website",
      description: "A sleek and interactive car-themed web interface showcasing UI/UX design principles. Built with HTML, CSS, and JavaScript.",
      image: car,
      technologies: ["HTML", "Bootstrap", "JavaScript", "Figma"],
      liveLink: "https://car-uiux.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/car-uiux",
      category: "UI/UX "
    },
      {
      id: 5,
      title: "Quote Keeper",
      description: "A simple app to save, view, and manage your favorite quotes. Built with React and JavaScript for a clean, responsive experience.",
      image: quote,
      technologies: ["React", "TailwindCSS", "Firebase", "Dribble"],
      liveLink: "https://km-quote-keeper-hqum.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/KM-QuoteKeeper",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Joke Generator ",
      description: "A fun web app that generates random jokes instantly. Built with HTML, CSS, and JavaScript for a simple, interactive experience.",
      image: joke,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://joke-generator-two-xi.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Joke-Generator",
      category: "Frontend"
    },
    {
      id: 7,
      title: "Portfolio",
      description: "A modern, responsive portfolio website with smooth animations, dark mode support, and interactive UI elements. Built with HTML and  CSS.",
      image: portfolio,
      technologies: ["HTML", "CSS", "Figma", ],
      liveLink: "https://portfolio-sooty-pi-wfvp8x4e1y.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Portfolio-",
      category: "UI/UX "
    },
     {
      id: 8,
      title: "Task Manager",
      description: "A modern, responsive portfolio website with smooth animations, dark mode support, and interactive UI elements. Built with HTML and  CSS.",
      image: "/projects/blog.jpg",
      technologies: ["ReactJS", "TailwindCSS", "Mongodb","Express.JS" ],
      liveLink: "https://portfolio-sooty-pi-wfvp8x4e1y.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Portfolio-",
      category: "UI/UX "
    },
     {
      id: 9,
      title: "SJ Desgin",
      description: "A modern and responsive UI/UX designer portfolio website showcasing skills, services, and design projects. Built with HTML and CSS for a clean, professional presentation.",
      image: sjdesign,
      technologies: ["HTML", "CSS", "Figma", ],
      liveLink: "https://sj-desgin.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/SJ-Desgin",
      category: "UI/UX "
    },
      {
      id: 10,
      title: "Tour Website",
      description: "A responsive tour website showcasing travel destinations and services with a clean design. Built with HTML and CSS for a smooth browsing experience.",
      image: tour,
      technologies: ["HTML", "CSS",  ],
      liveLink: "https://tour-website-jjh9.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Tour-Website",
      category: "UI/UX "
    },
      {
      id: 11,
      title: "Profile Card",
      description: "A clean and responsive profile card UI component built with HTML and CSS to showcase user information like name, image, and social details.",
      image: profile,
      technologies: ["HTML", "CSS", "Figma", ],
      liveLink: "https://profile-card-rho-ochre.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Profile-card",
      category: "UI/UX "
    },
      {
      id: 12,
      title: "Project Management",
      description: "A modern, responsive portfolio website with smooth animations, dark mode support, and interactive UI elements. Built with HTML and  CSS.",
      image: projmanag,
      technologies: ["HTML", "CSS", "Figma", ],
      liveLink: "https://project-management-eight-psi.vercel.app/",
      githubLink: "https://github.com/fatimaumer02/Project-Management-",
      category: "UI/UX "
    },
     {
      id: 13,
      title: "Calculate",
      description: "A responsive Class Pulse app UI that displays classroom schedules, notifications, or student progress in a clean interface.",
      image: cal,
      technologies: ["Html","CSS", "JavaScript" ],
      liveLink: "https://youtu.be/BlDR_A0ZH18?si=Mf2Cx55u7pZHM1bi",
      githubLink: "https://github.com/fatimaumer02/Class-Pulse-App",
      category: "Frontend"
    },

  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-800 via-blue-800 to-slate-800 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Featured</span>
            {" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 transform-gpu hover:-translate-y-2 hover:rotate-1"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow" style={{ filter: 'blur(8px)', animationDuration: '3s' }}></div>
                </div>

                {/* Inner content wrapper */}
                <div className="relative bg-slate-900/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/60 transition-all duration-500">
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56 bg-linear-to-br from-slate-800 to-blue-900"> <img src={project.image} alt="" className="h-58" />
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    {/* Animated light beam effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Ripple effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-cyan-400/30 group-hover:w-96 group-hover:h-96 transition-all duration-700"></div>
                    
                    {/* Category Badge with hover animation */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full transform group-hover:scale-110 group-hover:bg-cyan-400 transition-all duration-300">
                      {project.category}
                    </div>

                    {/* Overlay with animated gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300">  </div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8 relative">
                 
                    {/* Glowing corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-400/0 via-cyan-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Title with gradient text on hover */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:bg-linear-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 transform group-hover:translate-x-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies with staggered animation */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full text-xs font-medium group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                          style={{ 
                            transitionDelay: `${idx * 50}ms`,
                            transform: 'translateZ(20px)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links with enhanced hover effects */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn"
                      >
                        <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-cyan-400 text-cyan-300 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Code</span>
                      </a>
                    </div>

                    {/* Bottom glow effect */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/fatimaumer02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">View GitHub Profile</span>
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}