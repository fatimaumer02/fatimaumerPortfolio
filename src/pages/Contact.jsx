import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms - Free form submission service
      // Sign up at https://web3forms.com to get your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          // This will send to the email you registered with Web3Forms
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@gmail.com",
      link: "https://fatimaumer862@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Faisalbad, Pakistan",
      link: null
    }
  ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       name: "LinkedIn",
//       link: "https://linkedin.com/in/yourprofile",
//       color: "hover:text-blue-400"
//     },
//     {
//       icon: Github,
//       name: "GitHub",
//       link: "https://github.com/yourusername",
//       color: "hover:text-gray-300"
//     },
//     {
//       icon: MessageCircle,
//       name: "Discord",
//       link: "https://discord.com/users/youruserid",
//       color: "hover:text-indigo-400"
//     }
//   ];

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative floating bubbles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Get In</span>
            {" "}
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
            <div className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-white text-base sm:text-lg hover:text-cyan-300 transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-base sm:text-lg">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              {/* <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-cyan-400/50 hover:scale-110 transition-all duration-300`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
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

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Follow Me
              </span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Connect with me on social media and let's stay in touch!
            </p>
          </div>

          {/* Social Links - 2 on left, 2 on right for larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/fatimaumer02"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-cyan-500/20 hover:border-blue-400/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-3 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Linkedin className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h4 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  LinkedIn
                </h4>
                
                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Professional Network
                </p>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </a>

            {/* Gmail */}
            <a
              href="mailto:fatimaumer862@gmail.com"
              className="group relative bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-cyan-500/20 hover:border-red-400/60 shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-3 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-linear-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h4 className="text-white font-bold text-xl mb-2 group-hover:text-red-300 transition-colors duration-300">
                  Gmail
                </h4>
                
                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Email Me
                </p>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/fatimaumer02"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-cyan-500/20 hover:border-gray-400/60 shadow-xl hover:shadow-2xl hover:shadow-gray-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-3 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-500/0 via-gray-500/20 to-gray-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-linear-to-br from-gray-500/20 to-gray-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Github className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h4 className="text-white font-bold text-xl mb-2 group-hover:text-gray-200 transition-colors duration-300">
                  GitHub
                </h4>
                
                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  View My Code
                </p>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/fatima_0217"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-cyan-500/20 hover:border-indigo-400/60 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-3 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-linear-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageCircle className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h4 className="text-white font-bold text-xl mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                  Discord
                </h4>
                
                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Let's Chat
                </p>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}