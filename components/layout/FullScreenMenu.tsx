"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Linkedin, Instagram, Facebook, Twitter, Youtube, Rocket } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";
import { SITE_NAME } from "@/config/site";

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: readonly { href: string; label: string }[];
}

export function FullScreenMenu({ isOpen, onClose, links }: FullScreenMenuProps) {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] h-screen w-full bg-[#05070a] transition-all duration-500 ease-in-out",
                isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
            )}
        >
            <div className="relative h-full w-full flex flex-col md:flex-row">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10 cursor-target"
                    aria-label="Close menu"
                >
                    <X className="h-8 w-8" />
                </button>

                {/* Column 1: Identity & Socials (Desktop Only) */}
                <div className="hidden lg:flex w-1/4 h-full border-r border-white/5 flex-col justify-between p-12">
                    <div className="flex items-center gap-2 text-white">
                        <Rocket className="h-8 w-8 text-[#c0ff00]" />
                        <span className="text-xl font-bold tracking-tight uppercase">{SITE_NAME}</span>
                    </div>

                    <div className="space-y-8">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Follow Us</p>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: "Linkedin", icon: Linkedin },
                                { label: "Instagram", icon: Instagram },
                                { label: "Facebook", icon: Facebook },
                                { label: "Twitter", icon: Twitter },
                                { label: "Youtube", icon: Youtube },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="group flex items-center gap-3 text-white/60 hover:text-[#c0ff00] transition-colors font-semibold"
                                >
                                    <social.icon className="h-4 w-4" />
                                    <span className="uppercase tracking-widest text-sm">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="opacity-10 grayscale invert h-20 w-32 flex items-center justify-center">
                        {/* Placeholder for world map or decorative icon */}
                        <div className="border border-white/20 h-full w-full rounded" />
                    </div>
                </div>

                {/* Column 2: Main Navigation */}
                <div className="flex-1 h-full flex flex-col justify-center px-8 md:px-20 lg:px-24">
                    <nav className="w-full max-w-2xl">
                        <ul className="flex flex-col">
                            {links.map((link, i) => (
                                <li key={link.href} className="group border-b border-white/5 last:border-none">
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="block py-6 md:py-8 lg:py-10 text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter hover:text-[#c0ff00] transition-all duration-300 hover:pl-6"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Column 3: Contact Info (Desktop Only) */}
                <div className="hidden lg:flex w-1/4 h-full border-l border-[#c0ff00]/30 flex-col justify-center p-12 bg-white/[0.02]">
                    <div className="space-y-12">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-6">Get in touch</p>
                            <div className="space-y-8">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Phone</p>
                                    <p className="text-lg font-bold text-white">+91 000 000 0000</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Email</p>
                                    <p className="text-lg font-bold text-white">hello@scaleopedia.com</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Address</p>
                                    <p className="text-sm font-medium text-white/60 leading-relaxed">
                                        Noida, Uttar Pradesh<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
