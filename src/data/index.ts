export interface HeadMeta {
  gaId: string;
  description: string;
  openGraph: {
    basic: {
      title: string;
      type: string;
      url: string;
      image: string;
    };
    image: {
      alt: string;
      width: number;
      height: number;
    };
  };
  twitter: {
    creator: string;
    site: string;
    card: string;
  };
}

export const headMeta: HeadMeta = {
  gaId: "G-QTHTJJDQFP",
  description:
    "Software engineer who specializes in building things for the web",
  openGraph: {
    basic: {
      title:
        "Diogo Cardoso is a software engineer who specializes in building things for the web",
      type: "website",
      url: "https://diogocardoso.dev",
      image: "https://diogocardoso.dev/og.png",
    },
    image: {
      alt: "Diogo Cardoso",
      width: 792,
      height: 382,
    },
  },
  twitter: {
    creator: "@imnip10",
    site: "https://diogocardoso.dev",
    card: "summary_large_image",
  },
};

export interface PersonalInfo {
  name: string;
}

export const personalInfo: PersonalInfo = {
  name: "Diogo Cardoso",
};

export interface Work {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  about: string;
  role: string;
  summary: string;
  description: string[];
  techStackAndTools: string[];
}

export const work: Work[] = [
  {
    name: "Sword Health",
    location: "Portugal",
    startDate: "Apr 2023",
    endDate: "Present",
    role: "Senior Frontend Engineer",
    about:
      "Sword Health is a digital platform that pairs individuals with human and digital therapists for personalized physical therapy, aiming to alleviate pain and prevent injuries.",
    summary:
      "Engaged in a front-end role with a focus on Research & Development, working on Design Systems, UI components, and the introduction of new features. Enhancing Developer Experience (DX) across teams",
    description: [
      "Developed intuitive web application interfaces and screens, enhancing user engagement and satisfaction",
      "Partnered with the design team to establish a unified design system and component library, enhancing usability and application consistency",
      "Collaborated with various teams to enhance the developer experience across different projects and applications",
      "Established coding standards and best practices, enhancing code quality and consistency across teams",
      "Transitioned multiple projects from Vue 2 to Vue 3, improving performance and Developer Experience (DX)",
    ],
    techStackAndTools: [
      "Vue",
      "TypeScript",
      "Pinia",
      "Figma",
      "Storybook",
      "Vitest",
      "Vue testing utils",
      "Git",
      "Github Actions",
      "Jira",
      "Kanban",
    ],
  },
  {
    name: "Replai",
    location: "Portugal/US",
    startDate: "Jan 2022",
    endDate: "Mar 2023",
    role: "Software Engineer",
    about:
      "The creative intelligence platform fuelling marketing performance - Replai helps mobile companies build successful creative strategies with computer vision AI",
    summary:
      "Full-stack role with emphasis on front-end. Focus on delivering new features and improving the product.",
    description: [
      "Built intuitive user interfaces and screens for the web application, improving user engagement and satisfaction",
      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
      "Collaborated with the design team to create a cohesive design system and components library, improving usability and consistency across the application",
      "Worked closely with the product team to define and prioritize product roadmap and features",
      "Ensured the quality and functionality of the application through the implementation of unit and end-to-end tests",
    ],
    techStackAndTools: [
      "React",
      "Redux",
      "TypeScript",
      "Styled Components",
      "Storybook",
      "React Testing Library",
      "Cypress",
      "NodeJS",
      "AWS",
      "Serverless",
      "PostgreSQL",
      "Git",
      "Agile",
      "Jira",
      "Figma",
    ],
  },
  {
    name: "Hostelworld",
    location: "Portugal",
    startDate: "Apr 2021",
    endDate: "Sep 2021",
    role: "Front-end Developer (Contractor)",
    about:
      "Hostelworld is the world's leading hostel booking platform, with over 35,000 properties in 180 countries.",
    summary:
      'Worked on the <a class="dark:text-indigo-300" href="https://design.hostelworld.com/6d86fdcac/p/688c6f-wanderlust-design-system" target="_blank" rel="noopener">Wanderlust Design System</a>, a design system built with web-components (Stencil) used by multiple Hostelworld applications.',
    description: [
      "Built reusable components for the design system using StencilJS and SASS, improving consistency and efficiency across teams and applications",
      "Created intuitive and user-friendly screens and user interface components for the core web application",
      "Improved the overall look and feel of the application through the use of modern design techniques and tools",
    ],
    techStackAndTools: [
      "StencilJS",
      "SASS",
      "Storybook",
      "Vue",
      "BitBucket",
      "Git",
    ],
  },
  {
    name: "Beeyard",
    location: "Portugal",
    startDate: "Out 2020",
    endDate: "Jan 2022",
    role: "Software Engineer / Tech Lead",
    about:
      "A remote monitoring solution for beehives with the aim of improving productivity in the honey production and pollination operations",
    summary:
      "All-rounder in a pre-seed startup, from developing the product to managing the team.",
    description: [
      "Built intuitive and user-friendly screens and components for the web application, improving user engagement and satisfaction",
      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
      "Created engaging and functional screens and components for the mobile application, improving usability and accessibility on mobile devices",
      "Developed desktop application for hardware configuration, improving the process by 10x resulting in faster production",
      "Led and managed a team of 3 developers and 1 designer, ensuring alignment with the product roadmap and user needs",
      "Implemented a payment and billing system, subscription flow, and user management, streamlining these processes and improving the overall user experience",
      "Set up and maintained continuous integration and delivery pipelines using GitHub Actions and AWS, resulting in faster and more reliable updates and new features for users",
    ],
    techStackAndTools: [
      "Angular",
      "RXJS",
      "TypeScript",
      "SASS",
      "Jest",
      "Cypress",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Electron",
      "React",
      "Ionic",
      "CI/CD",
      "AWS",
      "Git",
      "Stripe",
      "Agile",
      "Jira",
      "Figma",
    ],
  },
  {
    name: "Wegho",
    location: "Portugal",
    startDate: "Apr 2019",
    endDate: "Out 2020",
    role: "Software Engineer",
    about:
      "Digital Transformation of Home Cleaning and Facility Services that allows on-demand booking",
    summary:
      "Full-stack role with emphasis on front-end. My first experience in a startup (seed) environment.",
    description: [
      "Built intuitive and user-friendly screens for the web application, improving user engagement and satisfaction",
      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
      "Built engaging and functional screens and components for the mobile application, improving usability and accessibility on mobile devices",
      "Developed a progressive web application that is optimized for offline use",
      "Implemented a comprehensive payment and billing system, subscription flow, and user management, streamlining these processes and improving the overall user experience",
      "Set up and maintained continuous integration and delivery pipelines, ensuring timely and efficient deployments",
    ],
    techStackAndTools: [
      "ASP.NET",
      "C#",
      "React",
      "JavaScript",
      "SQL Server",
      "PWA",
      "Ionic",
      "Git",
      "Stripe",
      "Agile",
      "Azure DevOps",
      "Sketch",
    ],
  },
];

export interface Education {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const education: Education[] = [
  {
    name: "Integrated Master's Degree in Electrical and Computer Engineering",
    location: "FEUP, Porto, Portugal",
    startDate: "2014",
    endDate: "2023 est.",
    description: [
      'Master thesis: "Framework for collecting and processing georeferencing data"',
    ],
  },
];

export interface Certification {
  name: string;
  provider: string;
  description?: string[];
  url?: string;
}

export const certification: Certification[] = [
  {
    name: "Essential Project Management",
    provider: "APGEI",
    url: "https://apgei.pt/events/essential-project-management-3a-edicao/",
  },
  {
    name: "First Certificate in English (FCE)",
    provider: "Cambridge University Press & Assessment",
  },
];

export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "MATLAB" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "NextJS" },
      { name: "Redux" },
      { name: "Styled Components" },
      { name: "SASS" },
      { name: "Angular" },
      { name: "Vue" },
      { name: "Ionic" },
      { name: "Electron" },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "NodeJS" }, { name: "Express" }, { name: "ASP.NET" }],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
      { name: "Redis" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "Cypress" },
      { name: "Vitest" },
    ],
  },
  {
    category: "Cloud/DevOps",
    skills: [{ name: "CI/CD" }, { name: "AWS" }, { name: "Azure" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "Figma" },
      { name: "Sketch" },
      { name: "Agile" },
      { name: "Jira" },
    ],
  },
];

export interface Project {
  name: string;
  description: string[];
  liveUrl: string;
  repoUrl: string | false;
  techStackAndTools: string[];
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    name: "ChatPDF",
    description: [
      "A web application that allows you to chat with your documents.",
      "Uses embeddings and semantic search to find the most relevant documents for your query.",
    ],
    liveUrl: "https://chatpdf.pt/",
    repoUrl: false,
    techStackAndTools: [
      "TypeScript",
      "NextJS",
      "Tailwind",
      "Langchain",
      "Pinecone",
      "Kinde",
      "Vercel",
    ],
    thumbnail: "/chatpdf.webp",
  },
  {
    name: "Itineraris",
    description: [
      "A web application that allows you to plan your trips and share them with your friends.",
      "Supported by IRIS and TUI",
      "In development...",
    ],
    liveUrl: "https://itineraris.com/",
    repoUrl: false,
    techStackAndTools: [
      "TypeScript",
      "NextJS",
      "ChakraUI",
      "LLM",
      "Redis",
      "Clerk",
      "Vercel",
    ],
    thumbnail: "/itineraris.webp",
  },
  {
    name: "Portfolio",
    description: ["This portfolio website. Built using Astro and Tailwind."],
    liveUrl: "https://diogocardoso.dev",
    repoUrl: "https://github.com/nip10/portfolio-2023",
    techStackAndTools: [
      "Astro",
      "Tailwind",
      "TypeScript",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "/portfolio.webp",
  },
  {
    name: "Fu** you Money",
    description: [
      "An online calculator that helps you calculate how much money you need to save to reach financial independence.",
      'Funny domain name, but it\'s a serious tool. Inspired by <a class="dark:text-indigo-300" href="https://www.youtube.com/watch?v=xdfeXqHFmPI" target="_blank" rel="noopener">John Goodman\'s speech in the movie The Gambler.</a>',
    ],
    liveUrl: "https://fuckyou.money",
    repoUrl: false,
    techStackAndTools: [
      "NextJS",
      "Styled Components",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "/fum.webp",
  },
  {
    name: "Wondermoney",
    description: [
      "A web application that helps you manage your money.",
      "It allows you to create budgets, track your expenses and income, and visualize your financial situation.",
      "Using the open banking standards PSD2, it also allows you to connect your bank account and automatically import your transactions.",
      "Supports the major brokers in Europe, allowing you to automatically import your financial assets portfolio.",
    ],
    liveUrl: "https://wonder.money",
    repoUrl: false,
    techStackAndTools: [
      "NextJS",
      "Styled Components",
      "Express",
      "PostgreSQL",
      "Serverless",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "/wm.webp",
  },
  {
    name: "Euromillions Notifier",
    description: [
      "A web application that notifies you when the Euromillions jackpot reaches a certain amount.",
    ],
    liveUrl: "https://euronotify.diogocardoso.dev/",
    repoUrl: "https://github.com/nip10/euromillions-notifications",
    techStackAndTools: [
      "React",
      "Redux",
      "SCSS",
      "MongoDB",
      "NodeJS",
      "Express",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "/euro.webm",
  },
  {
    name: "URL Shortener",
    description: ["A web application that shortens your urls."],
    liveUrl: "https://sh.diogocardoso.dev/",
    repoUrl: "https://github.com/nip10/url-shortener",
    techStackAndTools: [
      "React",
      "CSS",
      "MongoDB",
      "NodeJS",
      "Express",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "/sh.webm",
  },
  {
    name: "Exchange Rates ECB",
    description: [
      '<a href="https://badge.fury.io/js/exchange-rates-ecb"><img src="https://badge.fury.io/js/exchange-rates-ecb.svg" alt="npm version" height="18"></a>Retrieve Euro foreign exchange reference rates from the European Central Bank.',
    ],
    liveUrl: "https://www.npmjs.com/package/exchange-rates-ecb",
    repoUrl: "https://github.com/nip10/exchange-rates-ecb",
    techStackAndTools: ["Node.JS", "TypeScript", "Github Actions", "Git"],
    thumbnail: "/exchange-rate-ecb.webp",
  },
];

export interface SocialProfile {
  name: string;
  url: string;
  iconSvg: string;
}

export const socialMediaProfiles: SocialProfile[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/diogocardoso10/",
    iconSvg: "linkedinSvg",
  },
  {
    name: "GitHub",
    url: "https://github.com/nip10",
    iconSvg: "githubSvg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/imnip10",
    iconSvg: "twitterSvg",
  },
  {
    name: "Email",
    url: "hi@diogocardoso.dev",
    iconSvg: "instagramSvg",
  },
];
