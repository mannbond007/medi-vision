"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-6 md:px-12 lg:max-w-3xl">
          <AnimatedSection>
             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Get in Touch</h1>
             <p className="text-xl text-slate-300 font-light leading-relaxed">
               Have questions about admissions, visas, or universities? Our expert counselors are here to help you navigate your journey.
             </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info (Left Sidebar) */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
                  <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Corporate Office</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">123 Education Hub, Sector 62,<br/>Noida, Uttar Pradesh 201309,<br/>India</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                        <p className="text-slate-600 text-sm">+91 98765 43210</p>
                        <p className="text-slate-600 text-sm">+91 11 4567 8900</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                        <p className="text-slate-600 text-sm">info@medivisioncareer.com</p>
                        <p className="text-slate-600 text-sm">admissions@medivisioncareer.com</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Working Hours</h4>
                        <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 6:30 PM</p>
                        <p className="text-slate-600 text-sm">Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form (Right Side) */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                  <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                  {formStatus === "success" ? (
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center py-16">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                      <p className="text-green-700">Thank you for reaching out. A counselor will contact you shortly.</p>
                      <button 
                        onClick={() => setFormStatus("idle")}
                        className="mt-6 text-green-600 font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                          <input 
                            type="text" 
                            id="name" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                          <input 
                            type="email" 
                            id="email" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="destination" className="text-sm font-medium text-slate-700">Target Destination</label>
                          <select 
                            id="destination" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-slate-700"
                          >
                            <option value="">Select Destination</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message *</label>
                        <textarea 
                          id="message" 
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                          placeholder="Tell us about your educational background and goals..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formStatus === "submitting"}
                        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting" ? (
                           <span className="flex items-center gap-2">
                             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> 
                             Sending...
                           </span>
                        ) : (
                           <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-600 group">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform duration-500">
           <MapPin size={48} className="text-primary mb-2" />
           <span className="font-bold text-xl text-primary">Map View</span>
           <span className="text-sm">Interactive Map Integration Here</span>
        </div>
      </section>
    </>
  );
}
