import React, { useState } from "react";
import { motion } from "motion/react";
import { NavigationTab, SurgicalCategory, SurgicalInstrument } from "../types";
import { 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  Scissors, 
  Hammer, 
  Activity, 
  Layers, 
  Wrench, 
  Compass, 
  Heart, 
  Cpu, 
  Maximize2, 
  GitCommit, 
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  Building2,
  Users,
  Clock,
  ExternalLink
} from "lucide-react";

interface HomePageProps {
  setActiveTab: (tab: NavigationTab) => void;
  onSelectCategory: (category: SurgicalCategory) => void;
  onAddToQuote: (instrument: SurgicalInstrument) => void;
  featuredInstruments: SurgicalInstrument[];
  setIsCartOpen: (open: boolean) => void;
}

const CATEGORY_ICONS: Record<SurgicalCategory, React.ReactNode> = {
  [SurgicalCategory.GENERAL]: <Scissors className="w-5 h-5" />,
  [SurgicalCategory.ORTHOPEDIC]: <Hammer className="w-5 h-5" />,
  [SurgicalCategory.ENT]: <Activity className="w-5 h-5" />,
  [SurgicalCategory.GYNECOLOGY]: <Layers className="w-5 h-5" />,
  [SurgicalCategory.DENTAL]: <Wrench className="w-5 h-5" />,
  [SurgicalCategory.OPHTHALMIC]: <Compass className="w-5 h-5" />,
  [SurgicalCategory.CARDIOVASCULAR]: <Heart className="w-5 h-5" />,
  [SurgicalCategory.NEUROSURGERY]: <Cpu className="w-5 h-5" />,
  [SurgicalCategory.UROLOGY]: <ShieldCheck className="w-5 h-5" />,
  [SurgicalCategory.PLASTIC]: <Sparkles className="w-5 h-5" />,
  [SurgicalCategory.LAPAROSCOPIC]: <Maximize2 className="w-5 h-5" />,
  [SurgicalCategory.THORACIC]: <GitCommit className="w-5 h-5" />,
  [SurgicalCategory.OPERATING_ROOM]: <Layers className="w-5 h-5" />
};

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onSelectCategory,
  onAddToQuote,
  featuredInstruments,
  setIsCartOpen
}) => {
  const [activeMfgStep, setActiveMfgStep] = useState(0);

  const mfgSteps = [
    {
      step: "01",
      title: "German Grade Hot Forging",
      desc: "Pure AISI 420 & 440C stainless steel bars are induction-heated and die-forged under 500-ton hydraulic drop presses to ensure dense grain alignment."
    },
    {
      step: "02",
      title: "Micro CNC Milling & Shaping",
      desc: "5-axis precision CNC machining ensures zero tolerances on box joints, ratchets, screw threads, and sub-millimeter teeth profiles."
    },
    {
      step: "03",
      title: "Master Hand-Honing & Tuning",
      desc: "Veteran instrument craftsmen manually hone cutting edges and adjust shear tension to achieve zero drag and tactile haptic sensitivity."
    },
    {
      step: "04",
      title: "Passivation & Autoclave QA",
      desc: "Chemical nitric passivation forms a protective chromium-oxide boundary layer, guaranteed against corrosion through 100+ autoclave steam cycles."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50">
        {/* Background Image - Full Edge-to-Edge Cover */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_surgical_tools_bg.jpg" 
            alt="Surgical Tools & Sterilization Equipment" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/55 to-slate-100/80 backdrop-contrast-105"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20 text-center">
          
          {/* Top Certification Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 bg-white/90 border border-slate-200 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono text-slate-700 mb-8 shadow-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-700 font-bold">ISO 13485:2016 CERTIFIED</span>
            <span className="text-slate-300">|</span>
            <span className="text-maroon font-bold">GERMAN STAINLESS STEEL FORGING</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="editorial-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-[1.05] max-w-5xl mx-auto"
          >
            Surgical Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon via-red-800 to-slate-900">
              Uncompromising Safety.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto leading-relaxed"
          >
            Manufactured from vacuum-tempered German AISI 420/440C steel and titanium alloys. 
            Engineered for zero-torque flex, perfect tactile sensitivity, and 100-cycle autoclave durability.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setActiveTab("products")}
              className="w-full sm:w-auto px-8 py-4 bg-maroon hover:bg-maroon-hover text-white rounded font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-maroon/20 flex items-center justify-center space-x-3 group cursor-pointer"
            >
              <span>Explore Surgical Catalog (4,500+ SKU)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab("custom")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 rounded font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Configure Custom Orders</span>
            </button>
          </motion.div>

          {/* Metrics Grid Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-200"
          >
            <div className="p-4 bg-white border border-slate-200 rounded text-center shadow-xs">
              <span className="editorial-serif block text-3xl sm:text-4xl text-maroon font-bold">15+</span>
              <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase mt-1 block font-semibold">Years Manufacturing</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded text-center shadow-xs">
              <span className="editorial-serif block text-3xl sm:text-4xl text-maroon font-bold">130+</span>
              <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase mt-1 block font-semibold">Export Destinations</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded text-center shadow-xs">
              <span className="editorial-serif block text-3xl sm:text-4xl text-maroon font-bold">4,500+</span>
              <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase mt-1 block font-semibold">Certified SKUs</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded text-center shadow-xs">
              <span className="editorial-serif block text-3xl sm:text-4xl text-emerald-600 font-bold">100%</span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-700 uppercase mt-1 block font-semibold">Passivation Verified</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CEO MESSAGE & LEADERSHIP STATEMENT SECTION */}
      <section className="py-24 px-6 sm:px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded overflow-hidden border border-slate-200 shadow-xl group bg-white">
                <img 
                  src="/src/assets/images/ceo_abdul_ul_rehman.jpg" 
                  alt="Chief Executive Officer Abdul Rehman" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded shadow-lg">
                  <span className="editorial-serif block text-slate-900 font-bold text-lg">Abdul Rehman</span>
                  <span className="text-[10px] font-mono text-maroon tracking-widest uppercase font-bold">Chief Executive Officer</span>
                  <p className="text-[11px] text-slate-600 mt-1 font-normal">Safe Core Surgical Co. Global Manufacturing</p>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-maroon tracking-widest uppercase font-bold">
                <Award className="w-4 h-4 text-maroon" />
                <span>EXECUTIVE LEADERSHIP STATEMENT</span>
              </div>

              <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900 leading-tight">
                "In surgical care, a fraction of a millimeter determines outcomes."
              </h2>

              <div className="relative pl-6 border-l-4 border-maroon space-y-4 text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                <p>
                  "For over 15 years, our foundational mission at Safe Core Surgical Co. has remained absolute: to manufacture clinical instruments so meticulously engineered that surgeons never have to think about their tools—only their patient."
                </p>
                <p>
                  "Every scalpel, rongeur, and vascular clamp bearing our hallmark is forged from premium German steel, hand-honed by master craftsmen, and subjected to rigorous nitric passivation. We hold ourselves accountable to the world's most demanding hospital systems."
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">DIRECT GUARANTEE</span>
                  <span className="text-sm font-bold text-slate-900">Zero Defect Manufacturing Policy</span>
                </div>
                
                <button
                  onClick={() => setActiveTab("about")}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-maroon text-white rounded text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-colors cursor-pointer font-bold shadow-sm"
                >
                  <span>Read Full CEO Letter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SAFE CORE SURGICAL (6 PILLARS OF EXCELLENCE) */}
      <section className="py-24 px-6 sm:px-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block mb-3">
              CLINICAL EXCELLENCE STANDARDS
            </span>
            <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900">
              Why Hospital Systems Trust Safe Core
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-4 font-normal leading-relaxed">
              Our integrated manufacturing ecosystem eliminates middleman markups while enforcing rigorous ISO 13485 medical device quality controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">German AISI 420/440C Steel</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Forged strictly from certified German stainless steel bars. Superior carbon-chromium ratios provide maximum hardness and high corrosion resistance.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Micro-Hand Finishing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every shear blade and micro-forcep jaw is hand-honed by senior cutlery artisans, ensuring effortless tissue sectioning without drag.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">100-Cycle Autoclave Warranty</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Electro-chemical passivation creates a thick chromium oxide seal, preventing pitting or discoloration through repeated moist-heat steam autoclaving up to 134°C.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Custom OEM Laser Etching</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Direct factory laser marking for hospital logos, tray barcodes, UDI compliance tracking, and specialized department coding.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">ISO 13485 & CE Direct</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Certified quality management system compliant with EU Medical Device Regulations (MDR) and FDA cGMP medical standards.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-8 bg-slate-50 border border-slate-200 hover:border-maroon/60 rounded transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-maroon-light border border-maroon/20 flex items-center justify-center text-maroon mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="editorial-serif text-xl text-slate-900 font-bold mb-2">Direct Factory Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Eliminate distributor surcharges with direct B2B bulk ordering, custom kit assembly, and rapid global air dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SURGICAL SPECIALIZATIONS DIRECTORY SHOWCASE */}
      <section className="py-24 px-6 sm:px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block mb-3">
                ANATOMICAL PORTFOLIO
              </span>
              <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900">
                Surgical Disciplines Catalog
              </h2>
            </div>

            <button
              onClick={() => setActiveTab("products")}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded text-xs font-mono uppercase tracking-widest border border-slate-300 hover:border-maroon/50 flex items-center space-x-2 transition-colors cursor-pointer w-fit font-bold shadow-xs"
            >
              <span>View All 4,500+ Instruments</span>
              <ArrowRight className="w-4 h-4 text-maroon" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.values(SurgicalCategory).map((category, idx) => (
              <div
                key={category}
                onClick={() => {
                  onSelectCategory(category);
                  setActiveTab("products");
                }}
                className="group bg-white border border-slate-200 hover:border-maroon hover:shadow-md rounded p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                      {CATEGORY_ICONS[category] || <Scissors className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-maroon font-bold">
                      SEC-0{idx + 1}
                    </span>
                  </div>

                  <h3 className="editorial-serif text-lg text-slate-900 font-bold group-hover:text-maroon transition-colors mb-2">
                    {category}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                    Medical grade instruments engineered for specialized surgical maneuvers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>SPECIALIZED SKU</span>
                  <span className="text-maroon font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-STEP PRECISION MANUFACTURING PROCESS */}
      <section className="py-24 px-6 sm:px-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block mb-3">
              ZERO DEFECT WORKFLOW
            </span>
            <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900">
              The Safe Core Manufacturing Standard
            </h2>
            <p className="text-sm text-slate-600 mt-3 font-normal">
              From raw German steel billet to certified sterilizer tray placement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {mfgSteps.map((s, idx) => (
              <div 
                key={s.step}
                onClick={() => setActiveMfgStep(idx)}
                className={`p-6 rounded border transition-all cursor-pointer ${
                  activeMfgStep === idx 
                    ? "bg-maroon-light border-maroon shadow-md" 
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="editorial-serif text-3xl font-bold text-maroon">{s.step}</span>
                  {activeMfgStep === idx && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                </div>
                <h3 className="editorial-serif text-lg text-slate-900 font-bold mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED INSTRUMENTS PREVIEW SLIDER */}
      <section className="py-24 px-6 sm:px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block mb-3">
                FEATURED INSTRUMENTATION
              </span>
              <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900">
                Clinical Favorites
              </h2>
            </div>
            <button
              onClick={() => setActiveTab("products")}
              className="text-xs font-mono text-maroon hover:text-maroon-hover uppercase tracking-widest flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>View Full Inventory →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInstruments.slice(0, 3).map((inst) => (
              <div 
                key={inst.id}
                className="bg-white border border-slate-200 hover:border-maroon/50 rounded p-6 flex flex-col justify-between group transition-all shadow-xs hover:shadow-md"
              >
                <div>
                  {inst.imageUrl && (
                    <div 
                      onClick={() => setActiveTab("products")}
                      className="w-full h-48 mb-4 rounded overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group-hover:border-maroon/40 transition-colors p-2 flex items-center justify-center"
                    >
                      <img 
                        src={inst.imageUrl} 
                        alt={inst.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded font-semibold">
                      {inst.sku}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      FACTORY DIRECT B2B
                    </span>
                  </div>

                  <h3 className="editorial-serif text-xl text-slate-900 group-hover:text-maroon transition-colors mb-2 font-bold">
                    {inst.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-4">
                    {inst.description}
                  </p>

                  <div className="space-y-1 border-t border-slate-100 pt-3 text-[11px] font-mono text-slate-600">
                    <p>• {inst.specs[0]}</p>
                    <p>• {inst.specs[1]}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => onAddToQuote(inst)}
                    className="w-full py-2.5 bg-maroon hover:bg-maroon-hover text-white rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer font-bold shadow-xs"
                  >
                    + Add to Sourcing Sheet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-20 px-6 sm:px-10 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono text-red-400 font-bold tracking-[0.2em] uppercase">
            DIRECT B2B MEDICAL PROCUREMENT
          </span>
          <h2 className="editorial-serif font-bold text-3xl sm:text-5xl text-white">
            Ready to Upgrade Your Operating Room Instrumentation?
          </h2>
          <p className="text-sm text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Contact our clinical supply team for custom OEM manufacturing, surgical kit assembly, and instant volume discount quotes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-8 py-4 bg-maroon hover:bg-maroon-hover text-white font-bold text-xs tracking-widest uppercase rounded shadow-lg cursor-pointer"
            >
              Request Sourcing Quotation
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs tracking-widest uppercase rounded cursor-pointer"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
