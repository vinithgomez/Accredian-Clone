import type {
  CompanyLogo,
  FooterLinkColumn,
  NavLink,
  ProcessStep,
  Program,
  Stat,
  Testimonial,
  ValueProp,
} from "./types";

export const SITE_NAME = "Accredian Enterprise";

export const NAV_LINKS: NavLink[] = [
  { label: "Programs", href: "#programs" },
  { label: "Enterprise Solutions", href: "#why-choose-us" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: Stat[] = [
  { value: "500+", label: "Enterprises trained" },
  { value: "120K+", label: "Professionals upskilled" },
  { value: "94%", label: "Program completion rate" },
];

export const TRUSTED_BY_LOGOS: CompanyLogo[] = [
  { name: "Nexora" },
  { name: "Vantify" },
  { name: "Bluepeak" },
  { name: "Orbitel" },
  { name: "Meridian" },
  { name: "Corestack" },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "layout-template",
    title: "Custom Curriculum",
    description:
      "Programs co-designed with your L&D team and mapped to the skills gaps that matter most to your business.",
  },
  {
    icon: "user-check",
    title: "Dedicated Success Manager",
    description:
      "A single point of contact who owns onboarding, engagement, and reporting for the length of the engagement.",
  },
  {
    icon: "badge-check",
    title: "Industry Certification",
    description:
      "Every cohort ends in an assessed, shareable certification recognized by hiring managers and peers.",
  },
  {
    icon: "calendar-clock",
    title: "Flexible Cohorts",
    description:
      "Live, weekend, or self-paced delivery scheduled around your team's calendar, not the other way around.",
  },
];

export const PROGRAMS: Program[] = [
  {
    title: "Data Science & Analytics",
    description:
      "From statistics fundamentals to production ML pipelines, built for teams shipping data-driven decisions.",
    duration: "12 weeks",
    format: "Cohort-based",
    href: "#",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Applied deep learning, LLM tooling, and MLOps practices for engineering and product teams.",
    duration: "14 weeks",
    format: "Cohort-based",
    href: "#",
  },
  {
    title: "Product Management",
    description:
      "Discovery, roadmapping, and stakeholder alignment frameworks for first-time and growing PM orgs.",
    duration: "10 weeks",
    format: "Live + self-paced",
    href: "#",
  },
  {
    title: "Leadership & Management",
    description:
      "People-management fundamentals for engineers and ICs stepping into their first leadership role.",
    duration: "8 weeks",
    format: "Live cohort",
    href: "#",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We learn about your team's skill gaps, timelines, and outcomes you're hiring the program to deliver.",
  },
  {
    step: 2,
    title: "Custom Curriculum",
    description:
      "Our academic team maps a syllabus to your goals, pulling from our program library or building net-new modules.",
  },
  {
    step: 3,
    title: "Cohort Delivery",
    description:
      "Live sessions, project work, and mentorship delivered on a cadence that fits around your team's day job.",
  },
  {
    step: 4,
    title: "Certification & Outcomes",
    description:
      "Assessed certification plus a reporting dashboard so you can track completion and skill lift over time.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The cohort format meant our engineers kept shipping while they learned. Completion rates were the highest we've seen from any vendor.",
    name: "Priya Nair",
    designation: "Head of Learning & Development",
    company: "Nexora Technologies",
  },
  {
    quote:
      "Having a dedicated success manager made a nine-month rollout across three regions feel like working with an internal team.",
    name: "Daniel Ortiz",
    designation: "VP of People",
    company: "Vantify",
  },
  {
    quote:
      "The curriculum was rebuilt around our actual tech stack instead of a generic syllabus. That's the difference we needed.",
    name: "Meera Iyer",
    designation: "Director of Engineering",
    company: "Bluepeak Systems",
  },
];

export const IMPACT_STATS: Stat[] = [
  { value: "120K+", label: "Learners trained" },
  { value: "500+", label: "Companies partnered" },
  { value: "94%", label: "Completion rate" },
  { value: "4.8/5", label: "Average rating" },
];

export const FOOTER_LINKS: FooterLinkColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Data Science & Analytics", href: "#programs" },
      { label: "AI & Machine Learning", href: "#programs" },
      { label: "Product Management", href: "#programs" },
      { label: "Leadership & Management", href: "#programs" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#testimonials" },
      { label: "Webinars", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];
