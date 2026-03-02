/**
 * Services section content. iconKey maps to Lucide icon in the section component.
 */
export const SERVICES_SECTION = {
  title: { default: "Comprehensive", highlight: "IT Services" },
  subtitle:
    "End-to-end development services designed to scale with your business needs, from initial concept to deployment and maintenance.",
  items: [
    {
      iconKey: "code" as const,
      title: "Web Development",
      description:
        "High-performance, responsive web applications built with modern frameworks like React, Next.js, and Vue.",
    },
    {
      iconKey: "smartphone" as const,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile experiences for iOS and Android using Flutter and React Native.",
    },
    {
      iconKey: "cloud" as const,
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migration, and management on AWS, Azure, and Google Cloud Platform.",
    },
    {
      iconKey: "pen" as const,
      title: "UI/UX Design",
      description:
        "User-centric design systems, prototyping, and interfaces that drive engagement and conversion.",
    },
    {
      iconKey: "container" as const,
      title: "DevOps",
      description:
        "Streamlined CI/CD pipelines, containerization with Docker/Kubernetes, and infrastructure as code.",
    },
    {
      iconKey: "lightbulb" as const,
      title: "Consultancy",
      description:
        "Strategic technology consulting to guide your digital transformation and software roadmap.",
    },
  ],
} as const;

export type ServiceIconKey = (typeof SERVICES_SECTION.items)[number]["iconKey"];
