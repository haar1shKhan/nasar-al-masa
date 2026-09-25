"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, PhoneCall, Building2, Wrench, ShieldCheck } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService = "HVAC Solutions" }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: defaultService,
    projectScope: "Commercial High-Rise",
    timeline: "Immediate / Emergency",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary-container text-on-primary px-6 py-5 flex items-center justify-between border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-container">
              <span className="material-symbols-outlined text-[24px]">engineering</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-lg md:text-xl font-semibold leading-tight text-on-primary">
                Technical Consultation & RFQ
              </h3>
              <p className="text-xs text-primary-fixed-dim font-label-caps uppercase tracking-wider mt-0.5">
                Nasar Al Masa Technical Services LLC � Dubai & UAE
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-primary/70 hover:text-on-primary hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-4 border border-secondary/20">
                <CheckCircle2 className="w-10 h-10 text-[#8d4f00]" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface mb-2 font-headline-sm">
                Inquiry Successfully Logged
              </h4>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-on-surface">{formData.name}</span>. A senior HVAC & Vertical Mobility project engineer will review your specifications and contact you within 2 business hours.
              </p>
              <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container text-left w-full max-w-md mb-6 space-y-1.5 text-xs text-on-surface-variant">
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">Service:</span>
                  <span>{formData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">Scope:</span>
                  <span>{formData.projectScope}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">Emergency Hotline:</span>
                  <span className="text-primary font-bold">+971 4 288 8490</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-semibold text-sm rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eng. Tariq Mansoor"
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.ae"
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Company / Facility Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Al Futtaim Group / Tower A"
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Engineering Discipline
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="Central Chilled Water & District Cooling">Central Chilled Water & District Cooling</option>
                    <option value="VRF / VRV Inverter Multi-Split Systems">VRF / VRV Inverter Multi-Split Systems</option>
                    <option value="Precision AHU & FAHU Ventilation">Precision AHU & FAHU Ventilation</option>
                    <option value="High-Speed Passenger & MRL Elevators">High-Speed Passenger & MRL Elevators</option>
                    <option value="Heavy Commercial Escalator Systems">Heavy Commercial Escalator Systems</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="Emergency Diagnostic & Retrofit">Emergency Diagnostic & Retrofit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                    Project Scope / Facility Type
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="Commercial High-Rise / Office Tower">Commercial High-Rise / Office Tower</option>
                    <option value="Luxury Residential / Villa Development">Luxury Residential / Villa Development</option>
                    <option value="Industrial Logistics / Warehouse Facility">Industrial Logistics / Warehouse Facility</option>
                    <option value="Healthcare & Cleanroom Facility">Healthcare & Cleanroom Facility</option>
                    <option value="Shopping Mall & Retail Complex">Shopping Mall & Retail Complex</option>
                    <option value="Hotel & Hospitality Resort">Hotel & Hospitality Resort</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5 font-label-caps">
                  Project Notes / Technical Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide estimated capacity (TR/Tonnage, number of elevator shafts, floor stops, or immediate pain points)..."
                  className="w-full px-3.5 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                <div className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-secondary-accent" />
                  <span>DCD Approved � NDA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-accent hover:bg-secondary text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit RFQ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
