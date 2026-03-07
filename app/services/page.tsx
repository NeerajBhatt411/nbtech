import { ServicesHero, ServicesList } from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Scaleopedia",
    description: "Comprehensive IT services designed to scale with your business needs. From mobile app building to digital marketing.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesList />
        </>
    );
}
