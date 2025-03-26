// src/app/config/projects-config.ts

export const ProjectsConfig = {
    title: "My Projects",
    introduction: "Here's a collection of projects I've worked on, including professional work, personal projects, and open-source contributions.",
    
    // Project filter categories
    filters: [
      { id: "all", label: "All Projects" },
      { id: "web", label: "Web Development" },
      { id: "mobile", label: "Mobile Apps" },
      { id: "design", label: "UI/UX Design" },
      { id: "open-source", label: "Open Source" }
    ],
    
    // Project items
    items: [
      {
        id: 1,
        title: "Portfolio Template",
        subtitle: "Angular Web Application",
        description: "A customizable portfolio template built with Angular, featuring responsive design and easy content management via a central configuration file.",
        image: "assets/images/projects/portfolio-template.jpg", // You'll need to add project images
        technologies: ["Angular", "TypeScript", "SCSS", "HTML"],
        category: "web",
        featured: true,
        links: {
          live: "https://example.com/portfolio",
          github: "https://github.com/max-mustermann/portfolio-template",
          behance: null
        },
        date: "2023"
      },
      {
        id: 2,
        title: "E-Commerce Dashboard",
        subtitle: "Admin Panel for Online Stores",
        description: "A comprehensive admin dashboard for e-commerce platforms, providing real-time analytics, order management, and inventory tracking.",
        image: "assets/images/projects/ecommerce-dashboard.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
        category: "web",
        featured: true,
        links: {
          live: "https://example.com/dashboard",
          github: "https://github.com/max-mustermann/ecommerce-dashboard",
          behance: null
        },
        date: "2022"
      },
      {
        id: 3,
        title: "Weather Forecast App",
        subtitle: "Mobile Application",
        description: "A weather application for iOS and Android that provides accurate forecasts, radar maps, and severe weather alerts using data from multiple meteorological services.",
        image: "assets/images/projects/weather-app.jpg",
        technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
        category: "mobile",
        featured: false,
        links: {
          live: "https://example.com/weather-app",
          github: "https://github.com/max-mustermann/weather-app",
          behance: null
        },
        date: "2022"
      },
      {
        id: 4,
        title: "Task Management Tool",
        subtitle: "Productivity Web Application",
        description: "A Kanban-style task management tool for individuals and small teams, featuring drag-and-drop interfaces, task assignments, and deadline tracking.",
        image: "assets/images/projects/task-manager.jpg",
        technologies: ["Vue.js", "Vuex", "Firebase", "CSS Grid"],
        category: "web",
        featured: false,
        links: {
          live: "https://example.com/task-manager",
          github: "https://github.com/max-mustermann/task-manager",
          behance: null
        },
        date: "2022"
      },
      {
        id: 5,
        title: "Fitness Tracker",
        subtitle: "Mobile Health Application",
        description: "A comprehensive fitness tracking app that monitors workouts, nutrition, and progress toward health goals. Includes social features for workout buddies.",
        image: "assets/images/projects/fitness-tracker.jpg",
        technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
        category: "mobile",
        featured: true,
        links: {
          live: "https://example.com/fitness-app",
          github: "https://github.com/max-mustermann/fitness-tracker",
          behance: null
        },
        date: "2021"
      },
      {
        id: 6,
        title: "Restaurant Website",
        subtitle: "Business Website & Ordering System",
        description: "A responsive website for a local restaurant featuring an online menu, reservation system, and order tracking for takeout and delivery.",
        image: "assets/images/projects/restaurant-website.jpg",
        technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
        category: "web",
        featured: false,
        links: {
          live: "https://example.com/restaurant",
          github: null,
          behance: "https://behance.net/max-mustermann/restaurant"
        },
        date: "2021"
      },
      {
        id: 7,
        title: "Smart Home Interface",
        subtitle: "UI/UX Design Project",
        description: "A design concept for a smart home control application with intuitive interfaces for controlling lights, climate, security, and entertainment systems.",
        image: "assets/images/projects/smart-home-ui.jpg",
        technologies: ["Figma", "Adobe XD", "Illustrator", "Prototyping"],
        category: "design",
        featured: false,
        links: {
          live: null,
          github: null,
          behance: "https://behance.net/max-mustermann/smart-home"
        },
        date: "2021"
      },
      {
        id: 8,
        title: "Open Source CSS Framework",
        subtitle: "Developer Tool",
        description: "A lightweight CSS framework focused on responsive grid layouts and customizable components. Emphasizes accessibility and cross-browser compatibility.",
        image: "assets/images/projects/css-framework.jpg",
        technologies: ["CSS", "Sass", "JavaScript", "Documentation"],
        category: "open-source",
        featured: true,
        links: {
          live: "https://example.com/css-framework",
          github: "https://github.com/max-mustermann/css-framework",
          behance: null
        },
        date: "2020"
      },
      {
        id: 9,
        title: "Music Streaming App Design",
        subtitle: "UI/UX Design Case Study",
        description: "Comprehensive redesign of a music streaming service with improved user flow, accessibility features, and innovative playlist management.",
        image: "assets/images/projects/music-app-design.jpg",
        technologies: ["Figma", "User Research", "Wireframing", "Prototyping"],
        category: "design",
        featured: false,
        links: {
          live: null,
          github: null,
          behance: "https://behance.net/max-mustermann/music-app"
        },
        date: "2020"
      },
      {
        id: 10,
        title: "Markdown Editor",
        subtitle: "Open Source Developer Tool",
        description: "A lightweight browser-based markdown editor with syntax highlighting, preview mode, and export options for various document formats.",
        image: "assets/images/projects/markdown-editor.jpg",
        technologies: ["JavaScript", "React", "CSS", "Marked.js"],
        category: "open-source",
        featured: false,
        links: {
          live: "https://example.com/markdown-editor",
          github: "https://github.com/max-mustermann/markdown-editor",
          behance: null
        },
        date: "2019"
      }
    ]
  };