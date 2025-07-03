// import React, { useState } from "react";
// import {
//   ChevronDown,
//   Phone,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Youtube,
//   Twitter,
//   MessageCircle,
//   Menu,
//   X,
// } from "lucide-react";

// export default function Hero() {
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const languages = [
//     "English",
//     "Hindi",
//     "Spanish",
//     "French",
//     "German",
//     "Chinese",
//     "Japanese",
//     "Korean",
//     "Arabic",
//     "Russian",
//   ];

//   const translations = {
//     English: {
//       home: "Home",
//       aboutUs: "About Us",
//       products: "Products",
//       investors: "Investors",
//       newsEvents: "News & Events",
//       careers: "Careers",
//       blogs: "Blogs",
//       contactUs: "Contact Us",
//       downloadCatalogue: "Download Catalogue",
//       discoverPower: "Discover the Power of",
//       cuttingEdge: "CUTTING-EDGE TECHNOLOGY",
//       riceMilling: "in our Advanced Rice Milling Process",
//       poweredBy: "Powered by",
//     },
//     Hindi: {
//       home: "होम",
//       aboutUs: "हमारे बारे में",
//       products: "उत्पाद",
//       investors: "निवेशक",
//       newsEvents: "समाचार और घटनाएं",
//       careers: "करियर",
//       blogs: "ब्लॉग",
//       contactUs: "संपर्क करें",
//       downloadCatalogue: "कैटलॉग डाउनलोड करें",
//       discoverPower: "की शक्ति की खोज करें",
//       cuttingEdge: "अत्याधुनिक प्रौद्योगिकी",
//       riceMilling: "हमारी उन्नत चावल मिलिंग प्रक्रिया में",
//       poweredBy: "द्वारा संचालित",
//     },
//     Spanish: {
//       home: "Inicio",
//       aboutUs: "Sobre Nosotros",
//       products: "Productos",
//       investors: "Inversionistas",
//       newsEvents: "Noticias y Eventos",
//       careers: "Carreras",
//       blogs: "Blogs",
//       contactUs: "Contáctanos",
//       downloadCatalogue: "Descargar Catálogo",
//       discoverPower: "Descubre el Poder de",
//       cuttingEdge: "TECNOLOGÍA DE VANGUARDIA",
//       riceMilling: "en nuestro Proceso Avanzado de Molienda de Arroz",
//       poweredBy: "Desarrollado por",
//     },
//   };

//   const currentTranslation =
//     translations[selectedLanguage] || translations.English;

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//   return (
//     <>
//       <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-white space-y-6">
//               <div className="space-y-4">
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
//                   {currentTranslation.discoverPower}
//                 </h1>
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text">
//                   {currentTranslation.cuttingEdge}
//                 </h2>
//                 <p className="text-xl md:text-2xl text-gray-300 font-light">
//                   {currentTranslation.riceMilling}
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-8">
//                 <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
//                   Learn More
//                 </button>
//                 <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
//                   Watch Demo
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Technology Visualization */}
//             <div className="relative">
//               <div className="relative w-full h-96 lg:h-[500px]">
//                 {/* Tablet/Device Mockup */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
//                   <div className="p-8 h-full">
//                     <div className="bg-blue-900 rounded-2xl h-full p-6 relative overflow-hidden">
//                       {/* Screen Content */}
//                       <div className="grid grid-cols-3 gap-4 h-full">
//                         <div className="space-y-4">
//                           <div className="bg-blue-700 rounded-lg h-16 animate-pulse"></div>
//                           <div className="bg-green-600 rounded-lg h-12 animate-pulse delay-300"></div>
//                           <div className="bg-yellow-500 rounded-lg h-20 animate-pulse delay-600"></div>
//                         </div>
//                         <div className="space-y-4">
//                           <div className="bg-purple-600 rounded-lg h-24 animate-pulse delay-200"></div>
//                           <div className="bg-red-500 rounded-lg h-16 animate-pulse delay-500"></div>
//                           <div className="bg-indigo-600 rounded-lg h-12 animate-pulse delay-800"></div>
//                         </div>
//                         <div className="space-y-4">
//                           <div className="bg-teal-500 rounded-lg h-20 animate-pulse delay-400"></div>
//                           <div className="bg-orange-500 rounded-lg h-14 animate-pulse delay-700"></div>
//                           <div className="bg-pink-500 rounded-lg h-18 animate-pulse delay-900"></div>
//                         </div>
//                       </div>

//                       {/* Floating Elements */}
//                       <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//                       <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-500"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Tech Elements */}
//                 <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80 animate-float"></div>
//                 <div className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full opacity-80 animate-float delay-1000"></div>
//                 <div className="absolute top-1/2 -right-16 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full opacity-80 animate-float delay-500"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating Action Buttons */}
//         <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
//           <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors relative">
//             <MessageCircle className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           </button>
//           <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
//             <Phone className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import HeroImage from "../../assets/Hero.png";
import HeroTwo from "../../assets/Hero2.png";
import HeroThree from "../../assets/Hero3.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover the Power of",
      highlight: "CUTTING-EDGE TECHNOLOGY",
      subtitle: "in our Advanced Rice Milling Process",
      image: HeroImage,
    },
    {
      id: 2,
      title: "Experience Excellence in",
      highlight: "PRECISION ENGINEERING",
      subtitle: "for Superior Rice Processing Solutions",
      image: HeroTwo,
    },
    {
      id: 3,
      title: "Revolutionize Your Business with",
      highlight: "INNOVATIVE MACHINERY",
      subtitle: "delivering Unmatched Performance & Quality",
      image: HeroThree,
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

            {/* Content */}
            {/* <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  {slide.title}
                </h1>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider">
                  {slide.highlight}
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-6">
                  {slide.subtitle}
                </p>

                
                <div className="mt-8 sm:mt-12">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
              <div className="relative">
                <div className="w-48 h-72 lg:w-56 lg:h-80 xl:w-64 xl:h-88 bg-gray-900 rounded-2xl shadow-2xl border-4 border-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-white bg-opacity-20 rounded-lg"
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs opacity-75">
                        Smart Control Panel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-20"
      >
        <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-20"
      >
        <ChevronRight size={32} className="sm:w-10 sm:h-10" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 flex flex-col space-y-3 z-30">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
          <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
          <Phone size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30 z-20">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div> */}
    </div>
  );
};

export default Hero;
