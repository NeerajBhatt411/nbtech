import { Hero } from "@/components/home";
import { InfiniteCarousel, RevealOnScroll } from "@/components/ui";
import { KeyDetails, ServicesSection } from "@/components/sections";
import { CAROUSEL_ITEMS } from "@/config/carousel";
import { KEY_DETAILS } from "@/config/stats";
import { SERVICES_SECTION } from "@/config/services";

export default function Home() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <section className="w-full border-y border-border/30 bg-background py-6">
          <InfiniteCarousel items={CAROUSEL_ITEMS} />
        </section>
      </RevealOnScroll>
      <KeyDetails items={KEY_DETAILS} />
      <ServicesSection
        title={SERVICES_SECTION.title}
        subtitle={SERVICES_SECTION.subtitle}
        items={SERVICES_SECTION.items}
      />
    </>
  );
}
