import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Filter,
  Grid,
  List,
} from "lucide-react";
import PouchPackagingMachine from "../assets/PouchPackagingMachine.jpeg";
import SingleHeadROPPCappingMachine from "../assets/SingleHeadROPPCappingMachine.jpeg";
import OilCapSlittingAndFoldingMachine from "../assets/OilCapSlittingAndFoldingMachine.jpeg";
import CapSlittingMachine from "../assets/CapSlittingMachine.jpeg";
import CapSlittingAndFoldingMachine from "../assets/CapSlittingAndFoldingMachine.jpeg";
import AutomaticPouchPackagingMachine from "../assets/PouchPackagingMachineOne.jpeg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const TechGallery = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const galleryData = [
    {
      id: 1,
      title: "Pouch Packaging Machine",
      category: "packaging",
      image: PouchPackagingMachine,
      description:
        "Our advanced Cap Making Machine offers a reliable, high-speed solution for manufacturing caps with precision and efficiency...",
      link: "/pouch-packaging-machine",
    },
    {
      id: 2,
      title: "Single Head ROPP Capping Machine",
      category: "Capping",
      image: SingleHeadROPPCappingMachine,
      description:
        "Our Filling Machine provides a fast, accurate, and hygienic solution for filling liquids or semi-liquids into containers...",
      link: "/single-head-ropp-capping-machine",
    },
    {
      id: 3,
      title: "Oil Cap Slitting And Folding Machine",
      category: "slitting",
      image: OilCapSlittingAndFoldingMachine,
      description:
        "Our Liquid Filling Machine delivers precise, efficient, and contamination-free filling for a wide range of liquid products. Designed for speed...",
      link: "/oil-cap-slitting-and-folding-machine",
    },
    {
      id: 4,
      title: "Cap Slitting Machine",
      category: "cap-slitting",
      image: CapSlittingMachine,
      description:
        "Our Folding Machine offers a fast and accurate solution for folding materials with consistent precision. Built for high-performance ...",
      link: "/cap-slitting-machine",
    },
    {
      id: 5,
      title: "Cap Slitting And Folding Machine",
      category: "slitting-and-folding",
      image: CapSlittingAndFoldingMachine,
      description:
        "Our Packaging Machine streamlines the packing process with speed, precision, and reliability. Designed to handle various product types...",
      link: "/cap-slitting-and-folding-machine",
    },
    {
      id: 6,
      title: "Automatic Pouch Packaging Machine",
      category: "slitting-and-folding",
      image: AutomaticPouchPackagingMachine,
      description:
        "This is a Fully Automatic Vertical Form Fill Seal (VFFS) Pouch Packing Machine, model KGN-VFFS-100P, designed for efficient...",
      link: "/automatic-pouch-packaging-machine",
    },
  ];

  const categories = [
    { id: "all", name: "All Machines" },
    { id: "packaging", name: "Packaging" },
    { id: "cap-elevator", name: "Cap Elevator Machines" },
    { id: "slitting", name: "Slitting Machines" },
  ];

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* SEO Meta Tags (would be in document head in real implementation) */}
      <Helmet>
        <title>Our Gallery | TM Tech Make</title>
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
        <meta property="og:url" content="https://tmtechmake.com//gallery" />
      </Helmet>
      <div className="hidden">
        <h1>TM Tech Make - Industrial Machinery Gallery</h1>
        <meta
          name="description"
          content="Explore TM Tech Make's comprehensive gallery of packaging machines, cap elevator machines, slitting machines and industrial equipment. Leading manufacturer of quality machinery."
        />
        <meta
          name="keywords"
          content="packaging machine, cap elevator machine, slitting machine, industrial machinery, TM Tech Make"
        />
      </div>

      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  TM Tech Make
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  Industrial Machinery Gallery
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    setViewMode(viewMode === "grid" ? "list" : "grid")
                  }
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {viewMode === "grid" ? (
                    <List className="w-4 h-4 mr-2" />
                  ) : (
                    <Grid className="w-4 h-4 mr-2" />
                  )}
                  {viewMode === "grid" ? "List View" : "Grid View"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`relative ${
                  viewMode === "list" ? "w-1/3" : "w-full"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-cover ${
                    viewMode === "list" ? "h-full" : "h-64 w-full"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div
                className={`p-6 ${viewMode === "list" ? "w-2/3" : "w-full"}`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigate(item.link)}
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer "
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No machines found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechGallery;
