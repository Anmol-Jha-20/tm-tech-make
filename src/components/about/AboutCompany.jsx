import React from "react";
import { ChevronRight } from "lucide-react";
import Hero from "../../assets/Hero.png";
import Hero2 from "../../assets/Hero2.png";
import { Link } from "react-router-dom";

export default function AboutCompany() {
  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            id="about-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About Company
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Team Photo */}
            <div className="relative">
              <img
                src={Hero2}
                alt="Sona Machinery team members celebrating together in their manufacturing facility"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Company Description */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Leaders in Packaging Machinery Manufacturing Industry
                </h3>
                <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                <p className="text-lg font-semibold text-orange-600">
                  TM Tech Make
                </p>
              </div>

              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  Established as a Proprietor firm in the year 2024, we “TM Tech
                  Make” are a leading Manufacturer of a wide range of Packaging
                  Machine, Cap Elevator Machine, Slitting Machine etc.
                </p>
              </div>

              {/* More About Us Link */}
              <div className="pt-4">
                <Link to={"/about-us"}>
                  <button
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group cursor-pointer"
                    aria-label="Learn more about Sona Machinery"
                  >
                    <span className="underline decoration-2 underline-offset-4 hover:decoration-blue-800">
                      More About Us
                    </span>
                    <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Industrial Facility */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={Hero}
                alt="Modern industrial manufacturing facility with advanced machinery and equipment at Sona Machinery"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>

              {/* Overlay Elements */}
              {/* <div className="absolute bottom-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Production Active
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Stats Cards */}
            {/* <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Quality Manufacturing
            </h4>
            <p className="text-gray-600">
              Premium quality agro-processing machinery built to international
              standards
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Expert Team
            </h4>
            <p className="text-gray-600">
              Experienced professionals dedicated to delivering innovative
              solutions
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Proven Results
            </h4>
            <p className="text-gray-600">
              Trusted by clients across India for reliable and efficient
              machinery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
