import React from "react";
import {
  Settings,
  Factory,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Award,
  Zap,
  Users,
  Truck,
  TrendingUp,
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function TMTMachineEquipmentBlog() {
  const features = [
    {
      icon: Settings,
      title: "Adjustable Design",
      description: "Multiple bottle and cap size support",
    },
    {
      icon: Zap,
      title: "High Speed",
      description: "30-60 bottles per minute processing",
    },
    {
      icon: Shield,
      title: "Tamper Proof",
      description: "Secure ROPP sealing technology",
    },
    {
      icon: Award,
      title: "Quality Build",
      description: "Stainless steel construction",
    },
  ];

  const applications = [
    {
      industry: "Edible Oil Manufacturers",
      application: "ROPP and slitted caps for oil bottles",
    },
    {
      industry: "Pharmaceutical Companies",
      application: "Syrup bottles, vitamin tonics",
    },
    {
      industry: "Liquor Industry",
      application: "Glass bottles with anti-pilferage caps",
    },
    { industry: "Cosmetics", application: "Toner and serum bottles" },
    {
      industry: "Agrochemicals",
      application: "Sealed packaging for chemical liquids",
    },
  ];

  const suppliers = [
    {
      name: "PackNSeal Engineers",
      location: "Ahmedabad",
      specialization: "ROPP & Slitting Machinery",
    },
    {
      name: "Rajkot MachTech",
      location: "Rajkot",
      specialization: "Single Head Capping Machines",
    },
    {
      name: "SurPack Technologies",
      location: "Surat",
      specialization: "FMCG Bottling Lines",
    },
    {
      name: "NexGen Packaging Equipments",
      location: "Vadodara",
      specialization: "Custom Bottle Capping",
    },
    {
      name: "Bharati Engineers",
      location: "Bhavnagar",
      specialization: "Cap Slitting Units",
    },
  ];

  const pricingData = [
    { type: "Single Head ROPP Capper", range: "₹1.5 Lakh – ₹3.5 Lakh" },
    { type: "Oil Cap Slitting Machine (Manual)", range: "₹25,000 – ₹75,000" },
    {
      type: "Oil Cap Slitting Machine (Automatic)",
      range: "₹1 Lakh – ₹2.5 Lakh",
    },
  ];

  const cities = [
    {
      name: "Ahmedabad",
      description:
        "Home to reputed engineering firms offering custom packaging solutions",
    },
    {
      name: "Rajkot",
      description:
        "Famous for precision machinery, ideal for budget-friendly quality machines",
    },
    {
      name: "Surat",
      description:
        "Scaling up capabilities in capping solutions for FMCG manufacturers",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would be handled by Next.js Head or similar */}
      <Helmet>
        <title>
          Single Head ROPP Capping & Oil Cap Slitting Machines in Gujarat | Best
          Prices
        </title>
        <meta
          name="description"
          content="Get high-quality single head ROPP capping machines and oil cap slitting machines from trusted Gujarat suppliers. Serving Ahmedabad, Rajkot, Surat & more."
        />
        <meta
          name="keywords"
          content="ROPP capping machine Gujarat, oil cap slitting machine Ahmedabad, capping equipment Surat, single head capping machine Rajkot, Gujarat industrial machines"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Single Head ROPP Capping & Oil Cap Slitting Machines in Gujarat
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get high-quality capping machines from trusted Gujarat suppliers
              serving Ahmedabad, Rajkot, Surat & more
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800 px-4 py-2 rounded-full">
                ROPP Capping Solutions
              </span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">
                Oil Cap Slitting
              </span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">
                Gujarat Suppliers
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Engineering for Packaging Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As India's packaging and bottling industries grow, the need for
                precision-engineered equipment like Single Head ROPP Capping
                Machines and Oil Cap Slitting Machines is rising—particularly in
                Gujarat. Known for its robust industrial base and engineering
                excellence, Gujarat's cities such as Ahmedabad, Rajkot, and
                Surat have become key centers for manufacturing and supplying
                such machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Explanation */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Understanding ROPP Technology
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">
                      What is ROPP Capping?
                    </h3>
                    <p className="text-gray-700">
                      ROPP stands for Roll-On Pilfer Proof. It's a method of
                      sealing bottles with aluminum caps to prevent tampering or
                      leakage. The ROPP cap is pressed and rolled onto the neck
                      of a bottle, forming threads during the process.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">
                      Oil Cap Slitting Technology
                    </h3>
                    <p className="text-gray-700">
                      An oil cap slitting machine converts smooth aluminum caps
                      into tamper-proof caps by creating slits that act as
                      tear-off indicators, showing whether the cap has been
                      opened.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Factory size={120} className="text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Complete Sealing Solution
                  </h3>
                  <p className="text-gray-700">
                    Together, these machines offer a comprehensive solution for
                    sealing bottles safely and professionally across various
                    industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Machine Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">
                  Single Head ROPP Capping Machine
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Speed: 30–60 bottles per minute
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    High-grade stainless steel structure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Torque-controlled capping head
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Adjustable bottle height support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    PLC-based HMI control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Low noise and vibration
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">
                  Oil Cap Slitting Machine
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Supports 18–38 mm cap diameters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Speed: 1000–5000 caps/hour
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Stainless steel body
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Adjustable blade pressure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Manual & automatic variants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    Easy maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industry Applications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Industry
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Application
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {app.industry}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {app.application}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Gujarat Cities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gujarat - A Hub for Industrial Machinery
              </h2>
              <p className="text-lg text-gray-700">
                Gujarat has positioned itself as a leader in machinery
                manufacturing with well-developed industrial clusters, skilled
                manpower, and supportive policies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <MapPin className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-gray-700">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Pricing Information
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Machine Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Price Range (INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">
                        {item.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-6 py-4 bg-yellow-50 border-t">
                <p className="text-sm text-gray-600 italic">
                  Note: Prices may vary based on supplier, features, and
                  capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Gujarat-Based Suppliers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliers.map((supplier, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {supplier.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{supplier.location}</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {supplier.specialization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Choosing the Right Supplier
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Experience & Expertise
                    </h3>
                    <p className="text-gray-600">
                      Prefer suppliers with 5+ years in bottling equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      In-House Customization
                    </h3>
                    <p className="text-gray-600">
                      Ability to customize for your specific requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      After-Sales Support
                    </h3>
                    <p className="text-gray-600">
                      Quick spare parts availability and service teams
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Certifications
                    </h3>
                    <p className="text-gray-600">
                      ISO 9001, GMP, or CE compliance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Installation & Training
                    </h3>
                    <p className="text-gray-600">
                      Complete setup and operator training
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-4 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Trial & Demo
                    </h3>
                    <p className="text-gray-600">
                      Demo with your own product samples
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Future Trends in Bottle Capping
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Servo-controlled capping heads",
                "Vision systems for cap detection",
                "IoT-enabled remote diagnostics",
                "Hybrid multi-cap machines",
                "Eco-friendly slitting blades",
                "Smart tech integration",
              ].map((trend, index) => (
                <div key={index} className="bg-blue-700 p-4 rounded-lg">
                  <TrendingUp className="mx-auto mb-2" size={24} />
                  <p className="text-sm">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Maintenance Guidelines
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                To ensure long-term performance:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Clean after each shift</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Lubricate rotating parts regularly</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Inspect slitting machine blades</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Check torque settings periodically</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Train staff for troubleshooting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <span>Maintain consistent output quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Your Packaging Solution Partner
            </h2>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Whether you're packaging edible oil, pharmaceuticals, or
              chemicals, Single Head ROPP Capping Machines and Oil Cap Slitting
              Machines are vital components of an efficient and tamper-proof
              bottling process. With Gujarat offering experienced manufacturers
              in cities like Ahmedabad, Rajkot, Surat, and Vadodara, businesses
              have access to reliable machinery, expert support, and affordable
              pricing—all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-blue-800 px-6 py-3 rounded-lg">
                <Phone className="mr-2" size={20} />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center bg-blue-800 px-6 py-3 rounded-lg">
                <Truck className="mr-2" size={20} />
                <span>Pan-India Delivery</span>
              </div>
              <div className="flex items-center bg-blue-800 px-6 py-3 rounded-lg">
                <Users className="mr-2" size={20} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
