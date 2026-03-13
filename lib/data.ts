import { Award, Building2, Compass, FileCheck, Globe, GraduationCap, PenTool, Plane, Users } from "lucide-react";

export const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Study in India", path: "/study-india" },
  { name: "Study Abroad", path: "/study-abroad" },
  { name: "Services", path: "/services" },
  { name: "Other Platforms", path: "/universities" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    title: "Career Counseling",
    icon: Compass,
    highlight: "Personalized Guidance",
    description:
      "One-on-one counseling sessions to identify the right career path based on your academic background, interests, and future goals.",
    features: [
      "Career roadmap planning",
      "Course and specialization guidance",
      "Skill and aptitude assessment",
    ],
  },

  {
    title: "University Selection",
    icon: Building2,
    highlight: "Top Universities",
    description:
      "Shortlisting the most suitable universities and programs worldwide based on your academic profile and budget.",
    features: [
      "University comparison",
      "Admission probability analysis",
      "Program recommendations",
    ],
  },

  {
    title: "Application Assistance",
    icon: FileCheck,
    highlight: "Complete Support",
    description:
      "End-to-end assistance in preparing, reviewing, and submitting error-free university applications.",
    features: [
      "Application form support",
      "Document preparation",
      "Submission tracking",
    ],
  },

  {
    title: "Visa Processing",
    icon: Globe,
    highlight: "Visa Success",
    description:
      "Expert guidance on student visa documentation, interview preparation, and submission.",
    features: [
      "Visa documentation checklist",
      "Mock visa interviews",
      "Application filing support",
    ],
  },

  {
    title: "Scholarship Guidance",
    icon: Award,
    highlight: "Financial Support",
    description:
      "Helping students secure scholarships, grants, and financial aid opportunities.",
    features: [
      "Scholarship search",
      "Eligibility evaluation",
      "Application guidance",
    ],
  },

  {
    title: "SOP & LOR Assistance",
    icon: PenTool,
    highlight: "Strong Applications",
    description:
      "Crafting impactful Statements of Purpose and Letters of Recommendation that stand out.",
    features: [
      "Professional SOP writing",
      "LOR structure guidance",
      "Application storytelling",
    ],
  },

  {
    title: "Pre-Departure Support",
    icon: Plane,
    highlight: "Travel Preparation",
    description:
      "Complete support before departure including accommodation, travel planning, and cultural orientation.",
    features: [
      "Accommodation assistance",
      "Travel checklist",
      "Student orientation",
    ],
  },

  {
    title: "Alumni & Networking",
    icon: Users,
    highlight: "Global Community",
    description:
      "Connect with alumni and student communities abroad to build strong networks.",
    features: [
      "Student mentorship",
      "Alumni guidance",
      "Community support",
    ],
  },

  {
    title: "Test Preparation",
    icon: GraduationCap,
    highlight: "Exam Readiness",
    description:
      "Guidance and preparation strategies for IELTS, TOEFL, GRE, GMAT, and other entrance exams.",
    features: [
      "Study materials",
      "Mock tests",
      "Exam strategies",
    ],
  },
];

export const COUNTRIES = [
  { name: "USA", description: "Home to Ivy League institutions and cutting-edge tech.", image: "/flags/usa.svg" },
  { name: "UK", description: "Rich academic heritage with fast-tracked master's programs.", image: "/flags/uk.svg" },
  { name: "Canada", description: "Welcoming policies, great ROI, and top-tier research.", image: "/flags/canada.svg" },
  { name: "Australia", description: "High quality of life and world-renowned degrees.", image: "/flags/australia.svg" },
  { name: "Germany", description: "Tuition-free public universities and strong engineering programs.", image: "/flags/germany.svg" },
];

export const UNIVERSITIES = [
  { name: "Harvard University", country: "USA", description: "Ivy League research university in Cambridge, Massachusetts." },
  { name: "University of Oxford", country: "UK", description: "The oldest university in the English-speaking world." },
  { name: "University of Toronto", country: "Canada", description: "Global leader in research and teaching." },
  { name: "University of Melbourne", country: "Australia", description: "Top-ranked university in Australia." },
  { name: "Technical University of Munich", country: "Germany", description: "Leading engineering and science university." },
  { name: "Indian Institute of Technology (IIT)", country: "India", description: "Premier engineering institute in India." },
  { name: "All India Institute of Medical Sciences (AIIMS)", country: "India", description: "Top medical college in India." },
];

export const STATS = [
  { label: "Students Placed", value: "10,000+" },
  { label: "Countries", value: "15+" },
  { label: "Universities", value: "500+" },
  { label: "Success Rate", value: "98%" },
];
