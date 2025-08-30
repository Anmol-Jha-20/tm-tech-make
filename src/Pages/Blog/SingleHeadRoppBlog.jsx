// import React from "react";
// import {
//   CheckCircle,
//   Star,
//   Phone,
//   Mail,
//   Globe,
//   ArrowRight,
//   Shield,
//   Cog,
//   Zap,
//   Award,
//   ChevronRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet";

// export default function ROPPCappingBlog() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>
//           Top Single Head ROPP Capping Machine in Gujarat | TmTeckMake
//         </title>
//         <meta
//           name="description"
//           content="Looking for a high-quality Single Head ROPP Capping Machine in Gujarat? TmTeckMake offers precision-engineered ROPP capping machines for pharmaceuticals, beverages, and more. Contact us today!"
//         />
//         <meta
//           name="keywords"
//           content="Single Head ROPP Capping Machine in Gujarat, ROPP Capping Machine Manufacturer, Automatic bottle capping machine Gujarat"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Helmet>

//       <section className="bg-gradient-to-r from-blue-50 to-white py-12 lg:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="flex items-center justify-center mb-4">
//               <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                 Manufacturing Excellence
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               Single Head ROPP Capping Machine in{" "}
//               <span className="text-blue-600">Gujarat</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
//               Precision-engineered ROPP capping machines for pharmaceuticals,
//               beverages, and industrial applications
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
//                 Get Free Quote
//                 <ChevronRight className="ml-2 w-5 h-5" />
//               </button>
//               {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
//                       View Products
//                     </button> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-12">
//         {/* Introduction Section */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-3xl font-bold text-blue-800 mb-6">
//               Introduction
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-6">
//               In today's fast-paced manufacturing environment, ensuring the
//               safety, hygiene, and shelf life of liquid-based products is
//               critical. The Single Head ROPP (Roll-On Pilfer Proof) Capping
//               Machine plays a vital role in sealing bottles securely and
//               efficiently.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               With a strong foothold in Ahmedabad, Gujarat, TmTeckMake has
//               become a reliable name for delivering industrial-grade packaging
//               machinery tailored for sectors like pharmaceuticals, beverages,
//               edible oils, and distilleries.
//             </p>
//           </div>
//         </section>

//         {/* What is ROPP Section */}
//         <section className="mb-16">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-blue-800 mb-6">
//                 What is a ROPP Capping Machine?
//               </h2>
//               <p className="text-gray-700 text-lg mb-6">
//                 ROPP stands for <strong>Roll-On Pilfer Proof</strong>. It is a
//                 type of capping system used to seal aluminum caps onto glass or
//                 plastic bottles, ensuring tamper-proof packaging.
//               </p>
//               <div className="bg-blue-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-blue-700 mb-3">
//                   How it Works:
//                 </h3>
//                 <p className="text-gray-700">
//                   A rotating capping head uses thread-forming rollers to apply
//                   the aluminum cap over the bottle mouth. This operation creates
//                   a leak-proof and tamper-evident seal, widely used in
//                   industries where safety and contamination-free packaging are
//                   non-negotiable.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
//               <Cog className="w-24 h-24 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-blue-800 mb-2">
//                 Precision Engineering
//               </h3>
//               <p className="text-blue-600">
//                 Advanced thread-forming technology for perfect seals
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
//             Why Choose a Single Head ROPP Capping Machine?
//           </h2>
//           <p className="text-center text-gray-700 text-lg mb-12">
//             The single head design is ideal for medium-speed production lines
//             and offers a compact, budget-friendly solution for startups and
//             growing businesses.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Cost-Effective",
//                 desc: "Affordable for small to medium-scale production",
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Compact Design",
//                 desc: "Fits smaller manufacturing floors",
//               },
//               {
//                 icon: <Award className="w-8 h-8" />,
//                 title: "High Precision",
//                 desc: "Excellent repeatability and accuracy",
//               },
//               {
//                 icon: <Cog className="w-8 h-8" />,
//                 title: "Easy Operation",
//                 desc: "Simple to operate and maintain",
//               },
//               {
//                 icon: <CheckCircle className="w-8 h-8" />,
//                 title: "Versatile",
//                 desc: "Compatible with various bottle types",
//               },
//               {
//                 icon: <Star className="w-8 h-8" />,
//                 title: "Reliable",
//                 desc: "Consistent performance and durability",
//               },
//             ].map((benefit, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
//               >
//                 <div className="text-blue-600 mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-semibold text-blue-800 mb-2">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Industries Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
//             Industries Using ROPP Capping Machines
//           </h2>
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Pharmaceuticals",
//                   items: ["Syrups", "Tonics", "Supplements"],
//                 },
//                 {
//                   title: "Beverages",
//                   items: ["Wine", "Whiskey", "Energy drinks", "Juices"],
//                 },
//                 { title: "Cosmetics", items: ["Essential oils", "Lotions"] },
//                 {
//                   title: "Food & Edible Oil",
//                   items: ["Ghee", "Cooking oil", "Sauces"],
//                 },
//                 {
//                   title: "Chemical & Agro",
//                   items: ["Pesticide bottles", "Disinfectants"],
//                 },
//               ].map((industry, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
//                 >
//                   <h3 className="text-xl font-semibold mb-4">
//                     {industry.title}
//                   </h3>
//                   <ul className="space-y-2">
//                     {industry.items.map((item, i) => (
//                       <li key={i} className="flex items-center">
//                         <CheckCircle className="w-4 h-4 mr-2 text-blue-200" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Technical Specifications */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
//             Technical Specifications
//           </h2>
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
//             <div className="bg-blue-600 text-white p-6">
//               <h3 className="text-2xl font-semibold">
//                 Single Head ROPP Capping Machine
//               </h3>
//             </div>
//             <div className="p-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   { spec: "Output Capacity", detail: "Up to 40 bottles/min" },
//                   { spec: "Bottle Diameter", detail: "25 mm – 85 mm" },
//                   { spec: "Cap Diameter", detail: "20 mm – 38 mm" },
//                   { spec: "Height Adjustment", detail: "Manual or Motorized" },
//                   { spec: "Structure", detail: "SS 304/316 Frame" },
//                   { spec: "Operation", detail: "Automatic / Semi-Automatic" },
//                   { spec: "Power", detail: "1–2 HP motor" },
//                   {
//                     spec: "Optional Features",
//                     detail: "No-bottle-no-cap system, torque adjustment",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between py-3 border-b border-gray-200"
//                   >
//                     <span className="font-semibold text-blue-700">
//                       {item.spec}:
//                     </span>
//                     <span className="text-gray-700">{item.detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
//             Key Features of TmTeckMake's ROPP Capping Machine
//           </h2>
//           <div className="grid lg:grid-cols-2 gap-8">
//             {[
//               {
//                 title: "High Precision Capping Head",
//                 desc: "Engineered with hardened steel for long-lasting accuracy and consistent performance.",
//               },
//               {
//                 title: "Smooth Bottle Handling System",
//                 desc: "Star wheels, guides, and belts ensure smooth transport with zero spillage or breakage.",
//               },
//               {
//                 title: "Quick Format Changeover",
//                 desc: "Tool-free adjustments make it easy to switch between different bottle and cap sizes.",
//               },
//               {
//                 title: "Safety and Hygiene",
//                 desc: "GMP-compliant design with easy-to-clean components makes it ideal for pharmaceutical use.",
//               },
//               {
//                 title: "Compact & Portable",
//                 desc: "Occupies minimal floor space and can be moved easily within a production facility.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-100"
//               >
//                 <h3 className="text-xl font-semibold text-blue-800 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Success Stories */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
//             Success Stories
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Pharmaceutical Company - Vadodara
//               </h3>
//               <p className="text-blue-100 mb-4">
//                 They integrated TmTeckMake's automatic single head ROPP machine
//                 and reported a 60% improvement in packaging line speed and 100%
//                 accuracy in capping consistency.
//               </p>
//               <div className="flex items-center">
//                 <Star className="w-5 h-5 text-yellow-400 mr-2" />
//                 <span className="text-blue-100">60% Speed Improvement</span>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
//               <h3 className="text-2xl font-semibold mb-4">Winery - Nashik</h3>
//               <p className="text-blue-100 mb-4">
//                 The winery replaced imported capping machines with TmTeckMake
//                 and appreciated the durability, support, and significant cost
//                 savings.
//               </p>
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
//                 <span className="text-blue-100">Significant Cost Savings</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
//             <h2 className="text-4xl font-bold mb-6">
//               Get a Quote or Product Demo
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//               TmTeckMake invites businesses to schedule an online or onsite
//               product demo. Whether you're upgrading from manual sealing or
//               launching a new packaging line, our team is ready to help.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a
//                 href="https://tmteckmake.com/"
//                 className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
//               >
//                 <Globe className="w-5 h-5 mr-2" />
//                 Visit Website
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </a>
//               {/* <div className="flex items-center space-x-4 text-blue-100">
//                 <Phone className="w-5 h-5" />
//                 <span>Call or WhatsApp Available</span>
//               </div> */}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SingleHeadRoppImage from "../../assets/SingleHeadROPPCappingMachine.jpeg";

export default function ROPPCappingBlog() {
  const brand = "#193CB8";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Single Head ROPP Capping Machine Manufacturer in Daskroi, Ahmedabad, Gujarat - TM TECH MAKE",
    description:
      "TM Tech Make is a leading Single Head ROPP Capping Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering durable, efficient, and GMP-compliant solutions.",
    author: {
      "@type": "Organization",
      name: "TM TECH MAKE",
    },
    publisher: {
      "@type": "Organization",
      name: "TM TECH MAKE",
    },
  };

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      <Helmet>
        <title>
          Single Head ROPP Capping Machine Manufacturer in Daskroi, Ahmedabad,
          Gujarat - TM TECH MAKE
        </title>
        <meta
          name="description"
          content="TM Tech Make is a leading Single Head ROPP Capping Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering durable, efficient, and GMP-compliant solutions."
        />
        {/* <meta name="theme-color" content={brand} /> */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: brand }}
            >
              Single Head ROPP Capping Machine Manufacturer
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Precision, tamper-proof sealing and compact automation — designed
              for small to medium scale production in Daskroi, Ahmedabad,
              Gujarat.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919033471676"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl shadow-md text-white font-semibold"
                style={{ backgroundColor: brand }}
              >
                Request Quote
              </a>
              <a
                href="/single-head-ropp-capping-machine"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="w-full lg:w-auto rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={SingleHeadRoppImage}
              alt="Single Head ROPP Capping Machine"
              className="w-full h-56 sm:h-72 md:h-80 object-cover"
            />
          </motion.figure>
        </div>
      </header>

      {/* Intro */}
      <section className="prose prose-lg max-w-none mb-8">
        <p>
          In today’s competitive packaging industry, automation and precision
          play a vital role in ensuring efficiency, product safety, and brand
          value. One of the most widely used solutions for secure bottle sealing
          is the <strong>Single Head ROPP Capping Machine</strong>. Known for
          its reliability, compact design, and ease of operation, this machine
          has become a preferred choice across industries such as
          pharmaceuticals, beverages, cosmetics, chemicals, edible oils, and
          more.
        </p>

        <p>
          Daskroi, a growing industrial hub in Ahmedabad, Gujarat, has emerged
          as a strong manufacturing base for Single Head ROPP Capping Machines.
          Manufacturers in this region are known for delivering high-quality,
          durable, and performance-driven machinery that meets both domestic and
          international standards.
        </p>
      </section>

      <hr className="my-8" />

      {/* What is */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-3">
            What is a Single Head ROPP Capping Machine?
          </h2>
          <p className="text-gray-700 mb-4">
            ROPP stands for Roll-On Pilfer-Proof. These are aluminium caps
            commonly used in industries where product integrity and tamper
            evidence are crucial. A ROPP cap not only provides a tight seal but
            also forms threads directly on the bottle neck during the sealing
            process. This ensures product safety and consumer confidence.
          </p>

          <p className="text-gray-700">
            A Single Head ROPP Capping Machine manufactured in Daskroi is
            specifically designed to seal one bottle at a time using a single
            sealing head. The machine places the cap on the bottle and rolls it
            precisely for a secure and tamper-proof closure. Despite its compact
            size, it is highly efficient and capable of handling medium to large
            production batches depending on the model and speed.
          </p>
        </motion.div>

        <aside className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Speed: ~30–60 BPM (model dependent)</li>
            <li>Material: SS 304 / SS 316 options</li>
            <li>Use: Pharma, FMCG, Cosmetics</li>
            <li>Design: Space-saving single-head</li>
          </ul>
        </aside>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 id="specs" className="text-2xl font-bold mb-6">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "High-Quality Stainless Steel Construction",
              desc: "Ensures durability and compliance with GMP standards, especially for pharmaceutical and food industries.",
            },
            {
              title: "Precision Sealing Head",
              desc: "Equipped with specially designed rollers that form threads and seal the cap uniformly.",
            },
            {
              title: "Adjustable Bottle Height",
              desc: "Easily accommodates bottles of different shapes and sizes without complex changeovers.",
            },
            {
              title: "Safety Features",
              desc: "No cap - no sealing, bottle jam protection, and overload protection for safer operation.",
            },
            {
              title: "Easy Operation & Low Maintenance",
              desc: "Simple controls make the machine easy to run and keep.",
            },
            {
              title: "Compact & Space-Saving Design",
              desc: "Ideal for medium-scale facilities or integration into larger lines.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i }}
              className="p-5 bg-white rounded-2xl border shadow-sm"
            >
              <h4 className="font-semibold mb-2" style={{ color: brand }}>
                {f.title}
              </h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Benefits of Using a Single Head ROPP Capping Machine
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Tamper-Proof Sealing:</strong> Visible tamper evidence
            protects consumer trust and product authenticity.
          </li>
          <li>
            <strong>Enhanced Production Efficiency:</strong> Speeds ranging from
            30 to 60 bottles per minute help scale production.
          </li>
          <li>
            <strong>Versatility Across Industries:</strong> Used in pharma,
            beverages, cosmetics and more.
          </li>
          <li>
            <strong>Cost-Effective Solution:</strong> Economical for small and
            medium manufacturers.
          </li>
          <li>
            <strong>User-Friendly & Reliable:</strong> Minimal training required
            and long-term performance.
          </li>
        </ol>
      </section>

      {/* Why Daskroi */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Why Daskroi, Ahmedabad is Emerging as a Hub
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Skilled engineering expertise specialized in packaging technology.
            </li>
            <li>Competitive pricing with high-quality manufacturing.</li>
            <li>Customization options to suit industry needs.</li>
            <li>Strong after-sales support and local presence.</li>
            <li>
              Proven track record with national and international clients.
            </li>
          </ul>
        </div>

        <aside className="bg-gradient-to-br from-white to-gray-50 border rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-3">Applications Across Industries</h3>
          <p className="text-gray-700">
            Pharmaceuticals, Food & Beverages, Cosmetics, Chemicals, Edible Oils
            — ideal where tamper-proof sealing is essential.
          </p>
        </aside>
      </section>

      {/* Choosing Manufacturer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Choosing the Right Manufacturer
        </h2>
        <p className="text-gray-700 mb-4">
          When selecting a manufacturer, look for:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
          <li className="flex items-start gap-3">
            <span className="font-semibold text-gray-800">•</span>
            <div>
              <p className="text-gray-700">
                Compliance with GMP and ISO standards
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-gray-800">•</span>
            <div>
              <p className="text-gray-700">SS 304/316 material options</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-gray-800">•</span>
            <div>
              <p className="text-gray-700">Automatic operation options</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-gray-800">•</span>
            <div>
              <p className="text-gray-700">
                Proven customer feedback and after-sales support
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
