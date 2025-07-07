import React, { useState, useEffect } from "react";
import {
  Star,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Heart,
  Share2,
  ZoomIn,
  Package,
  Settings,
  Award,
  Users,
  Clock,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";
import CapSlittingMachineImage from "../../../assets/CapSlittingMachine.jpeg";

const CapSlittingMachine = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const productImages = [CapSlittingMachineImage];

  const specifications = [
    { label: "Model", value: "TM-PP-500" },
    { label: "Capacity", value: "30-120 pouches/min" },
    { label: "Pouch Size", value: "Width: 50-200mm, Length: 70-300mm" },
    { label: "Film Thickness", value: "0.06-0.12mm" },
    { label: "Power", value: "3.5 KW" },
    { label: "Voltage", value: "220V/380V, 50Hz" },
    { label: "Machine Weight", value: "800 kg" },
    { label: "Dimensions", value: "2200×1100×1900mm" },
    { label: "Material", value: "SS304 Food Grade" },
    { label: "Sealing Type", value: "Heat Sealing" },
  ];

  const features = [
    "Fully Automatic Operation",
    "PLC Control System",
    "Touch Screen Interface",
    "Servo Motor Drive",
    "Adjustable Sealing Temperature",
    "Emergency Stop Function",
    "Easy Maintenance",
    "Food Grade Construction",
  ];

  const applications = [
    "Snack Foods",
    "Pharmaceuticals",
    "Cosmetics",
    "Beverages",
    "Dairy Products",
    "Confectionery",
    "Frozen Foods",
    "Pet Foods",
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Efficiency",
      desc: "Increases production by 40%",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      desc: "Consistent sealing quality",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Operation",
      desc: "User-friendly interface",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Saving",
      desc: "Reduces manual labor",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Krishna Foods Pvt Ltd",
      rating: 5,
      comment: "Excellent machine with great performance. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      company: "Organic Products Co.",
      rating: 5,
      comment:
        "Outstanding quality and service. Very satisfied with the purchase.",
    },
    {
      name: "Amit Patel",
      company: "Snack Master Industries",
      rating: 4,
      comment: "Good machine, reliable performance. Great value for money.",
    },
  ];

  useEffect(() => {
    document.title =
      "Pouch Packaging Machine - TM Tech Make | High-Quality Packaging Solutions";

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Pouch Packaging Machine TM-PP-500",
      manufacturer: {
        "@type": "Organization",
        name: "TM Tech Make",
      },
      description:
        "High-quality automatic pouch packaging machine for various industries",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setIsImageZoomed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-blue-600">
              Packaging Machines
            </a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Pouch Packaging Machine</span>
          </nav>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={productImages[selectedImage]}
                  alt="Pouch Packaging Machine"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={() => handleImageClick(selectedImage)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex space-x-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Cap Slitting Machine
              </h1>
              <p className="text-xl text-gray-600 mb-4">Model: KGN-CSM-100</p>

              <div className="flex items-center space-x-4 mb-6">
                {/* <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-gray-600 ml-2">
                    (4.8/5) - 127 Reviews
                  </span>
                </div> */}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Starting Price</p>
                    <p className="text-3xl font-bold text-green-600 flex items-center">
                      <IndianRupee className="w-6 h-6 mr-1" />
                      1,10,000
                    </p>
                    <p className="text-sm text-gray-500">
                      *Price may vary based on specifications
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      In Stock
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                The KGN-CSM-100 is a compact and efficient semi-automatic cap
                slitting machine designed for precise and uniform slitting of
                plastic caps. Ideal for medium-scale bottle cap production units
                and packaging operations, it features a stainless steel body for
                durability and hygiene, along with semi-automatic operation
                equipped with safety controls. The machine is fitted with
                high-precision slitting blades and is suitable for various cap
                sizes, typically ranging from 28mm to 46mm. It offers adjustable
                slitting depth and blade positioning to accommodate different
                production needs. Additional features include an emergency stop
                button for enhanced operator safety and a compact footprint that
                makes it easy to install and operate in limited space.
              </p>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-blue-600 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"tel:+919033471676"}>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Get Quote Now
                </button>
              </Link>
              <Link to={"tel:+919033471676"}>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
                  Request Demo
                </button>
              </Link>
            </div>

            {/* Additional Actions */}
            {/* <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isWishlisted
                      ? "bg-red-50 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TM Tech Make?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h4>
              <p className="text-sm text-gray-600">
                ISO certified manufacturing with rigorous quality control
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Expert Support
              </h4>
              <p className="text-sm text-gray-600">
                24/7 technical support and maintenance services
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h4>
              <p className="text-sm text-gray-600">
                Quick installation and commissioning nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Warranty</h4>
              <p className="text-sm text-gray-600">
                Comprehensive warranty with spare parts support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Packaging?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts for a customized solution that meets
              your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 90334 71676</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@tmtechmake.com</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Delhi, India</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to={"tel:+919033471676"}>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 cursor-pointer">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isImageZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={productImages[selectedImage]}
              alt="Zoomed Product"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CapSlittingMachine;
