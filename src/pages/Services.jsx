import React from "react";
import { Code, Palette, Smartphone, Zap, Wrench, Shield, Check, MessageCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern websites and web applications using the latest technologies like React, Tailwind CSS, and JavaScript.",
      features: ["Responsive Design", "Modern Frameworks", "Clean Code", "Fast Performance"]
    },
    {
      id: 2,
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience, accessibility, and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices - from mobile phones to desktop computers with pixel-perfect precision.",
      features: ["Mobile First", "Cross-Browser", "Touch Friendly", "Optimized"]
    },
    {
      id: 4,
      icon: Zap,
      title: "Backend Web Development ",
      description:"Building secure, scalable, and high-performance server-side applications that manage data, handle business logic, and power seamless user experiences across web platforms.",
      features:  [
    "RESTful API Development",
    "Database Design & Management",
    "Authentication & Authorization",
    "Server Optimization & Security"
  ]
    },
    // {
    //   id: 5,
    //   icon: Wrench,
    //   title: "Website Maintenance",
    //   description: "Keeping your website up-to-date, secure, and running smoothly with regular updates and technical support.",
    //   features: ["Regular Updates", "Bug Fixes", "Security Patches", "Technical Support"]
    // },
    // {
    //   id: 6,
    //   icon: Shield,
    //   title: "Consultation & Support",
    //   description: "Providing expert advice and guidance on web technologies, best practices, and helping bring your digital vision to life.",
    //   features: ["Strategy Planning", "Tech Consulting", "Best Practices", "Ongoing Support"]
    // }
  ];

  return (
    <section 
      id="services" 
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
            <span className="text-white">What I</span>
            {" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Professional web development services tailored to your needs
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 transform">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                      <Check className="w-4 h-4 text-cyan-400 flex-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Ready to start your project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Let's Work Together
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}