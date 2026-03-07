export const SERVICES_PAGE_DATA = {
    header: {
        badge: "PREMIUM DIGITAL SERVICES",
        title: {
            default: "Scalable Solutions for",
            highlight: "Modern Businesses",
        },
        subtitle:
            "Empowering your digital transformation with premium engineering, cutting-edge design, and strategic innovation.",
    },
    services: [
        {
            id: "app-development",
            category: "MOBILE APP BUILDING",
            iconKey: "smartphone",
            title: "App Development",
            description:
                "We build high-performance mobile applications tailored to your business needs, ensuring scalability and a seamless user experience across all devices, from native iOS to cross-platform solutions.",
            points: [
                "iOS & Android (Swift & UI native App)",
                "React Native & Flutter Solutions",
                "Enterprise Grade Security & Performance",
                "Custom UI/UX, Native Libraries",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/app_dev.png",
            imageAlt: "App Development Mobile Mockup",
        },
        {
            id: "web-development",
            category: "WEB DEVELOPMENT",
            iconKey: "code",
            title: "Web Development",
            description:
                "Crafting responsive, high-performance web applications using the latest technologies. We focus on speed, SEO optimization, and robust architecture that scales as your user base grows.",
            points: [
                "Frontend Development (React, Vue.js)",
                "Progressive Web Apps (PWA)",
                "CMS Development (WordPress, Webflow)",
                "API Integration & Microservices",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/web_dev.png",
            imageAlt: "Web Development Graphics",
        },
        {
            id: "ui-ux",
            category: "PRODUCT DESIGN",
            iconKey: "pen",
            title: "UI/UX Design",
            description:
                "We create intuitive and engaging user interfaces that delight users. Our process involves deep user research, wireframing, and interactive prototyping to ensure product market fit.",
            points: [
                "User Research & Personas",
                "Wireframing & Prototyping",
                "Design Systems & Style Guides",
                "Interactive Design & Animation",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/ui_ux.png",
            imageAlt: "UI/UX Design Concept",
        },
        {
            id: "crm-integration",
            category: "BUSINESS AUTOMATION",
            iconKey: "database",
            title: "CRM Integration",
            description:
                "Streamline your customer relationships with powerful CRM integrations. We help you automate workflows, and gain actionable insights to drive sales growth.",
            points: [
                "Salesforce & HubSpot Implementation",
                "Custom Field Development",
                "Workflow Automation & Logic",
                "Data Migration & Synchronization",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/crm_system.png",
            imageAlt: "CRM Integration Dashboard",
        },
        {
            id: "seo-marketing",
            category: "GROWTH",
            iconKey: "trending",
            title: "SEO & Digital Marketing",
            description:
                "Drive targeted traffic and maximize ROI with our data-driven SEO strategies, ensuring your brand is visible to the right audience at the right time.",
            points: [
                "Technical SEO Audits",
                "Content Strategy & Creation",
                "Conversion Rate Optimization (CRO)",
                "Analytics & Performance Reports",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/seo_marketing.png",
            imageAlt: "SEO and Digital Marketing Chart",
        },
        {
            id: "it-solutions",
            category: "INFRASTRUCTURE",
            iconKey: "server",
            title: "IT Solutions",
            description:
                "Comprehensive IT services that build a robust foundation for your business operations. Secure, scalable, and tailored to your specific needs.",
            points: [
                "Cloud Infrastructure (AWS, Azure, GCP)",
                "Cybersecurity & Compliance",
                "Managed IT Services",
                "IT Strategy Consulting",
            ],
            cta: {
                label: "Get Started",
                href: "/#contact",
            },
            image: "/images/services/it_solutions.png",
            imageAlt: "IT Infrastructure Setup",
        },
    ],
} as const;

export type DetailedServiceIconKey = (typeof SERVICES_PAGE_DATA.services)[number]["iconKey"];
