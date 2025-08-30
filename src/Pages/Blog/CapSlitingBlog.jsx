import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import OilCapSlittingAndFolding from "../../assets/OilCapSlittingAndFoldingMachine.jpeg";

export default function CapSlitingBlogPage() {
  const primary = "#193CB8";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* SEO meta tags (react-helmet) */}
      <Helmet>
        <title>
          Cap Slitting and Folding Machine Manufacturer in Daskroi, Ahmedabad,
          Gujarat – TM TECH MAKE
        </title>
        <meta
          name="description"
          content="TM TECH MAKE is a leading Cap Slitting and Folding Machine manufacturer in Daskroi, Ahmedabad, Gujarat, offering high-speed, precise, and durable packaging solutions."
        />
        {/* <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://yourdomain.com/cap-slitting-folding-machine-daskroi"
        />
        
        <meta
          property="og:title"
          content="Cap Slitting and Folding Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE"
        />
        <meta
          property="og:description"
          content="TM TECH MAKE is a leading Cap Slitting and Folding Machine manufacturer in Daskroi, Ahmedabad, Gujarat."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=TM+TECH+MAKE"
        />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cap Slitting and Folding Machine Manufacturer in Daskroi, Ahmedabad, Gujarat – TM TECH MAKE",
            "description": "TM TECH MAKE is a leading Cap Slitting and Folding Machine manufacturer in Daskroi, Ahmedabad, Gujarat.",
            "image": "https://via.placeholder.com/1200x630.png?text=TM+TECH+MAKE",
            "author": {"@type": "Organization", "name": "TM TECH MAKE"},
            "publisher": {"@type": "Organization", "name": "TM TECH MAKE"},
            "mainEntityOfPage": {"@type": "WebPage", "@id": "https://yourdomain.com/cap-slitting-folding-machine-daskroi"}
          }
        `}</script> */}
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{ color: primary }}
            >
              Cap Slitting and Folding Machine Manufacturer in Daskroi,
              Ahmedabad, Gujarat – TM TECH MAKE
            </h1>
            <p className="mt-4 text-gray-600">
              In the modern packaging and manufacturing industry, precision and
              efficiency are key to delivering high-quality products. One of the
              most critical components of bottle and container packaging is the
              cap. Proper handling, slitting, and folding of caps ensure product
              safety, prevent leakage, and improve consumer confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border"
                style={{ borderColor: primary }}
              >
                Daskroi, Ahmedabad
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border"
                style={{ borderColor: primary }}
              >
                Packaging Machinery
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border"
                style={{ borderColor: primary }}
              >
                TM TECH MAKE
              </span>
            </div>
          </div>

          <motion.div
            className="w-full h-56 md:h-64 xl:h-64 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={OilCapSlittingAndFolding}
              alt="Cap Slitting and Folding Machine"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Intro + What is */}
        <section className="mt-10 prose prose-lg max-w-none">
          <h2 style={{ color: primary }}>
            What is a Cap Slitting and Folding Machine?
          </h2>
          <p>
            A Cap Slitting and Folding Machine is specialized equipment used to
            process bottle caps or closures before they are sealed onto
            containers. The machine performs two main functions:
          </p>

          <ol className="ml-6">
            <li>
              <strong>Slitting</strong> – The cap is precisely cut or
              perforated, making it easier to seal and secure on the container.
            </li>
            <li>
              <strong>Folding</strong> – After slitting, the cap is folded in a
              uniform manner to ensure tight closure, preventing leakage or
              contamination.
            </li>
          </ol>

          <p>
            This machinery is widely used in the pharmaceutical, cosmetic,
            beverage, and food industries, where product integrity is crucial.
          </p>
        </section>

        {/* Features */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold" style={{ color: primary }}>
              Key Features of TM TECH MAKE Cap Slitting and Folding Machines
            </h3>
            <ul className="mt-4 space-y-3 list-disc list-inside text-gray-700">
              <li>
                High-Speed Operation – Capable of processing hundreds to
                thousands of caps per hour.
              </li>
              <li>
                Durable Construction – Made from premium-grade stainless steel
                to ensure longevity and compliance with hygiene standards.
              </li>
              <li>
                Precision Slitting and Folding – Ensures each cap is processed
                with exact accuracy for perfect sealing.
              </li>
              <li>
                User-Friendly Interface – Easy-to-operate controls and minimal
                setup time.
              </li>
              <li>
                Compact Design – Saves floor space while maintaining optimal
                production output.
              </li>
              <li>
                Adjustable Settings – Compatible with different cap sizes and
                types.
              </li>
              <li>
                Low Maintenance – Designed for smooth operation and minimal
                downtime.
              </li>
            </ul>
          </div>

          <div
            className="p-6 rounded-xl border"
            style={{ borderColor: primary }}
          >
            <h4 className="font-semibold">Quick Specs</h4>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div>
                <dt className="font-medium">Material</dt>
                <dd>Stainless Steel</dd>
              </div>
              <div>
                <dt className="font-medium">Speed</dt>
                <dd>Up to 1000+ caps/hr</dd>
              </div>
              <div>
                <dt className="font-medium">Adjustable</dt>
                <dd>Yes (multiple sizes)</dd>
              </div>
              <div>
                <dt className="font-medium">Warranty</dt>
                <dd>1 Year (optional extensions)</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold" style={{ color: primary }}>
            Benefits of Using Cap Slitting and Folding Machines
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <article
              className="p-4 rounded-lg shadow-sm border"
              style={{ borderColor: primary }}
            >
              <h5 className="font-semibold">Enhanced Product Safety</h5>
              <p className="text-sm text-gray-600 mt-2">
                Properly slit and folded caps prevent leakage and contamination.
              </p>
            </article>
            <article
              className="p-4 rounded-lg shadow-sm border"
              style={{ borderColor: primary }}
            >
              <h5 className="font-semibold">Consistent Quality</h5>
              <p className="text-sm text-gray-600 mt-2">
                Every cap is processed uniformly, maintaining packaging
                standards.
              </p>
            </article>
            <article
              className="p-4 rounded-lg shadow-sm border"
              style={{ borderColor: primary }}
            >
              <h5 className="font-semibold">Increased Production Efficiency</h5>
              <p className="text-sm text-gray-600 mt-2">
                High-speed processing reduces bottlenecks in packaging lines.
              </p>
            </article>
          </div>
        </section>

        {/* Applications */}
        <section className="mt-10 prose prose-lg max-w-none">
          <h3 style={{ color: primary }}>Applications Across Industries</h3>
          <p>
            TM TECH MAKE Cap Slitting and Folding Machines are widely used
            across multiple sectors:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              Pharmaceuticals: Syrups, tonics, liquid medicines, and capsules.
            </li>
            <li>
              Food & Beverages: Juices, sauces, edible oils, and bottled drinks.
            </li>
            <li>
              Cosmetics & Personal Care: Creams, lotions, oils, and haircare
              products.
            </li>
            <li>
              Chemicals & Pesticides: Liquid chemicals, cleaning agents, and
              agricultural solutions.
            </li>
          </ul>
        </section>

        {/* Why Choose */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: primary }}>
              Why Choose TM TECH MAKE in Daskroi, Ahmedabad?
            </h3>
            <ul className="mt-4 list-inside list-disc text-gray-700 space-y-2">
              <li>
                Proven Expertise: Years of experience in designing precision
                machinery for packaging applications.
              </li>
              <li>
                Custom Solutions: Machines can be tailored according to cap
                size, type, and production speed.
              </li>
              <li>
                Quality Assurance: Every machine undergoes rigorous testing to
                ensure consistent performance.
              </li>
              <li>
                Reliable After-Sales Support: Installation, training,
                maintenance, and spare parts support.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-blue-50">
            <h4 className="font-semibold" style={{ color: primary }}>
              Daskroi – The Industrial Hub
            </h4>
            <p className="mt-2 text-gray-700">
              Daskroi, Ahmedabad, Gujarat, is emerging as a key hub for
              machinery manufacturing, especially in packaging equipment. Its
              skilled workforce, strong infrastructure, and proximity to major
              industrial markets make it an ideal location for manufacturers
              like TM TECH MAKE.
            </p>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="mt-10 bg-white border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h4 className="text-lg font-semibold">
              Ready to upgrade your packaging line?
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              Contact TM TECH MAKE for custom solutions, demos, and quotes.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="tel:+919033471676"
              className="inline-block px-6 py-3 rounded-md text-white font-medium shadow"
              style={{ background: primary }}
            >
              Get a Quote
            </a>
          </div>
        </motion.section>

        {/* Conclusion */}
        <section className="mt-10 prose prose-lg max-w-none">
          <h3 style={{ color: primary }}>Conclusion</h3>
          <p>
            In modern packaging operations, precision, speed, and reliability
            are essential. A Cap Slitting and Folding Machine from TM TECH MAKE
            ensures that every bottle cap is processed accurately, enhancing
            product safety and consumer trust. With robust construction,
            advanced features, and dedicated support, TM TECH MAKE has
            established itself as a leading Cap Slitting and Folding Machine
            Manufacturer in Daskroi, Ahmedabad, Gujarat.
          </p>
        </section>
      </main>
    </div>
  );
}
