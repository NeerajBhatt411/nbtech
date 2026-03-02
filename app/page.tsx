import { Hero } from "@/components/home";
import { InfiniteCarousel, RevealOnScroll } from "@/components/ui";
import { CtaSection, IndustriesSection, KeyDetails, LeadershipSection, ServicesSection } from "@/components/sections";
import { CAROUSEL_ITEMS } from "@/config/carousel";
import { INDUSTRIES_SECTION } from "@/config/industries";
import { KEY_DETAILS } from "@/config/stats";
import { LEADERSHIP_SECTION } from "@/config/leadership";
import { SERVICES_SECTION } from "@/config/services";
import { HOMEPAGE_CTA } from "@/config/cta";

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
      <IndustriesSection
        title={INDUSTRIES_SECTION.title}
        subtitle={INDUSTRIES_SECTION.subtitle}
        cta={INDUSTRIES_SECTION.cta}
        items={INDUSTRIES_SECTION.items}
      />
      <LeadershipSection
        tag={LEADERSHIP_SECTION.tag}
        title={LEADERSHIP_SECTION.title}
        intro={LEADERSHIP_SECTION.intro}
        features={LEADERSHIP_SECTION.features}
        team={LEADERSHIP_SECTION.team}
      />
      <CtaSection
        eyebrow={HOMEPAGE_CTA.eyebrow}
        title={HOMEPAGE_CTA.title}
        description={HOMEPAGE_CTA.description}
        primaryAction={HOMEPAGE_CTA.primary}
        secondaryAction={HOMEPAGE_CTA.secondary}
      />
    </>
  );
}
