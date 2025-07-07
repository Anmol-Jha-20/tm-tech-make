import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Package,
  Settings,
  Zap,
  Award,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(new Set());

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "packaging", name: "Packaging Machines", icon: Package },
    { id: "elevator", name: "Cap Elevator Machines", icon: Settings },
    { id: "slitting", name: "Slitting Machines", icon: Zap },
  ];

  const products = [
    {
      id: 1,
      name: "Automatic Packaging Machine",
      category: "packaging",
      price: "₹2,50,000",
      image: "/api/placeholder/400/300",
      features: [
        "High Speed Operation",
        "Automated Control",
        "Quality Sealing",
      ],
      rating: 4.8,
      description:
        "Advanced automatic packaging solution for industrial applications",
    },
    {
      id: 2,
      name: "Cap Elevator Machine Pro",
      category: "elevator",
      price: "₹1,80,000",
      image: "/api/placeholder/400/300",
      features: [
        "Efficient Cap Handling",
        "Adjustable Speed",
        "Durable Construction",
      ],
      rating: 4.9,
      description: "Professional grade cap elevator for high-volume production",
    },
    {
      id: 3,
      name: "Industrial Slitting Machine",
      category: "slitting",
      price: "₹3,20,000",
      image: "/api/placeholder/400/300",
      features: ["Precision Cutting", "Variable Speed", "Safety Features"],
      rating: 4.7,
      description:
        "Heavy-duty slitting machine for various material processing",
    },
    {
      id: 4,
      name: "Semi-Automatic Packaging Unit",
      category: "packaging",
      price: "₹1,45,000",
      image: "/api/placeholder/400/300",
      features: ["User Friendly", "Cost Effective", "Reliable Performance"],
      rating: 4.6,
      description: "Ideal packaging solution for small to medium enterprises",
    },
    {
      id: 5,
      name: "High-Speed Cap Elevator",
      category: "elevator",
      price: "₹2,10,000",
      image: "/api/placeholder/400/300",
      features: ["Ultra Fast", "Low Maintenance", "Compact Design"],
      rating: 4.8,
      description: "High-performance cap elevator for maximum efficiency",
    },
    {
      id: 6,
      name: "Precision Slitting System",
      category: "slitting",
      price: "₹4,50,000",
      image: "/api/placeholder/400/300",
      features: ["Laser Precision", "Automated Feed", "Quality Control"],
      rating: 4.9,
      description: "State-of-the-art slitting system with advanced controls",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProducts(
              (prev) => new Set([...prev, entry.target.dataset.productId])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll("[data-product-id]");
    productElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  const ProductCard = ({ product, index }) => {
    const isVisible = visibleProducts.has(product.id.toString());

    return (
      <div
        data-product-id={product.id}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="relative overflow-hidden">
          <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Package className="w-20 h-20 text-white opacity-80" />
          </div>
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="space-y-2 mb-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              {product.price}
            </span>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group">
              Inquire Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags would go in document head */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              TM Tech Make
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Leading Manufacturer of Premium Industrial Machines
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Packaging Machines
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Cap Elevator Machines
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Slitting Machines
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Premium quality machines with industry-leading standards
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Engineering</h3>
              <p className="text-gray-600">
                Designed and manufactured by experienced professionals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-gray-600">
                Efficient and reliable machines for maximum productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of industrial machines designed
              for excellence
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your industrial machine requirements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <span>info@tmtechmake.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <span>Delhi, India</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Quote Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 TM Tech Make. All rights reserved. Leading manufacturer of
            packaging machines, cap elevator machines, and slitting machines.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
