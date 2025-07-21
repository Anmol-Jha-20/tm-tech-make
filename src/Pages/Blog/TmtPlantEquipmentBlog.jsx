import React from "react";
import {
  MapPin,
  Settings,
  Users,
  Award,
  ArrowRight,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function TmtPlantEquipmentBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags */}
      <div className="hidden">
        <title>
          Affordable TMT Plant Equipment in India | Turnkey Steel Solutions –
          Coimbatore to Jharkhand
        </title>
        <meta
          name="description"
          content="Find affordable TMT plant equipment in India with expert installation in Coimbatore, turnkey solutions in Chennai, and trusted TMT bar manufacturers in Jharkhand."
        />
        <meta
          name="keywords"
          content="Affordable TMT plant equipment in India,TMT bar production line company in Jharkhand,TMT bar plant installation service in Coimbatore,Turnkey steel solutions in Chennai,Best TMT rolling mill manufacturer near me"
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Affordable TMT Plant Equipment & Turnkey Solutions in India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            From Coimbatore to Jharkhand – Your End‑to‑End Guide for
            Cost‑Effective Steel Manufacturing
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            {[
              "Affordable Machinery",
              "Turnkey Steel Plants",
              "Installation Services",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-blue-500/90 hover:bg-blue-600 transition px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Why Affordable Equipment */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <Settings className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Why Affordable TMT Plant Equipment Matters
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Entering the steel sector demands smart capital allocation.
            Affordable equipment offers superior value without sacrificing
            BIS‑compliant quality.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Lower upfront investment",
              "Reduced production downtime",
              "Energy efficiency & low operational cost",
              "Compact designs ideal for MSMEs",
              "Scalable layouts for future expansion",
            ].map((adv, i) => (
              <div key={i} className="flex items-start">
                <Award className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-base md:text-lg leading-snug">
                  {adv}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Affordable Equipment & Manufacturers */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Affordable TMT Plant Equipment in India
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Indian manufacturers deliver tailored lines from 5 TPH to 100 TPH
            capacities.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Popular Equipment Includes
              </h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {[
                  "Reheating furnaces",
                  "2‑Hi / 3‑Hi / Housingless rolling mill stands",
                  "Quenching boxes (QST systems)",
                  "Cooling beds & shearing machines",
                  "Automatic bundling & material handling",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Leading Budget‑Friendly Manufacturers
              </h3>
              {[
                "Steefo Engineering Corporation (Ahmedabad)",
                "Teksmithe Steel Solutions (Ghaziabad)",
                "RMT Tools India Pvt. Ltd. (Punjab)",
                "Harjot International (Mandi Gobindgarh)",
              ].map((name, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-4 rounded-lg flex items-start mb-3"
                >
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span className="text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Sections */}
        {[
          {
            title: "TMT Bar Production Line Company in Jharkhand",
            desc: `Jharkhand's rich mineral reserves and MSME incentives make it ideal for TMT lines.`,
            bullets: [
              "Mecon Limited – Turnkey consultancy & design",
              "Electrotherm India Ltd. – Integrated bar systems",
              "Adhunik Industries – Regional production leader",
            ],
          },
          {
            title: "TMT Bar Plant Installation Service in Coimbatore",
            desc: `Coimbatore offers precise, deadline‑driven installation services for new mills.`,
            bullets: [
              "Kay Bouvet Engineering Ltd.",
              "Premier Engineering Works",
              "Sree Rang Engineering",
            ],
          },
          {
            title: "Turnkey Steel Solutions in Chennai",
            desc: `Seaport access and mature supply chains position Chennai as a turnkey hotspot.`,
            bullets: [
              "Bharat Heavy Electricals Ltd. (BHEL)",
              "Southern Steel Industries",
              "Gurudev Engineering",
            ],
          },
          {
            title: "Best TMT Rolling Mill Manufacturer Near Me",
            desc: `Evaluate service footprint, capacity range, and AMC plans before deciding.`,
            bullets: [
              "SMT Machines India Ltd.",
              "UGI Engineering Works Pvt. Ltd.",
              "Bentex Industrials Pvt. Ltd.",
            ],
          },
        ].map((section, idx) => (
          <section
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-4"
          >
            <div className="flex items-center mb-4">
              <MapPin className="h-7 w-7 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {section.desc}
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* Cost Overview */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-x-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Cost Overview: Budgeting Your TMT Plant Setup
          </h2>
          <table className="min-w-full text-left text-gray-700">
            <thead>
              <tr className="text-blue-900 font-semibold border-b">
                <th className="py-2 pr-6">Component</th>
                <th className="py-2">Estimated Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Machinery & Equipment", "7 – 15 Crore"],
                ["Installation & Civil Construction", "2 – 5 Crore"],
                ["Automation & Control Systems", "1 – 3 Crore"],
                ["Trial Production & Testing", "0.5 – 1 Crore"],
                ["Working Capital (6 months)", "2 – 4 Crore"],
              ].map(([comp, cost], i) => (
                <tr key={i} className={i % 2 ? "bg-blue-50/50" : ""}>
                  <td className="py-2 pr-6 whitespace-nowrap">{comp}</td>
                  <td className="py-2 whitespace-nowrap">{cost}</td>
                </tr>
              ))}
              <tr className="border-t">
                <td className="py-2 pr-6 font-semibold text-blue-900">
                  Total Estimated Investment
                </td>
                <td className="py-2 font-semibold text-blue-900">
                  12 – 28 Crore
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Compliance */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Compliance & Quality Certifications
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Ensure your plant adheres to national standards and environmental
            norms:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-base md:text-lg">
            {[
              "IS 1786 – TMT bar quality",
              "BIS Certification",
              "Pollution Control Board clearance",
              "Factory license & labor welfare compliance",
            ].map((c, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Final Thoughts</h2>
          <p className="text-lg leading-relaxed">
            From sourcing budget‑friendly machinery to securing turnkey
            partners, India offers a robust ecosystem for every stage of TMT bar
            production. Align with manufacturers who combine cost‑efficiency,
            compliance assistance, and dependable after‑sales service to build a
            future‑ready steel business.
          </p>
        </section>
      </main>
    </div>
  );
}
