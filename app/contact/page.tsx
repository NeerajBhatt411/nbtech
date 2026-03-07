import { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo } from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact Us - Scaleopedia",
    description: "Tell us about your project challenges and we'll engineer the solution.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <section className="bg-background px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-6 lg:gap-8 items-start">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </>
    );
}
