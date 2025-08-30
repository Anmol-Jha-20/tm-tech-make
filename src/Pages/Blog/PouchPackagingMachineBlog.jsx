// import React from "react";
// import {
//   ChevronRight,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Users,
//   Award,
//   Zap,
//   Shield,
// } from "lucide-react";
// import { Helmet } from "react-helmet";

// const PouchPackagingMachineBlog = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* SEO Meta Tags - Would be in document head */}
//       <Helmet>
//         <title>
//           Top Pouch Packaging Machine Manufacturer in Ahmedabad | TmTeckMake
//         </title>
//         <meta
//           name="description"
//           content="Looking for a reliable pouch packaging machine manufacturer in Ahmedabad? TmTeckMake offers high-speed, durable, and cost-effective pouch packing machines for all industries. Contact now!"
//         />
//         <meta
//           name="keywords"
//           content="Pouch packaging machine manufacturer in Ahmedabad, Automatic pouch packing machine, Packaging machine suppliers in Ahmedabad, TmTeckMake"
//         />
//       </Helmet>

//       {/* Header */}

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-50 to-white py-12 lg:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="flex items-center justify-center mb-4">
//               <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                 Manufacturing Excellence
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               Pouch Packaging Machine Manufacturer in{" "}
//               <span className="text-blue-600">Ahmedabad</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
//               Reliable, Affordable & Innovative packaging solutions for modern
//               industries
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
//                 Get Free Quote
//                 <ChevronRight className="ml-2 w-5 h-5" />
//               </button>
//               {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
//                 View Products
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-12">
//         <article className="max-w-4xl mx-auto">
//           {/* Introduction */}
//           <section className="mb-12">
//             <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-8">
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 The growing demand for efficient, hygienic, and cost-effective
//                 packaging solutions has led to a boom in the use of pouch
//                 packaging machines across multiple industries. Ahmedabad, one of
//                 India's key industrial hubs, is home to numerous manufacturers
//                 who specialize in high-quality pouch packaging machinery. Among
//                 these, <strong className="text-blue-600">TmTeckMake</strong>{" "}
//                 stands out as a trusted name for its commitment to quality,
//                 innovation, and customer satisfaction.
//               </p>
//             </div>
//           </section>

//           {/* Understanding Pouch Packaging */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Understanding Pouch Packaging Machines
//             </h2>
//             <p className="text-gray-700 mb-6 leading-relaxed">
//               Pouch packaging machines are essential pieces of equipment used to
//               fill and seal products into pouches. These pouches can be made
//               from various materials including laminated films, foil, and
//               polyethylene.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//                 <h3 className="font-semibold text-lg mb-4 text-blue-600">
//                   Powders
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   flour, milk powder, protein supplements, turmeric
//                 </p>
//               </div>
//               <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//                 <h3 className="font-semibold text-lg mb-4 text-blue-600">
//                   Granules
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   tea, sugar, rice, pulses
//                 </p>
//               </div>
//               <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//                 <h3 className="font-semibold text-lg mb-4 text-blue-600">
//                   Liquids
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   water, shampoo, oil, syrups
//                 </p>
//               </div>
//               <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//                 <h3 className="font-semibold text-lg mb-4 text-blue-600">
//                   Solids & Snacks
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   chips, namkeen, dry fruits, biscuits
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Why Ahmedabad */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Why Choose Ahmedabad-Based Manufacturers?
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   icon: Award,
//                   title: "Quality Engineering",
//                   desc: "Skilled professionals ensure product reliability",
//                 },
//                 {
//                   icon: Zap,
//                   title: "Cost-Effectiveness",
//                   desc: "Reduced production costs without compromising quality",
//                 },
//                 {
//                   icon: Clock,
//                   title: "Speedy Delivery",
//                   desc: "Proximity to transportation hubs ensures timely dispatch",
//                 },
//                 {
//                   icon: Shield,
//                   title: "Service Ecosystem",
//                   desc: "Easy availability of spares and local support",
//                 },
//                 {
//                   icon: Users,
//                   title: "Government Incentives",
//                   desc: "Industrial zones benefit from supportive policies",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
//                 >
//                   <item.icon className="w-8 h-8 text-blue-600 mb-4" />
//                   <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* About TmTeckMake */}
//           <section className="mb-12">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
//               <h2 className="text-2xl md:text-3xl font-bold mb-6">
//                 About TmTeckMake – Your Trusted Packaging Partner
//               </h2>
//               <p className="text-blue-100 leading-relaxed mb-6">
//                 TmTeckMake is a well-established pouch packaging machine
//                 manufacturer in Ahmedabad. With a deep understanding of
//                 packaging challenges faced by modern industries, the company
//                 offers solutions that are scalable, efficient, and tailored to
//                 unique requirements.
//               </p>
//               <p className="text-blue-100 leading-relaxed">
//                 Their machines are built with the latest technologies such as
//                 PLC control systems, servo motors, stainless steel components,
//                 and advanced sensors. TmTeckMake machines comply with
//                 international standards and are known for their ease of use, low
//                 maintenance, and high-speed operation.
//               </p>
//             </div>
//           </section>

//           {/* Machine Range */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Range of Machines Offered by TmTeckMake
//             </h2>

//             <div className="space-y-8">
//               {[
//                 {
//                   title: "Automatic Pouch Packing Machines",
//                   desc: "Automate your entire packaging line with these high-speed systems capable of filling, sealing, and cutting.",
//                   features: [
//                     "Fully automated operation",
//                     "PLC and touch screen interface",
//                     "Low power consumption",
//                     "High production rates",
//                   ],
//                 },
//                 {
//                   title: "Granule Packing Machines",
//                   desc: "Perfect for free-flowing granular items such as sugar, tea, salt, pulses, and seeds.",
//                   features: [
//                     "Accurate dosing system",
//                     "Rugged construction",
//                     "Option for nitrogen flushing",
//                   ],
//                 },
//                 {
//                   title: "Powder Packaging Machines",
//                   desc: "Engineered to handle fine powders without any spillage or dust formation.",
//                   features: [
//                     "Auger-based filling system",
//                     "Dust control features",
//                     "Suitable for 50gm to 5kg pouches",
//                   ],
//                 },
//                 {
//                   title: "Liquid Packing Machines",
//                   desc: "Designed for water, sauces, cooking oil, shampoos, and other viscous liquids.",
//                   features: [
//                     "Leak-proof pouch sealing",
//                     "Accurate volume control",
//                     "Washable components",
//                   ],
//                 },
//                 {
//                   title: "Multi-Head Weigh Filler Machines",
//                   desc: "Ideal for snack foods, chips, mixtures, and dry fruits. Uses multiple weigh heads to increase accuracy and speed.",
//                   features: [
//                     "Fast product changeover",
//                     "High throughput",
//                     "Reduced waste",
//                   ],
//                 },
//               ].map((machine, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
//                 >
//                   <h3 className="text-xl font-semibold text-blue-600 mb-3">
//                     {machine.title}
//                   </h3>
//                   <p className="text-gray-700 mb-4">{machine.desc}</p>
//                   <div className="grid md:grid-cols-2 gap-2">
//                     {machine.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                         <span className="text-sm text-gray-600">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Industries Served */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Industries Served
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 "Food & Beverages",
//                 "FMCG",
//                 "Agrochemical",
//                 "Dairy",
//                 "Pharmaceuticals",
//                 "Detergent & Chemicals",
//                 "Cosmetics",
//               ].map((industry, index) => (
//                 <div
//                   key={index}
//                   className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center font-medium"
//                 >
//                   {industry}
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Benefits */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Benefits of Working with TmTeckMake
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {[
//                 {
//                   title: "Quality Assurance",
//                   desc: "Machines go through rigorous quality checks and field trials before dispatch.",
//                 },
//                 {
//                   title: "After-Sales Support",
//                   desc: "Comprehensive AMC, remote support, and quick spare part delivery.",
//                 },
//                 {
//                   title: "Cost Efficiency",
//                   desc: "High-quality machines at affordable prices make them perfect for startups and MSMEs.",
//                 },
//                 {
//                   title: "Training & Installation",
//                   desc: "On-site training, setup assistance, and user manuals for hassle-free operation.",
//                 },
//                 {
//                   title: "Export Ready",
//                   desc: "Serving clients in India, Middle East, Africa, and Southeast Asia.",
//                 },
//               ].map((benefit, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-gray-600">{benefit.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Success Story */}
//           <section className="mb-12">
//             <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
//               <h3 className="font-semibold text-lg text-green-800 mb-3">
//                 Client Success Story
//               </h3>
//               <p className="text-green-700">
//                 A spice manufacturing unit in Rajasthan reported a{" "}
//                 <strong>45% boost in daily output</strong> and a{" "}
//                 <strong>30% reduction in packaging wastage</strong> after
//                 upgrading to TmTeckMake's automatic powder pouch packaging
//                 machine.
//               </p>
//             </div>
//           </section>

//           {/* Service Network */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               Service Network Across India
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {[
//                 "Ahmedabad",
//                 "Mumbai",
//                 "Delhi NCR",
//                 "Bengaluru",
//                 "Hyderabad",
//                 "Chennai",
//                 "Jaipur",
//                 "Indore",
//                 "Nagpur",
//               ].map((city, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
//                 >
//                   <MapPin className="w-4 h-4 text-blue-600" />
//                   <span className="text-gray-700">{city}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* How to Choose */}
//           <section className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
//               <div className="w-1 h-8 bg-blue-600 mr-4"></div>
//               How to Choose the Right Pouch Packaging Machine
//             </h2>
//             <div className="bg-blue-50 rounded-lg p-6">
//               <p className="text-gray-700 mb-4">
//                 Before investing, consider the following:
//               </p>
//               <ul className="space-y-2">
//                 {[
//                   "Product Type: Liquid, powder, granule, or solid?",
//                   "Packaging Speed: Required output per hour/day",
//                   "Pouch Size Range: Small, medium, large, or variable?",
//                   "Automation Level: Semi-auto vs full-auto?",
//                   "Budget: CapEx and ROI",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center">
//                     <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-blue-700 font-medium mt-4">
//                 TmTeckMake's sales team provides expert consultation to help you
//                 choose the best-fit machine.
//               </p>
//             </div>
//           </section>
//         </article>
//       </main>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Ready to Transform Your Packaging Process?
//           </h2>
//           <p className="text-blue-100 text-lg mb-8">
//             Get in touch for a free consultation and quote
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
//               <Phone className="w-5 h-5 mr-2" />
//               Call Now
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
//               <a href="https://tmteckmake.com/">Visit Us</a>
//             </button>
//           </div>
//           {/* <p className="text-blue-200 mt-6">
//             Visit:{" "}
//             <a
//               href="https://tmteckmake.com/"
//               className="underline hover:text-white"
//             >
//               https://tmteckmake.com/
//             </a>
//           </p> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PouchPackagingMachineBlog;

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Settings,
  Shield,
  Zap,
  Award,
  CheckCircle,
  Factory,
  Cog,
  Users,
  Globe,
} from "lucide-react";
import PouchPackagingMachineImage from "../../assets/PouchPackagingMachine.jpeg";
import { Helmet } from "react-helmet-async";

const PouchPackagingMachineBlog = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Durable Stainless Steel Construction",
      description:
        "Designed for long life and compliance with industry standards",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Speed Operation",
      description: "Capable of packaging hundreds of pouches per hour",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Versatility",
      description: "Handles multiple pouch sizes and product types",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Advanced Control System",
      description: "User-friendly interface for easy operation and adjustment",
    },
  ];

  const benefits = [
    "Extended Shelf Life",
    "Consumer Convenience",
    "Cost-Effective Packaging",
    "Enhanced Branding",
    "Eco-Friendly Options",
    "Product Protection",
  ];

  const applications = [
    {
      category: "Food & Beverages",
      items: "Chips, snacks, tea, coffee, juices, sauces, spices",
    },
    {
      category: "Pharmaceuticals",
      items: "Medicines, powders, syrups, health supplements",
    },
    {
      category: "Chemicals",
      items: "Fertilizers, detergents, cleaning products",
    },
    { category: "Cosmetics", items: "Shampoos, lotions, creams, gels" },
    { category: "Agricultural", items: "Seeds, pesticides, fertilizers" },
  ];

  const machineTypes = [
    {
      title: "Form Fill Seal Machines (FFS)",
      description:
        "Automatically form pouches from a roll of film, fill the product, and seal it in one continuous operation.",
    },
    {
      title: "Automatic Pouch Packing Machines",
      description:
        "Fully automated solutions designed for high-speed production lines with minimal human intervention.",
    },
    {
      title: "Powder Packaging Machines",
      description:
        "Ideal for packaging spices, flour, milk powder, and other powdered products with accuracy.",
    },
    {
      title: "Liquid Packaging Machines",
      description:
        "Designed for juices, oils, sauces, and other liquid products with leak-proof sealing.",
    },
    {
      title: "Granule Packaging Machines",
      description:
        "Suitable for products like pulses, rice, sugar, seeds, and dry snacks.",
    },
    {
      title: "Multi-Head Weigher Machines",
      description:
        "Advanced machines that ensure precise measurement of products before sealing into pouches.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - These would typically be in the document head */}
      <Helmet>
        <title>
          Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat –
          TM TECH MAKE
        </title>
        <meta
          name="description"
          content="TM TECH MAKE is a leading Pouch Packaging Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering durable, high-speed, and cost-effective packaging solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                Packaging Technology
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Leading{" "}
                <span style={{ color: "#1447E6" }}>
                  Pouch Packaging Machine
                </span>{" "}
                Manufacturer
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TM TECH MAKE delivers innovative packaging solutions in Daskroi,
                Ahmedabad, Gujarat. Revolutionizing packaging with efficiency,
                safety, and cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919033471676">
                  <motion.button
                    className="px-8 py-3 text-white rounded-lg cursor-pointer font-semibold transition-all duration-300 hover:shadow-xl"
                    style={{ backgroundColor: "#1447E6" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.button>
                </a>
                <a href="/pouch-packaging-machine">
                  <motion.button
                    className="px-8 py-3 border-2 text-gray-700 border-gray-300 cursor-pointer rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl">
                <img
                  src={PouchPackagingMachineImage}
                  alt="Pouch Packaging Machine"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                {/* <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Advanced Packaging Technology
                  </h3>
                  <p className="text-gray-600">
                    High-speed, precision packaging for modern manufacturing
                    needs
                  </p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Pouch Packaging Machine */}
      <motion.section className="py-16 px-4 sm:px-6 lg:px-8" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What is a Pouch Packaging Machine?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A pouch packaging machine is a type of automated equipment that
            fills and seals products into pouches of various shapes and sizes.
            These machines are designed to handle different materials such as
            plastic laminates, aluminum foils, and eco-friendly films. Depending
            on the product type and industry, pouch packaging machines can be
            customized for powder, liquid, granular, or solid items.
          </p>
          <motion.div
            className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4"
            style={{ borderLeftColor: "#1447E6" }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-700 font-medium">
              Pouch packaging not only improves shelf appeal but also ensures
              product freshness, tamper-proof sealing, and extended shelf life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Machine Types */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Types of Pouch Packaging Machines
            </h2>
            <p className="text-lg text-gray-600">
              TM TECH MAKE specializes in a wide range of machines for different
              industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineTypes.map((machine, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#1447E6" }}
                >
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {machine.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {machine.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features of TM TECH MAKE Machines
            </h2>
            <p className="text-lg text-gray-600">
              Advanced technology meets reliability and efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#1447E6" }}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800"
        style={{
          background: `linear-gradient(135deg, #1447E6 0%, #0066cc 100%)`,
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Benefits of Pouch Packaging Machines
            </h2>
            <p className="text-xl text-blue-100">
              Transform your packaging process with advanced technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applications */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Applications Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              Serving diverse sectors with specialized packaging solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-t-4 hover:shadow-xl transition-all duration-300"
                style={{ borderTopColor: "#1447E6" }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Factory
                    className="w-8 h-8 mr-3"
                    style={{ color: "#1447E6" }}
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {app.category}
                  </h3>
                </div>
                <p className="text-gray-600">{app.items}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose TM TECH MAKE */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TM TECH MAKE?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in packaging technology, TM TECH MAKE
                understands the diverse needs of different industries and
                delivers solutions that exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Award />,
                    title: "Proven Expertise",
                    desc: "Years of experience in packaging technology",
                  },
                  {
                    icon: <Settings />,
                    title: "Customization",
                    desc: "Machines tailored to your specific needs",
                  },
                  {
                    icon: <Shield />,
                    title: "Quality Assurance",
                    desc: "Strict quality checks ensure reliability",
                  },
                  {
                    icon: <Users />,
                    title: "After-Sales Support",
                    desc: "Dedicated installation, training & maintenance team",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#1447E6" }}
                    >
                      <div className="text-white w-5 h-5">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" variants={fadeInUp}>
              <img
                src={PouchPackagingMachineImage}
                alt="TM TECH MAKE Manufacturing Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8" style={{ color: "#1447E6" }} />
                  <div>
                    <div className="font-bold text-gray-900">
                      Trusted Globally
                    </div>
                    <div className="text-sm text-gray-600">
                      Serving industries worldwide
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Location Highlight */}
      <motion.section className="py-16 px-4 sm:px-6 lg:px-8" {...fadeInUp}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Daskroi – A Hub for Packaging Machinery
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Daskroi in Ahmedabad, Gujarat, has become a significant industrial
            zone for machinery manufacturing. The region is well-known for
            skilled manpower, advanced engineering practices, and strong
            infrastructure. TM TECH MAKE, located in this hub, has easy access
            to supply chains and logistics, enabling faster delivery and better
            customer support across India and abroad.
          </p>

          {/* <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#1447E6" }}
                >
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#1447E6" }}
                >
                  500+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#1447E6" }}
                >
                  50+
                </div>
                <div className="text-gray-600">Machine Models</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r"
        style={{
          background: `linear-gradient(135deg, #1447E6 0%, #0066cc 100%)`,
        }}
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Packaging Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            In today's competitive market, efficient packaging is the backbone
            of business success. TM TECH MAKE provides world-class machines
            designed to meet growing industry demands.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <a href="tel:+919033471676">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg cursor-pointer font-semibold hover:bg-gray-100 transition-all duration-300">
                Contact Us Today
              </button>
            </a>
            <a href="/pouch-packaging-machine">
              <button className="px-8 py-3 border-2 border-white cursor-pointer text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
          description:
            "TM TECH MAKE is a leading Pouch Packaging Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering durable, high-speed, and cost-effective packaging solutions.",
          author: {
            "@type": "Organization",
            name: "TM TECH MAKE",
          },
          publisher: {
            "@type": "Organization",
            name: "TM TECH MAKE",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Daskroi",
              addressRegion: "Ahmedabad, Gujarat",
              addressCountry: "India",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
          },
        })}
      </script>
    </div>
  );
};

export default PouchPackagingMachineBlog;
