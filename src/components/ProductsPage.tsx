import React, { useState, useMemo } from "react";
import { SurgicalCategory, SurgicalInstrument, NavigationTab } from "../types";
import { SURGICAL_INSTRUMENTS } from "../data";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Eye, 
  ShoppingCart, 
  Check, 
  Scissors, 
  ChevronRight,
  ShieldCheck,
  Info
} from "lucide-react";

interface ProductsPageProps {
  onAddToQuote: (instrument: SurgicalInstrument) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenInstrumentModal: (inst: SurgicalInstrument) => void;
  quoteCartIds: string[];
  setActiveTab?: (tab: NavigationTab) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onAddToQuote,
  selectedCategory,
  setSelectedCategory,
  onOpenInstrumentModal,
  quoteCartIds,
  setActiveTab
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [materialFilter, setMaterialFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "sku" | "price-low" | "price-high">("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", ...Object.values(SurgicalCategory)];

  // Extract unique materials
  const materials = useMemo(() => {
    const set = new Set<string>();
    SURGICAL_INSTRUMENTS.forEach(i => set.add(i.material));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter & Sort Logic
  const filteredInstruments = useMemo(() => {
    return SURGICAL_INSTRUMENTS.filter(inst => {
      const matchesCategory = selectedCategory === "All" || inst.category === selectedCategory;
      const matchesMaterial = materialFilter === "All" || inst.material === materialFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        inst.name.toLowerCase().includes(q) ||
        inst.sku.toLowerCase().includes(q) ||
        inst.description.toLowerCase().includes(q) ||
        inst.category.toLowerCase().includes(q)
      );

      return matchesCategory && matchesMaterial && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "sku") return a.sku.localeCompare(b.sku);
      return 0;
    });
  }, [selectedCategory, materialFilter, searchQuery, sortBy]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block mb-2">
                ISO 13485 CERTIFIED CATALOG
              </span>
              <h1 className="editorial-serif font-bold text-3xl sm:text-5xl text-slate-900">
                Surgical Instrumentation Master Inventory
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2 max-w-2xl">
                Browse our complete portfolio of medical-grade stainless steel instruments. Select items to construct your custom B2B sourcing requisition sheet.
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono text-slate-600">
              <span className="px-3 py-1.5 bg-white border border-slate-200 rounded shadow-xs">
                SHOWING <strong className="text-maroon font-bold">{filteredInstruments.length}</strong> INSTRUMENTS
              </span>
            </div>
          </div>
        </div>

        {/* Custom Order OEM Banner */}
        <div className="mb-8 p-6 bg-slate-900 text-white rounded-lg border border-slate-800 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase block">
              ★ NEED TAILORED OR NON-STANDARD INSTRUMENTATION?
            </span>
            <h3 className="editorial-serif text-xl font-bold text-white">
              B2B Custom Instrument Manufacturing & OEM Branding
            </h3>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              We engineer bespoke surgical tools with customized jaw patterns, titanium carbide coating, custom lengths, and laser logo etching.
            </p>
          </div>
          <button
            onClick={() => {
              if (setActiveTab) {
                setActiveTab("custom");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-5 py-3 bg-maroon hover:bg-maroon-hover text-white rounded font-mono text-xs uppercase font-bold tracking-wider shrink-0 transition-all shadow-md cursor-pointer border border-maroon/40"
          >
            Launch Custom Configurator →
          </button>
        </div>

        {/* Category Horizontal Selector Tabs */}
        <div className="mb-8 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center space-x-2 min-w-max">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-maroon text-white font-bold shadow-md shadow-maroon/20"
                      : "bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? "ALL DISCIPLINES" : cat.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-slate-200 shadow-xs rounded p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Instrument Name, SKU code..."
              className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Dropdowns & View Mode */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            
            {/* Sort Selection */}
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-600">
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-800 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-maroon cursor-pointer font-medium"
              >
                <option value="name">Name (A-Z)</option>
                <option value="sku">SKU Code</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-maroon text-white" : "text-slate-500 hover:text-slate-800"}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-maroon text-white" : "text-slate-500 hover:text-slate-800"}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Instruments Results Grid / List */}
        {filteredInstruments.length === 0 ? (
          <div className="text-center py-20 bg-white border border-slate-200 rounded shadow-xs">
            <Info className="w-10 h-10 text-maroon mx-auto mb-3" />
            <h3 className="editorial-serif text-xl text-slate-900 font-bold">No Matching Instruments Found</h3>
            <p className="text-xs text-slate-500 mt-2">Try adjusting your search query or discipline filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setMaterialFilter("All"); }}
              className="mt-4 px-4 py-2 bg-maroon text-white text-xs font-mono uppercase rounded hover:bg-maroon-hover transition-colors font-bold shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstruments.map((inst) => {
              const inCart = quoteCartIds.includes(inst.id);
              return (
                <div
                  key={inst.id}
                  className="bg-white border border-slate-200 hover:border-maroon/60 rounded p-6 flex flex-col justify-between group transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    {/* Card Header Image if available */}
                    {inst.imageUrl && (
                      <div 
                        onClick={() => onOpenInstrumentModal(inst)}
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

                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded font-semibold">
                        {inst.sku}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-maroon font-bold block mb-1">
                      {inst.category}
                    </span>

                    <h3 
                      onClick={() => onOpenInstrumentModal(inst)}
                      className="editorial-serif text-lg text-slate-900 font-bold group-hover:text-maroon transition-colors cursor-pointer mb-2"
                    >
                      {inst.name}
                    </h3>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-4">
                      {inst.description}
                    </p>

                    <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-4">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1 font-semibold">METALLURGY SPEC:</span>
                      <p className="text-[11px] text-slate-800 font-mono truncate font-medium">{inst.material}</p>
                    </div>

                    <div className="space-y-1 text-[11px] font-mono text-slate-600 mb-6">
                      {inst.specs.slice(0, 2).map((s, idx) => (
                        <p key={idx} className="truncate">• {s}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onOpenInstrumentModal(inst)}
                      className="p-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded text-xs transition-colors cursor-pointer"
                      title="Inspect Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onAddToQuote(inst)}
                      className={`w-full py-2.5 rounded text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer font-bold ${
                        inCart
                          ? "bg-emerald-50 border border-emerald-300 text-emerald-800 shadow-xs"
                          : "bg-maroon hover:bg-maroon-hover text-white shadow-md shadow-maroon/20"
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Added to Sheet</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Sourcing Sheet</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredInstruments.map((inst) => {
              const inCart = quoteCartIds.includes(inst.id);
              return (
                <div
                  key={inst.id}
                  className="bg-white border border-slate-200 hover:border-maroon/50 rounded p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all shadow-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
                        {inst.sku}
                      </span>
                      <span className="text-[10px] font-mono text-maroon uppercase font-bold">
                        {inst.category}
                      </span>
                    </div>
                    <h3 
                      onClick={() => onOpenInstrumentModal(inst)}
                      className="editorial-serif text-base text-slate-900 font-bold hover:text-maroon transition-colors cursor-pointer"
                    >
                      {inst.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal truncate max-w-2xl mt-0.5">
                      {inst.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      onClick={() => onOpenInstrumentModal(inst)}
                      className="p-2 bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 rounded cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onAddToQuote(inst)}
                      className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider font-bold ${
                        inCart ? "bg-emerald-50 text-emerald-800 border border-emerald-300" : "bg-maroon text-white hover:bg-maroon-hover"
                      }`}
                    >
                      {inCart ? "Added" : "+ Add to Quote"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
