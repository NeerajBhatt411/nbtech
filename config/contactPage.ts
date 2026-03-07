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
            { id: "phone-1", icon: "phone", label: "CALL US", value: "76988 10025", href: "tel:+917698810025" },
            { id: "phone-2", icon: "phone", label: "CALL US", value: "87569 26692", href: "tel:+918756926692" },
            { id: "hq", icon: "map-pin", label: "VISIT HQ", value: "Noida, Uttar Pradesh" }
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
