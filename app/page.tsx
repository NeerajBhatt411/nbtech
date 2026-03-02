import { Hero } from "@/components/home";
import { InfiniteCarousel } from "@/components/ui";
import { KeyDetails } from "@/components/sections";
import { CAROUSEL_ITEMS } from "@/config/carousel";
import { KEY_DETAILS } from "@/config/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full border-y border-border/30 bg-background py-6">
        <InfiniteCarousel items={CAROUSEL_ITEMS} />
      </section>
      <KeyDetails items={KEY_DETAILS} />
    </>
  );
}
