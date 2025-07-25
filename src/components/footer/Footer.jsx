import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="bg-white">
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
                  <Link
                    to={"/pouch-packaging-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Pouch Packaging Machine
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/single-head-ropp-capping-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Single Head ROPP Capping Machine
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/oil-cap-slitting-and-folding-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Oil Cap Slitting And Folding Machine
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cap-slitting-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Cap Slitting Machine
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cap-slitting-and-folding-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Cap Slitting And Folding Machine
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/automatic-pouch-packaging-machine"}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Automatic Pouch Packaging Machine
                  </Link>
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
                    <p>
                      47, Safal Industrial Estate, B/h. Zaveri Estate, Singarva
                    </p>
                    <p> Daskroi, Ahmedabad - 382430</p> <p>Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-600 flex-shrink-0" size={20} />
                  <a
                    href="tel:+919033471676"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    +91 90334-71676
                  </a>
                </div>
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
              | © 2024 TM TECH MAKE Ltd. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
