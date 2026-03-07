/**
 * Leadership section content. featureIconKey maps to Lucide icon.
 */
export const LEADERSHIP_SECTION = {
  tag: "LEADERSHIP",
  title: "Visionaries Behind The Scale",
  intro:
    "At Scaleopedia, we bridge the gap between cutting-edge technology and sustainable business growth. Our leadership team brings decades of combined experience in software engineering, product development, and strategic management.",
  features: [
    {
      iconKey: "check" as const,
      title: "Proven Track Record",
      description:
        "Successfully delivered over 10+ scalable solutions for Fortune 500 companies.",
    },
    {
      iconKey: "users" as const,
      title: "Expert Team",
      description:
        "A dedicated team of senior developers, architects, and designers.",
    },
  ],
  team: [
    {
      id: "neeraj-bhatt",
      name: "Neeraj Bhatt",
      title: "Co-Founder",
      description: "Full-stack developer with expertise in Flutter, Kotlin, React, Node.js, and WordPress.",
      imageSrc: "/images/neeraj.png",
      placeholderLabel: "CEO",
    },
    {
      id: "aditya",
      name: "Aditya",
      title: "Co-Founder",
      description: "DevOps engineer specializing in AWS, CI/CD, Docker, and Kubernetes.",
      imageSrc: "/images/aditya.jpg",
      placeholderLabel: "CTO",
    },
  ],
} as const;

export type LeadershipFeatureIconKey =
  (typeof LEADERSHIP_SECTION.features)[number]["iconKey"];
