import React from "react";
import { ShieldCheck, Award, CheckCircle2, Flame, RefreshCw, FileText } from "lucide-react";
import { NavigationTab } from "../types";

interface QualityPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  setIsCartOpen: (open: boolean) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ setActiveTab, setIsCartOpen }) => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block">
            METALLURGY & COMPLIANCE
          </span>
          <h1 className="editorial-serif font-bold text-4xl sm:text-6xl text-slate-900">
            Quality & ISO 13485 Standards
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Our quality management systems adhere strictly to international medical device directives, guaranteeing zero-corrosion performance across 100+ autoclave sterilization cycles.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <div className="w-12 h-12 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">ISO 13485:2016 Certified</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Full quality management system compliance for medical device manufacturing, traceability, and risk analysis.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <div className="w-12 h-12 rounded bg-maroon-light/40 border border-maroon/20 text-maroon flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">CE Marking Compliance</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Conforms strictly to EU Medical Device Regulations (MDR 2017/745) Class I & Ir reusable surgical devices.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded shadow-xs">
            <div className="w-12 h-12 rounded bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">FDA Registered Facility</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Registered with US Food and Drug Administration adhering to current Good Manufacturing Practices (cGMP).
            </p>
          </div>
        </div>

        {/* Metallurgy & Steel Selection Table */}
        <div className="bg-white border border-slate-200 rounded p-8 sm:p-10 space-y-6 shadow-xs">
          <h2 className="editorial-serif text-2xl text-slate-900 font-bold">
            Medical Metallurgy & Steel Composition
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-maroon uppercase tracking-wider font-bold">
                  <th className="py-3 px-4">Steel Grade</th>
                  <th className="py-3 px-4">Hardness (HRC)</th>
                  <th className="py-3 px-4">Key Characteristics</th>
                  <th className="py-3 px-4">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">AISI 420 German Stainless</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">HRC 48 - 52</td>
                  <td className="py-3.5 px-4">High tensile yield, excellent corrosion resistance</td>
                  <td className="py-3.5 px-4">Surgical scissors, scalpels, osteotomes</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">AISI 440C High-Carbon Steel</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">HRC 54 - 58</td>
                  <td className="py-3.5 px-4">Extreme edge retention, vacuum tempered</td>
                  <td className="py-3.5 px-4">Rongeurs, bone cutters, heavy shears</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Grade 5 Beta Titanium (Ti-6Al-4V)</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">Non-Magnetic</td>
                  <td className="py-3.5 px-4">Ultra-lightweight, 100% antimagnetic, biostable</td>
                  <td className="py-3.5 px-4">Micro-ophthalmic & vascular forceps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sterilization & Autoclave Guidance */}
        <div className="bg-white border border-slate-200 rounded p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2 text-emerald-700 font-mono text-xs font-bold">
              <Flame className="w-4 h-4 text-emerald-600" />
              <span>STERILIZATION & AUTOCLAVE WARRANTY</span>
            </div>
            <h3 className="editorial-serif text-2xl text-slate-900 font-bold">Approved Steam Autoclaving Parameters</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Safe Core Surgical instruments are validated for steam moist-heat sterilization at <strong>134°C (273°F) for 18 minutes</strong> at 2.1 bar pressure without surface oxidation or joint binding.
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="shrink-0 px-6 py-3 bg-maroon text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-maroon-hover transition-colors cursor-pointer font-bold shadow-md shadow-maroon/20"
          >
            Request Technical Datasheet
          </button>
        </div>

      </div>
    </div>
  );
};
