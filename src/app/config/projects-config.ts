// src/app/config/projects-config.ts
import { PersonalConfig } from './personal-config';

// Funktionen zum einfachen Erstellen von Link-URLs
const createGithubLink = (repo: string) => 
  `${PersonalConfig.contact.social.github.url}/${repo}`;

const createBehanceLink = (project: string) => 
  `${PersonalConfig.contact.social.behance.url}/${project}`;

const getProjectImage = (filename: string) => 
  `${PersonalConfig.images.projects}${filename}`;

export const ProjectsConfig = {
  title: "My Projects",
  introduction: "Here's a collection of projects I've worked on, including professional work, personal projects, and open-source contributions.",
  
  // Project filter categories
  filters: [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
  ],
  
  // Project items
  items: [
    {
      id: 1,
      title: "Portfolio Template",
      subtitle: "Angular Web Application",
      description: "A customizable portfolio template built with Angular, featuring responsive design and easy content management via a central configuration file.",
      image: getProjectImage("project_1.jpg"),
      technologies: ["Angular", "TypeScript", "SCSS", "HTML"],
      category: "web",
      featured: true,
      links: {
        live: "https://example.com/portfolio",
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2023"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      subtitle: "Admin Panel for Online Stores",
      description: "A comprehensive admin dashboard for e-commerce platforms, providing real-time analytics, order management, and inventory tracking.",
      image: getProjectImage("project_2.jpg"),
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "web",
      featured: true,
      links: {
        live: "https://example.com/dashboard",
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2022"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      subtitle: "Mobile Application",
      description: "A weather application for iOS and Android that provides accurate forecasts, radar maps, and severe weather alerts using data from multiple meteorological services.",
      image: getProjectImage("project_3.jpg"),
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
      category: "mobile",
      featured: false,
      links: {
        live: "https://example.com/weather-app",
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2022"
    },
    {
      id: 4,
      title: "Task Management Tool",
      subtitle: "Productivity Web Application",
      description: "A Kanban-style task management tool for individuals and small teams, featuring drag-and-drop interfaces, task assignments, and deadline tracking.",
      image: getProjectImage("project_4.png"),
      technologies: ["Vue.js", "Vuex", "Firebase", "CSS Grid"],
      category: "web",
      featured: false,
      links: {
        live: "https://example.com/task-manager",
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2022"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      subtitle: "Mobile Health Application",
      description: "A comprehensive fitness tracking app that monitors workouts, nutrition, and progress toward health goals. Includes social features for workout buddies.",
      image: getProjectImage("project_5.png"),
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      category: "mobile",
      featured: true,
      links: {
        live: "https://example.com/fitness-app",
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2021"
    },
    {
      id: 6,
      title: "Restaurant Website",
      subtitle: "Business Website & Ordering System",
      description: "A responsive website for a local restaurant featuring an online menu, reservation system, and order tracking for takeout and delivery.",
      image: getProjectImage("project_6.jpg"),
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
      category: "web",
      featured: false,
      links: {
        live: "https://example.com/restaurant",
        github: null,
        behance: createBehanceLink("restaurant")
      },
      date: "2021"
    },
  ]
};