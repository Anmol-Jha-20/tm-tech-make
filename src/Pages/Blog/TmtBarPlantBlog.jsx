import React from "react";
import {
  MapPin,
  Factory,
  Settings,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export default function TmtBarPlantBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags */}
      <div className="hidden">
        <title>
          How to Start a TMT Bar Plant in India | Setup & Cost Guide
        </title>
        <meta
          name="description"
          content="Learn how to start a TMT bar plant in India with insights on cost, setup, and turnkey solutions. Explore expert services in Hyderabad, Pune, Lucknow, Kolkata & Punjab."
        />
        <meta
          name="keywords"
          content="How to start a TMT bar plant in India, TMT plant installation service in Lucknow, TMT bar plant setup in Kolkata, Turnkey rolling mill solution in Punjab, TMT rolling mill in Hyderabad"
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Start a TMT Bar Plant in India
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Cost, Setup, & Turnkey Solutions in Hyderabad, Pune, and Chennai
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-blue-500 px-4 py-2 rounded-full">
                TMT Plant Setup
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full">
                Turnkey Rolling Mills
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full">
                Installation Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Introduction */}
        <section>
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Start a TMT Bar Plant in India?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              India is the world's second-largest steel producer with increasing
              demand for high-quality TMT bars. These bars are essential for
              buildings, bridges, highways, and other infrastructure.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>High ROI due to infrastructure boom</li>
              <li>Scalability in urban & semi-urban areas</li>
              <li>Domestic & export opportunities</li>
              <li>Government incentives for MSMEs</li>
            </ul>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Step-by-Step Guide to Starting a TMT Bar Plant
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Market Research & Feasibility",
                points: [
                  "Regional demand analysis",
                  "Competitor landscape",
                  "Supply chain insights",
                  "Growth trends in cities like Hyderabad & Chennai",
                ],
              },
              {
                title: "Business Planning & Approvals",
                points: [
                  "Project cost & ROI forecasting",
                  "MSME registration, factory license",
                  "Pollution & safety clearance",
                ],
              },
              {
                title: "Land Acquisition & Layout",
                points: [
                  "Site near ports or industrial zones",
                  "Infrastructure-ready plots in Pune, Chennai",
                  "Optimized plant design",
                ],
              },
              {
                title: "Machinery Procurement",
                points: [
                  "Reheating furnace, rolling stands, quenching box",
                  "Turnkey vs custom machinery providers",
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {step.title}
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {step.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Turnkey Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Turnkey TMT Plant Solutions by Region
          </h2>
          {[
            {
              city: "Punjab",
              providers: [
                "SMT Machines India Ltd.",
                "Bentex Industrials Pvt. Ltd.",
                "Gagan International",
              ],
              desc: "Punjab-based companies provide end-to-end TMT rolling mill setup, including training and automation.",
            },
            {
              city: "Lucknow",
              providers: ["Local OEM Partners"],
              desc: "Ideal for North & East India. Services include machinery erection, trial runs, and staff training.",
            },
            {
              city: "Kolkata",
              providers: [
                "RMT Tools India Pvt. Ltd.",
                "UGI Engineering Works",
                "Gagan Steel Projects",
              ],
              desc: "Strategic eastern location with cost-effective logistics and port proximity.",
            },
            {
              city: "Hyderabad",
              providers: ["Teksmithe Steel Solutions", "Harjot International"],
              desc: "High construction demand. Beneficial government support via TS-iPASS scheme.",
            },
          ].map((hub, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-6 rounded-xl shadow border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {hub.city}
              </h3>
              <p className="text-gray-700 mb-2">{hub.desc}</p>
              <ul className="list-disc pl-5 text-gray-700">
                {hub.providers.map((prov, i) => (
                  <li key={i}>{prov}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Cost Breakdown */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Estimated Cost of a TMT Bar Plant
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse bg-white rounded-xl shadow overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3 text-left">Component</th>
                  <th className="px-4 py-3 text-left">Estimated Cost (INR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Land & Civil Construction", "2 – 5 Crore"],
                  ["Machinery & Equipment", "8 – 15 Crore"],
                  ["Electrical & Automation", "1.5 – 3 Crore"],
                  ["Installation & Commissioning", "1 – 2 Crore"],
                  ["Working Capital (6 months)", "2 – 4 Crore"],
                  ["Miscellaneous", "0.5 – 1 Crore"],
                ].map(([comp, cost], index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{comp}</td>
                    <td className="px-4 py-2">{cost}</td>
                  </tr>
                ))}
                <tr className="border-t font-bold bg-blue-50">
                  <td className="px-4 py-3">Total Investment</td>
                  <td className="px-4 py-3">15 – 30 Crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Starting a TMT bar plant is a high-potential opportunity. With
            proper market research, cost planning, and expert partnerships, you
            can set up a successful steel unit in key Indian cities.
          </p>
          <p className="text-lg leading-relaxed">
            Focus on trusted turnkey partners in Punjab, machinery suppliers in
            Kolkata, and installation services in cities like Lucknow and
            Hyderabad to ensure a smooth launch.
          </p>
        </section>
      </main>
    </div>
  );
}
