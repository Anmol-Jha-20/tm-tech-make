import React from "react";
import {
  Package,
  Cog,
  MapPin,
  CheckCircle,
  Factory,
  Truck,
  Star,
  ArrowRight,
} from "lucide-react";
import pouchpackagingmachineimage from "../../assets/PouchPackagingMachineTwo.png";
import SingleHeadRoppImage from "../../assets/SingleHeadROPPCappingMachine.jpeg";
import OilCapSlittingAndFolding from "../../assets/OilCapSlittingAndFoldingMachine.jpeg";

export default function TmtRollingMillBlog() {
  const cities = [
    { name: "Ahmedabad", specialty: "Packaging Machine Manufacturers" },
    { name: "Surat", specialty: "Food & Beverage Packaging" },
    { name: "Vadodara", specialty: "Cap Slitting Machines" },
    { name: "Rajkot", specialty: "ROPP Capping Equipment" },
    { name: "Gandhinagar", specialty: "Automatic Solutions" },
  ];

  const machines = [
    {
      title: "Pouch Packaging Machines",
      description: "High-speed automated solutions for FMCG packaging",
      features: [
        "Fully Automatic",
        "Cost-Efficient",
        "Airtight Sealing",
        "Minimal Human Intervention",
      ],
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: "ROPP Capping Machines",
      description: "Secure tamper-proof bottle sealing solutions",
      features: [
        "Single Head Mechanism",
        "Tamper-Proof Sealing",
        "Compact Design",
        "Glass & PET Compatible",
      ],
      icon: <Cog className="w-6 h-6" />,
    },
    {
      title: "Cap Slitting & Folding",
      description: "Precision cutting and folding for tamper-evident caps",
      features: [
        "Clean Accurate Slits",
        "High-Speed Operations",
        "Minimal Maintenance",
        "Increased Efficiency",
      ],
      icon: <Factory className="w-6 h-6" />,
    },
  ];

  const industries = [
    "FMCG Packaging",
    "Pharmaceutical Bottling",
    "Edible Oil Industry",
    "Beverage & Liquor Packaging",
    "Agrochemical & Pesticide Packaging",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags would be handled by your app's head management */}

      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Best Packaging & Capping Machines in Gujarat
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover top-quality pouch packaging machines, ROPP capping
              machines, cap slitting and folding units across Ahmedabad, Rajkot,
              Surat, Vadodara & Gandhinagar
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {cities.map((city, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  {city.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gujarat: India's Packaging Hub
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Gujarat stands as one of India's fastest-growing industrial
                hubs, home to countless manufacturing units and packaging
                plants. With robust infrastructure and business-friendly
                policies, cities like Ahmedabad, Surat, Vadodara, Rajkot, and
                Gandhinagar drive the development of India's packaging and
                bottling industries.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The growing demand for high-speed, automated solutions has led
                companies to invest in top-quality equipment, making Gujarat the
                go-to destination for packaging machinery.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Growth Segments
              </h3>
              <div className="space-y-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Packaging Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of packaging machinery designed
              for various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {machine.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {machine.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {machine.description}
                  </p>
                  <div className="space-y-2">
                    {machine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-wise Suppliers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted Suppliers Across Gujarat
            </h2>
            <p className="text-xl text-gray-600">
              Find reliable manufacturers and suppliers in major industrial
              cities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-blue-200"
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {city.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Details Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Pouch Packaging Machines */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pouch Packaging Machines: Revolutionizing FMCG
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Pouch packaging machines are essential for filling and sealing
                products into flexible pouches. Widely used across food, dairy,
                cosmetics, and chemical industries for packaging snacks, coffee,
                detergent, sauces, and more.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">High-speed Operation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Cost-Efficient</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Airtight Sealing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Minimal Intervention</span>
                </div>
              </div>
              <p className="text-blue-600 font-medium mt-4">
                Available in Ahmedabad and Surat with customization options
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl flex gap-12 shadow-lg">
              <img
                src={pouchpackagingmachineimage}
                className="h-80"
                alt="pouch packaging machine image"
              />
              <div className="hidden md:block space-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Applications
                </h3>
                {[
                  "Snacks & Food Items",
                  "Coffee & Tea",
                  "Detergent Powder",
                  "Liquid Sauces",
                  "Dairy Products",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROPP Capping Machines */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg order-2 lg:order-1">
              <div className="space-y-2 flex gap-12">
                <img
                  src={SingleHeadRoppImage}
                  className="h-80"
                  alt="pouch packaging machine image"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Single Head ROPP Capping Machines
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ROPP (Roll-On Pilfer Proof) capping machines are essential in
                bottling lines for applying aluminum caps securely. Perfect for
                pharmaceuticals, distilleries, and edible oil manufacturers
                requiring tamper-proof sealing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The single head mechanism is ideal for low to medium production
                volumes, offering compact design and easy integration into
                existing production lines.
              </p>
              <p className="text-blue-600 font-medium">
                Top suppliers available in Rajkot and Gandhinagar
              </p>
            </div>
          </div>

          {/* Cap Slitting and Folding */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cap Slitting & Folding Machines
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Cap slitting and folding machines pre-cut tamper-evident bands
                and fold caps for easy application. This process is critical for
                ensuring product authenticity and user safety in packaging
                operations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Specially engineered for the edible oil sector, these machines
                offer customizable options for different cap sizes and are
                suitable for HDPE bottles with precise cutting and folding
                capabilities.
              </p>
              <p className="text-blue-600 font-medium">
                Leading suppliers in Surat and Vadodara offer both
                semi-automatic and fully automatic versions
              </p>
            </div>
            <div className="bg-white text-black p-8 flex gap-12 rounded-2xl">
              <img
                src={OilCapSlittingAndFolding}
                className="h-80"
                alt="Folding Machine"
              />
              <div className="hidden md:block lg:block">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Clean & Accurate Slits",
                    "High-Speed Operations",
                    "Minimal Maintenance",
                    "Increased Line Efficiency",
                    "Tamper-Proof Standards",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gujarat Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Gujarat Leads in Packaging Machinery
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Gujarat offers unmatched advantages for packaging machinery
              manufacturing and supply
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Infrastructure",
                desc: "Centralized industrial zones with modern facilities",
              },
              {
                title: "Port Connectivity",
                desc: "Easy export access to global markets",
              },
              {
                title: "Technical Expertise",
                desc: "Skilled workforce and innovation ecosystem",
              },
              {
                title: "Competitive Pricing",
                desc: "Cost-effective solutions without quality compromise",
              },
              {
                title: "Government Support",
                desc: "Manufacturing-friendly policies and incentives",
              },
              {
                title: "Export Excellence",
                desc: "Trusted suppliers to Middle East, Africa, Southeast Asia",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <Truck className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Upgrade Your Packaging Line?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Partner with trusted Gujarat manufacturers for advanced packaging
            solutions. Whether you're in FMCG, pharmaceutical, or edible oil
            industry, find the perfect machinery for efficient and tamper-proof
            packaging.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Choosing the Right Manufacturer
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Industry reputation & experience",
                "Customization options available",
                "Comprehensive after-sales support",
                "Competitive pricing & warranty",
                "Spare parts availability",
                "Export capabilities",
              ].map((criteria, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
