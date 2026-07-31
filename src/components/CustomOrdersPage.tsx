import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavigationTab, SurgicalCategory } from "../types";
import { 
  Wrench, 
  Settings2, 
  Sliders, 
  Upload, 
  FileCode, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Scissors, 
  Layers, 
  Clock, 
  HelpCircle,
  FileSpreadsheet,
  Zap,
  ChevronRight,
  ExternalLink,
  Printer,
  X
} from "lucide-react";

interface CustomOrdersPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  setIsCartOpen: (open: boolean) => void;
}

export const CustomOrdersPage: React.FC<CustomOrdersPageProps> = ({ setActiveTab, setIsCartOpen }) => {
  // Configurator State
  const [category, setCategory] = useState<string>("General Surgery");
  const [instrumentType, setInstrumentType] = useState<string>("Custom Forceps / Tweezers");
  const [alloy, setAlloy] = useState<string>("German AISI 420 Stainless Steel");
  const [jawType, setJawType] = useState<string>("Micro-Serrated (0.4mm pitch)");
  const [finish, setFinish] = useState<string>("Satin Matte Anti-Glare");
  const [lengthMm, setLengthMm] = useState<number>(160);
  const [laserEtchingText, setLaserEtchingText] = useState<string>("ST. JUDE - OR-3");
  const [quantityTier, setQuantityTier] = useState<string>("Small Batch (25 - 100 units)");
  const [notes, setNotes] = useState<string>("");
  
  // Contact details
  const [fullName, setFullName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  // Active UI Step
  const [activeStep, setActiveStep] = useState<number>(1);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Options Data
  const categoriesList = Object.values(SurgicalCategory);

  const instrumentTypes = [
    "Custom Forceps / Tweezers",
    "Surgical Scissors & Shears",
    "Needle Holders (TC Jaws)",
    "Retractors & Self-Retaining Systems",
    "Rongeurs & Bone Cutters",
    "Elevators & Dissectors",
    "Laparoscopic Bipolar / Monopolar",
    "Custom Sterilization Tray & Rack",
    "Specialized Non-Standard Blueprint"
  ];

  const alloyOptions = [
    { name: "German AISI 420 Stainless Steel", desc: "High tensile strength, standard for general surgical instruments (HRC 48-52)." },
    { name: "High-Carbon AISI 440C Steel", desc: "Extreme edge retention and hardness for bone cutters & shears (HRC 54-58)." },
    { name: "Grade 5 Titanium Alloy (Ti-6Al-4V)", desc: "100% non-magnetic, 40% lighter than steel, optimal for ophthalmic & neurosurgery." },
    { name: "Tungsten Carbide Insert (TC Gold Handle)", desc: "Diamond-cut tungsten carbide jaw inserts for 5x longer grip lifespan." }
  ];

  const jawOptions = [
    "Micro-Serrated (0.4mm pitch)",
    "Cross-Hatched Diamond TC Jaws",
    "Smooth Delicate Non-Traumatic",
    "Atraumatic DeBakey Tooth Pattern",
    "1x2 Teeth Rat-Tooth Tip",
    "Curved 45° Bayonet Offset",
    "Bipolar Coagulation Tip"
  ];

  const finishOptions = [
    "Satin Matte Anti-Glare (Recommended for OR lighting)",
    "Mirror High-Gloss Polish",
    "Electro-Black Ceramic Coated (Non-reflective for laser surgery)",
    "Gold-Plated Ring Handles (Denotes Tungsten Carbide jaws)"
  ];

  const quantityTiers = [
    "Prototype Sample (1 - 5 units)",
    "Small Batch (25 - 100 units)",
    "Hospital Network Order (100 - 500 units)",
    "Global Distributor Bulk (1,000+ units)"
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmitCustomOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = "SCS-OEM-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(refCode);
      setIsSubmitting(false);
    }, 800);
  };

  // Generate WhatsApp prefilled string with exact WhatsApp number +92 306 7621838
  const buildWhatsAppMessage = () => {
    const text = `*NEW CUSTOM SURGICAL ORDER INQUIRY*
*Ref:* ${submittedRef || "DIRECT-INQUIRY"}
*Client Name:* ${fullName || "Not specified"}
*Organization:* ${organization || "Not specified"}
*Category:* ${category}
*Instrument Class:* ${instrumentType}
*Steel Alloy:* ${alloy}
*Jaw Pattern:* ${jawType}
*Surface Finish:* ${finish}
*Length:* ${lengthMm}mm
*Laser Etching:* ${laserEtchingText || "None"}
*Quantity Tier:* ${quantityTier}
*Notes:* ${notes || "None"}

Please provide a formal OEM quote and CAD review.`;

    return `https://wa.me/923067621838?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#800020_2px,transparent_2px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2.5 bg-maroon text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM OEM & B2B INSTRUMENT MANUFACTURING</span>
            </div>

            <h1 className="editorial-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Custom Surgical Instrument Configurator
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              Design and request specialized surgical tools tailored to your clinical requirements. From custom shaft curvatures and tungsten carbide serrations to hospital logo laser etching and batch prototyping.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono">
              <span className="flex items-center space-x-1.5 text-emerald-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>German Billet Forging</span>
              </span>
              <span className="flex items-center space-x-1.5 text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Award className="w-4 h-4 text-maroon" />
                <span>ISO 13485 & CE Standards</span>
              </span>
              <a 
                href="https://wa.me/923067621838?text=Hello%20Safe%20Core%20Surgical,%20I%20have%20a%20custom%20instrument%20manufacturing%20inquiry."
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Direct WhatsApp: +92 306 7621838</span>
              </a>
            </div>
          </div>
        </div>

        {/* Custom Order Submission Confirmation View */}
        {submittedRef ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xl space-y-8"
          >
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="inline-block px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono font-bold text-slate-800">
                OFFICIAL ORDER REF: <strong className="text-maroon">{submittedRef}</strong>
              </span>

              <h2 className="editorial-serif font-bold text-3xl text-slate-900">
                Custom Order Requisition Dispatched!
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Your custom surgical instrument specification has been successfully logged. Our engineering and metallurgy team is reviewing your requirements and CAD specifications.
              </p>
            </div>

            {/* Itemized Specification Sheet Preview */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <h3 className="editorial-serif text-lg text-slate-900 font-bold">Client: {fullName || "Direct Clinical Order"}</h3>
                  <p className="text-xs font-mono text-slate-500">{organization || "Hospital Network"} • {email}</p>
                </div>
                <span className="text-xs font-mono font-bold text-maroon bg-maroon-light px-3 py-1 rounded border border-maroon/20">
                  ESTIMATED PROTOTYPE DISPATCH: 10 - 14 DAYS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Surgical Discipline</span>
                  <span className="text-slate-900 font-bold">{category}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Instrument Type</span>
                  <span className="text-slate-900 font-bold">{instrumentType}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Steel Metallurgy</span>
                  <span className="text-maroon font-bold">{alloy}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Jaw & Tip Pattern</span>
                  <span className="text-slate-900 font-bold">{jawType}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Surface Finish</span>
                  <span className="text-slate-900 font-bold">{finish}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Overall Length</span>
                  <span className="text-slate-900 font-bold">{lengthMm} mm</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Laser Etching Text</span>
                  <span className="text-slate-900 font-bold">{laserEtchingText || "None requested"}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Target Quantity</span>
                  <span className="text-slate-900 font-bold">{quantityTier}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Drawing Attachment</span>
                  <span className="text-emerald-700 font-bold">{attachedFile ? attachedFile.name : "No file attached"}</span>
                </div>
              </div>

              {notes && (
                <div className="p-4 bg-white border border-slate-200 rounded text-xs">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">Additional Notes</span>
                  <p className="text-slate-700">{notes}</p>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Send Specification to WhatsApp (+92 306 7621838)</span>
              </a>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs font-mono uppercase tracking-wider rounded-xl border border-slate-300 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 text-maroon" />
                <span>Print CAD Requisition Sheet</span>
              </button>

              <button
                onClick={() => setSubmittedRef(null)}
                className="w-full sm:w-auto px-6 py-4 bg-maroon hover:bg-maroon-hover text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                Configure Another Instrument
              </button>
            </div>
          </motion.div>
        ) : (

          /* Interactive 4-Step Configurator Form & Live Preview */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Form Controls */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
              
              {/* Configurator Step Tabs Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4].map((step) => (
                    <button
                      key={step}
                      onClick={() => setActiveStep(step)}
                      className={`w-8 h-8 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-all cursor-pointer ${
                        activeStep === step
                          ? "bg-maroon text-white shadow-md shadow-maroon/20 scale-105"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                <span className="text-xs font-mono font-bold text-maroon uppercase tracking-wider">
                  STEP {activeStep} OF 4
                </span>
              </div>

              <form onSubmit={handleSubmitCustomOrder} className="space-y-6">
                
                {/* STEP 1: Discipline & Class */}
                {activeStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <h3 className="editorial-serif font-bold text-xl text-slate-900 mb-1">
                        1. Select Surgical Category & Instrument Class
                      </h3>
                      <p className="text-xs text-slate-500">Choose the anatomical discipline and base device geometry.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Surgical Discipline Category *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-maroon focus:bg-white transition-colors cursor-pointer"
                      >
                        {categoriesList.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Instrument Classification *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {instrumentTypes.map((type) => {
                          const isSelected = instrumentType === type;
                          return (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setInstrumentType(type)}
                              className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-maroon-light border-maroon text-maroon font-bold shadow-xs"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-6 py-3 bg-maroon text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold flex items-center space-x-2 shadow-md hover:bg-maroon-hover transition-colors cursor-pointer"
                      >
                        <span>Next: Metallurgy & Jaws</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Metallurgy & Jaw Pattern */}
                {activeStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <h3 className="editorial-serif font-bold text-xl text-slate-900 mb-1">
                        2. Metallurgy Grade & Jaw Serration Spec
                      </h3>
                      <p className="text-xs text-slate-500">Specify steel alloy composition, hardness rating, and grip pattern.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Steel Alloy / Metallurgy Specification *
                      </label>
                      <div className="space-y-2">
                        {alloyOptions.map((item) => {
                          const isSelected = alloy === item.name;
                          return (
                            <div
                              key={item.name}
                              onClick={() => setAlloy(item.name)}
                              className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                                isSelected
                                  ? "bg-maroon-light border-maroon text-slate-900 shadow-xs"
                                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold ${isSelected ? "text-maroon" : "text-slate-900"}`}>
                                  {item.name}
                                </span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-maroon" />}
                              </div>
                              <p className="text-[11px] text-slate-500 font-normal mt-1">{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Jaw Serrations & Tip Geometry *
                      </label>
                      <select
                        value={jawType}
                        onChange={(e) => setJawType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-maroon focus:bg-white transition-colors cursor-pointer"
                      >
                        {jawOptions.map((j) => (
                          <option key={j} value={j}>{j}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="px-5 py-2.5 bg-slate-100 text-slate-700 font-mono text-xs uppercase rounded-lg font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="px-6 py-3 bg-maroon text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold flex items-center space-x-2 shadow-md hover:bg-maroon-hover transition-colors cursor-pointer"
                      >
                        <span>Next: Finish & Dimensions</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Surface Finish & Dimensions & OEM Laser Engraving */}
                {activeStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <h3 className="editorial-serif font-bold text-xl text-slate-900 mb-1">
                        3. Surface Coating, Length & OEM Laser Marking
                      </h3>
                      <p className="text-xs text-slate-500">Customize instrument overall length, anti-reflective coating, and laser etched text.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Surface Finish / Anti-Reflective Coating *
                      </label>
                      <select
                        value={finish}
                        onChange={(e) => setFinish(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-maroon focus:bg-white transition-colors cursor-pointer"
                      >
                        {finishOptions.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <label className="font-bold text-slate-700 uppercase">
                          Overall Length: <span className="text-maroon font-bold">{lengthMm} mm</span> ({(lengthMm / 25.4).toFixed(1)} inches)
                        </label>
                      </div>
                      <input
                        type="range"
                        min="90"
                        max="350"
                        step="5"
                        value={lengthMm}
                        onChange={(e) => setLengthMm(Number(e.target.value))}
                        className="w-full accent-maroon cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>90mm (Micro)</span>
                        <span>180mm (Standard)</span>
                        <span>350mm (Deep Cavity)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Custom Laser Etching / Hospital Branding (Optional)
                      </label>
                      <input
                        type="text"
                        value={laserEtchingText}
                        onChange={(e) => setLaserEtchingText(e.target.value)}
                        placeholder="e.g. ST. JUDE - OR ROOM 4"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-mono focus:outline-none focus:border-maroon focus:bg-white"
                      />
                      <p className="text-[11px] text-slate-500">
                        Text will be fiber-laser etched into the instrument shank or ring handle for sterilizer tray identification.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="px-5 py-2.5 bg-slate-100 text-slate-700 font-mono text-xs uppercase rounded-lg font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(4)}
                        className="px-6 py-3 bg-maroon text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold flex items-center space-x-2 shadow-md hover:bg-maroon-hover transition-colors cursor-pointer"
                      >
                        <span>Next: Quantity & Attachment</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Quantity Tier, CAD Upload & Client Contact Details */}
                {activeStep === 4 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <h3 className="editorial-serif font-bold text-xl text-slate-900 mb-1">
                        4. Quantity Tier, Drawing Upload & Contact Info
                      </h3>
                      <p className="text-xs text-slate-500">Attach CAD / PDF drawings if available and provide contact details for formal quote dispatch.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Target Production Quantity Tier *
                      </label>
                      <select
                        value={quantityTier}
                        onChange={(e) => setQuantityTier(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-maroon focus:bg-white transition-colors cursor-pointer"
                      >
                        {quantityTiers.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>

                    {/* File Dropzone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                        Attach Blueprint / Drawing (PDF, DWG, PNG, JPG - Optional)
                      </label>
                      <div className="border-2 border-dashed border-slate-300 hover:border-maroon rounded-xl p-4 text-center bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload className="w-6 h-6 text-maroon mx-auto mb-1" />
                        <span className="text-xs font-semibold text-slate-800 block">
                          {attachedFile ? attachedFile.name : "Click or Drag Blueprint Drawing File"}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Max size 25MB</span>
                      </div>
                    </div>

                    {/* Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-600 uppercase">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Dr. Robert Hayes"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-600 uppercase">Organization / Hospital *</label>
                        <input
                          type="text"
                          required
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="General Hospital Network"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-600 uppercase">Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="r.hayes@hospital.org"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-600 uppercase">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 306 7621838"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-600 uppercase">Special Manufacturing Instructions</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Detail any custom angles, handle grip preferences, or autoclaving tray requirements..."
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon resize-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="px-5 py-2.5 bg-slate-100 text-slate-700 font-mono text-xs uppercase rounded-lg font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-maroon hover:bg-maroon-hover text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold flex items-center space-x-2 shadow-lg shadow-maroon/20 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Generating Blueprint..." : "Submit Custom Order"}</span>
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            </div>

            {/* Right Column: Live Interactive Blueprint Summary Card */}
            <div className="lg:col-span-5 space-y-6 sticky top-24">
              
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center space-x-2">
                    <Sliders className="w-4 h-4 text-maroon" />
                    <h3 className="editorial-serif font-bold text-lg text-slate-900">
                      Live CAD Blueprint Spec
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-maroon text-white px-2 py-0.5 rounded uppercase">
                    OEM READY
                  </span>
                </div>

                {/* Laser Engraving Handle Mockup */}
                <div className="bg-slate-900 text-slate-200 p-4 rounded-xl space-y-2 border border-slate-800 relative overflow-hidden">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest flex justify-between">
                    <span>LASER ETCHING PREVIEW</span>
                    <span className="text-emerald-400">0.05mm Fiber Laser</span>
                  </div>

                  {/* Simulated Metal Shank */}
                  <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded flex items-center justify-center px-4 shadow-inner border border-slate-600">
                    <span className="font-mono text-xs font-bold text-slate-200 tracking-widest drop-shadow-md">
                      SAFE CORE • {laserEtchingText || "HOSPITAL TAG"}
                    </span>
                  </div>
                </div>

                {/* Live Specification List */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Discipline:</span>
                    <span className="font-bold text-slate-900">{category}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Class:</span>
                    <span className="font-bold text-slate-900">{instrumentType}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Alloy / Steel:</span>
                    <span className="font-bold text-maroon">{alloy}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Jaw Spec:</span>
                    <span className="font-bold text-slate-900">{jawType}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Coating:</span>
                    <span className="font-bold text-slate-900">{finish}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Overall Length:</span>
                    <span className="font-bold text-slate-900">{lengthMm} mm</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Target Quantity:</span>
                    <span className="font-bold text-slate-900">{quantityTier}</span>
                  </div>
                </div>

                {/* Direct WhatsApp Quick Chat Callout */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs font-mono">
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Instant Custom Assistance (+92 306 7621838)</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                    Prefer discussing custom blueprints or photos over WhatsApp? Contact our chief engineer directly:
                  </p>
                  <a
                    href="https://wa.me/923067621838?text=Hello%20Safe%20Core%20Surgical,%20I%20want%20to%20discuss%20a%20custom%20surgical%20instrument%20order."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-emerald-800 hover:text-emerald-900 underline"
                  >
                    <span>Open WhatsApp Chat with +92 306 7621838 →</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* OEM Capabilities Grid */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-maroon tracking-widest uppercase">
              HIGH PRECISION FACTORY CAPABILITIES
            </span>
            <h2 className="editorial-serif font-bold text-3xl text-slate-900">
              Why Partner with Safe Core for Custom Manufacturing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-maroon-light text-maroon flex items-center justify-center font-bold">
                <FileCode className="w-5 h-5" />
              </div>
              <h3 className="editorial-serif font-bold text-lg text-slate-900">3D CAD Modeling & Prototyping</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our engineering team translates physical samples, sketches, or 3D STEP files into working prototype instruments within 7-10 business days.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-maroon-light text-maroon flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="editorial-serif font-bold text-lg text-slate-900">Tungsten Carbide Solder Bonding</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Vacuum silver-solder bonding of micro diamond-cut tungsten carbide jaw inserts for long-lasting shear blade sharp maintenance.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-maroon-light text-maroon flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="editorial-serif font-bold text-lg text-slate-900">Nitric Passivation & Autoclave QA</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                100% chemical passivation removes free iron contamination, guaranteeing corrosion resistance over 100+ moist heat autoclave cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Order FAQ Accordion */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-xs">
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
            <HelpCircle className="w-6 h-6 text-maroon" />
            <h3 className="editorial-serif font-bold text-2xl text-slate-900">Custom Order FAQ</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the minimum order quantity (MOQ) for custom OEM instruments?",
                a: "For simple modifications (custom length, laser etching, or tip serration), our MOQ is as low as 5 units. For completely custom drop-forged tools requiring new die molds, prototype batches typically start at 25 units."
              },
              {
                q: "How long does prototype development take?",
                a: "Sample prototype manufacturing typically takes 10 to 14 business days from CAD drawing approval. Expedited prototyping options are available upon request."
              },
              {
                q: "Can I send a physical sample for reverse-engineering?",
                a: "Yes! You can courier a physical instrument sample or blueprint drawing directly to our manufacturing headquarters in Sialkot. Our metallurgical team will analyze the steel hardness and replicate the exact dimensions."
              },
              {
                q: "How do I contact your custom order engineering team directly on WhatsApp?",
                a: "You can message our direct engineering desk on WhatsApp at +92 306 7621838. We accept photos, PDF drawings, and voice notes 24/7."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-4">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full text-left font-bold text-slate-900 text-sm flex items-center justify-between hover:text-maroon transition-colors py-1 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-maroon transition-transform ${faqOpen === idx ? "rotate-90" : ""}`} />
                </button>
                {faqOpen === idx && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal pl-2 border-l-2 border-maroon">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
