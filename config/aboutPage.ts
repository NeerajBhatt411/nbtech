import { LEADERSHIP_SECTION } from "@/config/leadership";

export const ABOUT_PAGE_DATA = {
    hero: {
        badge: "ABOUT US",
        titleBefore: "Building the Future of",
        titleHighlight: "Scalable Tech",
        description:
            "We are Scaleopedia. We engineer robust digital infrastructure for global enterprises, turning complex challenges into seamless, infinite growth opportunities.",
    },
    mission: [
        {
            id: "mission",
            icon: "flag",
            title: "Our Mission",
            description:
                "To engineer robust digital infrastructure that stands the test of time. We believe in code that scales, systems that adapt, and technology that drives meaningful progress for humanity.",
        },
        {
            id: "vision",
            icon: "map-pin",
            title: "Our Vision",
            description:
                "Empowering global enterprises through seamless, infinite scalability. We envision a world where technology is never the bottleneck, but the catalyst for extended potential.",
        },
    ],
    process: {
        title: "How We Build",
        subtitle: "From concept to global scale, our process is designed for precision and velocity.",
        steps: [
            { id: "1", icon: "search", title: "Discover", description: "Analyzing needs & identifying constraints." },
            { id: "2", icon: "git-branch", title: "Plan", description: "Strategic roadmapping & architecture." },
            { id: "3", icon: "pen-tool", title: "Design", description: "UI/UX framing for intuitive flows." },
            { id: "4", icon: "code", title: "Develop", description: "Agile engineering & rigorous testing." },
            { id: "5", icon: "rocket", title: "Deploy", description: "Seamless launch & integration." },
            { id: "6", icon: "life-buoy", title: "Support", description: "24/7 monitoring & scaling." },
        ]
    },
    architects: {
        title: "Meet the Architects",
        subtitle: "The visionary minds behind the Scaleopedia engine.",
        team: LEADERSHIP_SECTION.team,
    },
    cta: {
        title: "Ready to Scale?",
        description: "Join the industry leaders who trust Scaleopedia with their most critical digital infrastructure.",
        primaryLabel: "Start Your Project",
        primaryHref: "/contact",
        secondaryLabel: "Contact Sales",
        secondaryHref: "/contact",
    }
} as const;
