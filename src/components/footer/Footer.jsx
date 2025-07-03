import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white">
      {/* Fixed WhatsApp Button */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200">
            <MessageCircle size={24} />
          </button>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </div>
      </div> */}

      {/* Fixed Phone Button */}
      {/* <div className="fixed bottom-20 right-4 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200">
          <Phone size={24} />
        </button>
      </div> */}

      {/* Main Footer Content */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Commitment with Quality Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Commitment with Quality
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We believe in following a routing to deliver the best services
                  and products to our customers.
                </p>
                <p className="leading-relaxed">
                  With a health mindset and to deliver the best. We have 100%
                  customer satisfaction
                </p>
              </div>
            </div>

            {/* Our Expertise Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Our Expertise
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Turnkey Rice Mills Setup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Grain Processing Setup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Grain Based Distillery Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Bulk Material Handling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Engineering and Designing Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Contact Us
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-gray-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-700">
                    <p>F-16 & C-1, Sector A-3, Tronica City, Loni</p>
                    <p>Ghaziabad, U.P.</p>
                    <p>India 201102</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-600 flex-shrink-0" size={20} />
                  <a
                    href="mailto:inquiry@sonamachinery.com"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    inquiry@sonamachinery.com
                  </a>
                </div>

                {/* Phone */}
                {/* <div className="flex items-center space-x-3">
                  <Phone className="text-gray-600 flex-shrink-0" size={20} />
                  <a
                    href="tel:+91-9599-002201"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    +91-9599-002201
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline mr-2"
              >
                Terms And Conditions
              </a>
              | © 2024 Sona Machinery Ltd. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
