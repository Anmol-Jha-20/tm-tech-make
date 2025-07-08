import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import HeroTwo from "../../assets/Hero2.png";
import HeroThree from "../../assets/Hero3.png";
import HeroOne from "../../assets/HeroOne.png";
import HeroImage from "../../assets/Hero.png";
import HeroSevenImage from "../../assets/HeroSeven.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover the Power of",
      highlight: "CUTTING-EDGE TECHNOLOGY",
      subtitle: "in our Advanced Rice Milling Process",
      image: HeroSevenImage,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
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
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-screen flex-shrink-0 relative flex items-center justify-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Optional Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10" /> */}

            {/* Optional Content */}
            {/* <div className="relative z-20 text-white text-center px-4">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-light">
                {slide.title}
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
                {slide.highlight}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl mt-4">{slide.subtitle}</p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold">
                Learn More
              </button>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition duration-300 z-20"
      >
        <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition duration-300 z-20"
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
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition transform hover:scale-110">
          <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition transform hover:scale-110">
          <Phone size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
