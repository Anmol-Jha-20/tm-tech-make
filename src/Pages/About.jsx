import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  Wrench,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.png";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    countries: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounters = () => {
      const targets = {
        experience: 15,
        clients: 500,
        projects: 1000,
        countries: 25,
      };

      const duration = 2000;
      const steps = 50;
      const increment = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          experience: Math.floor(targets.experience * progress),
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          countries: Math.floor(targets.countries * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description:
        "ISO certified manufacturing with stringent quality control processes",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Skilled engineers and technicians with decades of combined experience",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Solutions",
      description:
        "Tailored machinery solutions to meet your specific requirements",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Serving clients worldwide with reliable support and service",
    },
  ];

  const products = [
    "Pouch Packaging Machine",
    "Single Head ROPP Capping Machine",
    "Oil Cap Slitting And Folding Machine",
    "Cap Slitting Machine",
    "Cap Slitting And Folding Machine",
  ];

  const milestones = [
    {
      year: "2008",
      event: "Company Founded",
      desc: "Started our journey in packaging machinery",
    },
    {
      year: "2012",
      event: "First Export",
      desc: "Expanded to international markets",
    },
    {
      year: "2016",
      event: "ISO Certification",
      desc: "Achieved ISO 9001:2015 certification",
    },
    {
      year: "2020",
      event: "500+ Clients",
      desc: "Reached milestone of 500 satisfied clients",
    },
    {
      year: "2024",
      event: "Technology Upgrade",
      desc: "Implemented Industry 4.0 technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* SEO Meta Information */}
      <Helmet>
        <title>About Us | TM Tech Make</title>
        <meta
          name="description"
          content="Learn about TM Tech Make, a leading manufacturer of packaging machines, cap elevator machines, and slitting machines, delivering high-quality automation solutions worldwide."
        />
        <meta
          name="keywords"
          content="About TM Tech Make, Packaging Machines, Cap Elevator Machines, Slitting Machines, Industrial Automation"
        />
        <meta name="author" content="Webvortex Solutions" />
        <meta property="og:title" content="About Us | TM Tech Make" />
        <meta
          property="og:description"
          content="Discover our story, expertise, and milestones as a premier packaging machinery manufacturer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tmtechmake.com/about-us" />
        {/* <meta
          property="og:image"
          content="https://tmtechmake.com/og-image.jpg"
        /> */}
      </Helmet>

      <div className="hidden">
        <h1>TM Tech Make - Leading Packaging Machine Manufacturer</h1>
        <p>
          About TM Tech Make - Premier manufacturer of packaging machines, cap
          elevator machines, slitting machines and industrial automation
          equipment.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About TM Tech Make
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading the future of packaging technology with innovative
              solutions and uncompromising quality
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                📦 Packaging Solutions
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                🏭 Industrial Equipment
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                🌍 Global Presence
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the packaging industry,
                TM Tech Make has grown from a small workshop to a leading
                manufacturer of sophisticated packaging machinery. Established
                as a Proprietor firm in the year 2024, we “TM Tech Make” are a
                leading manufacturer of a wide range of Packaging Machines, Cap
                Elevator Machines, Slitting Machines, and more. Our journey
                began with a simple belief: that innovation and quality should
                never be compromised.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we stand as a testament to engineering excellence,
                serving diverse industries worldwide with our comprehensive
                range of packaging solutions including advanced packaging
                machines, cap elevator systems, and precision slitting
                equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/our-products">
                  <button className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    Our Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                {/* <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Our Products
                </button> */}
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <img src={Hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TM Tech Make?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology with decades of expertise to
              deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions for all your packaging and industrial
              automation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg font-medium">{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 mt-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Production?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative packaging solutions can optimize
            your operations and drive growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={"tel:+919033471676"}>
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                Get Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to={"/contact-us"}>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
