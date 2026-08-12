import React from "react";
import { Award, ShieldCheck, Building2, Users, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { NavigationTab } from "../types";

interface AboutPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  setIsCartOpen: (open: boolean) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, setIsCartOpen }) => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block">
            ESTABLISHED 2008 • GLOBAL SURGICAL MFG
          </span>
          <h1 className="editorial-serif font-bold text-4xl sm:text-6xl text-slate-900">
            About Safe Core Surgical Co.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Pioneering precision medical instruments for over 15 years. Serving hospitals, clinical networks, and medical distributors across 130+ countries.
          </p>
        </div>

        {/* CEO Message Feature Banner */}
        <div className="bg-white border border-slate-200 rounded p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* CEO Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded overflow-hidden border border-slate-200 shadow-xl">
                <img 
                  src="/src/assets/images/ceo_abdul_ul_rehman.jpg" 
                  alt="Chief Executive Officer Abdul Rehman" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded shadow-md">
                  <h3 className="editorial-serif text-slate-900 font-bold text-lg">Abdul Rehman</h3>
                  <span className="text-[10px] font-mono text-maroon tracking-widest uppercase font-bold">Chief Executive Officer</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Safe Core Surgical Co.</p>
                </div>
              </div>
            </div>

            {/* CEO Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-maroon tracking-widest uppercase font-bold">
                <Award className="w-4 h-4 text-maroon" />
                <span>OFFICIAL CEO STATEMENT</span>
              </div>

              <h2 className="editorial-serif font-bold text-3xl sm:text-4xl text-slate-900">
                "Our Guarantee is Uncompromising Reliability in the Hands of the Surgeon."
              </h2>

              <div className="space-y-4 text-slate-700 text-sm font-normal leading-relaxed border-l-2 border-maroon pl-6">
                <p>
                  "When a surgeon picks up an instrument during a critical surgical procedure, there can be zero room for flex, slipping, or tension binding. Every instrument manufactured at Safe Core Surgical Co. is designed with acute anatomical feedback, perfect center-of-gravity balance, and high tactile sensitivity."
                </p>
                <p>
                  "From our hot-forging shop to our cleanroom passivation lines, we invest heavily in master hand-finishing and 100% manual quality inspection. We don't just supply instruments; we partner with global healthcare providers to ensure surgical safety."
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <span className="text-xs font-mono text-slate-600 font-medium">ISO 13485:2016 & CE Certified Manufacturing</span>
                </div>
                
                <a 
                  href="mailto:sales@safecoresurgical.com"
                  className="text-xs font-mono text-maroon hover:text-maroon-hover uppercase tracking-wider flex items-center space-x-1 font-bold"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact CEO Office</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Manufacturing Facilities & Quality Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <span className="editorial-serif text-4xl text-maroon font-bold block mb-2">45,000 SQ FT</span>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Modern Production Plant</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Equipped with high-precision multi-axis CNC milling centers, automated ultrasonic cleaning baths, and vacuum heat treatment furnaces.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <span className="editorial-serif text-4xl text-maroon font-bold block mb-2">100% INSPECTION</span>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Zero-Defect QA Protocol</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Every single instrument undergoes optical alignment checks, tension spring calibration, and chemical passivation testing before tray packaging.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <span className="editorial-serif text-4xl text-maroon font-bold block mb-2">130+ NATIONS</span>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Global Export Logistics</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Direct B2B supply channels servicing hospital chains, government procurement ministries, and surgical distributors worldwide.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8">
          <button
            onClick={() => setActiveTab("products")}
            className="px-8 py-4 bg-maroon hover:bg-maroon-hover text-white rounded text-xs font-mono uppercase tracking-widest cursor-pointer shadow-md shadow-maroon/20 font-bold transition-all"
          >
            Explore Surgical Catalog (4,500+ SKU)
          </button>
        </div>

      </div>
    </div>
  );
};
