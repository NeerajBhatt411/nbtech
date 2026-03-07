import { AboutHero, AboutMission, AboutProcess, AboutArchitects, AboutCTA } from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Scaleopedia",
    description: "Learn more about the visionaries behind the Scaleopedia engine.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutMission />
            <AboutProcess />
            <AboutArchitects />
            <AboutCTA />
        </>
    );
}
