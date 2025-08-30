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
import PouchPackagingMachineImage from "../../../assets/PouchPackagingMachine.jpeg";
import PouchPackagingMachineOne from "../../../assets/PouchPackagingMachineOne.jpeg";
import { Helmet } from "react-helmet-async";

const PouchPackagingMachine = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const productImages = [PouchPackagingMachineImage];

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

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setIsImageZoomed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          Pouch Packaging Machine Manufacturer In Daskroi, Ahmedabad - Gujarat -
          TM TECH MAKE
        </title>
        <meta
          name="description"
          content="TM TECH MAKE based in Daskroi, Ahmedabad – Gujarat, is a leading manufacturer of Pouch Packaging Machines. Our machines provide efficient, high-speed packaging solutions suitable for various industries."
        />
        <link
          rel="canonical"
          href="https://tmteckmake.com/pouch-packaging-machine"
        />
      </Helmet>

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
                Pouch Packaging Machine
              </h1>
              <p className="text-xl text-gray-600 mb-4">Model: TM-PP-500</p>

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
                      1,80,000
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
                Our state-of-the-art Pouch Packaging Machine is designed for
                high-efficiency packaging across various industries. With
                advanced PLC control system and servo motor drive, it ensures
                consistent quality and optimal performance for your production
                needs.
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

        {/* Detailed Information Tabs */}
        {/* <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b">
              <div className="flex overflow-x-auto">
                {[
                  "overview",
                  "specifications",
                  "features",
                  "applications",
                  "reviews",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-8 py-4 font-medium text-sm uppercase tracking-wider transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Product Overview
                    </h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        The TM-PP-500 Pouch Packaging Machine represents the
                        pinnacle of packaging technology, designed to meet the
                        demanding requirements of modern manufacturing. This
                        versatile machine combines precision engineering with
                        user-friendly operation to deliver consistent,
                        high-quality packaging results.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Built with food-grade stainless steel construction, our
                        machine ensures hygienic packaging suitable for food,
                        pharmaceutical, and cosmetic applications. The advanced
                        PLC control system provides precise control over all
                        packaging parameters, while the servo motor drive
                        ensures smooth and accurate operation.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Whether you're packaging snacks, pharmaceuticals, or
                        cosmetics, this machine adapts to your specific needs
                        with adjustable settings and versatile configuration
                        options. The touch screen interface makes operation
                        intuitive, reducing training time and operational
                        errors.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {features.slice(0, 4).map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Performance Metrics
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Speed:</span>
                          <span className="font-semibold">
                            30-120 pouches/min
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Efficiency:</span>
                          <span className="font-semibold">95%+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Accuracy:</span>
                          <span className="font-semibold">±1mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Power:</span>
                          <span className="font-semibold">3.5 KW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Specifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium text-gray-900">
                          {spec.label}
                        </span>
                        <span className="text-gray-700 text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                      >
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-900 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Applications
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {applications.map((app, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200"
                      >
                        <Package className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900">{app}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Customer Reviews
                  </h3>
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {testimonial.company}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 italic">
                          "{testimonial.comment}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> */}

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

export default PouchPackagingMachine;
