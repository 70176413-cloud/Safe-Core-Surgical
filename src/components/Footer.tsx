import React from "react";
import { NavigationTab, SurgicalCategory } from "../types";
import { 
  ShieldCheck, 
  Award, 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowUp,
  ChevronRight,
  FileText
} from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
  onSelectCategory?: (category: SurgicalCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = Object.values(SurgicalCategory);

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 font-sans pt-16 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200">
          
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-md border border-slate-200 shadow-sm inline-block">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Safe Core Surgical Logo" 
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="editorial-serif text-slate-900 text-xl font-bold">SAFE CORE SURGICAL CO.</h3>
                <p className="text-[10px] font-mono tracking-widest text-maroon uppercase font-bold">
                  Precision Medical Manufacturing
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-md">
              Safe Core Surgical Co. is a premier global manufacturer of medical-grade surgical instruments. 
              Engineered from German AISI 420/440C stainless steel and Grade 5 Titanium for unmatched tactile balance, zero flex, and 100-cycle autoclave durability.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono text-emerald-700 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>ISO 13485:2016</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono text-slate-800 font-semibold">
                <Award className="w-3.5 h-3.5 text-maroon" />
                <span>CE MARKED</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono text-slate-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-maroon" />
                <span>FDA REGISTERED</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-200 pb-2">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveTab("home"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>Home & Overview</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("products"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>Surgical Catalog (4,500+ SKU)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("custom"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-bold text-slate-900"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>Custom Orders & OEM B2B Configurator</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("about"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>About Us & CEO Statement</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("quality"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>ISO Quality & Metallurgy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("contact"); scrollToTop(); }}
                  className="hover:text-maroon transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <ChevronRight className="w-3 h-3 text-maroon" />
                  <span>Contact & Inquiry Requisition</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Surgical Disciplines */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-200 pb-2">
              Surgical Disciplines
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-600">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat);
                      setActiveTab("products");
                      scrollToTop();
                    }}
                    className="hover:text-maroon transition-colors text-left truncate max-w-[180px] cursor-pointer font-medium"
                  >
                    {cat}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => { setActiveTab("products"); scrollToTop(); }}
                  className="text-maroon hover:underline font-bold text-[11px] pt-1 block cursor-pointer"
                >
                  + View All 13 Categories →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-200 pb-2">
              Direct Sourcing Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">OFFICIAL EMAIL</span>
                  <a href="mailto:sales@safecoresurgical.com" className="text-slate-900 hover:text-maroon transition-colors font-bold">
                    sales@safecoresurgical.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">WHATSAPP DIRECT HOTLINE</span>
                  <a 
                    href="https://wa.me/923067621838" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 transition-colors font-bold flex items-center gap-1"
                  >
                    <span>+92 306 7621838</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">MANUFACTURING HEADQUARTERS</span>
                  <span className="text-slate-600">Surgical Industrial Estate, Sector 7-B, Sialkot / Global Export Logistics</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} SAFE CORE SURGICAL CO. All Rights Reserved. ISO 13485:2016 Certified.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-600 font-medium">German Stainless Steel AISI 420 / 440C</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-100 border border-slate-200 rounded text-slate-600 hover:text-maroon hover:border-maroon transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
