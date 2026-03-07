import { WorkHero, WorkGrid, WorkCTA } from "@/components/work";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work - Scaleopedia",
    description: "Explore our portfolio of scalable enterprise-grade digital products and CRM solutions.",
};

export default function WorkPage() {
    return (
        <>
            <WorkHero />
            <WorkGrid />
            <WorkCTA />
        </>
    );
}
