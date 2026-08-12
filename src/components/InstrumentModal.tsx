import React from "react";
import { SurgicalInstrument } from "../types";
import { X, ShoppingCart, Check, ShieldCheck, Flame, Layers } from "lucide-react";

interface InstrumentModalProps {
  instrument: SurgicalInstrument | null;
  onClose: () => void;
  onAddToQuote: (inst: SurgicalInstrument) => void;
  isInCart: boolean;
}

export const InstrumentModal: React.FC<InstrumentModalProps> = ({
  instrument,
  onClose,
  onAddToQuote,
  isInCart
}) => {
  if (!instrument) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full text-slate-900 overflow-hidden shadow-2xl relative animate-scaleUp">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center space-x-2.5 mb-1">
              <span className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
                {instrument.sku}
              </span>
              <span className="text-[10px] font-mono text-maroon font-bold uppercase">
                {instrument.category}
              </span>
            </div>
            <h2 className="editorial-serif text-2xl text-slate-900 font-bold">{instrument.name}</h2>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-white rounded border border-slate-200 shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {instrument.imageUrl && (
            <div className="w-full h-80 rounded overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-inner flex items-center justify-center">
              <img 
                src={instrument.imageUrl} 
                alt={instrument.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <p className="text-xs text-slate-600 font-normal leading-relaxed">
            {instrument.description}
          </p>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">GERMAN METALLURGY SPECIFICATION</span>
            <p className="text-xs font-mono text-slate-900 font-bold">{instrument.material}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-maroon uppercase">TECHNICAL SPECIFICATIONS</h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mono">
                {instrument.specs.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-maroon uppercase">CLINICAL ADVANTAGES</h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mono">
                {instrument.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded flex items-center space-x-3 text-xs text-emerald-800 font-mono font-bold">
            <Flame className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>MOIST-HEAT AUTOCLAVE VALIDATED (134°C / 273°F FOR 18 MINS)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">MANUFACTURING GRADE</span>
            <span className="editorial-serif text-lg text-emerald-800 font-bold">ISO 13485 • B2B Direct</span>
          </div>

          <button
            onClick={() => onAddToQuote(instrument)}
            className={`px-6 py-3 rounded text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer font-bold ${
              isInCart
                ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                : "bg-maroon hover:bg-maroon-hover text-white shadow-md shadow-maroon/20"
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>In Sourcing Sheet</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>+ Add to Sourcing Sheet</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
