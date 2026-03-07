import Image from "next/image";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Globe } from "lucide-react";
import { CONTACT_PAGE_DATA } from "@/config/contactPage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "mail": Mail,
    "phone": Phone,
    "map-pin": MapPin,
};

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "twitter": Twitter,
    "linkedin": Linkedin,
    "github": Github,
};

export function ContactInfo() {
    const { info, map } = CONTACT_PAGE_DATA;
    const GlobeIcon = Globe;

    return (
        <div className="flex flex-col gap-6 lg:gap-8 h-full">
            {/* Essential Info Card */}
            <RevealOnScroll className="h-full">
                <div className="flex flex-col h-full rounded-2xl border border-border/40 bg-[#1a2130] p-6 sm:p-8 shadow-2xl">
                    <h2 className="mb-8 text-xl font-bold text-white">
                        {info.title}
                    </h2>

                    <ul className="flex flex-col gap-8 mb-10">
                        {info.items.map(item => {
                            const contactItem = item as { id: string; icon: string; label: string; value: string; href?: string };
                            const Icon = ICONS[contactItem.icon];
                            return (
                                <li key={contactItem.id} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent border border-accent/20">
                                        {Icon && <Icon className="h-5 w-5" />}
                                    </div>
                                    <div className="flex flex-col mt-0.5">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1">
                                            {contactItem.label}
                                        </span>
                                        {contactItem.href ? (
                                            <a href={contactItem.href} className="text-[15px] font-medium text-white hover:text-accent transition-colors">
                                                {contactItem.value}
                                            </a>
                                        ) : (
                                            <p className="text-[15px] font-medium text-white whitespace-pre-line leading-relaxed">
                                                {contactItem.value}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-auto pt-8 border-t border-white/10">
                        <span className="block text-[13px] font-semibold text-white/90 mb-4">
                            {info.social.title}
                        </span>
                        <div className="flex items-center gap-3">
                            {info.social.links.map(link => {
                                const SocialIcon = SOCIAL_ICONS[link.icon];
                                return (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-white/70 transition-colors hover:border-accent/40 hover:bg-black/40 hover:text-white"
                                    >
                                        {SocialIcon && <SocialIcon className="h-4 w-4" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Map Image Card */}
            <RevealOnScroll className="h-full max-h-[240px]">
                <div className="relative h-full min-h-[160px] md:min-h-[200px] w-full overflow-hidden rounded-2xl border border-border/40 bg-[#131b26] shadow-2xl">
                    <Image
                        src={map.imageSrc}
                        alt={map.imageAlt}
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
                        <GlobeIcon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-semibold text-white/90">
                            {map.label}
                        </span>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
}
