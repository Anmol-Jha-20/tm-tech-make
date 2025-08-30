import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PouchPackagingMachineImage from "../../assets/PouchPackagingMachine.jpeg";
import SingleHeadRoppImage from "../../assets/SingleHeadROPPCappingMachine.jpeg";
import OilCapSlittingAndFolding from "../../assets/OilCapSlittingAndFoldingMachine.jpeg";
import pouchpackagingmachineimage from "../../assets/PouchPackagingMachineTwo.webp";
import PouchpackagingmachineimageTwo from "../../assets/PouchPackagingMachineThree.webp";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    countries: 0,
  });

  const navigate = useNavigate();
  const products = [
    {
      category: "Blog",
      description: "TM Tech Blog",
      items: [
        {
          title:
            "Best Packaging & Capping Machines in Gujarat: Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar",
          description:
            "Gujarat is one of India's fastest-growing industrial hubs, home to countless manufacturing units and packaging plants. Cities like Ahmedabad, Surat, Vadodara, Rajkot, and Gandhinagar play a vital role in the development of India’s packaging and bottling industries. With a growing demand for high-speed, automated solutions, companies are increasingly investing in top-quality equipment such as pouch packaging machines, ROPP capping machines, cap slitting machines, and oil cap folding units.",
          image: PouchpackagingmachineimageTwo,
          specs: [
            "High tensile strength",
            "Earthquake resistance",
            "Energy-efficient ",
          ],
          link: "/tmt-rolling-mill-blog",
        },
        // {
        //   title:
        //     "Automatic Pouch Packaging & ROPP Capping Machines in Gujarat – Supplier in Ahmedabad, Surat & More",
        //   description:
        //     "Gujarat is one of India’s fastest-growing industrial states, renowned for its manufacturing, engineering, and packaging solutions. The demand for efficient, automated packaging machinery—especially automatic pouch packaging machines and ROPP capping machines—has grown exponentially in cities like Ahmedabad, Surat, Rajkot, Vadodara, and Bhavnagar. With a focus on reducing manual labor, increasing speed, and ensuring hygiene and product consistency, businesses across sectors are investing in advanced machinery solutions.",
        //   image: pouchpackagingmachineimage,
        //   specs: ["High ROI", "Scalability", "Government incentives"],
        //   link: "/tmt-bar-plant-blog",
        // },
        {
          title:
            "Buy Single Head ROPP Capping Machines & Oil Cap Slitting Machines in Gujarat Cities",
          description:
            "As India’s packaging and bottling industries grow, the need for precision-engineered equipment like Single Head ROPP Capping Machines and Oil Cap Slitting Machines is rising—particularly in Gujarat. Known for its robust industrial base and engineering excellence, Gujarat’s cities such as Ahmedabad, Rajkot, and Surat have become key centers for manufacturing and supplying such machinery.",
          image: OilCapSlittingAndFolding,
          specs: [
            "Higher production output",
            "energy efficiency",
            "Consistent product quality ",
          ],
          link: "/tmt-machine-equipment-blog",
        },
        {
          title:
            "High-Performance Packaging Machinery in Gujarat – From Gandhinagar to Rajkot",
          description:
            "Gujarat stands tall as a manufacturing and industrial powerhouse in India. Known for its entrepreneurial spirit and engineering innovation, the state has carved a strong niche in the packaging machinery segment. From Gandhinagar, the state capital with modern infrastructure, to Rajkot, a city known for precision engineering, Gujarat is home to a thriving ecosystem of high-performance packaging machine manufacturers and suppliers.",
          image:
            "https://cdn.pixabay.com/photo/2020/11/23/16/51/cnc-5770326_1280.jpg",
          specs: [
            "High precision",
            "Reduced human error",
            "Faster production cycles",
          ],
          link: "/cnc-machine-equipment-blog",
        },
        // {
        //   title:
        //     "Pouch Packaging Machine Manufacturer in Ahmedabad – Reliable, Affordable & Innovative",
        //   description:
        //     "The growing demand for efficient, hygienic, and cost-effective packaging solutions has led to a boom in the use of pouch packaging machines across multiple industries. Ahmedabad, one of India's key industrial hubs, is home to numerous manufacturers who specialize in high-quality pouch packaging machinery.",
        //   image: PouchPackagingMachineImage,
        //   specs: ["Efficient", "Automated", "Versatile"],
        //   link: "/pouch-packaging-machine-blog",
        // },
        // {
        //   title: "Single Head ROPP Capping Machine in Gujarat",
        //   description:
        //     "In today’s fast-paced manufacturing environment, ensuring the safety, hygiene, and shelf life of liquid-based products is critical. The Single Head ROPP (Roll-On Pilfer Proof) Capping Machine plays a vital role in sealing bottles securely and efficiently. If you’re searching for a high-performance ROPP capping machine in Gujarat, then TmTeckMake is your trusted partner.",
        //   image: SingleHeadRoppImage,
        //   specs: ["Durable", "Fast", "Reliable"],
        //   link: "/single-head-ropp-caping-blog",
        // },
        // {
        //   title: "Oil Cap Slitting and Folding Machine Manufacturer in Rajkot",
        //   description:
        //     "In the modern packaging industry, precision and tamper-resistance are non-negotiable. Whether you're sealing edible oils, lubricants, or medicinal syrups, the integrity of the cap is key to maintaining product quality and consumer trust. That’s where the Oil Cap Slitting and Folding Machine steps in—a must-have for ensuring tamper-proof aluminum closures.",
        //   image: OilCapSlittingAndFolding,
        //   specs: ["Precise", "Automated", "Efficient"],
        //   link: "/oil-cap-slitting-folding-blog",
        // },
        {
          title:
            "Automatic Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
          description:
            "In today’s fast-paced industrial environment, packaging has become more than just a necessity—it is a competitive advantage. Businesses across food, beverages, pharmaceuticals, chemicals, cosmetics, and agriculture require reliable, efficient, and cost-effective packaging solutions to meet rising consumer demand. Among these, the Automatic Pouch Packaging Machine  Manufacturer in Daskroi, Ahmedabad, Gujarat  has gained immense popularity due to its speed, precision, and versatility.",
          image: pouchpackagingmachineimage,
          specs: ["High ROI", "Scalability", "Government incentives"],
          link: "/tmt-bar-plant-blog",
        },
        {
          title:
            "Cap Slitting and Folding Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
          description:
            "In the modern packaging and manufacturing industry, precision and efficiency are key to delivering high-quality products. One of the most critical components of bottle and container packaging is the cap. Proper handling, slitting, and folding of caps ensure product safety, prevent leakage, and improve consumer confidence. This is where Cap Slitting and Folding Machines in Daskroi, Ahmedabad, Gujarat  play a vital role.",
          image: OilCapSlittingAndFolding,
          specs: ["Precise", "Automated", "Efficient"],
          link: "/cap-sliting-blog",
        },
        {
          title:
            "Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
          description:
            "In today’s fast-moving world, packaging is no longer just about wrapping a product—it is about safety, efficiency, branding, and consumer convenience. Among different packaging technologies,Pouch Packaging Machine Manufacturer in Daskroi, Ahmedabad, Gujarat has become one of the most popular solutions across industries. They are versatile, cost-effective, and suitable for a wide variety of products, from food items and beverages to chemicals, pharmaceuticals, and cosmetics.",
          image: PouchPackagingMachineImage,
          specs: ["Efficient", "Automated", "Versatile"],
          link: "/pouch-packaging-machine-blog",
        },
        {
          title:
            "Single Head ROPP Capping Machine Manufacturer in Daskroi, Ahmedabad, Gujarat -  TM TECH MAKE ",
          description:
            "In today’s competitive packaging industry, automation and precision play a vital role in ensuring efficiency, product safety, and brand value. One of the most widely used solutions for secure bottle sealing is the Single Head ROPP Capping Machine. Known for its reliability, compact design, and ease of operation, this machine has become a preferred choice across industries such as pharmaceuticals, beverages, cosmetics, chemicals, edible oils, and more.",
          image: SingleHeadRoppImage,
          specs: ["Durable", "Fast", "Reliable"],
          link: "/single-head-ropp-caping-blog",
        },
      ],
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounters = () => {
      const targets = {
        experience: 15,
        clients: 500,
        projects: 1000,
        countries: 25,
      };

      const duration = 2000;
      const steps = 50;
      const increment = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          experience: Math.floor(targets.experience * progress),
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          countries: Math.floor(targets.countries * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* SEO Meta Information */}
      <Helmet>
        <title>Blog | TM Tech Make</title>
        <meta
          name="description"
          content="Learn about TM Tech Make, a leading manufacturer of packaging machines, cap elevator machines, and slitting machines, delivering high-quality automation solutions worldwide."
        />
        <meta
          name="keywords"
          content="TM Tech Make Blogs, Packaging Machines, Cap Elevator Machines, Slitting Machines, Industrial Automation"
        />
        <meta name="author" content="Webvortex Solutions" />
        <meta property="og:title" content="Blog | TM Tech Make" />
        <meta
          property="og:description"
          content="Discover our story, expertise, and milestones as a premier packaging machinery manufacturer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tmtechmake.com/blog" />
        {/* <meta
          property="og:image"
          content="https://tmtechmake.com/og-image.jpg"
        /> */}
      </Helmet>

      <div className="hidden">
        <h1>TM Tech Make - Leading Packaging Machine Manufacturer</h1>
        <p>
          TM Tech Make Blog - Premier manufacturer of packaging machines, cap
          elevator machines, slitting machines and industrial automation
          equipment.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
              TM Tech Make Blogs
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading the future of packaging technology with innovative
              solutions and uncompromising quality
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                📦 Packaging Solutions
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                🏭 Industrial Equipment
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                🌍 Global Presence
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>
      {products.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-20">
          {/* <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            )}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-8">
            {category.items.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                            Premium
                          </div> */}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate(product.link)}
                    className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
