export const CONTACT_PAGE_DATA = {
    hero: {
        badge: "CONTACT US",
        titleBefore: "Let's Build Something",
        titleHighlight: "Scalable",
        titleAfter: "Together",
        description: "Tell us about your project challenges and we'll engineer the solution. Our team of experts is ready to transform your vision into reality.",
    },
    form: {
        fields: {
            name: { label: "Full Name", placeholder: "e.g. John Doe", icon: "user" },
            email: { label: "Work Email", placeholder: "e.g. name@company.com", icon: "mail" },
            company: { label: "Company Name", placeholder: "Your Company Ltd.", icon: "building" },
            service: {
                label: "Service Interest",
                placeholder: "Select a service...",
                options: ["Web Platform", "Mobile App", "CRM Solution", "Cloud Infrastructure", "UI/UX Design", "Consulting"]
            },
            details: { label: "Project Details", placeholder: "Tell us about your goals, timeline, and budget..." }
        },
        submitLabel: "Send Message",
    },
    info: {
        title: "Contact Information",
        items: [
            { id: "email", icon: "mail", label: "EMAIL US", value: "hello@scaleopedia.com", href: "mailto:hello@scaleopedia.com" },
            { id: "phone", icon: "phone", label: "CALL US", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
            { id: "hq", icon: "map-pin", label: "VISIT HQ", value: "101 Tech Plaza\nSilicon Valley, CA 94025" }
        ],
        social: {
            title: "Connect with us",
            links: [
                { id: "twitter", icon: "twitter", href: "https://twitter.com/scaleopedia" },
                { id: "linkedin", icon: "linkedin", href: "https://linkedin.com/company/scaleopedia" },
                { id: "github", icon: "github", href: "https://github.com/scaleopedia" },
            ]
        }
    },
    map: {
        imageSrc: "/images/contact/map.png",
        imageAlt: "Global Operations Map",
        label: "Global Operations Center",
        icon: "globe"
    }
} as const;
