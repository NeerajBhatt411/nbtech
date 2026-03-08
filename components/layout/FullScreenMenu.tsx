"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Linkedin, Instagram, Facebook, Twitter, Youtube, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/config/site";

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: readonly { href: string; label: string }[];
}

export function FullScreenMenu({ isOpen, onClose, links }: FullScreenMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLLIElement | null)[]>([]);
    const col1Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    // GSAP Animation
    useEffect(() => {
        if (isOpen) {
            // Main Background Slide
            gsap.to(menuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power4.out",
                visibility: "visible",
            });

            // Links Stagger
            gsap.fromTo(
                linksRef.current.filter(Boolean),
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power3.out",
                    delay: 0.3,
                }
            );

            // Side Columns Animation (Desktop)
            gsap.fromTo(
                [col1Ref.current, col3Ref.current],
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power2.out" }
            );
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power4.in",
                onComplete: () => {
                    gsap.set(menuRef.current, { visibility: "hidden" });
                },
            });
        }
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
            ref={menuRef}
            className="fixed inset-0 z-[100] h-screen w-full bg-[#05070a] shadow-2xl translate-x-full opacity-0 invisible overflow-y-auto md:overflow-hidden"
        >
            <div className="relative min-h-full w-full flex flex-col md:flex-row">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
                    aria-label="Close menu"
                >
                    <X className="h-6 w-6 md:h-8 md:w-8" />
                </button>

                {/* Column 1: Identity & Socials */}
                <div
                    ref={col1Ref}
                    className="w-full md:w-1/4 md:h-full border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between p-8 md:p-12 order-2 md:order-1"
                >
                    <div className="hidden md:flex items-center gap-2 text-white">
                        <Rocket className="h-8 w-8 text-[#c0ff00]" />
                        <span className="text-xl font-bold tracking-tight uppercase">{SITE_NAME}</span>
                    </div>

                    <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/40">Follow Us</p>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                            {[
                                { label: "Linkedin", icon: Linkedin },
                                { label: "Instagram", icon: Instagram },
                                { label: "Facebook", icon: Facebook },
                                { label: "Twitter", icon: Twitter },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="group flex items-center gap-3 text-white/60 hover:text-[#c0ff00] transition-colors font-semibold"
                                >
                                    <social.icon className="h-4 w-4" />
                                    <span className="uppercase tracking-widest text-[10px] md:text-sm">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex opacity-10 grayscale invert h-20 w-32 items-center justify-center mt-12">
                        <div className="border border-white/20 h-full w-full rounded" />
                    </div>
                </div>

                {/* Column 2: Main Navigation */}
                <div className="flex-1 min-h-[60vh] md:min-h-0 md:h-full flex flex-col justify-center px-6 md:px-20 lg:px-24 py-20 md:py-0 order-1 md:order-2">
                    <nav className="w-full max-w-2xl">
                        <ul className="flex flex-col">
                            {links.map((link, i) => (
                                <li
                                    key={link.href}
                                    ref={(el) => { linksRef.current[i] = el; }}
                                    className="group border-b border-white/5 last:border-none"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="block py-4 md:py-8 lg:py-10 text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter hover:text-[#c0ff00] transition-all duration-300 hover:pl-4 md:hover:pl-6"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Column 3: Contact Info */}
                <div
                    ref={col3Ref}
                    className="w-full md:w-1/4 md:h-full border-t md:border-t-0 md:border-l border-[#c0ff00]/30 flex flex-col justify-center p-8 md:p-12 bg-white/[0.02] order-3"
                >
                    <div className="space-y-8 md:space-y-12">
                        <div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-4 md:mb-6">Get in touch</p>
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-1">
                                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Phone</p>
                                    <p className="text-base md:text-lg font-bold text-white tracking-tight">+91 000 000 0000</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Email</p>
                                    <p className="text-base md:text-lg font-bold text-white tracking-tight shrink-0 overflow-hidden text-ellipsis">hello@scaleopedia.com</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-[#c0ff00] tracking-widest">Address</p>
                                    <p className="text-xs md:text-sm font-medium text-white/60 leading-relaxed">
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
