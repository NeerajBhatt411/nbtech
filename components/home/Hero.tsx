import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui";
import { HERO_CONTENT } from "@/config/hero";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

export function Hero() {
  const { headline, description, cta } = HERO_CONTENT;

  const services = [
    "MOBILE APP",
    "WEBSITE",
    "UI/UX",
    "RESOURCES",
    "MAINTENANCE",
    "DEVELOPMENT",
    "MANAGED SERVICES",
  ];

  return (
    <section
      className="hero-bg relative flex flex-col justify-center min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background stays as requested */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#007bff"]}
          particleCount={250}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Vertical Labels - Desktop Only */}
      <div className="absolute left-6 top-1/4 hidden lg:block z-20 pointer-events-none opacity-40">
        <p className="text-[10px] tracking-[0.4em] text-white font-bold uppercase origin-left -rotate-90">
          Scaleopedia Technologies
        </p>
      </div>
      <div className="absolute left-6 bottom-1/4 hidden lg:block z-20 pointer-events-none opacity-40">
        <p className="text-[10px] tracking-[0.4em] text-white font-bold uppercase origin-left -rotate-90">
          Support center: +91 000 000 0000
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-40">
        {/* Top Diagonal Arrow Link */}
        <div className="mb-10 lg:mb-16">
          <a
            href="/services"
            className="group inline-flex flex-col gap-1 items-start cursor-target"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
              <span className="uppercase tracking-widest">Research, Document, Design, Development, Deploy, Maintain</span>
              <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </div>
            <div className="h-0.5 w-full bg-white/20 origin-left scale-x-100 group-hover:bg-[#c0ff00] transition-colors" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-end gap-10">
          {/* Main Headline */}
          <div className="flex-1 w-full">
            <h1
              id="hero-heading"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter text-white uppercase text-left"
            >
              {headline.before}
              <div className="flex items-center gap-4 mt-2">
                <span>{headline.after}</span>
                <span className="hidden sm:inline-block px-6 py-2 border-2 border-white/60 rounded-full text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/80 shrink-0">
                  Trusted
                </span>
              </div>
            </h1>
          </div>

          {/* Side Info & Social Proof */}
          <div className="lg:max-w-xs space-y-10">
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={cta.primary.href}
                variant="primary"
                className="bg-[#c0ff00] text-black border-none hover:bg-[#a6db00] text-xs font-bold uppercase tracking-widest px-8 py-4 h-auto"
              >
                {cta.primary.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Left Rating Icon & Down Arrow */}
        <div className="absolute left-6 bottom-40 hidden md:flex items-center gap-8">
          <ArrowDown className="text-white/20 h-20 w-20 stroke-[0.5]" />
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-3xl font-black text-white">
              5 <span className="text-yellow-400">★</span>
            </div>
            <p className="text-[10px] tracking-widest font-bold uppercase text-white/40">Highly Rated On Google</p>
          </div>
        </div>
      </div>

      {/* Marquee Ticker at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee items={services} />
      </div>
    </section>
  );
}
