// import React from "react";
// import {
//   MapPin,
//   Factory,
//   Settings,
//   Users,
//   Award,
//   ArrowRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet";

// export default function TmtBarPlantBlog() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>
//           How to Start a TMT Bar Plant in India | Setup & Cost Guide
//         </title>
//         <meta
//           name="description"
//           content="Learn how to start a TMT bar plant in India with insights on cost, setup, and turnkey solutions. Explore expert services in Hyderabad, Pune, Lucknow, Kolkata & Punjab."
//         />
//         <meta
//           name="keywords"
//           content="How to start a TMT bar plant in India, TMT plant installation service in Lucknow, TMT bar plant setup in Kolkata, Turnkey rolling mill solution in Punjab, TMT rolling mill in Hyderabad"
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               How to Start a TMT Bar Plant in India
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
//               Cost, Setup, & Turnkey Solutions in Hyderabad, Pune, and Chennai
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
//               <span className="bg-blue-500 px-4 py-2 rounded-full">
//                 TMT Plant Setup
//               </span>
//               <span className="bg-blue-500 px-4 py-2 rounded-full">
//                 Turnkey Rolling Mills
//               </span>
//               <span className="bg-blue-500 px-4 py-2 rounded-full">
//                 Installation Services
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
//         {/* Introduction */}
//         <section>
//           <div className="bg-white shadow-xl rounded-2xl p-8">
//             <h2 className="text-3xl font-bold text-blue-900 mb-6">
//               Why Start a TMT Bar Plant in India?
//             </h2>
//             <p className="text-lg text-gray-700 mb-4">
//               India is the world's second-largest steel producer with increasing
//               demand for high-quality TMT bars. These bars are essential for
//               buildings, bridges, highways, and other infrastructure.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2">
//               <li>High ROI due to infrastructure boom</li>
//               <li>Scalability in urban & semi-urban areas</li>
//               <li>Domestic & export opportunities</li>
//               <li>Government incentives for MSMEs</li>
//             </ul>
//           </div>
//         </section>

//         {/* Step-by-Step Guide */}
//         <section>
//           <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
//             Step-by-Step Guide to Starting a TMT Bar Plant
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             {[
//               {
//                 title: "Market Research & Feasibility",
//                 points: [
//                   "Regional demand analysis",
//                   "Competitor landscape",
//                   "Supply chain insights",
//                   "Growth trends in cities like Hyderabad & Chennai",
//                 ],
//               },
//               {
//                 title: "Business Planning & Approvals",
//                 points: [
//                   "Project cost & ROI forecasting",
//                   "MSME registration, factory license",
//                   "Pollution & safety clearance",
//                 ],
//               },
//               {
//                 title: "Land Acquisition & Layout",
//                 points: [
//                   "Site near ports or industrial zones",
//                   "Infrastructure-ready plots in Pune, Chennai",
//                   "Optimized plant design",
//                 ],
//               },
//               {
//                 title: "Machinery Procurement",
//                 points: [
//                   "Reheating furnace, rolling stands, quenching box",
//                   "Turnkey vs custom machinery providers",
//                 ],
//               },
//             ].map((step, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500"
//               >
//                 <h3 className="text-xl font-semibold text-blue-800 mb-4">
//                   {step.title}
//                 </h3>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                   {step.points.map((p, i) => (
//                     <li key={i}>{p}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Turnkey Solutions */}
//         <section>
//           <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
//             Turnkey TMT Plant Solutions by Region
//           </h2>
//           {[
//             {
//               city: "Punjab",
//               providers: [
//                 "SMT Machines India Ltd.",
//                 "Bentex Industrials Pvt. Ltd.",
//                 "Gagan International",
//               ],
//               desc: "Punjab-based companies provide end-to-end TMT rolling mill setup, including training and automation.",
//             },
//             {
//               city: "Lucknow",
//               providers: ["Local OEM Partners"],
//               desc: "Ideal for North & East India. Services include machinery erection, trial runs, and staff training.",
//             },
//             {
//               city: "Kolkata",
//               providers: [
//                 "RMT Tools India Pvt. Ltd.",
//                 "UGI Engineering Works",
//                 "Gagan Steel Projects",
//               ],
//               desc: "Strategic eastern location with cost-effective logistics and port proximity.",
//             },
//             {
//               city: "Hyderabad",
//               providers: ["Teksmithe Steel Solutions", "Harjot International"],
//               desc: "High construction demand. Beneficial government support via TS-iPASS scheme.",
//             },
//           ].map((hub, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 mb-6 rounded-xl shadow border border-blue-100"
//             >
//               <h3 className="text-2xl font-bold text-blue-800 mb-2">
//                 {hub.city}
//               </h3>
//               <p className="text-gray-700 mb-2">{hub.desc}</p>
//               <ul className="list-disc pl-5 text-gray-700">
//                 {hub.providers.map((prov, i) => (
//                   <li key={i}>{prov}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>

//         {/* Cost Breakdown */}
//         <section>
//           <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
//             Estimated Cost of a TMT Bar Plant
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse bg-white rounded-xl shadow overflow-hidden">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   <th className="px-4 py-3 text-left">Component</th>
//                   <th className="px-4 py-3 text-left">Estimated Cost (INR)</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-800">
//                 {[
//                   ["Land & Civil Construction", "2 – 5 Crore"],
//                   ["Machinery & Equipment", "8 – 15 Crore"],
//                   ["Electrical & Automation", "1.5 – 3 Crore"],
//                   ["Installation & Commissioning", "1 – 2 Crore"],
//                   ["Working Capital (6 months)", "2 – 4 Crore"],
//                   ["Miscellaneous", "0.5 – 1 Crore"],
//                 ].map(([comp, cost], index) => (
//                   <tr key={index} className="border-t">
//                     <td className="px-4 py-2">{comp}</td>
//                     <td className="px-4 py-2">{cost}</td>
//                   </tr>
//                 ))}
//                 <tr className="border-t font-bold bg-blue-50">
//                   <td className="px-4 py-3">Total Investment</td>
//                   <td className="px-4 py-3">15 – 30 Crore</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Final Thoughts */}
//         <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Final Thoughts
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             Starting a TMT bar plant is a high-potential opportunity. With
//             proper market research, cost planning, and expert partnerships, you
//             can set up a successful steel unit in key Indian cities.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Focus on trusted turnkey partners in Punjab, machinery suppliers in
//             Kolkata, and installation services in cities like Lucknow and
//             Hyderabad to ensure a smooth launch.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

import React from "react";
import {
  Factory,
  Package,
  Settings,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function TmtBarPlantBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags would be handled by Next.js Head or similar */}

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Automatic Pouch Packaging & ROPP Capping Machines in Gujarat
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
              Explore high-speed, automatic pouch packaging and ROPP capping
              machines in Gujarat. Trusted suppliers in Ahmedabad, Surat,
              Rajkot, and more industrial cities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Pouch Packaging Machine Gujarat
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                ROPP Capping Machine Ahmedabad
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Automatic Packaging Machine Surat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Gujarat: India's Packaging Machinery Hub
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gujarat is one of India's fastest-growing industrial states,
                renowned for its manufacturing, engineering, and packaging
                solutions. The demand for efficient, automated packaging
                machinery—especially automatic pouch packaging machines and ROPP
                capping machines—has grown exponentially in cities like
                Ahmedabad, Surat, Rajkot, Vadodara, and Bhavnagar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a focus on reducing manual labor, increasing speed, and
                ensuring hygiene and product consistency, businesses across
                sectors are investing in advanced machinery solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900">
                  Manufacturing Hub
                </h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900">
                  Advanced Technology
                </h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900">
                  Quality Solutions
                </h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900">
                  Pan-Gujarat Service
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Why Choose Packaging Automation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "High Speed",
                desc: "Handle thousands of units per hour",
              },
              {
                icon: CheckCircle,
                title: "Hygiene",
                desc: "Reduces human contact, maintaining food and pharma-grade standards",
              },
              {
                icon: Star,
                title: "Consistency",
                desc: "Every pouch or bottle sealed uniformly",
              },
              {
                icon: Settings,
                title: "Cost Savings",
                desc: "Reduces long-term labor and operational costs",
              },
              {
                icon: ArrowRight,
                title: "Scalability",
                desc: "Easily ramp up production to meet seasonal or market demand",
              },
              {
                icon: Package,
                title: "Quality",
                desc: "Superior packaging quality with minimal waste",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Types of Packaging Machines
          </h2>

          {/* Pouch Packaging Machines */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-800 mb-8">
              Automatic Pouch Packaging Machines
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "VFFS Machines",
                  desc: "Vertical Form Fill Seal for granular products",
                  features: [
                    "Forms pouches from roll stock",
                    "Ideal for spices & snacks",
                    "High-speed operation",
                  ],
                },
                {
                  title: "HFFS Machines",
                  desc: "Horizontal Form Fill Seal for delicate items",
                  features: [
                    "Horizontal filling",
                    "Perfect for biscuits",
                    "Gentle handling",
                  ],
                },
                {
                  title: "Pre-Made Pouch",
                  desc: "Uses pre-formed pouches for premium products",
                  features: [
                    "Pre-formed pouches",
                    "Premium aesthetics",
                    "Custom designs",
                  ],
                },
                {
                  title: "Multi-Track Sachet",
                  desc: "Simultaneous filling of multiple sachets",
                  features: [
                    "High volume",
                    "FMCG applications",
                    "Multiple lanes",
                  ],
                },
              ].map((machine, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">
                    {machine.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{machine.desc}</p>
                  <ul className="space-y-1">
                    {machine.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-blue-700 flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ROPP Capping Machines */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8">
              ROPP Capping Machines
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Semi-Automatic ROPP",
                  desc: "Suitable for small to medium-scale industries",
                  speed: "30-40 bottles/min",
                },
                {
                  title: "Fully Automatic Single Head",
                  desc: "Used in bottling lines with moderate volumes",
                  speed: "40-60 bottles/min",
                },
                {
                  title: "Multi-Head ROPP",
                  desc: "For high-speed lines in pharma or liquor industries",
                  speed: "60-120+ bottles/min",
                },
              ].map((machine, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">
                    {machine.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{machine.desc}</p>
                  <div className="text-blue-600 font-semibold">
                    {machine.speed}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Food & Beverages",
                items: [
                  "Tea, Spices, Flour",
                  "Sugar, Milk Powder",
                  "Instant Mix Products",
                ],
              },
              {
                title: "Pharmaceuticals",
                items: ["ORS Sachets", "Tablets, Powders", "Syrups & Liquids"],
              },
              {
                title: "Cosmetics",
                items: ["Face Packs", "Liquid Soap", "Creams & Lotions"],
              },
              {
                title: "Chemical & Agro",
                items: [
                  "Seeds, Fertilizers",
                  "Pesticides",
                  "Industrial Chemicals",
                ],
              },
              {
                title: "Detergents & Cleaners",
                items: ["Liquid Detergent", "Floor Cleaner", "Washing Powder"],
              },
              {
                title: "Liquor & Oils",
                items: ["Alcoholic Beverages", "Cooking Oils", "Perfumes"],
              },
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {industry.title}
                </h3>
                <ul className="space-y-2">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Major Cities We Cover in Gujarat
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "Ahmedabad",
                desc: "Major engineering and automation center with leading packaging machine manufacturers",
              },
              {
                city: "Surat",
                desc: "Rapidly expanding in FMCG and food processing with growing demand for VFFS machines",
              },
              {
                city: "Rajkot",
                desc: "Known for machine tools offering custom machinery at competitive prices",
              },
              {
                city: "Vadodara",
                desc: "Pharma and chemical industry hub with high demand for ROPP cappers",
              },
              {
                city: "Bhavnagar",
                desc: "Agrochemical and edible oil industries requiring automatic filling solutions",
              },
              {
                city: "Jamnagar",
                desc: "Industrial center with demand for labeling and capping solutions",
              },
            ].map((location, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-900">
                    {location.city}
                  </h3>
                </div>
                <p className="text-gray-700">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Tips Before Buying Packaging Machines
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-6">
                  Essential Considerations
                </h3>
                <ul className="space-y-4">
                  {[
                    "Define Your Needs Clearly: Know your production output, product type, pouch/bottle sizes",
                    "Request Machine Trials: Always ask for sample packaging from the supplier",
                    "Check for AMC Plans: A good Annual Maintenance Contract keeps downtime low",
                    "Look at Service Turnaround Time: Prefer local suppliers or those with quick servicing teams",
                    "Discuss Future Scalability: Invest in machines that can be upgraded easily",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-6">
                  Supplier Evaluation Checklist
                </h3>
                <ul className="space-y-3">
                  {[
                    "Experience in your industry",
                    "In-house R&D or customization support",
                    "After-sales service availability",
                    "Spare part support",
                    "Warranty terms",
                    "Compliance with standards (ISO, GMP, CE)",
                    "Client base and testimonials",
                    "Machine demo or trial run facility",
                    "Integration capabilities",
                    "Training for your staff",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="h-4 w-4 text-blue-600 mr-3" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Packaging Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with trusted suppliers across Gujarat for the best packaging
            machinery solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-3 cursor-pointer rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </button>
            {/* <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Get Quote
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
