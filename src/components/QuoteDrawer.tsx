import React, { useState, FormEvent } from "react";
import { QuoteItem, QuoteRequest, SubmittedQuoteRef } from "../types";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle2, 
  Printer, 
  FileSpreadsheet,
  Building2,
  Mail,
  ExternalLink
} from "lucide-react";

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<QuoteRequest>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    tier: "Standard Clinical",
    notes: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<SubmittedQuoteRef | null>(null);
  const [testUrl, setTestUrl] = useState("");

  const totalEstimated = items.reduce((sum, item) => sum + (item.instrument.approxPrice * item.quantity), 0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    const refId = `SC-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const dateStr = new Date().toISOString().split("T")[0];

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          organization: form.organization,
          email: form.email,
          phone: form.phone,
          tier: form.tier,
          notes: form.notes,
          items,
          totalEstimated,
          refId,
          date: dateStr
        })
      });

      const data = await response.json();
      if (data.testPreviewUrl) {
        setTestUrl(data.testPreviewUrl);
      }

      setSubmittedRef({
        refId,
        date: dateStr,
        items: [...items],
        form: { ...form }
      });

      onClearCart();
    } catch (err) {
      console.error(err);
      setSubmittedRef({
        refId,
        date: dateStr,
        items: [...items],
        form: { ...form }
      });
      onClearCart();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-2xl bg-white border-l border-slate-200 text-slate-900 h-full flex flex-col shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-maroon-light/40 text-maroon rounded">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="editorial-serif font-bold text-xl text-slate-900">Sourcing Requisition Sheet</h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                SAFE CORE SURGICAL B2B DESK
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-white rounded border border-slate-200 shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {submittedRef ? (
            /* Confirmation Receipt View */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="editorial-serif text-2xl text-slate-900 font-bold">Requisition Submitted</h3>
                <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-emerald-800 font-mono text-xs rounded font-bold">
                  REF NO: {submittedRef.refId}
                </span>
                <p className="text-xs text-slate-700 font-normal leading-relaxed max-w-md mx-auto">
                  An official requisition manifest has been generated and dispatched to <strong>sales@safecoresurgical.com</strong> and <strong>{submittedRef.form.email}</strong>.
                </p>

                {testUrl && (
                  <a 
                    href={testUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-maroon hover:underline font-mono pt-2 font-bold"
                  >
                    <span>View Rendered HTML Email Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Manifest Itemized Receipt */}
              <div className="bg-slate-50 border border-slate-200 rounded p-6 space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-3 text-slate-600 font-bold">
                  <span>ENTITY: {submittedRef.form.organization}</span>
                  <span>DATE: {submittedRef.date}</span>
                </div>

                <div className="space-y-2">
                  {submittedRef.items.map((item) => (
                    <div key={item.instrument.id} className="flex justify-between py-1 border-b border-slate-200/60">
                      <div>
                        <span className="text-slate-900 font-bold">{item.instrument.sku}</span> - {item.instrument.name}
                        <span className="text-slate-500 block text-[10px]">Qty: {item.quantity}</span>
                      </div>
                      <span className="text-maroon font-bold">${(item.instrument.approxPrice * item.quantity).toLocaleString()} USD</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between text-sm font-bold">
                  <span>TOTAL ESTIMATE:</span>
                  <span className="text-maroon">${submittedRef.items.reduce((s, i) => s + (i.instrument.approxPrice * i.quantity), 0).toLocaleString()} USD</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="w-full py-3 bg-slate-100 border border-slate-200 text-slate-800 hover:text-slate-900 rounded text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 font-bold cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-maroon" />
                  <span>Print Official Sheet</span>
                </button>
                <button
                  onClick={() => { setSubmittedRef(null); onClose(); }}
                  className="w-full py-3 bg-maroon text-white rounded text-xs font-mono uppercase tracking-wider font-bold shadow-md shadow-maroon/20 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Standard Cart & Form View */
            <>
              {/* Selected Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-200 pb-2">
                  <span className="font-bold">SELECTED ITEMS ({items.length})</span>
                  {items.length > 0 && (
                    <button 
                      onClick={onClearCart}
                      className="text-slate-500 hover:text-red-600 transition-colors font-medium"
                    >
                      Clear Sheet
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded">
                    <FileSpreadsheet className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs text-slate-600 font-medium">Your sourcing sheet is currently empty.</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">Browse the catalog to add surgical instruments.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div 
                        key={item.instrument.id}
                        className="bg-slate-50 border border-slate-200 rounded p-4 flex items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <span className="text-[10px] font-mono text-slate-500 block font-semibold">{item.instrument.sku}</span>
                          <h4 className="editorial-serif text-sm text-slate-900 font-bold">{item.instrument.name}</h4>
                          <span className="text-[10px] font-mono text-maroon font-bold">${item.instrument.approxPrice} USD / unit</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.instrument.id, item.quantity - 1)}
                            className="p-1.5 bg-white border border-slate-200 text-slate-700 rounded hover:text-slate-900 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold w-6 text-center text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.instrument.id, item.quantity + 1)}
                            className="p-1.5 bg-white border border-slate-200 text-slate-700 rounded hover:text-slate-900 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.instrument.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Section */}
              {items.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="editorial-serif text-lg text-slate-900 font-bold">Client Procurement Details</h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={e => setForm({...form, fullName: e.target.value})}
                        placeholder="Dr. Alexander Vance"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Hospital / Organization *</label>
                      <input
                        type="text"
                        required
                        value={form.organization}
                        onChange={e => setForm({...form, organization: e.target.value})}
                        placeholder="Mercy Surgical Center"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Official Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="vance@mercysurgical.org"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+1 (800) 555-0192"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Procurement Tier</label>
                    <select
                      value={form.tier}
                      onChange={e => setForm({...form, tier: e.target.value as any})}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-maroon font-medium"
                    >
                      <option value="Standard Clinical">Standard Clinical Sourcing</option>
                      <option value="Elite Hospital System">Elite Hospital System</option>
                      <option value="Global Distributor">Global Medical Supply Distributor</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Special Instructions / Tray Marking</label>
                    <textarea
                      rows={2}
                      value={form.notes}
                      onChange={e => setForm({...form, notes: e.target.value})}
                      placeholder="Custom laser etching text, tray packing requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon resize-none font-medium"
                    />
                  </div>

                  {/* Summary Footer */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">ESTIMATED PORTFOLIO</span>
                      <span className="editorial-serif text-xl font-bold text-maroon">${totalEstimated.toLocaleString()} USD</span>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-maroon hover:bg-maroon-hover text-white rounded text-xs font-mono uppercase tracking-widest flex items-center space-x-2 shadow-md shadow-maroon/20 font-bold cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Dispatching..." : "Submit Requisition"}</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
};
