export interface PersonalInfo {
  name: string;
  about: string;
  resume: string;
}

export const personalInfo: PersonalInfo = {
  name: "Diogo Cardoso",
  about: `I'm a software engineer based in Karachi, Pakistan.
  I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
  I have been working for 3 year, with a demonstrated history of working in the Computer Software industry. Skilled in Front-end Development.
  I have 3 years of experience in HTML, CSS, SCSS, JavaScript, Bootstrap, tailwind CSS, StyledComponent, React JS and Next JS. Hence,
  I have successfully completed several web projects from scratch.
  Yet, I learn continuously and never stop exploring new technologies.
  So, I have also gained knowledge of Node JS, Express JS, Mongo DB, Python,
  firebase and React Native with time.

  I'm an experienced Front End Developer with a passion for great user experience.
  I'm skilled in Angular, RxJS, Redux, TypeScript, Test Driven Development, and Accessibility.
  I'm currently working as an Angular Developer at RBC, and have previously done agency work for Strategic Content Labs and Agency Undone.

  I build things for the web.

  I'm a Software Engineer who enjoys creating and developing dynamic web applications with the latest
  technologies. Background in Electrical and Computer Engineering.

  I work at a startup where I wear a lot of hats.
  Organized, team-oriented and highly adaptable, enjoy fast-paced environments.

  Tennis. Padel. Soccer (go FCPorto!). Travel. Food. Books. Movies. Music. Tech. Finance. Economics. Psychology.

  Currently reading: (see Goodreads) https://www.goodreads.com/user/show/146957216-diogo-cardoso
  Currently watching: (see Trakt) https://trakt.tv/users/nip10
  <a href="https://www.google.com">foo</a>

  Available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
  `,
  resume: "",
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
      "SWE doing full-stack in a high growth startup. Focus on delivering new features and improving the product on the front-end side.",
    description: [
      "Developed and maintained back-end services using NodeJS, PostgreSQL and Serverless",
      "Developed screens and UI components for the web application using React, Redux and Styled Components",
      "Worked closely with the design team (UI/UX) in developing a design system and components library using Storybook",
      "Worked closely with the product team in defining the product roadmap and features",
      "Implemented unit and e2e tests using React Testing Library and Cypress",
      "Interviewed candidates for the team",
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
      'Worked on the <a class="text-sm dark:text-indigo-300" href="https://design.hostelworld.com/6d86fdcac/p/688c6f-wanderlust-design-system" target="_blank" rel="noopener">Wanderlust Design System</a>, a design system built with Stencil used by multiple Hostelworld applications.',
    description: [
      "Developed and maintained components for the design system using StencilJS and SASS",
      "Developed screens and UI components for core web application using Vue and SASS",
    ],
    techStackAndTools: [
      "Vue",
      "StencilJS",
      "SASS",
      "Storybook",
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
      "SWE/TL in a pre-seed startup where I did a bit of everything, and more.",
    description: [
      "Led team of 2 developers + 1 designer by assisting in planning and prioritizing tasks, supporting and mentoring the team, and ensuring the team is aligned with the product roadmap",
      "Developed and maintained back-end services using NodeJS, Express and PostgreSQL",
      "Developed screens and UI components for the web application using Angular and SASS",
      "Developed screens and UI components for the mobile application using Ionic/Capacitor, Angular and SASS",
      "Developed desktop application for hardware configuration using Electron, React and Styled Components",
      "Implemented payment and billing system, subscription flow and user management using Stripe and InvoiceExpress",
      "Implemented CI/CD pipelines using GitHub Actions and AWS",
      "Worked closely with the product team in defining the product roadmap and features",
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
      "SWE focused on full-stack development. My first experience in a startup/scaleup (seed) environment.",
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
  url: string;
  repoUrl: string | false;
  techStackAndTools: string[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: [
      "This portfolio website. Built using a new web framework called Astro, and Tailwind.",
      'Inpired by the work of <a class="text-sm dark:text-gray-100" href="https://github.com/uzzii-21/astro-portfolio" target="_blank">@uzzii-21</a>',
    ],
    url: "https://diogocardoso.dev",
    repoUrl: "https://github.com/nip10/portfolio-2023",
    techStackAndTools: [
      "Astro",
      "Tailwind",
      "TypeScript",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "",
  },
  {
    name: "Fu** you Money",
    description: [
      "An online calculator that helps you calculate how much money you need to save to reach financial independence.",
      "Funny domain name, but it's a serious tool. Inspired by John Goodman's speech in the movie The Gambler.",
    ],
    url: "https://fuckyou.money",
    repoUrl: false,
    techStackAndTools: [
      "NextJS",
      "Styled Components",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "",
  },
  {
    name: "Wondermoney",
    description: [
      "A web application that helps you manage your money.",
      "It allows you to create budgets, track your expenses and income, and visualize your financial situation.",
      "Using the open banking standards, it also allows you to connect your bank account and automatically import your transactions.",
      "It also integrates with the major Brokers in Europe, allowing you to automatically import your stock portfolio.",
    ],
    url: "https://app.wonder.money",
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
    thumbnail: "",
  },
  {
    name: "Euromillions Notifier",
    description: [
      "A web application that notifies you when the Euromillions jackpot reaches a certain amount.",
    ],
    url: "https://euronotify.diogocardoso.dev/",
    repoUrl: "https://github.com/nip10/euromillions-notifications",
    techStackAndTools: [
      "React",
      "Redux",
      "SCSS",
      "AWS",
      "Github Actions",
      "Git",
    ],
    thumbnail: "",
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
