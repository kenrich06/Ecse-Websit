import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  java,
  git,
  upcoming, // Add this import for the upcoming.png image
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Upcoming",
    company_name: "Upcoming",
    company_website: "#",
    icon: upcoming, // Use the upcoming.png image
    iconBg: "#E6DEDD",
    date: "Upcoming",
    points: [
      "Stay tuned for updates on my professional journey.",
    ],
  },
];

const projects = [
  {
    name: "Upcoming",
    description:
      "Exciting projects are in the pipeline. Check back soon!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "upcoming",
        color: "pink-text-gradient",
      },
    ],
    image: upcoming, // Use the upcoming.png image
    hosted_link: "#",
  },
];

const personalInfo = {
  name: "Kenrich",
  fullName: "Kenrich Coutinho",
  email: "kenrich.coutinho@example.com", // Update with your email
  role: "Computer Engineering",
  about: `I'm a passionate computer engineering student with a keen interest in software development and emerging technologies. I enjoy solving complex problems and building innovative solutions. Let's connect and create something amazing! In the Future You can Hire me for these Roles!`,
  projectsIntro: `Stay tuned for exciting projects that showcase my skills and creativity. I'm currently working on some amazing ideas that I can't wait to share with you!`,
};

const publicUrls = {
  resume: "https://example.com/resume.pdf", // Update with your resume link
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/kenrich-coutinho", // Update with your LinkedIn
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/kenrichcoutinho", // Update with your GitHub
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
