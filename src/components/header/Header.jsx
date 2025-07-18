import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Russian",
  ];

  const translations = {
    English: {
      home: "Home",
      aboutUs: "About Us",
      products: "Products",
      investors: "Investors",
      newsEvents: "News & Events",
      careers: "Careers",
      blogs: "Blogs",
      contactUs: "Contact Us",
      downloadCatalogue: "Download Brochure",
      discoverPower: "Discover the Power of",
      cuttingEdge: "CUTTING-EDGE TECHNOLOGY",
      riceMilling: "in our Advanced Rice Milling Process",
      poweredBy: "Powered by",
    },
    Hindi: {
      home: "होम",
      aboutUs: "हमारे बारे में",
      products: "उत्पाद",
      investors: "निवेशक",
      newsEvents: "समाचार और घटनाएं",
      careers: "करियर",
      blogs: "ब्लॉग",
      contactUs: "संपर्क करें",
      downloadCatalogue: "कैटलॉग डाउनलोड करें",
      discoverPower: "की शक्ति की खोज करें",
      cuttingEdge: "अत्याधुनिक प्रौद्योगिकी",
      riceMilling: "हमारी उन्नत चावल मिलिंग प्रक्रिया में",
      poweredBy: "द्वारा संचालित",
    },
    Spanish: {
      home: "Inicio",
      aboutUs: "Sobre Nosotros",
      products: "Productos",
      investors: "Inversionistas",
      newsEvents: "Noticias y Eventos",
      careers: "Carreras",
      blogs: "Blogs",
      contactUs: "Contáctanos",
      downloadCatalogue: "Descargar Catálogo",
      discoverPower: "Descubre el Poder de",
      cuttingEdge: "TECNOLOGÍA DE VANGUARDIA",
      riceMilling: "en nuestro Proceso Avanzado de Molienda de Arroz",
      poweredBy: "Desarrollado por",
    },
  };

  const currentTranslation =
    translations[selectedLanguage] || translations.English;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              Call Us: +91-90334-71676
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <FaLinkedin className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <FaInstagram className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <FaFacebook className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <FaYoutube className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <FaTwitter className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={`${Logo}`}
                  className="w-full max-w-[847px] h-[64px]"
                  alt=""
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <Link
                to={"/"}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {currentTranslation.home}
              </Link>
              <div className="relative group">
                <Link to={"/about-us"}>
                  <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center cursor-pointer">
                    {currentTranslation.aboutUs}{" "}
                    {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                  </button>
                </Link>
              </div>
              <div className="relative group">
                <Link to="/our-products">
                  <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center cursor-pointer">
                    {currentTranslation.products}{" "}
                    {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                  </button>
                </Link>
              </div>

              <Link
                to={"/gallery"}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Gallery
              </Link>
              <Link
                to={"/contact-us"}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {currentTranslation.contactUs}
              </Link>
            </div>

            {/* Download Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm cursor-pointer">
                {currentTranslation.downloadCatalogue}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
              <Link
                to={"/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.home}
              </Link>
              <Link
                to={"/about-us"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.aboutUs}
              </Link>
              <Link
                to="/our-products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.products}
              </Link>
              <Link
                to={"/gallery"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to={"/contact-us"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.contactUs}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
