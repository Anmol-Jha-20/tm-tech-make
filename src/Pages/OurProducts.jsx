import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";
import CapSlittingAndFoldingMachine from "../assets/CapSlittingAndFoldingMachine.jpeg";
import CapSlittingMachine from "../assets/CapSlittingMachine.jpeg";
import OilCapSlittingAndFoldingMachine from "../assets/OilCapSlittingAndFoldingMachine.jpeg";
import PouchPackagingMachine from "../assets/PouchPackagingMachine.jpeg";
import AutomaticPouchPackagingMachine from "../assets/PouchPackagingMachineOne.jpeg";
import SingleHeadROPPCappingMachine from "../assets/SingleHeadROPPCappingMachine.jpeg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Mock products/services data
const products = [
  {
    id: 1,
    name: "Pouch Packaging Machine",
    description:
      "Our advanced Cap Making Machine offers a reliable, high-speed solution for manufacturing caps with precision and efficiency...",
    image: PouchPackagingMachine,
    features: [
      "Automated Operation",
      "High Speed & Accuracy",
      "Adjustable Filling System",
      "Compact Design",
    ],
    category: "Pouch Packaging",
    badge: "Popular",
    link: "/pouch-packaging-machine",
  },
  {
    id: 2,
    name: "Single Head ROPP Capping Machine",
    description:
      "Our Filling Machine provides a fast, accurate, and hygienic solution for filling liquids or semi-liquids into containers...",
    image: SingleHeadROPPCappingMachine,
    features: [
      "Single Capping Head",
      "High Sealing Accuracy ",
      "Adjustable Torque",
      "Compact Design",
    ],
    category: "Capping",
    badge: "Trending",
    link: "/single-head-ropp-capping-machine",
  },
  {
    id: 3,
    name: "Oil Cap Slitting And Folding Machine",
    description:
      "Our Liquid Filling Machine delivers precise, efficient, and contamination-free filling for a wide range of liquid products. Designed for speed...",
    image: OilCapSlittingAndFoldingMachine,
    features: [
      "High-Speed Operation",
      "Adjustable Settings ",
      "Minimal Maintenance",
      "Compact Footprint",
    ],
    category: "Slitting And Folding",
    badge: "Premium",
    link: "/oil-cap-slitting-and-folding-machine",
  },
  {
    id: 4,
    name: "Cap Slitting Machine",
    description:
      "Our Folding Machine offers a fast and accurate solution for folding materials with consistent precision. Built for high-performance ...",
    image: CapSlittingMachine,
    features: [
      "User-Friendly Controls",
      "Low Maintenance",
      "High-Speed Performance",
      "Consistent Output Quality",
    ],
    category: "Slitting",
    badge: "New",
    link: "/cap-slitting-machine",
  },
  {
    id: 5,
    name: "Cap Slitting And Folding Machine",
    description:
      "Our Packaging Machine streamlines the packing process with speed, precision, and reliability. Designed to handle various product types...",
    image: CapSlittingAndFoldingMachine,
    features: [
      "Dual Functionality",
      "High Precision Operation",
      "High-Speed Performance ",
      "Consistent Quality Output",
    ],
    category: "Slitting And Folding",
    badge: "Expert",
    link: "/cap-slitting-and-folding-machine",
  },
  {
    id: 6,
    name: "Automatic Pouch Packaging Machine",
    description:
      "This is a Fully Automatic Vertical Form Fill Seal (VFFS) Pouch Packing Machine, model KGN-VFFS-100P, designed for efficient...",
    image: AutomaticPouchPackagingMachine,
    features: [
      "Fully Automatic Operation",
      "High-Speed Performance",
      "Stainless Steel Construction",
      "Compact & Modular Design",
    ],
    category: "Automatic Pouch Packaging",
    badge: "Reliable",
    link: "/automatic-pouch-packaging-machine",
  },
];

const categories = [
  "All",
  "Development",
  "Marketing",
  "Design",
  "Consulting",
  "Technology",
];

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  const animationDelay = index * 0.15;
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden group transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${animationDelay}s` : "0s",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">
            Key Features:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle
                  size={14}
                  className="text-green-500 flex-shrink-0"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(product.link)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Main Products Page Component
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [heroRef, heroVisible] = useIntersectionObserver(0.3);

  const filteredProducts = products.filter((product) => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Our Products | TM Tech Make</title>
        <meta
          name="description"
          content="Learn about TM Tech Make, a leading manufacturer of packaging machines, cap elevator machines, and slitting machines, delivering high-quality automation solutions worldwide."
        />
        <meta
          name="keywords"
          content="TM Tech Make Products, Packaging Machines, Cap Elevator Machines, Slitting Machines, Industrial Automation"
        />
        <meta name="author" content="Webvortex Solutions" />
        <meta property="og:title" content="Our Products | TM Tech Make" />
        <meta
          property="og:description"
          content="Discover our story, expertise, and milestones as a premier packaging machinery manufacturer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tmtechmake.com/our-products" />
      </Helmet>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative py-20 text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden transition-all duration-1000 ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0" />
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
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
              heroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-clip-text text-white">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Innovative solutions designed to transform your business and drive
              success
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={16} />
                <span>Trusted & Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Headphones size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Award size={16} />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
