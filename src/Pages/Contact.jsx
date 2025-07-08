import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  Section,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const ContactCard = ({ icon: Icon, title, content, delay }) => (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      style={{
        animation: `slideInUp 0.8s ease-out ${delay}s both`,
      }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
      </div>
      <div className="text-gray-600 leading-relaxed">{content}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* SEO Meta Tags would go in document head */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden md:mt-4 text-white">
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-4 py-24 text-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-32 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto opacity-90 animate-fadeIn">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="w-24 h-1 bg-white mx-auto animate-pulse-slow"></div>
        </div>

        {/* Animated Background Elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div> */}
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            content={
              <div>
                <p className="font-semibold mb-2">Our Office</p>
                <p className="text-sm leading-relaxed">
                  47, Safal Industrial Estate
                  <br />
                  B/h. Zaveri Estate, Singarva
                  <br />
                  Daskroi, Ahmedabad - 382430
                  <br />
                  Gujarat, India
                </p>
              </div>
            }
            delay={0}
          />

          <ContactCard
            icon={Phone}
            title="Call Us"
            content={
              <div>
                <p className="font-semibold mb-2">Phone Number</p>
                <p className="text-sm mb-1">(+91) 903 347 1676</p>
                {/* <p className="text-sm">+91 98765 43210</p> */}
              </div>
            }
            delay={0.2}
          />

          <ContactCard
            icon={Mail}
            title="Email Us"
            content={
              <div>
                <p className="font-semibold mb-2">Email Addresses</p>
                <p className="text-sm mb-1">info@yourcompany.com</p>
                <p className="text-sm">support@yourcompany.com</p>
              </div>
            }
            delay={0.4}
          />

          <ContactCard
            icon={Clock}
            title="Business Hours"
            content={
              <div>
                <p className="font-semibold mb-2">Working Hours</p>
                <p className="text-sm mb-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-sm">Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-sm">Sun: Closed</p>
              </div>
            }
            delay={0.6}
          />
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Send Us a Message
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-green-800">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 cursor-pointer px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Find Us Here
            </h2>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117480.63618485052!2d72.53010712710598!3d23.05056526743708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s47%2C%20Safal%20Industrial%20Estate%2C%20B%2Fh.%20Zaveri%20Estate%2C%20Singarva%2C%20Daskroi%2C%20Ahmedabad%20%E2%80%93%20382430%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1751870744467!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
              ></iframe>
            </div>
            <div className="mt-7 p-4 flex flex-wrap gap-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  "47, Safal Industrial Estate, B/h. Zaveri Estate, Singarva, Daskroi, Ahmedabad - 382430 INDIA"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Directions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Located in the heart of Hanumantha Nagar, our office is easily
                accessible by public transport. The nearest metro station is
                just 2 km away, and ample parking is available for visitors.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your vision to life.
          </p>
          <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactPage;
