import React, { useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Wheat,
  Settings,
  HardHat,
  Wrench,
} from "lucide-react";

const SolutionsShowcase = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const solutions = [
    {
      id: 1,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Cap Making Machine",
      description:
        "Our advanced Cap Making Machine offers a reliable, high-speed solution for manufacturing caps with precision and efficiency...",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/454177302/QS/KW/OQ/84056891/bottle-cap-slitting-machine-250x250.jpg",
    },
    {
      id: 2,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Filling Machine",
      description:
        "Our Filling Machine provides a fast, accurate, and hygienic solution for filling liquids or semi-liquids into containers...",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/454178356/EW/OM/US/84056891/bpm-mineral-water-filling-capping-machine-250x250.jpeg",
    },
    {
      id: 3,
      icon: <Factory className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Liquid Filling Machine",
      description:
        "Our Liquid Filling Machine delivers precise, efficient, and contamination-free filling for a wide range of liquid products. Designed for speed...",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/6/428076351/UD/VP/DI/84056891/20231206-58266dce903d0a7037fb-250x250.png",
    },
    {
      id: 4,
      icon: <HardHat className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Folding Machine",
      description:
        "Customised Drawings, Designs and Consultation to fulfill your overall project requirements. Our turnkey ...",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/454176825/FP/JE/AC/84056891/cap-edge-folding-machine-250x250.jpg",
    },
    {
      id: 5,
      icon: <Wrench className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Packaging Machine",
      description:
        "Original, High Quality Spare Parts, easily available with timely delivery of requirements. The constant ...",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/454178113/WK/UW/PV/84056891/single-phase-pouch-packing-machine-250x250.jpg",
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

                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 group/btn">
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
