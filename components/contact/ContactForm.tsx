"use client";

import { User, Mail, Building, ChevronDown, Send } from "lucide-react";
import { CONTACT_PAGE_DATA } from "@/config/contactPage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactForm() {
    const { form } = CONTACT_PAGE_DATA;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission or connect to API
        alert("Message sent successfully (Demo)!");
    };

    return (
        <RevealOnScroll className="h-full">
            <div className="h-full rounded-2xl border border-border/40 bg-[#1a2130] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                {/* Subtle accent glow in the left corner */}
                <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />

                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-white/90">
                                {form.fields.name.label}
                            </label>
                            <div className="relative">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Neeraj Bhatt"
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-black/30"
                                />
                                <User className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-white/90">
                                {form.fields.email.label}
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="neerajbhattadx@gmail.com"
                                    required
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-black/30"
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                            </div>
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-semibold text-white/90">
                                {form.fields.company.label}
                            </label>
                            <div className="relative">
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Your Company Ltd."
                                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-black/30"
                                />
                                <Building className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                            </div>
                        </div>

                        {/* Service Interest */}
                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-semibold text-white/90">
                                {form.fields.service.label}
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    required
                                    defaultValue=""
                                    className="w-full appearance-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-accent focus:bg-black/30 [&>option]:bg-[#1a2130]"
                                >
                                    <option value="" disabled className="text-white/30">
                                        {form.fields.service.placeholder}
                                    </option>
                                    {form.fields.service.options.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                        <label htmlFor="details" className="text-sm font-semibold text-white/90">
                            {form.fields.details.label}
                        </label>
                        <textarea
                            id="details"
                            rows={6}
                            placeholder={form.fields.details.placeholder}
                            required
                            className="w-full resize-none rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-black/30"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#1a2130] shadow-lg shadow-accent/20"
                        >
                            {form.submitLabel}
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            </div>
        </RevealOnScroll>
    );
}
