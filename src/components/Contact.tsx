"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "yo.fujimoto7@gmail.com",
  },
  {
    icon: "fa-globe",
    label: "Website",
    value: "https://sunlit-path.com",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Location",
    value: "Tokyo, Japan",
  },
  {
    icon: "fa-user",
    label: "Built by",
    value: "Yo Fujimoto",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:yo.fujimoto7@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-light flex items-center gap-4 transition-all duration-300 hover:shadow-medium"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${info.icon} text-white`}></i>
                </div>
                <div>
                  <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="text-[#2c3e50] font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-medium">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#e9ecef] rounded-lg focus:border-[#ff6b35] focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#e9ecef] rounded-lg focus:border-[#ff6b35] focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#e9ecef] rounded-lg focus:border-[#ff6b35] focus:outline-none focus:ring-4 focus:ring-[#ff6b35]/10 transition-all duration-300 resize-vertical"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-gradient-sunset text-white font-semibold rounded-xl shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#2c3e50] mb-3">
                  Thank you for your message!
                </h3>
                <p className="text-[#7f8c8d]">
                  We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
