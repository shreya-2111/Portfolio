export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  roleOrStackLabel: string;
  roleOrStackValue: string;
  deliverableOrPipelineLabel: string;
  deliverableOrPipelineValue: string;
  technologies: string[];
  url: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  alignRight?: boolean;
  isConfigurableUrl?: boolean;
}

export interface ToolkitCategory {
  id: string;
  code: string;
  title: string;
  skills: string[];
  caption: string;
}

export interface AcademicItem {
  status: string;
  title: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  badge: string;
  duration: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SHREYA RAVAL",
    role: "Full-Stack Developer",
    location: "Ahmedabad, India",
    email: "shreyaraval2111@gmail.com",
    avatar: "/images/shreya-avatar.jpg",
    photo: "/images/shreya-profile.jpg",
    resumeUrl: "/Shreya_Raval_Resume.pdf",
    copyrightYear: "2026",
    socials: {
      github: "https://github.com/shreya-2111",
      linkedin: "https://www.linkedin.com/in/shreya-raval-a5a4b1326/",
      email: "mailto:shreyaraval2111@gmail.com?subject=Collaboration%20Inquiry%20%E2%80%94%20Portfolio",
    },
  },

  navigation: [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "STACK", href: "#stack" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ] as NavItem[],

  hero: {
    eyebrow: "01 // FULL-STACK DEVELOPER",
    availability: "AVAILABLE FOR WORK",
    headingLines: [
      { text: "I BUILD DIGITAL", isAccent: false },
      { text: "PRODUCTS", isAccent: true, suffix: " THAT" },
      { text: "PEOPLE", isAccent: false },
      { text: "REMEMBER.", isAccent: false },
    ],
    description:
      "Full-Stack Developer focused on building thoughtful web applications, modern interfaces, and real-world digital products that bridge architectural rigor with editorial elegance.",
    primaryCta: {
      label: "VIEW MY WORK ↓",
      href: "#work",
    },
    secondaryCta: {
      label: "DOWNLOAD RESUME",
      href: "/Shreya_Raval_Resume.pdf",
    },
    tickerItems: [
      "REACT.JS",
      "NEXT.JS",
      "JAVASCRIPT (ES6+)",
      "NODE.JS",
      "PYTHON",
      "DJANGO",
      "FASTAPI",
      "FLUTTER & DART",
    ],
  },

  about: {
    eyebrow: "02 / PHILOSOPHY & ABOUT",
    tag: "[ DISCIPLINE & DEPTH ]",
    heading: "I TURN IDEAS INTO DIGITAL PRODUCTS.",
    description:
      "Full-Stack Developer focused on modern web applications, scalable backend systems, and high-performance digital products that bridge architectural rigor with editorial elegance.",
    manifesto: {
      badge: "✦ DIGITAL CRAFT MANIFESTO",
      quote:
        '"Great software lives at the intersection of architectural discipline and intuitive craft — built with precision, designed to endure."',
      signature: "SR // PRINCIPLE NO. 01",
    },
    metadataGrid: [
      {
        label: "LOCATION",
        value: "AHMEDABAD, INDIA",
        subtext: "",
      },
      {
        label: "CURRENT ACADEMIA",
        value: "MSC IT",
        subtext: "Full Stack Specialization",
      },
      {
        label: "PRIMARY FOCUS",
        value: "FULL-STACK SYSTEMS",
        subtext: "",
      },
      {
        label: "CORE INTERESTS",
        value: "WEB · AI · MOBILE",
        subtext: "Applied Machine Learning",
      },
    ],
  },

  services: {
    eyebrow: "03 // SERVICES",
    tag: "[ DISCIPLINE & CAPABILITIES ]",
    heading: "WHAT I CAN BUILD.",
    description:
      "From polished interfaces to full-stack products, I build digital experiences that combine thoughtful design with practical technology.",
    items: [
      {
        id: "01",
        badge: "1-YEAR PRODUCTION PRACTICE",
        title: "FULL-STACK DEVELOPMENT",
        description:
          "End-to-end web applications with modern frontend, backend, APIs, authentication, databases, and scalable application architecture.",
        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "Django",
          "FastAPI",
          "MySQL",
          "MongoDB",
          "Express.js",
        ],
      },
      {
        id: "02",
        badge: "1-YEAR PRODUCTION PRACTICE",
        title: "FRONTEND DEVELOPMENT",
        description:
          "Responsive, accessible, and interactive interfaces built with modern frontend technologies and a strong focus on performance and user experience.",
        technologies: [
          "React",
          "Next.js",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        id: "03",
        badge: "6-MONTH PRODUCTION PRACTICE",
        title: "UI/UX DESIGN",
        description:
          "Clean and intuitive digital interfaces designed around usability, visual hierarchy, responsive layouts, and consistent design systems.",
        technologies: [
          "Figma",
          "Wireframing",
          "Prototyping",
          "Design Systems",
          "Responsive UI",
        ],
      },
      {
        id: "04",
        badge: "6-MONTH PRODUCTION PRACTICE",
        title: "AI INTEGRATION",
        description:
          "AI-powered features integrated into web applications to create smarter workflows, intelligent experiences, and practical product functionality.",
        technologies: [
          "AI Assistants",
          "Resume Analysis",
          "AI Recommendations",
          "AI-Powered Workflows",
          "LLM Integration",
        ],
      },
      {
        id: "05",
        badge: "6-MONTH PRODUCTION PRACTICE",
        title: "3D WEB DEVELOPMENT",
        description:
          "Interactive and immersive websites combining modern frontend development with 3D visuals and motion.",
        technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
      },
      {
        id: "06",
        badge: "6-MONTH PRODUCTION PRACTICE",
        title: "FLUTTER APP DEVELOPMENT",
        description:
          "Cross-platform mobile applications with responsive interfaces, API integration, Firebase functionality, and practical mobile user experiences.",
        technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
      },
    ] as ServiceItem[],
  },

  projects: {
    eyebrow: "04 / SELECTED WORK",
    tag: "[ VERIFIED PRODUCTION & CONCEPT CASES ]",
    heading: "THINGS I'VE BUILT.",
    items: [
      {
        id: "velour",
        number: "01 // 03",
        category: "E-COMMERCE PLATFORM",
        title: "VELOUR",
        description:
          "A modern luxury fashion e-commerce platform designed to showcase curated collections through a bold, editorial shopping experience with responsive design and interactive product browsing.",
        roleOrStackLabel: "ROLE",
        roleOrStackValue: "Front-end Developer",
        deliverableOrPipelineLabel: "DELIVERABLE",
        deliverableOrPipelineValue: "E-Commerce Web Application",
        technologies: ["React", "JavaScript", "CSS", "Responsive UI"],
        url: "https://shreya-2111.github.io/E-Commerce-Fashion-Store/",
        ctaText: "EXPLORE COLLECTION ↗",
        image: "/images/project-velour.jpg",
        imageAlt: "Velour Luxury Fashion E-Commerce Platform",
        alignRight: false,
      },
      {
        id: "sumit-tirmare",
        number: "02 // 03",
        category: "3D MOTION & VISUAL DESIGN",
        title: "SUMIT TIRMARE",
        description:
          "A cinematic 3D motion design portfolio showcasing product visuals, animation, motion systems, and immersive visual storytelling through modern digital experiences.",
        roleOrStackLabel: "STACK",
        roleOrStackValue: "React + Three.js",
        deliverableOrPipelineLabel: "PIPELINE",
        deliverableOrPipelineValue: "3D Motion & Animation",
        technologies: ["React", "Three.js / WebGL", "Tailwind"],
        url: "https://github.com/shreya-2111", // Configurable destination URL
        ctaText: "VIEW 3D WORK ↗",
        image: "/images/project-sumit-tirmare.jpg",
        imageAlt: "Sumit Tirmare 3D Motion Design Portfolio",
        alignRight: true,
        isConfigurableUrl: true,
      },
      {
        id: "pureplatter",
        number: "03 // 03",
        category: "VEGETARIAN FOOD DELIVERY PLATFORM",
        title: "PUREPLATTER",
        description:
          "A modern vegetarian food-delivery platform designed to help users discover restaurants, explore curated dishes, and manage orders through a clean and responsive experience.",
        roleOrStackLabel: "CAPACITY",
        roleOrStackValue: "Restaurant Discovery",
        deliverableOrPipelineLabel: "SECURITY / WORKFLOW",
        deliverableOrPipelineValue: "Browse → Cart → Checkout",
        technologies: ["React", "JavaScript", "Context API", "LocalStorage"],
        url: "https://github.com/shreya-2111/PurePlatter", // Configurable destination URL
        ctaText: "EXPLORE PLATFORM ↗",
        image: "/images/project-pureplatter.jpg",
        imageAlt: "PurePlatter Vegetarian Food Delivery Platform",
        alignRight: false,
        isConfigurableUrl: true,
      },
    ] as ProjectItem[],
    moreProjectsUrl: "https://github.com/shreya-2111?tab=repositories",
  },

  toolkit: {
    eyebrow: "05 / TOOLKIT",
    tag: "[ STRICTLY REAL-WORLD PRODUCTION COMPETENCIES ]",
    heading: "TOOLS I WORK WITH.",
    categories: [
      {
        id: "frontend",
        code: "01 // CLIENT TIER",
        title: "FRONTEND",
        skills: [
          "React.js",
          "Next.js",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "HTML5",
          "Semantic CSS",
          "Bootstrap",
        ],
        caption: "COMPONENT ARCHITECTURE & 60FPS MICRO-INTERACTIONS",
      },
      {
        id: "backend",
        code: "02 // SERVER ARCHITECTURE",
        title: "BACKEND",
        skills: [
          "Node.js",
          "Express.js",
          "Python",
          "Django",
          "FastAPI",
          "REST APIs",
        ],
        caption: "RESTFUL ENDPOINTS & HIGH-THROUGHPUT HANDLERS",
      },
      {
        id: "datalayer",
        code: "03 // PERSISTENCE",
        title: "DATA LAYER",
        skills: [
          "MySQL",
          "MongoDB",
          "Relational Schemas",
          "Query Optimization",
        ],
        caption: "RELATIONAL INTEGRITY, INDEXING & INDEX PROFILING",
      },
      {
        id: "mobile",
        code: "04 // CROSS-PLATFORM",
        title: "MOBILE APP DEV",
        skills: [
          "Flutter",
          "Dart",
          "State Management",
          "Native Bridging",
        ],
        caption: "SINGLE CODEBASE IOS & ANDROID COMPILATION",
      },
      {
        id: "tools",
        code: "05 // WORKFLOW & INFRASTRUCTURE",
        title: "TOOLS & ECOSYSTEM",
        skills: [
          "Git",
          "GitHub",
          "Postman",
          "Figma",
          "Vercel",
          "VS Code",
          "CI/CD Workflows",
        ],
        caption:
          "VERSION CONTROL, DESIGN TOKENS & AUTOMATED PIPELINE INTEGRATION",
      },
    ] as ToolkitCategory[],
  },

  accreditation: {
    eyebrow: "06 // ACCREDITATION & PRACTICE",
    tag: "[ ACADEMIC TRAJECTORY & INDUSTRY PRACTICE ]",
    heading: "FOUNDATION & EXPERIENCE.",
    academics: [
      {
        status: "IN PROGRESS",
        title: "MASTER'S DEGREE (MSC IT)",
        institution:
          "Gujarat Law Society University (GLS University), Ahmedabad",
        description:
          "Specialization in Full Stack Development, distributed software architecture, advanced algorithms, and cloud systems.",
      },
      {
        status: "GRADUATED",
        title: "BACHELOR'S DEGREE (BCA)",
        institution:
          "Gujarat Law Society University (GLS University), Ahmedabad",
        description:
          "Bachelor of Computer Applications emphasizing core software engineering, data structures, and database management.",
      },
    ] as AcademicItem[],
    experience: {
      badge: "INDUSTRY INTERNSHIP",
      duration: "6 MONTHS",
      role: "FLUTTER DEVELOPER INTERN",
      company: "Augmented Systems LLP",
      location: "Ahmedabad, Gujarat",
      responsibilities: [
        "Developed and optimized cross-platform mobile applications using Flutter and Dart.",
        "Worked on responsive and user-friendly Flutter UI development.",
        "Collaborated with design and backend teams to integrate features and improve application workflows.",
        "Worked with REST APIs and Firebase-based functionality.",
        "Identified and fixed bugs to improve application stability and performance.",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    } as ExperienceItem,
  },

  contact: {
    tag: "[ INITIATE COLLABORATION ]",
    heading: "LET'S BUILD SOMETHING GREAT.",
    description:
      "Have an engineering role, consulting project, or architectural challenge you'd like to discuss? My inbox is always open.",
    email: "shreyaraval2111@gmail.com",
    availability: [
      "Remote • Hybrid • On-site",
      "Open to Freelance & Contract Projects",
      "Open to Full-Time & Internship Opportunities",
    ],
  },
};
