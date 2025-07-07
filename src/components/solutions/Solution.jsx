import React, { useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Wheat,
  Settings,
  HardHat,
  Wrench,
  Droplet,
} from "lucide-react";
import CapSlittingAndFoldingMachine from "../../assets/CapSlittingAndFoldingMachine.jpeg";
import CapSlittingMachine from "../../assets/CapSlittingMachine.jpeg";
import OilCapSlittingAndFoldingMachine from "../../assets/OilCapSlittingAndFoldingMachine.jpeg";
import PouchPackagingMachine from "../../assets/PouchPackagingMachine.jpeg";
import PouchPackagingMachineOne from "../../assets/PouchPackagingMachineOne.jpeg";
import SingleHeadROPPCappingMachine from "../../assets/SingleHeadROPPCappingMachine.jpeg";
import { useNavigate } from "react-router-dom";

const SolutionsShowcase = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const solutions = [
    {
      id: 1,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Pouch Packaging Machine",
      description:
        "Our advanced Cap Making Machine offers a reliable, high-speed solution for manufacturing caps with precision and efficiency...",
      image: PouchPackagingMachine,
      link: "/pouch-packaging-machine",
    },
    {
      id: 2,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Single Head ROPP Capping Machine",
      description:
        "Our Filling Machine provides a fast, accurate, and hygienic solution for filling liquids or semi-liquids into containers...",
      image: SingleHeadROPPCappingMachine,
      link: "/single-head-ropp-capping-machine",
    },
    {
      id: 3,
      icon: <Droplet className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Oil Cap Slitting And Folding Machine",
      description:
        "Our Liquid Filling Machine delivers precise, efficient, and contamination-free filling for a wide range of liquid products. Designed for speed...",
      image: OilCapSlittingAndFoldingMachine,
      link: "/pouch-packaging-machine",
    },
    {
      id: 4,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Cap Slitting Machine",
      description:
        "Our Folding Machine offers a fast and accurate solution for folding materials with consistent precision. Built for high-performance ...",
      image: CapSlittingMachine,
      link: "/pouch-packaging-machine",
    },
    {
      id: 5,
      icon: <Wrench className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Cap Slitting And Folding Machine",
      description:
        "Our Packaging Machine streamlines the packing process with speed, precision, and reliability. Designed to handle various product types...",
      image: CapSlittingAndFoldingMachine,
      link: "/pouch-packaging-machine",
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          const cardWidth = 320; // Approximate card width including margin

          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            // Reset to beginning
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll to next card
            scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
      }, 3000); // Auto scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    // Restart auto scroll when mouse leaves
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = 320;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  return (
    <section
      id="product"
      className="py-16 px-4 bg-gray-50"
      role="region"
      aria-label="Our Solutions"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive industrial solutions designed to meet your specific
            requirements with cutting-edge technology and expert support.
          </p>
        </header>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {solutions.map((solution) => (
              <article
                key={solution.id}
                className="flex-none w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={`${solution.title} - Industrial solution`}
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {solution.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <button
                    onClick={() => navigate(solution.link)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 group/btn"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {solutions.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300"
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SolutionsShowcase;
