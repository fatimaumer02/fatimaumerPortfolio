import React from "react";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "0ab8f286-8ca9-4cff-a843-80732f864abe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
        console.error(data);
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "fatimaumer862@gmail.com", link: "mailto:fatimaumer862@gmail.com" },
    { icon: MapPin, title: "Location", value: "Faisalabad, Pakistan", link: null },
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com/in/fatimaumer02", color: "blue" },
    { icon: Mail, name: "Gmail", link: "mailto:fatimaumer862@gmail.com", color: "red" },
    { icon: Github, name: "GitHub", link: "https://github.com/fatimaumer02", color: "gray" },
    { icon: MessageCircle, name: "Discord", link: "https://discord.com/users/fatima_0217", color: "indigo" },
  ];

  const getColorScheme = (color) => {
    const schemes = {
      blue: { icon: "text-blue-400", bg: "from-blue-500/20 to-blue-600/20", glow: "from-blue-500/0 via-blue-500/20 to-blue-500/0", border: "hover:border-blue-400/60", shadow: "hover:shadow-blue-500/40" },
      red: { icon: "text-red-400", bg: "from-red-500/20 to-red-600/20", glow: "from-red-500/0 via-red-500/20 to-red-500/0", border: "hover:border-red-400/60", shadow: "hover:shadow-red-500/40" },
      gray: { icon: "text-gray-300", bg: "from-gray-500/20 to-gray-600/20", glow: "from-gray-500/0 via-gray-500/20 to-gray-500/0", border: "hover:border-gray-400/60", shadow: "hover:shadow-gray-500/40" },
      indigo: { icon: "text-indigo-400", bg: "from-indigo-500/20 to-indigo-600/20", glow: "from-indigo-500/0 via-indigo-500/20 to-indigo-500/0", border: "hover:border-indigo-400/60", shadow: "hover:shadow-indigo-500/40" }
    };
    return schemes[color];
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Decorative floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: "3s" }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: "4s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: "3.5s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: "2.5s" }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: "3s" }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Get In</span>{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 group-hover:text-gray-300 transition-colors">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="text-white text-base sm:text-lg hover:text-cyan-300 transition-colors duration-300 font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-base sm:text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Send Message
            </h3>
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-cyan-500/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {result && (
                <div
                  className={`p-4 rounded-lg text-center font-semibold ${
                    result.includes("✅") ? "bg-green-500/10 border border-green-500/30 text-green-400" : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Follow Me</span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">Connect with me on social media and let's stay in touch!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              const colorScheme = getColorScheme(social.color);
              
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-cyan-500/20 ${colorScheme.border} shadow-xl hover:shadow-2xl ${colorScheme.shadow} hover:scale-105 hover:-translate-y-3 overflow-hidden transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${colorScheme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 bg-linear-to-br ${colorScheme.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <IconComponent className={`w-10 h-10 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h4 className={`text-white font-bold text-xl mb-2 group-hover:${colorScheme.icon} transition-colors duration-300`}>{social.name}</h4>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}