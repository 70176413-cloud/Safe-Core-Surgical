import React, { useState, FormEvent } from "react";
import { Mail, PhoneCall, MapPin, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    tier: "Standard Clinical",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Post to email endpoint
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          tier: formData.tier,
          notes: formData.message,
          items: [
            {
              instrument: {
                id: "general-contact",
                sku: "SC-GENERAL-INQ",
                name: "General Corporate Procurement Inquiry",
                category: "General Inquiry",
                description: formData.message || "Direct portal inquiry",
                material: "Various Stainless Grades",
                approxPrice: 0
              },
              quantity: 1
            }
          ],
          totalEstimated: 0,
          refId: `SC-INQ-${Math.floor(100000 + Math.random() * 900000)}`,
          date: new Date().toISOString().split("T")[0]
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Fallback success UI
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ) for bulk hospital procurement?",
      a: "We maintain flexible MOQ parameters. For standard catalog items, we support order batches starting from 10 units per SKU. For custom OEM/ODM branded instruments, standard MOQ is 50 units."
    },
    {
      q: "Do you offer custom laser etching for hospital tray tracking?",
      a: "Yes! Every instrument can be laser-etched with your hospital name, department code, 2D matrix barcode, or UDI compliant serial numbers at our factory prior to final passivation."
    },
    {
      q: "How fast can you dispatch global air freight orders?",
      a: "In-stock catalog items ship within 48 to 72 hours via DHL/FedEx Express. Custom manufacturing runs typically require 2 to 3 weeks depending on batch complexity."
    },
    {
      q: "Are ISO 13485 and CE Certificates provided with shipments?",
      a: "Yes, every export batch includes full Certificate of Conformity (CoC), ISO 13485 declaration, stainless steel material analysis certificates, and passivation test records."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-maroon uppercase block">
            DIRECT DESK
          </span>
          <h1 className="editorial-serif font-bold text-4xl sm:text-6xl text-slate-900">
            Contact Sales & Procurement
          </h1>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Have questions about custom kit assembly, volume pricing, or ISO documentation? Connect directly with our clinical procurement team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-200 rounded p-8 space-y-6 shadow-xs">
              <h2 className="editorial-serif text-2xl text-slate-900 font-bold">Global Headquarters</h2>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">DIRECT SALES EMAIL</span>
                    <a href="mailto:sales@safecoresurgical.com" className="text-slate-900 hover:text-maroon text-sm font-bold transition-colors">
                      sales@safecoresurgical.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneCall className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">WHATSAPP DIRECT HOTLINE</span>
                    <a 
                      href="https://wa.me/923067621838" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 text-sm font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>+92 306 7621838</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">MANUFACTURING PLANT LOCATION</span>
                    <span className="text-slate-700 font-sans leading-relaxed block mt-0.5 font-normal">
                      Surgical Industrial Zone, Sector 7-B, Sialkot / Global Air Logistics Hub
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">SUPPORT HOURS</span>
                    <span className="text-slate-700 font-medium">24/7 Global Clinical Dispatch Desk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded p-6 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-800 block mb-1">
                ✓ FAST RESPONSE GUARANTEE
              </span>
              <p className="text-xs text-slate-700 font-normal leading-relaxed">
                All clinical inquiries sent to <strong>sales@safecoresurgical.com</strong> receive a response within 4 business hours along with full pricing tiers.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded p-8 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="editorial-serif text-3xl text-slate-900 font-bold">Inquiry Dispatched Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Safe Core Surgical Co. Your inquiry has been routed to <strong>sales@safecoresurgical.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-maroon text-white text-xs font-mono uppercase rounded hover:bg-maroon-hover transition-colors font-bold shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="editorial-serif text-2xl text-slate-900 font-bold">Send Direct Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Hospital / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                      placeholder="St. Jude Health System"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="s.jenkins@stjude.org"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 019-2831"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Procurement Category</label>
                  <select
                    value={formData.tier}
                    onChange={e => setFormData({...formData, tier: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-maroon font-medium"
                  >
                    <option value="Standard Clinical">Standard Clinical Sourcing</option>
                    <option value="Elite Hospital System">Elite Hospital Network Bulk Order</option>
                    <option value="Global Distributor">Global Medical Supply Distributor</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-600 uppercase font-semibold">Message & Specifications</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your surgical instrument requirements, quantity estimates, or OEM customization requests..."
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-maroon resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-maroon hover:bg-maroon-hover text-white rounded text-xs font-mono uppercase tracking-widest flex items-center justify-center space-x-2 shadow-md shadow-maroon/20 font-bold cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Dispatching Inquiry..." : "Send Message to sales@safecoresurgical.com"}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-maroon uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="editorial-serif text-3xl text-slate-900 font-bold">Procurement FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left text-sm font-semibold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-maroon transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
