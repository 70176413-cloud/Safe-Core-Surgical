/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { NavigationTab, SurgicalCategory, SurgicalInstrument, QuoteItem } from "./types";
import { SURGICAL_INSTRUMENTS } from "./data";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { CustomOrdersPage } from "./components/CustomOrdersPage";
import { AboutPage } from "./components/AboutPage";
import { QualityPage } from "./components/QualityPage";
import { ContactPage } from "./components/ContactPage";
import { QuoteDrawer } from "./components/QuoteDrawer";
import { InstrumentModal } from "./components/InstrumentModal";
import { Search, X, ChevronRight, Eye, ShoppingCart, MessageCircle, PhoneCall } from "lucide-react";

export function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quoteCart, setQuoteCart] = useState<QuoteItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedInstrument, setSelectedInstrument] = useState<SurgicalInstrument | null>(null);
  const [globalSearch, setGlobalSearch] = useState<string>("");

  // Cart Handlers
  const handleAddToQuote = (instrument: SurgicalInstrument) => {
    setQuoteCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.instrument.id === instrument.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { instrument, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setQuoteCart((prev) =>
      prev.map((i) => (i.instrument.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const handleRemoveItem = (id: string) => {
    setQuoteCart((prev) => prev.filter((i) => i.instrument.id !== id));
  };

  const handleClearCart = () => {
    setQuoteCart([]);
  };

  const handleSelectCategory = (cat: SurgicalCategory) => {
    setSelectedCategory(cat);
    setActiveTab("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Global search items
  const searchResults = globalSearch.trim()
    ? SURGICAL_INSTRUMENTS.filter(
        (i) =>
          i.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
          i.sku.toLowerCase().includes(globalSearch.toLowerCase()) ||
          i.category.toLowerCase().includes(globalSearch.toLowerCase())
      )
    : [];

  const cartCount = quoteCart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIds = quoteCart.map((i) => i.instrument.id);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-maroon selection:text-white flex flex-col justify-between">
      
      {/* Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {activeTab === "home" && (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectCategory={handleSelectCategory}
            onAddToQuote={handleAddToQuote}
            featuredInstruments={SURGICAL_INSTRUMENTS}
            setIsCartOpen={setIsCartOpen}
          />
        )}

        {activeTab === "products" && (
          <ProductsPage
            onAddToQuote={handleAddToQuote}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenInstrumentModal={setSelectedInstrument}
            quoteCartIds={cartIds}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "custom" && (
          <CustomOrdersPage
            setActiveTab={setActiveTab}
            setIsCartOpen={setIsCartOpen}
          />
        )}

        {activeTab === "about" && (
          <AboutPage
            setActiveTab={setActiveTab}
            setIsCartOpen={setIsCartOpen}
          />
        )}

        {activeTab === "quality" && (
          <QualityPage
            setActiveTab={setActiveTab}
            setIsCartOpen={setIsCartOpen}
          />
        )}

        {activeTab === "contact" && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectCategory={handleSelectCategory}
      />

      {/* Global Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md p-4 sm:p-10 flex items-start justify-center pt-20 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-lg w-full max-w-2xl text-slate-900 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center space-x-3 w-full pr-4">
                <Search className="w-5 h-5 text-maroon shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  placeholder="Type instrument name or SKU code..."
                  className="w-full bg-transparent text-sm text-slate-900 focus:outline-none placeholder-slate-400 font-mono"
                />
              </div>
              <button
                onClick={() => { setIsSearchOpen(false); setGlobalSearch(""); }}
                className="p-1.5 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              {!globalSearch.trim() ? (
                <p className="text-xs text-slate-500 text-center py-8 font-mono">
                  Search across 4,500+ surgical instrument SKUs...
                </p>
              ) : searchResults.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-8 font-mono">
                  No surgical instruments found matching "{globalSearch}".
                </p>
              ) : (
                searchResults.map((inst) => (
                  <div
                    key={inst.id}
                    className="p-3 bg-slate-50 hover:bg-maroon-light/50 border border-slate-200 rounded flex items-center justify-between gap-4 transition-colors"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-slate-500">{inst.sku}</span>
                        <span className="text-[10px] font-mono text-maroon uppercase font-bold">{inst.category}</span>
                      </div>
                      <h4 className="editorial-serif text-sm text-slate-900 font-medium">{inst.name}</h4>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedInstrument(inst);
                          setIsSearchOpen(false);
                          setGlobalSearch("");
                        }}
                        className="p-2 bg-white border border-slate-200 rounded text-slate-600 hover:text-slate-900 hover:border-slate-300"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          handleAddToQuote(inst);
                          setIsSearchOpen(false);
                          setGlobalSearch("");
                          setIsCartOpen(true);
                        }}
                        className="px-3 py-1.5 bg-maroon text-white text-xs font-mono rounded hover:bg-maroon-hover"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sourcing Requisition Slide-Over Drawer */}
      <QuoteDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={quoteCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Instrument Specification Modal */}
      <InstrumentModal
        instrument={selectedInstrument}
        onClose={() => setSelectedInstrument(null)}
        onAddToQuote={handleAddToQuote}
        isInCart={selectedInstrument ? cartIds.includes(selectedInstrument.id) : false}
      />

      {/* Floating WhatsApp Direct Chat Widget */}
      <a
        href="https://wa.me/923067621838?text=Hello%20Safe%20Core%20Surgical,%20I%20want%20to%20inquire%20about%20surgical%20instruments."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center space-x-2.5 transition-all duration-300 hover:scale-105 border-2 border-white/20 group cursor-pointer"
        title="Chat live on WhatsApp with Safe Core Surgical (+92 306 7621838)"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <PhoneCall className="w-5 h-5" />
        <span className="hidden sm:inline font-mono font-bold text-xs tracking-wider">
          WhatsApp: +92 306 7621838
        </span>
      </a>

    </div>
  );
}

export default App;
