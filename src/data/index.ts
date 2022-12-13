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
      image: "https://diogocardoso.dev/og-image.png",
    },
    image: {
      alt: "Diogo Cardoso",
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
    name: "Replai",
    location: "Portugal/US",
    startDate: "Jan 2022",
    endDate: "Present",
    role: "Software Engineer",
    about:
      "The creative intelligence platform fuelling marketing performance - Replai helps mobile companies build successful creative strategies with computer vision AI",
    summary:
      "Full-stack role with emphasis on front-end. Focus on delivering new features and improving the product.",
    description: [
      "Developed screens and UI components for the web application using React, Redux and Styled Components",
      "Developed and maintained back-end services using NodeJS, PostgreSQL and Serverless",
      "Worked closely with the design team (UI/UX) in developing a design system and components library using Storybook",
      "Worked closely with the product team in defining the product roadmap and features",
      "Implemented unit and e2e tests using React Testing Library and Cypress",
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
      "Developed and maintained components for the design system using StencilJS and SASS",
      "Developed screens and UI components for core web application using Vue and SASS",
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
      "Developed screens and UI components for the web application using Angular and SASS",
      "Developed and maintained back-end services using NodeJS, Express and PostgreSQL",
      "Developed screens and UI components for the mobile application using Ionic/Capacitor, Angular and SASS",
      "Developed desktop application for hardware configuration using Electron, React and Styled Components",
      "Led team of 3 developers + 1 designer by assisting in planning and prioritizing tasks, supporting and mentoring the team, and ensuring the team is aligned with the product roadmap",
      "Implemented payment and billing system, subscription flow and user management using Stripe and InvoiceExpress",
      "Implemented CI/CD pipelines using GitHub Actions and AWS",
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
      "Developed and maintained back-end services using ASP.NET and MSSQL",
      "Developed screens and UI components for the web application using Razor and SASS",
      "Developed screens and UI components for the mobile application using Ionic/Capacitor, React and SASS",
      "Developed offline-first PWA using React, Styled Components and Workbox",
      "Implemented payment and billing system, subscription flow and user management using Stripe, EuPago, Magnifinance and Primavera",
      "Implemented CI/CD pipelines using Azure DevOps and Azure cloud",
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
      { name: "Redux" },
      { name: "Styled Components" },
      { name: "SASS" },
      { name: "Angular" },
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
    thumbnail: "/portfolio.png",
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
    thumbnail: "/fum.png",
  },
  {
    name: "Wondermoney",
    description: [
      "A web application that helps you manage your money.",
      "It allows you to create budgets, track your expenses and income, and visualize your financial situation.",
      "Using the open banking standards PSD2, it also allows you to connect your bank account and automatically import your transactions.",
      "Supports the major brokers in Europe, allowing you to automatically import your financial assets portfolio.",
    ],
    liveUrl: "https://app.wonder.money",
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
    thumbnail: "/wm.png",
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
    thumbnail: "/euro.gif",
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
    thumbnail: "/sh.gif",
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
    url: "mailto:hi@diogocardoso.dev",
    iconSvg: "instagramSvg",
  },
];
