import React from "react";
import Navigation from "./components/Navigation";
import RoofCalculator from "./components/RoofCalculator";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ServiceAreas from "./components/ServiceAreas";
import Footer from "./components/Footer";
import Financing from "./components/Financing";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <Navigation />
      </header>

      {/* HERO SECTION (you already updated Hero.tsx) */}
      <Hero />

      {/* TRUST STRIP – Since 2005 */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-200 text-sm md:text-base">
          <p className="font-semibold text-center md:text-left">
            South Florida’s Dual-Licensed Roofing Authority • Serving Broward &amp; Palm Beach Counties Since 2005
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full border border-red-500/50 bg-red-900/10">
              FL Licenses: CGC1526236 • CCC1331464
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-700 bg-black/40">
              HVHZ / Miami-Dade &amp; Broward Code Compliance
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-700 bg-black/40">
              Residential &amp; Commercial Roofing
            </span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ALL PHASE SECTION */}
      <section
        id="why-all-phase"
        className="py-16 bg-black border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose All Phase Construction USA?
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Premium-quality roofing at a fair price, backed by nearly 20 years of local experience
              and dual-licensed expertise in South Florida’s High Velocity Hurricane Zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-200 text-sm md:text-base">
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Dual-Licensed GC + Roofing Contractor
              </h3>
              <p className="text-neutral-300">
                All Phase Construction USA is licensed as both a General Contractor and Roofing Contractor.
                That means we handle the entire project correctly — structure, straps, roof system, and code compliance.
              </p>
            </div>
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Built for South Florida Weather
              </h3>
              <p className="text-neutral-300">
                We design and install roofing systems that meet HVHZ requirements and are engineered for
                hurricane-force winds, heavy rain, and intense sun in Broward &amp; Palm Beach Counties.
              </p>
            </div>
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Fair, Honest Pricing &amp; Financing Options
              </h3>
              <p className="text-neutral-300">
                We combine premium workmanship with fair, transparent pricing, plus financing and grant options
                to help you complete your project without delaying critical work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL ROOFING SECTION */}
      <section
        id="residential"
        className="py-20 bg-neutral-950 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Residential Roofing in Broward &amp; Palm Beach
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              High-performance roofing systems for single-family homes, townhomes, and villas across South Florida.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              All Phase Construction USA installs and replaces residential roofing systems in communities throughout
              Broward and Palm Beach Counties — including Deerfield Beach, Boca Raton, Delray Beach, Pompano Beach,
              Coral Springs, and surrounding areas. We work with tile, metal, shingle, and flat roofs, and we help
              homeowners take advantage of insurance discounts and wind-mitigation opportunities where available.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Whether you need a full roof replacement, a storm-damage evaluation, or help understanding your options,
              our team walks you through each step so you can make a confident, informed decision.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Not sure which roofing system is best for your home? Have one of our specialists help you compare options,
              pricing, and potential insurance savings.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Talk to a Roofing Specialist
            </a>
          </div>
        </div>
      </section>

      {/* COMMERCIAL ROOFING SECTION */}
      <section
        id="commercial"
        className="py-20 bg-black border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Commercial &amp; Multifamily Roofing
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Flat, low-slope, and complex roofing systems for commercial buildings, condos, and associations.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              From retail centers and offices to condo and HOA communities, All Phase Construction USA provides
              commercial roofing solutions designed to minimize disruption and maximize long-term performance.
              We install and service flat roofing systems, metal assemblies, and other commercial-grade roof systems
              that meet South Florida codes and manufacturer requirements.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our commercial team coordinates closely with property managers, boards, and engineers to develop
              clear scopes of work, phasing plans, and communication strategies so your project runs smoothly.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Need a proposal for a commercial, condo, or HOA roof project? We can review plans, inspect existing
              conditions, and prepare a detailed scope and estimate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Request a Commercial Roof Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ROOF TYPES SECTION */}
      <section
        id="roof-types"
        className="py-20 bg-neutral-950 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Roof Types We Install
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Tile, metal, shingle, and flat roofing systems engineered for South Florida’s High Velocity Hurricane Zone.
            </p>
          </div>

          {/* Tile Roofing */}
          <div id="tile" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Tile Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tile roofs offer long-term durability and a classic South Florida look. Properly installed, tile roofing
              can last decades while providing excellent performance against heat and wind. We work with concrete
              and clay tile systems that meet current HVHZ code requirements.
            </p>
          </div>

          {/* Metal Roofing */}
          <div id="metal" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Metal Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Metal roofing systems are lightweight, strong, and highly resistant to hur
