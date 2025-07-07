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

const TechGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);

  // Sample gallery data - replace with your actual machine images
  const galleryData = [
    {
      id: 1,
      title: "Pouch Packaging Machine",
      category: "packaging",
      image: PouchPackagingMachine,
      description:
        "Our advanced Cap Making Machine offers a reliable, high-speed solution for manufacturing caps with precision and efficiency...",
    },
    {
      id: 2,
      title: "Single Head ROPP Capping Machine",
      category: "Capping",
      image: SingleHeadROPPCappingMachine,
      description:
        "Our Filling Machine provides a fast, accurate, and hygienic solution for filling liquids or semi-liquids into containers...",
    },
    {
      id: 3,
      title: "Oil Cap Slitting And Folding Machine",
      category: "slitting",
      image: OilCapSlittingAndFoldingMachine,
      description:
        "Our Liquid Filling Machine delivers precise, efficient, and contamination-free filling for a wide range of liquid products. Designed for speed...",
    },
    {
      id: 4,
      title: "Cap Slitting Machine",
      category: "cap-slitting",
      image: CapSlittingMachine,
      description:
        "Our Folding Machine offers a fast and accurate solution for folding materials with consistent precision. Built for high-performance ...",
    },
    {
      id: 5,
      title: "Cap Slitting And Folding Machine",
      category: "slitting-and-folding",
      image: CapSlittingAndFoldingMachine,
      description:
        "Our Packaging Machine streamlines the packing process with speed, precision, and reliability. Designed to handle various product types...",
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

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const currentIndex = filteredData.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredData.length;
    setSelectedImage(filteredData[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredData.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredData.length) % filteredData.length;
    setSelectedImage(filteredData[prevIndex]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* SEO Meta Tags (would be in document head in real implementation) */}
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
        {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              Filter by Category
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div> */}

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
              onClick={() => openModal(item)}
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
                  {/* <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {categories.find((cat) => cat.id === item.category)?.name ||
                      "Machine"}
                  </span> */}
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.name
                    }
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">TM Tech Make</h3>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of packaging machines, cap elevator machines,
              and slitting machines
            </p>
            <p className="text-gray-400">
              Quality machinery for industrial excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechGallery;
