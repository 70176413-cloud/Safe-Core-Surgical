import React, { useState } from "react";
import { NavigationTab } from "../types";
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  PhoneCall,
  Mail,
  Award,
  Sliders
} from "lucide-react";

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setSelectedCategoryFilter?: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  setIsCartOpen,
  setIsSearchOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: NavigationTab; label: string; badge?: string }> = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products Catalog", badge: "4,500+ SKU" },
    { id: "custom", label: "Custom Orders", badge: "OEM / B2B" },
    { id: "about", label: "About & CEO Message" },
    { id: "quality", label: "Quality & ISO Standards" },
    { id: "contact", label: "Contact & Sourcing" },
  ];

  const handleTabClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-900">
      {/* Top Regulatory Utility Bar */}
      <div className="hidden lg:block bg-slate-900 py-1.5 px-6 sm:px-10 text-[11px] font-mono text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold tracking-wider">ISO 13485:2016 CERTIFIED MFG</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Award className="w-3.5 h-3.5 text-red-400" />
              <span>CE MARKED & FDA COMPLIANT SURGICAL GRADE</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <a 
              href="https://wa.me/923067621838" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp: +92 306 7621838</span>
            </a>
            <a href="mailto:sales@safecoresurgical.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-red-400" />
              <span>sales@safecoresurgical.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo Header */}
        <div 
          onClick={() => handleTabClick("home")}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Logo emblem */}
          <div className="bg-white p-1 rounded-md border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <img 
              src="/src/assets/logo.png" 
              alt="Safe Core Surgical Co. Logo" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="editorial-serif font-bold text-lg sm:text-xl text-slate-900 tracking-wide group-hover:text-maroon transition-colors">
              SAFE CORE
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-maroon font-bold uppercase">
              SURGICAL CO.
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-3.5 py-2 rounded text-xs transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "text-maroon font-bold bg-maroon-light border border-maroon/20 shadow-sm"
                    : "text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold shadow-xs ${
                    item.id === "custom" ? "bg-slate-900 text-amber-300" : "bg-maroon text-white"
                  }`}>
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-maroon rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Search + Custom Orders + Sourcing Cart) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Direct Custom Orders Button in Header */}
          <button
            onClick={() => handleTabClick("custom")}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 rounded font-mono text-xs tracking-wider uppercase font-bold border border-slate-700 transition-all cursor-pointer shadow-xs"
            title="Configure Custom Surgical Instruments"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-300" />
            <span>Custom Orders</span>
          </button>

          {/* Quick Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 hover:text-maroon hover:border-maroon/40 transition-colors cursor-pointer"
            title="Search Instruments Catalog"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Requisition Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-4 py-2.5 bg-maroon hover:bg-maroon-hover text-white rounded font-medium text-xs tracking-wider uppercase flex items-center space-x-2 shadow-md shadow-maroon/20 transition-all duration-300 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden md:inline">Sourcing Sheet</span>
            {cartCount > 0 ? (
              <span className="ml-1 bg-white text-maroon font-bold font-mono text-[11px] h-5 min-w-[20px] px-1 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            ) : (
              <span className="hidden lg:inline text-[10px] opacity-80 font-mono">(0)</span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-mono text-slate-500">ISO 13485 CERTIFIED CATALOG</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`text-left px-4 py-3 rounded text-sm transition-colors flex items-center justify-between ${
                  activeTab === item.id
                    ? "bg-maroon text-white font-bold"
                    : "text-slate-700 hover:bg-slate-100 font-medium"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 text-xs font-mono text-slate-500 space-y-2">
            <p>Direct Sales & WhatsApp Support:</p>
            <p className="text-emerald-700 font-bold">+92 306 7621838</p>
            <p className="text-maroon font-bold">sales@safecoresurgical.com</p>
          </div>
        </div>
      )}
    </header>
  );
};
