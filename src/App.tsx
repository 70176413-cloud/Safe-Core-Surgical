/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo, FormEvent } from "react";
import {
  Activity,
  Compass,
  Scissors,
  Wrench,
  Layers,
  Hammer,
  ShieldCheck,
  Maximize2,
  Cpu,
  GitCommit,
  Search,
  ShoppingCart,
  X,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Sparkles,
  Printer,
  ChevronDown,
  Info
} from "lucide-react";

import { SurgicalCategory, SurgicalInstrument, QuoteItem, QuoteRequest } from "./types";
import { SURGICAL_INSTRUMENTS } from "./data";

// Asset paths configured as direct web strings
const logoImg = "/src/assets/images/safe_core_logo_1780506669400.png";
const heroBgImg = "/src/assets/images/medical_background_1780506647813.png";

const CATEGORY_DETAILS: Record<SurgicalCategory, { numberLabel: string; count: number; tooltip: string }> = {
  [SurgicalCategory.GENERAL]: {
    numberLabel: "01",
    count: 6,
    tooltip: "Includes premium instruments like No.3 scalpel handles, curved Metzenbaum and straight Mayo scissors, Adson forceps, and precision needle holders."
  },
  [SurgicalCategory.ORTHOPEDIC]: {
    numberLabel: "02",
    count: 5,
    tooltip: "Robust anatomical orthopedic instruments including heavy double-jointed bone-holding forceps, titanium double-action rongeurs, and osteotomes."
  },
  [SurgicalCategory.ENT]: {
    numberLabel: "03",
    count: 5,
    tooltip: "Specially engineered Vienna pattern nasal speculums, fine tonsil snares, double-ended wire ear curettes, and Frazier suction tips (8 Fr)."
  },
  [SurgicalCategory.GYNECOLOGY]: {
    numberLabel: "04",
    count: 4,
    tooltip: "Clinical-grade Cusco vaginal speculums, silver-plated graduated uterine sounds, fenestrated ovum forceps, and curved episiotomy scissors."
  },
  [SurgicalCategory.DENTAL]: {
    numberLabel: "05",
    count: 4,
    tooltip: "High-torque Straight root elevators, universal tooth extractions, cross-cut bone files, and a self-retaining McIvor mouth gag system."
  },
  [SurgicalCategory.OPHTHALMIC]: {
    numberLabel: "06",
    count: 4,
    tooltip: "Micro-surgical titanium Castroviejo needle drivers, sapphire iridectomy scissors, and wire speculums optimized for ophthalmic surgery."
  },
  [SurgicalCategory.CARDIOVASCULAR]: {
    numberLabel: "07",
    count: 4,
    tooltip: "Gold-standard DeBakey non-crushing vascular forceps, angled Satinsky anastomosis clamps, and double-ended vessel micro dilators."
  },
  [SurgicalCategory.NEUROSURGERY]: {
    numberLabel: "08",
    count: 4,
    tooltip: "Essential neurosurgical Kerrison detachable up-bite rongeurs, flexible silver brain spatulas, bayonet-offset forceps, and blunt nerve hooks."
  },
  [SurgicalCategory.UROLOGY]: {
    numberLabel: "09",
    count: 4,
    tooltip: "Specialized Van Buren curved urological sounds, graduated urethral dilators, flexible grasping forceps, and super-elastic Nitinol guide wires."
  },
  [SurgicalCategory.PLASTIC]: {
    numberLabel: "10",
    count: 4,
    tooltip: "High-precision non-toothed Adson tissue-grip forceps, Metzenbaum-Fino curved scissors, skin hooks, and Neivert needle holders."
  },
  [SurgicalCategory.LAPAROSCOPIC]: {
    numberLabel: "11",
    count: 4,
    tooltip: "Insulated 360-degree rotating laparoscopic graspers, active cauterization scissors, trocars with silicone seals, and coaxial needle holders."
  },
  [SurgicalCategory.THORACIC]: {
    numberLabel: "12",
    count: 4,
    tooltip: "Heavy Bethune rib shears, double-guided Finochietto horizontal thoracic expanders, and flexible Allison lung spatulas."
  },
  [SurgicalCategory.OPERATING_ROOM]: {
    numberLabel: "13",
    count: 4,
    tooltip: "Durable seamless 18/10 stainless kidney trays, perforated lid containers, sponge bowls, and height-adjustable mobile Mayo stands."
  }
};

export default function App() {
  // Navigation active anchors
  const [activeCategory, setActiveCategory] = useState<SurgicalCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Interactive product details modal
  const [selectedProduct, setSelectedProduct] = useState<SurgicalInstrument | null>(null);

  // Quote cart state
  const [quoteCart, setQuoteCart] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Quote form state
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    tier: "Elite Hospital System",
    notes: ""
  });

  // Successful submission reference
  const [submittedQuoteRef, setSubmittedQuoteRef] = useState<{
    refId: string;
    date: string;
    items: QuoteItem[];
    form: QuoteRequest;
  } | null>(null);

  // Filtered surgical instruments
  const filteredInstruments = useMemo(() => {
    return SURGICAL_INSTRUMENTS.filter(inst => {
      const matchesCategory = activeCategory === "All" || inst.category === activeCategory;
      const matchesSearch = 
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Utility to map dynamic icon name to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Scissors": return <Scissors className="w-5 h-5" />;
      case "Compass": return <Compass className="w-5 h-5" />;
      case "Wrench": return <Wrench className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Hammer": return <Hammer className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Activity": return <Activity className="w-5 h-5" />;
      case "Maximize2": return <Maximize2 className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "GitCommit": return <GitCommit className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  // Cart operations
  const addToQuote = (instrument: SurgicalInstrument) => {
    setQuoteCart(current => {
      const existing = current.find(item => item.instrument.id === instrument.id);
      if (existing) {
        return current.map(item =>
          item.instrument.id === instrument.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { instrument, quantity: 1 }];
    });
    // Open drawer automatically on first add to offer smooth premium UX feedback
    setIsQuoteDrawerOpen(true);
  };

  const updateQuantity = (instrumentId: string, delta: number) => {
    setQuoteCart(current => {
      return current.map(item => {
        if (item.instrument.id === instrumentId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item): item is QuoteItem => item !== null);
    });
  };

  const removeFromCart = (instrumentId: string) => {
    setQuoteCart(current => current.filter(item => item.instrument.id !== instrumentId));
  };

  // Calculate high-end values
  const totalVolumeEst = useMemo(() => {
    return quoteCart.reduce((acc, item) => acc + (item.instrument.approxPrice * item.quantity), 0);
  }, [quoteCart]);

  const totalItemsCount = useMemo(() => {
    return quoteCart.reduce((acc, item) => acc + item.quantity, 0);
  }, [quoteCart]);

  // Handle Form Submission
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteCart.length === 0) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedRef = `SC-${formData.organization.slice(0, 3).toUpperCase()}-${randomSuffix}`;
    const currentDate = new Date().toISOString().split('T')[0];

    setSubmittedQuoteRef({
      refId: generatedRef,
      date: currentDate,
      items: [...quoteCart],
      form: { ...formData }
    });

    // Clean cart and close drawer
    setQuoteCart([]);
    setIsQuoteDrawerOpen(false);
  };

  // Helper to scroll smoothly to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-matt-black text-zinc-100 font-sans relative select-none">
      
      {/* 2. GLOBAL HEADER & NAVIGATION ARCHITECTURE */}
      <header className="relative flex items-center justify-between h-20 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 z-50 px-6 sm:px-10">
        
        {/* Branding Component (Perfect Center) */}
        <div 
          onClick={() => scrollToSection("home")}
          className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
        >
          {/* Logo File */}
          <img 
            src={logoImg} 
            alt="Safe Core Logo" 
            className="h-8 w-auto object-contain brightness-110 filter"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
              const fallback = (e.target as HTMLElement).nextElementSibling;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          {/* Fallback mini medical icon if safe_core_logo is temporarily not found */}
          <span className="hidden text-maroon font-serif font-bold text-2xl leading-none">♦</span>
          
          {/* Headline Title "Safe Core Surgical" */}
          <h1 className="editorial-serif font-bold text-xl sm:text-2xl tracking-tight text-white">
            Safe Core Surgical
          </h1>
        </div>

        {/* Home link on Left for extra balance, or empty left block with absolute right pinning */}
        <div className="hidden md:flex items-center space-x-4 text-xs font-mono text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-maroon animate-pulse"></span>
          <span>SYSTEM ONLINE (v2.6)</span>
        </div>

        {/* Utility Menu Links (Far Right End) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-zinc-400 ml-auto mr-16">
          <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors duration-200 cursor-pointer">Home</button>
          <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors duration-200 cursor-pointer">Products</button>
          <button onClick={() => scrollToSection("why-safe-core")} className="hover:text-white transition-colors duration-200 cursor-pointer">Why Safe Core</button>
        </nav>

        {/* Floating Quote Box Action */}
        <div className="flex items-center space-x-4 z-50">
          <button 
            id="quote-cart-trigger"
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-zinc-900 transition-colors duration-200 text-zinc-300 group"
            title="Open Quote Drawer"
          >
            <ShoppingCart className="w-5.5 h-5.5 group-hover:text-maroon transition-colors" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-maroon text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Navigation Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex flex-col space-y-3 shadow-xl z-40 transition-all">
          <button onClick={() => scrollToSection("home")} className="text-left text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white py-1">Home</button>
          <button onClick={() => scrollToSection("products")} className="text-left text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white py-1">Products</button>
          <button onClick={() => scrollToSection("why-safe-core")} className="text-left text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white py-1">Why Safe Core</button>
          <button onClick={() => { setIsMobileMenuOpen(false); setIsQuoteDrawerOpen(true); }} className="text-left text-sm font-semibold uppercase tracking-wider text-maroon flex items-center justify-between py-1">
            <span>Quote Builder ({totalItemsCount} items)</span>
            <ShoppingCart className="w-4 h-4 text-maroon" />
          </button>
        </div>
      )}

      {/* 3. HERO BANNER & CINEMATIC SHOWCASE */}
      <section 
        id="home"
        className="relative min-h-[600px] md:min-h-[680px] flex items-center bg-zincCharcoal overflow-hidden" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${heroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 w-full z-10">
          {/* Copy Presentation (Left-Aligned Layout) */}
          <div className="max-w-2xl text-left border-l-2 border-maroon pl-6 md:pl-8 py-2">
            {/* Sub-indicator */}
            <span className="block text-xs font-black tracking-[0.3em] text-maroon uppercase mb-4 animate-pulse">
              Precision Engineering
            </span>
            
            {/* Main Accent Header */}
            <h2 className="editorial-serif italic text-4xl md:text-6xl text-white font-normal leading-tight mb-6">
              Redefining Surgical Excellence
            </h2>
            
            {/* Body Summary Description */}
            <p className="text-zinc-300 text-sm md:text-base mb-10 leading-relaxed font-light max-w-xl">
              Highlighting specialized premium surgical instruments designed for high-end surgeons and elite clinical teams globally. Engineered to provide sterile durability under uncompromising operating conditions.
            </p>
            
            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Explore Catalog (Solid Maroon Fill) */}
              <button 
                onClick={() => scrollToSection("products")}
                className="px-8 py-3 bg-maroon text-white font-medium hover:bg-maroon-hover transition-all duration-300 shadow-lg tracking-wide uppercase text-xs cursor-pointer inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Get a Quote (High-Contrast Solid White block) */}
              <button 
                onClick={() => {
                  scrollToSection("products");
                  setIsQuoteDrawerOpen(true);
                }}
                className="px-8 py-3 bg-white text-mattBlack font-medium hover:bg-zinc-100 transition-all duration-300 shadow-lg tracking-wide uppercase text-xs cursor-pointer border border-transparent text-center"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Ambient Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-matt-black to-transparent pointer-events-none"></div>
      </section>

      {/* 4. SPECIALIZED HORIZONTAL CATEGORY STRIP */}
      <div className="bg-zinc-950/80 backdrop-blur-md py-4 border-y border-zinc-900 sticky top-0 md:top-20 z-30 shadow-2xl overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center gap-2 md:gap-4 whitespace-nowrap min-w-max">
          {/* ALL CATEGORIES BUTTON */}
          <div className="relative group">
            <button
              onClick={() => { setActiveCategory("All"); scrollToSection("products"); }}
              className={`px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm border transition-all duration-200 cursor-pointer ${
                activeCategory === "All"
                  ? "border-maroon bg-maroon/10 text-white brightness-125"
                  : "border-zinc-800/40 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              All Instruments
            </button>
            {/* Tooltip */}
            <div className="absolute top-full left-0 mt-2.5 w-64 bg-zinc-950 border border-zinc-850 p-3 rounded shadow-2xl pointer-events-none z-50 text-left normal-case tracking-normal opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top hidden md:block">
              <div className="font-bold text-white mb-1 uppercase tracking-wider text-[9px] text-maroon flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-maroon rounded-full"></span>
                Catalog Collection
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Seamless dynamic matching for all {SURGICAL_INSTRUMENTS.length} clinical devices across all specialized disciplines.
              </p>
            </div>
          </div>

          <div className="text-zinc-800 select-none">|</div>

          {/* DYNAMIC CATEGORIES */}
          {Object.entries(CATEGORY_DETAILS).map(([catKey, detail]) => {
            const isSelected = activeCategory === catKey;
            return (
              <div key={catKey} className="relative group">
                <button
                  onClick={() => { setActiveCategory(catKey as SurgicalCategory); scrollToSection("products"); }}
                  className={`px-4 py-2 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-sm border transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "border-maroon bg-maroon/10 text-white font-bold"
                      : "border-zinc-900/50 bg-zinc-900/10 text-zinc-400 hover:text-white hover:border-zinc-850"
                  }`}
                >
                  <span className={`text-[9.5px] font-semibold font-mono ${isSelected ? 'text-maroon' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                    {detail.numberLabel}.
                  </span>
                  <span>{catKey}</span>
                  <span className="bg-zinc-900 text-zinc-500 text-[8.5px] px-1 py-0.2 rounded font-mono group-hover:text-zinc-300">
                    {detail.count}
                  </span>
                </button>

                {/* Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-72 bg-zinc-950 border border-zinc-850 p-3 rounded shadow-2xl pointer-events-none z-50 text-left normal-case tracking-normal opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top hidden md:block">
                  <div className="font-bold text-white mb-1 uppercase tracking-wider text-[9px] text-maroon flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-maroon rounded-full"></span>
                    {catKey}
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed mb-2">
                    {detail.tooltip}
                  </p>
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 pt-1.5 border-t border-zinc-900">
                    <span>SECTOR REF: SEC-{detail.numberLabel}</span>
                    <span>{detail.count} SPECIMENS CLASSIFIED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SUCCESS MODAL FOR CLIENT QUOTE GENERATION */}
      {submittedQuoteRef && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white border-t-4 border-maroon w-full max-w-3xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded relative">
            <button 
              onClick={() => setSubmittedQuoteRef(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-800 p-1 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-zinc-50 border border-zinc-200 text-maroon rounded-full mb-3 shadow-[0_4px_12px_rgba(139,0,0,0.15)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="editorial-serif italic text-2xl md:text-3xl font-normal text-zincCharcoal">
                Verification Reference Generated
              </h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono mt-2">
                STATUS: APPROVED CLINICAL RECORD
              </p>
            </div>

            {/* Official Lookalike Quote Sheet */}
            <div id="print-area" className="border border-zinc-200 p-6 sm:p-8 bg-zinc-50 font-mono text-xs rounded text-zinc-800 relative shadow-inner">
              
              {/* Decorative stamp */}
              <div className="absolute top-10 right-10 border-2 border-dashed border-red-700 text-red-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rotate-12 opacity-60 rounded select-none pointer-events-none">
                VERIFIED SOURCE
              </div>

              {/* Document Header */}
              <div className="flex flex-col sm:flex-row justify-between border-b border-zinc-300 pb-4 mb-6">
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-maroon flex items-center gap-1">
                    <span>◆ SAFE CORE SURGICAL</span>
                  </h4>
                  <p className="text-[10px] text-zinc-500">ISO 13485 CERTIFIED CLINICAL MFG</p>
                  <p className="text-[10px] text-zinc-500 flex items-center gap-1 mt-1">
                    <span>SYS_REF_ID:</span>
                    <span className="font-bold text-zinc-800">{submittedQuoteRef.refId}</span>
                  </p>
                </div>
                <div className="text-left sm:text-right mt-3 sm:mt-0 leading-relaxed text-[10px] text-zinc-500">
                  <p>DATE: {submittedQuoteRef.date}</p>
                  <p>EXPIRY: 30 DAYS FROM ISSUE</p>
                  <p>REGION: GLOBAL DISTRIBUTION</p>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-zinc-300 pb-4 mb-6">
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold">CLIENT ENTITY:</span>
                  <p className="font-bold text-zinc-900">{submittedQuoteRef.form.organization}</p>
                  <p className="text-zinc-600">{submittedQuoteRef.form.fullName}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold">COMMUNICATION CODES:</span>
                  <p className="text-zinc-600">{submittedQuoteRef.form.email}</p>
                  <p className="text-zinc-600">{submittedQuoteRef.form.phone}</p>
                  <p className="text-maroon font-bold text-[10px] mt-1">{submittedQuoteRef.form.tier.toUpperCase()}</p>
                </div>
              </div>

              {/* Ordered Items Spec list */}
              <div className="mb-6">
                <span className="text-[10px] text-zinc-400 block uppercase font-bold mb-2">REQUESTED INSTRUMENT MANIFEST:</span>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-300 text-zinc-500 text-[10px]">
                      <th className="pb-1 font-bold">SKU / SPECIFICATION</th>
                      <th className="pb-1 text-center font-bold">QTY</th>
                      <th className="pb-1 text-right font-bold">EST. RANGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedQuoteRef.items.map((item, index) => (
                      <tr key={index} className="border-b border-zinc-200 py-2">
                        <td className="py-2 pr-2">
                          <p className="font-bold text-zinc-900">{item.instrument.name}</p>
                          <p className="text-[10px] text-zinc-500">{item.instrument.sku} | {item.instrument.material}</p>
                        </td>
                        <td className="py-2 text-center text-zinc-900 font-bold">{item.quantity}</td>
                        <td className="py-2 text-right text-zinc-900 font-bold">${(item.instrument.approxPrice * item.quantity).toLocaleString()} USD</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-between items-center border-t border-zinc-300 pt-4 text-zinc-900">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 block uppercase">STERILIZATION INTEGRITY:</span>
                  <span className="text-[10px] font-bold text-emerald-700">✓ CERTIFIED MOIST-HEAT OK (134C)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-400 block uppercase">TOTAL ESTIMATED PORTFOLIO VALUE:</span>
                  <span className="text-base font-black text-maroon">${submittedQuoteRef.items.reduce((sum, item) => sum + (item.instrument.approxPrice * item.quantity), 0).toLocaleString()} USD</span>
                </div>
              </div>

              {/* Notes */}
              {submittedQuoteRef.form.notes && (
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold mb-1">ADDITIONAL CLINICAL NOTES:</span>
                  <p className="text-zinc-600 italic tracking-wide text-[10px] leading-relaxed">"{submittedQuoteRef.form.notes}"</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-500 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>An elite sourcing coordinator will contact you via email within 2 clinical hours.</span>
              </p>
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => window.print()}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zincCharcoal text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center space-x-1.5 rounded"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Sheet</span>
                </button>
                <button 
                  onClick={() => setSubmittedQuoteRef(null)}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-maroon hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider transition-colors rounded text-center"
                >
                  Acknowledge
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MAIN PRODUCTS & CATALOG DASHBOARD */}
      <section id="products" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-maroon uppercase block mb-2">CLINICAL SELECTION</span>
            <h3 className="editorial-serif font-normal text-3xl md:text-5xl text-white">
              Premium Surgical Instruments
            </h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Browse our master collection of specialized instruments. Filter by area of surgery or perform immediate SKU-matching.
            </p>
          </div>

          {/* Quick Filters/Search Panel */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4.5 h-4.5" />
              <input 
                type="text" 
                placeholder="Search name, SKU, material..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-850 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-maroon focus:bg-zinc-950 transition-colors uppercase tracking-wider font-mono rounded"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Compact Category Selector */}
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => {
                  const val = e.target.value;
                  setActiveCategory(val as any);
                }}
                className="w-full sm:w-64 appearance-none bg-zinc-900 border border-zinc-850 text-xs font-bold uppercase tracking-wider text-zinc-300 px-4 py-2.5 pr-8 focus:outline-none focus:border-maroon focus:bg-zinc-950 cursor-pointer rounded"
              >
                <option value="All">All Disciplines ({SURGICAL_INSTRUMENTS.length})</option>
                {Object.values(SurgicalCategory).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Dynamic Instruments Grid */}
        {filteredInstruments.length === 0 ? (
          <div className="border border-dashed border-zinc-800 py-16 px-6 text-center rounded">
            <Info className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">No matching surgical devices found.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 text-xs font-bold uppercase text-maroon hover:underline cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstruments.map((instrument) => (
              <div 
                key={instrument.id}
                className="bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all duration-300 flex flex-col hover:shadow-2xl justify-between group rounded"
              >
                {/* Visual Header / SKU Indicator */}
                <div className="p-6 pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                      {instrument.sku}
                    </span>
                    <span className="bg-zinc-800/80 text-zinc-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {instrument.category}
                    </span>
                  </div>

                  <h4 
                    onClick={() => setSelectedProduct(instrument)}
                    className="editorial-serif font-normal text-xl text-zinc-100 group-hover:text-maroon transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {instrument.name}
                  </h4>
                  
                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {instrument.description}
                  </p>
                </div>

                {/* Micro tech details and Material */}
                <div className="px-6 py-3 bg-zinc-950/40 border-y border-zinc-850/80 text-[10px] font-mono text-zinc-400 uppercase flex items-center justify-between">
                  <span>MAT: {instrument.material.slice(0, 24)}...</span>
                  <span className="font-bold text-zinc-300">ISO APPROVED</span>
                </div>

                {/* Actions Row */}
                <div className="p-6 pt-4 flex items-center justify-between bg-zinc-950/20">
                  <button 
                    onClick={() => setSelectedProduct(instrument)}
                    className="text-xs font-bold text-zinc-400 hover:text-white hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>View Technical Specifications</span>
                  </button>

                  <button 
                    onClick={() => addToQuote(instrument)}
                    className="px-4 py-2 bg-zinc-800 hover:bg-maroon text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm rounded flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DETAILED TECHNICAL DEVICE MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-zinc-900 border border-zinc-800 border-t-4 border-t-maroon w-full max-w-2xl shadow-2xl overflow-hidden rounded relative">
            
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title Block */}
            <div className="p-6 sm:p-10 border-b border-zinc-850">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-zinc-800 text-zinc-200 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded">
                  {selectedProduct.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                  SKU: {selectedProduct.sku}
                </span>
              </div>

              <h3 className="editorial-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                {selectedProduct.name}
              </h3>
            </div>

            {/* Modal Technical Spec sheet */}
            <div className="p-6 sm:p-10 bg-zinc-950/40 max-h-[50vh] overflow-y-auto space-y-6 text-sm">
              <div>
                <span className="text-[10px] text-zinc-500 font-mono block uppercase tracking-widest mb-1.5">Primary Composition Material</span>
                <p className="font-semibold text-zinc-300">{selectedProduct.material}</p>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 font-mono block uppercase tracking-widest mb-2">Key Clinical Features</span>
                <ul className="space-y-1.5 text-xs text-zinc-400">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-maroon font-bold select-none leading-none mt-1">♦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 font-mono block uppercase tracking-widest mb-2">Instrument Dimensions & Calibration</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-zinc-950/65 p-4 border border-zinc-850 rounded">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between border-b border-zinc-850/80 pb-1.5">
                      <span className="text-zinc-500 uppercase tracking-tight">{spec.split(":")[0]}:</span>
                      <span className="text-zinc-300 font-bold">{spec.split(":")[1] || "Surgical Grade"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Action Floor */}
            <div className="p-6 sm:p-10 bg-zinc-900 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[9px] text-zinc-550 font-mono block uppercase tracking-widest">Base Reference Value</span>
                <span className="text-xl font-bold font-mono text-zinc-100">${selectedProduct.approxPrice} <span className="text-xs text-zinc-500 font-normal">USD / Unit</span></span>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 sm:flex-none px-6 py-2.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-650 text-xs font-bold uppercase tracking-wider rounded transition-colors text-center"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    addToQuote(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-maroon hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Request Quote Allocation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* INTERACTIVE QUOTE BUILDER DRAWER */}
      {isQuoteDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-xs animate-fade-in">
          
          {/* Backdrop Closer */}
          <div className="absolute inset-0" onClick={() => setIsQuoteDrawerOpen(false)} />

          {/* Drawer Element */}
          <div className="relative w-full max-w-lg bg-zinc-900 border-l border-zinc-850 h-screen shadow-2xl flex flex-col justify-between z-10 animate-slide-left">
            
            {/* Header */}
            <div className="p-6 border-b border-zinc-850 flex items-center justify-between">
              <div>
                <h3 className="editorial-serif text-xl sm:text-2xl font-normal text-white">
                  Quote Builder Manifest
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mt-1">
                  PRE-ORDER CONFIGURATOR ({totalItemsCount} DEVICES)
                </p>
              </div>
              <button 
                onClick={() => setIsQuoteDrawerOpen(false)}
                className="p-1 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 animate-fade-in">
              {quoteCart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 py-12">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 mb-4 bg-zinc-950">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Your custom quote queue is empty.</p>
                  <button 
                    onClick={() => { setIsQuoteDrawerOpen(false); scrollToSection("products"); }}
                    className="mt-4 text-xs font-bold uppercase text-maroon hover:underline cursor-pointer"
                  >
                    Browse Portfolio
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase tracking-widest">Selected Inventory</span>
                  {quoteCart.map((item) => (
                    <div 
                      key={item.instrument.id}
                      className="p-4 bg-zinc-950/40 border border-zinc-850 flex justify-between items-start rounded"
                    >
                      <div className="max-w-[70%]">
                        <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">{item.instrument.sku}</span>
                        <h5 className="font-bold text-zinc-200 text-xs leading-snug">{item.instrument.name}</h5>
                        <p className="text-[10px] text-zinc-400 tracking-wide mt-1">Estim. reference range: ${(item.instrument.approxPrice * item.quantity).toLocaleString()} USD</p>
                      </div>

                      <div className="flex flex-col items-end justify-between h-full space-y-4 min-w-[80px]">
                        <button 
                          onClick={() => removeFromCart(item.instrument.id)}
                          className="text-[10px] text-zinc-550 hover:text-maroon flex items-center gap-0.5 hover:underline"
                        >
                          <X className="w-3 h-3" />
                          <span>Filter Out</span>
                        </button>
                        
                        <div className="flex items-center border border-zinc-800 bg-zinc-900 shadow-sm rounded-sm overflow-hidden scale-90 origin-right">
                          <button 
                            onClick={() => updateQuantity(item.instrument.id, -1)}
                            className="p-1 px-2.5 hover:bg-zinc-800 text-zinc-400 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold text-zinc-200 font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.instrument.id, 1)}
                            className="p-1 px-2.5 hover:bg-zinc-800 text-zinc-400 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Calculations breakdown */}
                  <div className="pt-4 border-t border-zinc-800 space-y-2 font-mono text-[11px] text-zinc-400">
                    <div className="flex justify-between">
                      <span>PORTFOLIO DEVICES COUNT:</span>
                      <span className="font-bold text-zinc-300">{totalItemsCount} UNITS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AVERAGE RE-AUTOCLAVE TARGET:</span>
                      <span className="font-bold text-emerald-600">✓ CERTIFIED MOIST-HEAT OK</span>
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-dashed border-zinc-805 text-zinc-400">
                      <span className="font-bold">ESTIMATED GLOBAL ORDER DEPTH:</span>
                      <span className="font-bold text-zinc-200">${totalVolumeEst.toLocaleString()} USD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Form submission details */}
              {quoteCart.length > 0 && (
                <form id="quote-submission-form" onSubmit={handleQuoteSubmit} className="space-y-4 pt-6 border-t border-zinc-800">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase tracking-widest mb-2">Hospital / Clinical Sourcing Form</span>
                  
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Representative Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe, MD / Purchasing Officer"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Organization / Hospital System *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Mayo Clinic / Elite Surgical Center"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 rounded"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Business Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="purchasing@hospital.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Direct Phone *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 902-1200"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 rounded"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Clinical Partnership Tier *</label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value as any })}
                      className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 cursor-pointer rounded"
                    >
                      <option value="Standard Clinical" className="bg-zinc-900 text-zinc-100">Standard Clinical Partner (Single Site)</option>
                      <option value="Elite Hospital System" className="bg-zinc-900 text-zinc-100">Elite Hospital System (Multi-Site)</option>
                      <option value="Global Distributor" className="bg-zinc-900 text-zinc-100">Global Wholesaler / Distributor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Special Procurement Instructions</label>
                    <textarea 
                      rows={2}
                      placeholder="Specify custom lengths, custom laser engraving requirements, or shipping urgency..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 p-3 text-xs focus:outline-none focus:border-maroon focus:bg-zinc-950 text-zinc-100 placeholder-zinc-650 rounded resize-none"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Footer Form Action */}
            <div className="p-6 border-t border-zinc-850 bg-zinc-950/45">
              {quoteCart.length > 0 ? (
                <button 
                  type="submit"
                  form="quote-submission-form"
                  className="w-full px-8 py-3.5 bg-maroon text-white font-medium hover:bg-maroon-hover transition-colors duration-300 shadow-lg tracking-wide uppercase text-xs cursor-pointer block text-center rounded"
                >
                  Generate Official Sourcing Sheet
                </button>
              ) : (
                <button 
                  disabled
                  className="w-full px-8 py-3.5 bg-zinc-800/40 text-zinc-600 font-medium tracking-wide uppercase text-xs select-none block text-center rounded pointer-events-none"
                >
                  Configure Allocation First
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 5. "WHY SAFE CORE" BLOCK & EXPERIENCE TAG */}
      <section id="why-safe-core" className="bg-zinc-950/20 py-24 border-t border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            
            {/* A. Left Context Column (Value Anchor) */}
            <div className="flex flex-col justify-between space-y-12">
              <div>
                {/* Main Anchor Phrase */}
                <h3 className="text-5xl md:text-6xl font-black text-maroon mb-6 tracking-tight leading-none" style={{ fontWeight: 900 }}>
                  Why Safe Core?
                </h3>
                
                {/* Supporting Headline */}
                <p className="editorial-serif italic text-xl md:text-2xl text-zinc-350 leading-relaxed max-w-lg">
                  Instruments trusted by the world’s leading surgeons.
                </p>
              </div>
              
              {/* Feature Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
                
                {/* Feature: Quality Assured */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-850 flex items-center justify-center text-maroon shadow-lg">
                      {/* Vector Icon Support */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200 text-base mb-1">Quality Assured</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Tested with precision under rigorous multi-stage calibration to comply with international medical device standards.
                    </p>
                  </div>
                </div>

                {/* Feature: Global Shipping */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-850 flex items-center justify-center text-maroon shadow-lg">
                      {/* Vector Icon Support */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m.5-2.5A2.5 2.5 0 0118 10a2.5 2.5 0 01-2.5 2.5H14m-1 3.5v1.5a2.5 2.5 0 01-2.5 2.5H10"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200 text-base mb-1">Global Shipping</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Guaranteed rapid and highly secure clinical-grade transport networks to medical centers and remote stations globally.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* B. Right Display Column & Trust Badge */}
            <div className="relative w-full h-[450px] lg:h-auto min-h-[400px] bg-zinc-900 rounded border border-zinc-850 overflow-hidden flex items-center justify-center shadow-md">
              {/* Specialty manufacturing display placeholder backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex flex-col justify-between p-8 select-none">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500">SYS_REF: IND-9011X</span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500">ISO 13485 CERTIFIED</span>
                </div>
                
                {/* Decorative high-performance blueprint geometry inside placeholder */}
                <div className="flex items-center justify-center py-6 opacity-35">
                  <svg className="w-40 h-40 text-zinc-750" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" strokeWidth="0.75" strokeDasharray="4 4"></circle>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M12 4v16m8-8H4M6 6l12 12m0-12L6 18"></path>
                  </svg>
                </div>
                
                <div className="text-right text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  [ Specialty Manufacturing Close-up Canvas ]
                </div>
              </div>

              {/* Trust Badge (locked explicitly to the bottom-left corner of the container) */}
              <div className="absolute bottom-0 left-0 bg-maroon text-white p-8 max-w-[260px] shadow-2xl z-20">
                {/* Massive classic type numeral "15+" */}
                <span className="editorial-serif block text-6xl font-bold leading-none mb-2">
                  15+
                </span>
                {/* Crisp uppercase subtext */}
                <span className="block text-xs font-bold tracking-[0.25em] uppercase text-zinc-100">
                  Years of Precision
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BASE STRUCTURAL FOOTER */}
      <footer className="bg-mattBlack text-zinc-400 mt-auto border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side copyright indicator */}
          <div className="text-xs sm:text-sm font-sans tracking-wide text-zinc-400 text-center md:text-left leading-relaxed">
            © 2026 Safe Core Surgical | Precision in Every Cut.
          </div>
          
          {/* Right Side subtle legal references */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-600">
            <a href="#compliance" className="hover:text-zinc-400 transition-colors">Regulatory Compliance</a>
            <span className="hidden md:inline text-zinc-800">•</span>
            <a href="#privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <span className="hidden md:inline text-zinc-800">•</span>
            <a href="#terms" className="hover:text-zinc-400 transition-colors">Terms of Supply</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
