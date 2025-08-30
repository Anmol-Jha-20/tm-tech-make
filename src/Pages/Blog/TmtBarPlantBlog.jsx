// import React from "react";
// import {
//   Factory,
//   Package,
//   Settings,
//   MapPin,
//   CheckCircle,
//   Star,
//   ArrowRight,
//   Phone,
//   Mail,
//   Clock,
// } from "lucide-react";
// import { Helmet } from "react-helmet";

// export default function TmtBarPlantBlog() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       {/* SEO Meta Tags would be handled by Next.js Head or similar */}
//       <Helmet>
//         <title>
//           Automatic Pouch Packaging & ROPP Capping Machines Gujarat | Supplier
//           in Ahmedabad, Surat
//         </title>
//         <meta
//           name="description"
//           content="Explore high-speed, automatic pouch packaging and ROPP capping machines in Gujarat. Trusted suppliers in Ahmedabad, Surat, Rajkot, and more industrial cities."
//         />
//         <meta
//           name="keywords"
//           content="Pouch packaging machine Gujarat, ROPP capping machine Ahmedabad, automatic packaging machine Surat, pouch packing equipment Rajkot, Gujarat packaging machinery"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
//               Automatic Pouch Packaging & ROPP Capping Machines in Gujarat
//             </h1>
//             <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
//               Explore high-speed, automatic pouch packaging and ROPP capping
//               machines in Gujarat. Trusted suppliers in Ahmedabad, Surat,
//               Rajkot, and more industrial cities.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//                 Pouch Packaging Machine Gujarat
//               </span>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//                 ROPP Capping Machine Ahmedabad
//               </span>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//                 Automatic Packaging Machine Surat
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-6">
//                 Gujarat: India's Packaging Machinery Hub
//               </h2>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Gujarat is one of India's fastest-growing industrial states,
//                 renowned for its manufacturing, engineering, and packaging
//                 solutions. The demand for efficient, automated packaging
//                 machinery—especially automatic pouch packaging machines and ROPP
//                 capping machines—has grown exponentially in cities like
//                 Ahmedabad, Surat, Rajkot, Vadodara, and Bhavnagar.
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 With a focus on reducing manual labor, increasing speed, and
//                 ensuring hygiene and product consistency, businesses across
//                 sectors are investing in advanced machinery solutions.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-blue-50 p-6 rounded-lg text-center">
//                 <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-blue-900">
//                   Manufacturing Hub
//                 </h3>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-lg text-center">
//                 <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-blue-900">
//                   Advanced Technology
//                 </h3>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-lg text-center">
//                 <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-blue-900">
//                   Quality Solutions
//                 </h3>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-lg text-center">
//                 <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//                 <h3 className="font-semibold text-blue-900">
//                   Pan-Gujarat Service
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
//             Why Choose Packaging Automation?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Clock,
//                 title: "High Speed",
//                 desc: "Handle thousands of units per hour",
//               },
//               {
//                 icon: CheckCircle,
//                 title: "Hygiene",
//                 desc: "Reduces human contact, maintaining food and pharma-grade standards",
//               },
//               {
//                 icon: Star,
//                 title: "Consistency",
//                 desc: "Every pouch or bottle sealed uniformly",
//               },
//               {
//                 icon: Settings,
//                 title: "Cost Savings",
//                 desc: "Reduces long-term labor and operational costs",
//               },
//               {
//                 icon: ArrowRight,
//                 title: "Scalability",
//                 desc: "Easily ramp up production to meet seasonal or market demand",
//               },
//               {
//                 icon: Package,
//                 title: "Quality",
//                 desc: "Superior packaging quality with minimal waste",
//               },
//             ].map((benefit, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold text-blue-900 mb-3">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-700">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Machine Types */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
//             Types of Packaging Machines
//           </h2>

//           {/* Pouch Packaging Machines */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold text-blue-800 mb-8">
//               Automatic Pouch Packaging Machines
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   title: "VFFS Machines",
//                   desc: "Vertical Form Fill Seal for granular products",
//                   features: [
//                     "Forms pouches from roll stock",
//                     "Ideal for spices & snacks",
//                     "High-speed operation",
//                   ],
//                 },
//                 {
//                   title: "HFFS Machines",
//                   desc: "Horizontal Form Fill Seal for delicate items",
//                   features: [
//                     "Horizontal filling",
//                     "Perfect for biscuits",
//                     "Gentle handling",
//                   ],
//                 },
//                 {
//                   title: "Pre-Made Pouch",
//                   desc: "Uses pre-formed pouches for premium products",
//                   features: [
//                     "Pre-formed pouches",
//                     "Premium aesthetics",
//                     "Custom designs",
//                   ],
//                 },
//                 {
//                   title: "Multi-Track Sachet",
//                   desc: "Simultaneous filling of multiple sachets",
//                   features: [
//                     "High volume",
//                     "FMCG applications",
//                     "Multiple lanes",
//                   ],
//                 },
//               ].map((machine, index) => (
//                 <div key={index} className="bg-blue-50 p-6 rounded-lg">
//                   <h4 className="text-lg font-semibold text-blue-900 mb-3">
//                     {machine.title}
//                   </h4>
//                   <p className="text-gray-700 mb-4">{machine.desc}</p>
//                   <ul className="space-y-1">
//                     {machine.features.map((feature, idx) => (
//                       <li
//                         key={idx}
//                         className="text-sm text-blue-700 flex items-center"
//                       >
//                         <CheckCircle className="h-4 w-4 mr-2" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ROPP Capping Machines */}
//           <div>
//             <h3 className="text-2xl font-bold text-blue-800 mb-8">
//               ROPP Capping Machines
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Semi-Automatic ROPP",
//                   desc: "Suitable for small to medium-scale industries",
//                   speed: "30-40 bottles/min",
//                 },
//                 {
//                   title: "Fully Automatic Single Head",
//                   desc: "Used in bottling lines with moderate volumes",
//                   speed: "40-60 bottles/min",
//                 },
//                 {
//                   title: "Multi-Head ROPP",
//                   desc: "For high-speed lines in pharma or liquor industries",
//                   speed: "60-120+ bottles/min",
//                 },
//               ].map((machine, index) => (
//                 <div key={index} className="bg-blue-50 p-6 rounded-lg">
//                   <h4 className="text-lg font-semibold text-blue-900 mb-3">
//                     {machine.title}
//                   </h4>
//                   <p className="text-gray-700 mb-4">{machine.desc}</p>
//                   <div className="text-blue-600 font-semibold">
//                     {machine.speed}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
//             Industries We Serve
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Food & Beverages",
//                 items: [
//                   "Tea, Spices, Flour",
//                   "Sugar, Milk Powder",
//                   "Instant Mix Products",
//                 ],
//               },
//               {
//                 title: "Pharmaceuticals",
//                 items: ["ORS Sachets", "Tablets, Powders", "Syrups & Liquids"],
//               },
//               {
//                 title: "Cosmetics",
//                 items: ["Face Packs", "Liquid Soap", "Creams & Lotions"],
//               },
//               {
//                 title: "Chemical & Agro",
//                 items: [
//                   "Seeds, Fertilizers",
//                   "Pesticides",
//                   "Industrial Chemicals",
//                 ],
//               },
//               {
//                 title: "Detergents & Cleaners",
//                 items: ["Liquid Detergent", "Floor Cleaner", "Washing Powder"],
//               },
//               {
//                 title: "Liquor & Oils",
//                 items: ["Alcoholic Beverages", "Cooking Oils", "Perfumes"],
//               },
//             ].map((industry, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
//                 <h3 className="text-xl font-semibold text-blue-900 mb-4">
//                   {industry.title}
//                 </h3>
//                 <ul className="space-y-2">
//                   {industry.items.map((item, idx) => (
//                     <li key={idx} className="text-gray-700 flex items-center">
//                       <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cities Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
//             Major Cities We Cover in Gujarat
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 city: "Ahmedabad",
//                 desc: "Major engineering and automation center with leading packaging machine manufacturers",
//               },
//               {
//                 city: "Surat",
//                 desc: "Rapidly expanding in FMCG and food processing with growing demand for VFFS machines",
//               },
//               {
//                 city: "Rajkot",
//                 desc: "Known for machine tools offering custom machinery at competitive prices",
//               },
//               {
//                 city: "Vadodara",
//                 desc: "Pharma and chemical industry hub with high demand for ROPP cappers",
//               },
//               {
//                 city: "Bhavnagar",
//                 desc: "Agrochemical and edible oil industries requiring automatic filling solutions",
//               },
//               {
//                 city: "Jamnagar",
//                 desc: "Industrial center with demand for labeling and capping solutions",
//               },
//             ].map((location, index) => (
//               <div key={index} className="bg-blue-50 p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <MapPin className="h-6 w-6 text-blue-600 mr-3" />
//                   <h3 className="text-xl font-semibold text-blue-900">
//                     {location.city}
//                   </h3>
//                 </div>
//                 <p className="text-gray-700">{location.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Buying Tips */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
//             Tips Before Buying Packaging Machines
//           </h2>
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold text-blue-900 mb-6">
//                   Essential Considerations
//                 </h3>
//                 <ul className="space-y-4">
//                   {[
//                     "Define Your Needs Clearly: Know your production output, product type, pouch/bottle sizes",
//                     "Request Machine Trials: Always ask for sample packaging from the supplier",
//                     "Check for AMC Plans: A good Annual Maintenance Contract keeps downtime low",
//                     "Look at Service Turnaround Time: Prefer local suppliers or those with quick servicing teams",
//                     "Discuss Future Scalability: Invest in machines that can be upgraded easily",
//                   ].map((tip, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{tip}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-blue-900 mb-6">
//                   Supplier Evaluation Checklist
//                 </h3>
//                 <ul className="space-y-3">
//                   {[
//                     "Experience in your industry",
//                     "In-house R&D or customization support",
//                     "After-sales service availability",
//                     "Spare part support",
//                     "Warranty terms",
//                     "Compliance with standards (ISO, GMP, CE)",
//                     "Client base and testimonials",
//                     "Machine demo or trial run facility",
//                     "Integration capabilities",
//                     "Training for your staff",
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-center">
//                       <Star className="h-4 w-4 text-blue-600 mr-3" />
//                       <span className="text-gray-700 text-sm">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-6">
//             Ready to Automate Your Packaging Process?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Connect with trusted suppliers across Gujarat for the best packaging
//             machinery solutions
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-blue-500 text-white px-8 py-3 cursor-pointer rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center">
//               <Phone className="h-5 w-5 mr-2" />
//               Call Now
//             </button>
//             {/* <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center">
//               <Mail className="h-5 w-5 mr-2" />
//               Get Quote
//             </button> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import pouchpackagingmachineimage from "../../assets/PouchPackagingMachineTwo.webp";

const sections = [
  {
    id: "intro",
    title:
      "Automatic Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
    body: (
      <>
        <p className="mb-4">
          In today’s fast-paced industrial environment, packaging has become
          more than just a necessity—it is a competitive advantage. Businesses
          across food, beverages, pharmaceuticals, chemicals, cosmetics, and
          agriculture require reliable, efficient, and cost-effective packaging
          solutions to meet rising consumer demand. Among these, the
          <strong>
            {" "}
            Automatic Pouch Packaging Machine Manufacturer in Daskroi,
            Ahmedabad, Gujarat
          </strong>
          &nbsp;has gained immense popularity due to its speed, precision, and
          versatility.
        </p>
        <p>
          <strong>TM TECH MAKE</strong>, based in Daskroi, Ahmedabad, Gujarat,
          is a trusted manufacturer of advanced Automatic Pouch Packaging
          Machines. Known for quality engineering, durable construction, and
          customer-focused service, TM TECH MAKE has built a reputation as one
          of the leading players in the packaging machinery industry.
        </p>
      </>
    ),
  },
  {
    id: "what-is",
    title: "What is an Automatic Pouch Packaging Machine?",
    body: (
      <>
        <p className="mb-4">
          An Automatic Pouch Packaging Machine is a highly efficient system
          designed to fill and seal pouches without manual intervention. These
          machines are suitable for powders, liquids, granules, and solid
          products. They work seamlessly with different pouch formats such as
          pillow pouches, zipper pouches, stand-up pouches, and laminated
          pouches.
        </p>
        <p>
          By automating the packaging process, these machines save time, reduce
          labor costs, and ensure consistent product quality.
        </p>
      </>
    ),
  },
  {
    id: "types",
    title: "Types of Automatic Pouch Packaging Machines",
    body: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Form Fill Seal (FFS) Machines:</strong> Machines that
          automatically form pouches from a film roll, fill the product, and
          seal it in one continuous operation.
        </li>
        <li>
          <strong>Powder Packaging Machines:</strong> Designed for flour,
          spices, milk powder, coffee, and other powdered items with high
          accuracy.
        </li>
        <li>
          <strong>Granule Packaging Machines:</strong> Suitable for rice,
          pulses, sugar, seeds, and dry snacks.
        </li>
        <li>
          <strong>Liquid Packaging Machines:</strong> Used for juices, sauces,
          edible oils, and other liquid products.
        </li>
        <li>
          <strong>Multi-Head Weigher Pouch Machines:</strong> High-precision
          weighing systems for snacks, dry fruits, and other small-sized
          products.
        </li>
      </ul>
    ),
  },
  {
    id: "features",
    title: "Key Features of TM TECH MAKE Automatic Pouch Packaging Machines",
    body: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Sturdy Stainless Steel Body</strong> ensures hygiene and
          durability.
        </li>
        <li>
          <strong>High-Speed Operation</strong> suitable for bulk production.
        </li>
        <li>
          <strong>Accurate Filling Technology</strong> to reduce wastage and
          improve efficiency.
        </li>
        <li>
          <strong>PLC-Based Control System</strong> with user-friendly
          touch-screen operation.
        </li>
        <li>
          <strong>Automatic Error Detection</strong> for smooth functioning and
          reduced downtime.
        </li>
        <li>
          <strong>Flexibility</strong> to handle various pouch sizes and product
          categories.
        </li>
        <li>
          <strong>Low Maintenance Design</strong> for long-term productivity.
        </li>
      </ul>
    ),
  },
  {
    id: "benefits",
    title: "Benefits of Using Automatic Pouch Packaging Machines",
    body: (
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Increased Production Capacity:</strong> With high-speed
          performance, these machines pack hundreds of pouches per hour.
        </li>
        <li>
          <strong>Consistency and Accuracy:</strong> Every pouch is filled and
          sealed with uniform precision, enhancing product quality.
        </li>
        <li>
          <strong>Reduced Labor Cost:</strong> Automation minimizes the need for
          manual labor, lowering operational expenses.
        </li>
        <li>
          <strong>Improved Product Safety:</strong> Airtight seals prevent
          contamination, extend shelf life, and protect product freshness.
        </li>
        <li>
          <strong>Enhanced Brand Value:</strong> Well-packaged pouches improve
          visual appeal and attract more customers.
        </li>
        <li>
          <strong>Eco-Friendly Options:</strong> Machines can handle
          biodegradable and recyclable packaging materials.
        </li>
      </ol>
    ),
  },
  {
    id: "applications",
    title: "Applications Across Industries",
    body: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Food & Beverages:</strong> Chips, snacks, tea, coffee, juices,
          sauces, and dairy products.
        </li>
        <li>
          <strong>Pharmaceuticals:</strong> Powders, granules, tablets, syrups,
          and health supplements.
        </li>
        <li>
          <strong>Chemicals:</strong> Fertilizers, detergents, agrochemicals,
          and cleaning products.
        </li>
        <li>
          <strong>Cosmetics & Personal Care:</strong> Creams, shampoos, lotions,
          and gels.
        </li>
        <li>
          <strong>Agriculture:</strong> Seeds, pesticides, and fertilizers.
        </li>
      </ul>
    ),
  },
  {
    id: "why-choose",
    title: "Why Choose TM TECH MAKE in Daskroi, Ahmedabad?",
    body: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Proven Expertise:</strong> Years of experience in
          manufacturing innovative packaging machinery.
        </li>
        <li>
          <strong>Customization:</strong> Machines are tailored to meet
          client-specific production needs.
        </li>
        <li>
          <strong>Cost-Effective Solutions:</strong> Advanced technology at
          competitive prices.
        </li>
        <li>
          <strong>Strict Quality Standards:</strong> Every machine undergoes
          rigorous testing before delivery.
        </li>
        <li>
          <strong>Dedicated Support:</strong> Comprehensive installation,
          training, and after-sales service.
        </li>
        <li>
          <strong>Trusted Brand:</strong> Widely recognized by industries across
          Gujarat, India, and overseas markets.
        </li>
      </ul>
    ),
  },
  {
    id: "daskroi",
    title: "Daskroi – The Emerging Industrial Hub",
    body: (
      <p>
        Daskroi, located in Ahmedabad, Gujarat, has developed into a thriving
        industrial hub for packaging machinery. The region benefits from
        advanced infrastructure, skilled manpower, and strong supply chains.
        Being based here, TM TECH MAKE offers businesses not only top-quality
        machines but also reliable service and timely delivery.
      </p>
    ),
  },
  {
    id: "conclusion",
    title: "Conclusion",
    body: (
      <>
        <p className="mb-4">
          In the modern packaging industry, efficiency, quality, and reliability
          are non-negotiable. An Automatic Pouch Packaging Machine from TM TECH
          MAKE ensures all these benefits while helping businesses scale their
          operations profitably.
        </p>
        <p>
          With robust design, advanced features, and unmatched service, TM TECH
          MAKE has earned its place as a trusted Automatic Pouch Packaging
          Machine manufacturer in Daskroi, Ahmedabad, Gujarat. For businesses
          seeking innovative packaging solutions, TM TECH MAKE is the partner
          you can rely on for long-term success.
        </p>
      </>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Automatic Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
  author: {
    "@type": "Organization",
    name: "TM TECH MAKE",
  },
  publisher: {
    "@type": "Organization",
    name: "TM TECH MAKE",
  },
  datePublished: "2025-08-30",
  dateModified: "2025-08-30",
  image: ["https://via.placeholder.com/1200x630.png?text=TM+TECH+MAKE"],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://example.com/blog/automatic-pouch-packaging-machine-daskroi",
  },
  description:
    "TM TECH MAKE is a leading Automatic Pouch Packaging Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering high-speed, durable, and efficient packaging solutions.",
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[#193CB8]/20 bg-[#193CB8]/5 px-3 py-1 text-xs font-medium text-[#193CB8]">
    {children}
  </span>
);

const Divider = () => (
  <div className="my-8 h-px w-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />
);

export default function TmtBarPlantBlog() {
  return (
    <main className="bg-white text-slate-800">
      <Helmet>
        <title>
          Automatic Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad,
          Gujarat – TM TECH MAKE
        </title>
        <meta
          name="description"
          content="TM TECH MAKE is a leading Automatic Pouch Packaging Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering high-speed, durable, and efficient packaging solutions."
        />
        {/* <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Automatic Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE"
        />
        <meta
          property="og:description"
          content="TM TECH MAKE is a leading Automatic Pouch Packaging Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering high-speed, durable, and efficient packaging solutions."
        /> */}
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <div>
              <Badge>Packaging · Automation · Gujarat</Badge>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-[#193CB8] md:text-4xl">
                Automatic Pouch Packaging Machine Manufacturer in Daskroi,
                Ahmedabad, Gujarat – TM TECH MAKE
              </h1>
              <p className="mt-4 text-slate-600">
                Advanced, high-speed and durable pouch packaging machines for
                food, pharma, chemicals, cosmetics & agriculture.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>Published: 30 Aug 2025</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>~7 min read</span>
              </div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src={pouchpackagingmachineimage}
                alt="Automatic Pouch Packaging Machine by TM TECH MAKE"
                className="h-96 w-full rounded-2xl border border-blue-100 object-cover shadow-xl"
                loading="eager"
              />
              <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-3xl bg-[#193CB8]/10 blur" />
              <div className="absolute -top-3 -right-3 -z-10 h-24 w-24 rounded-3xl bg-blue-300/20 blur" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="prose prose-slate max-w-none prose-h2:text-[#193CB8] prose-li:marker:text-blue-500 [&_strong]:text-slate-900">
            {sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="scroll-mt-24"
              >
                <h2 className="text-[#193CB8]">{s.title}</h2>
                <div className="text-base leading-7 text-slate-700">
                  {s.body}
                </div>
                {i !== sections.length - 1 && <Divider />}
              </motion.section>
            ))}

            {/* Conclusion CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#193CB8]">
                Looking for a Packaging Partner?
              </h3>
              <p className="mt-2 text-slate-700">
                TM TECH MAKE provides customized solutions, installation,
                training and after-sales support.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="tel:+919033471676"
                  className="rounded-xl bg-[#193CB8] px-4 py-2 font-medium text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#193CB8]/40"
                >
                  Get a Quote
                </a>
                <a
                  href="/our-products"
                  className="rounded-xl border border-[#193CB8]/30 bg-white px-4 py-2 font-medium text-[#193CB8] hover:bg-blue-50"
                >
                  Explore Machine Types
                </a>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* TOC */}
            <div className="sticky top-6 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#193CB8]">
                On this page
              </h3>
              <nav className="mt-4">
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group inline-flex w-full items-start gap-2 rounded-lg px-2 py-2 text-slate-700 hover:bg-blue-50 hover:text-[#193CB8]"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-300 group-hover:bg-[#193CB8]" />
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Divider />
              {/* Meta card */}
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Category</span>
                  <Badge>Packaging</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <Badge>Daskroi, Ahmedabad</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Brand</span>
                  <Badge>TM TECH MAKE</Badge>
                </div>
              </div>
            </div>

            {/* Placeholder Contact card */}
            <div
              id="contact"
              className="rounded-2xl border border-blue-100 bg-[#193CB8]/5 p-5"
            >
              <h3 className="text-base font-semibold text-[#193CB8]">
                Contact TM TECH MAKE
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Need consultation or a custom quote? Share your requirements and
                we’ll reach out.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
                <textarea
                  placeholder="Tell us about your product & pouch size"
                  rows={4}
                  className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  type="button"
                  className="w-full rounded-xl bg-[#193CB8] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#193CB8]/40"
                >
                  Submit
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* SEO Footer meta (no visible footer UI) */}
      <section aria-hidden className="sr-only">
        <h2>Meta</h2>
        <p>
          Meta Title: Automatic Pouch Packaging Machine Manufacturer in Daskroi,
          Ahmedabad, Gujarat – TM TECH MAKE
        </p>
        <p>
          Meta Description: TM TECH MAKE is a leading Automatic Pouch Packaging
          Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering
          high-speed, durable, and efficient packaging solutions.
        </p>
      </section>
    </main>
  );
}
