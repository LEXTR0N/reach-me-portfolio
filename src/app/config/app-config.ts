// src/app/config/app-config.ts

/**
 * Central configuration file for all text and layout properties
 * The structure is divided into logical sections
 */
export const AppConfig = {
  // Header section
  header: {
    logoImage: {
      path: 'assets/images/logo_dark.png',  // Path to your logo
      alt: 'Portfolio Logo',
      width: 200,
      height: 80
    },
    navigation: {
      home: 'Home',
      projects: 'Projects', 
      about: 'About',
      skills: 'Skills'
    }
  },
  
  // Contact information
  contact: {
    email: 'max@example.com',
    twitter: 'maxmustermann',
    linkedin: 'maxmustermann',
    github: 'max-mustermann'
  },
  
  // Homepage content
  home: {
    greeting: {
      prefix: 'Hello, I\'m',
      name: 'Max Mustermann'
    },
    headline: {
      prefix: 'I built',
      highlight: 'this portfolio template',
      suffix: 'for everyone'
    },
    biography: 'I developed this website as an open-source portfolio template that anyone can adapt and use. While this is just one example of my work, I enjoy creating various digital solutions beyond portfolio websites.',
    ctaButtons: {
      primary: {
        text: 'View my work',
        link: '/projects'
      },
      secondary: {
        text: 'Contact me',
        link: '/contact'
      }
    },
    stats: {
      stat_0: {
        value: '26',
        label: 'Pizza Slices Eaten'
      },
      stat_1: {
        value: '9+',
        label: 'Eureka Moments'
      }
    }
  },
  
  // About page content
  about: {
    title: "About Me",
    introduction: "Hi, I'm Max Mustermann, a Full-Stack Developer with a passion for building web applications. Currently based in Berlin, I'm working on creating intuitive and performant web solutions for a variety of clients and personal projects.",
    profile: {
      name: "Max Mustermann",
      role: "Full-Stack Developer",
      image: "assets/images/profil.png",
      contactInfo: [
        { label: "Email", value: "max@example.com" },
        { label: "Location", value: "Berlin, Germany" },
        { label: "Birthday", value: "May 15, 1995" }
      ],
      bio: [
        "I started my journey in tech with a deep curiosity about how websites work. After completing my studies, I've worked with various companies to develop solutions that combine robust backend systems with intuitive frontend interfaces.",
        "In my free time, I contribute to open-source projects and enjoy hiking in the mountains outside Berlin. I believe in continuous learning and regularly attend tech meetups and conferences."
      ]
    },
    sectionTabs: {
      education: "Education",
      experience: "Experience",
      personal: "Personal"
    },
    experience: [
      {
        id: 5,
        title: "Senior Frontend Developer",
        organization: "TechSolutions GmbH",
        duration: "January 2023 - Present",
        location: "Berlin",
        description: [
          "Leading the frontend development team for client projects",
          "Implementing Angular-based applications with performance optimization",
          "Mentoring junior developers and conducting code reviews"
        ]
      },
      {
        id: 4,
        title: "Full-Stack Developer",
        organization: "Digital Innovators AG",
        duration: "March 2020 - December 2022",
        location: "Munich",
        description: [
          "Developed and maintained various web applications",
          "Tech stack: React, Node.js, MongoDB",
          "Collaborated with UX/UI designers to implement responsive designs"
        ]
      },
      {
        id: 3,
        title: "Junior Web Developer",
        organization: "WebCraft Solutions",
        duration: "June 2018 - February 2020",
        location: "Hamburg",
        description: [
          "Built and maintained client websites",
          "Worked with JavaScript, HTML, CSS and PHP"
        ]
      },
      {
        id: 2,
        title: "Freelance Web Developer",
        organization: "Self-employed",
        duration: "January 2017 - May 2018",
        location: "Remote",
        description: [
          "Created websites for small businesses",
          "Specialized in WordPress customization"
        ]
      },
      {
        id: 1,
        title: "Intern",
        organization: "StartUp Hub Berlin",
        duration: "June 2016 - December 2016",
        location: "Berlin",
        description: [
          "Assisted in website maintenance and updates",
          "Learned fundamentals of web development in a professional environment"
        ]
      }
    ],
    education: [
      {
        id: 4,
        title: "Advanced React & Node.js Certification",
        organization: "Frontend Masters",
        duration: "2022",
        location: "Online",
        description: [
          "Specialized training in advanced React patterns and Node.js architecture"
        ]
      },
      {
        id: 3,
        title: "Master's in Computer Science",
        organization: "Technical University of Berlin",
        duration: "2014 - 2016",
        location: "Berlin",
        description: [
          "Focus on Web Technologies and Software Engineering",
          "Thesis: 'Performance Optimization in Single Page Applications'"
        ]
      },
      {
        id: 2,
        title: "Bachelor's in Computer Science",
        organization: "University of Hamburg",
        duration: "2011 - 2014",
        location: "Hamburg",
        description: [
          "Core curriculum in programming, algorithms, and data structures",
          "Minor in Digital Media Design"
        ]
      },
      {
        id: 1,
        title: "High School Diploma",
        organization: "Gymnasium Berlin-Mitte",
        duration: "2007 - 2011",
        location: "Berlin",
        description: [
          "Advanced courses in Mathematics and English"
        ]
      }
    ],
    hobbies: [
      {
        icon: "🥾",
        title: "Hiking",
        description: "Exploring trails in the mountains around Berlin and Brandenburg"
      },
      {
        icon: "💻",
        title: "Open Source",
        description: "Contributing to various open-source projects on GitHub"
      },
      {
        icon: "📚",
        title: "Reading",
        description: "Technical books and science fiction novels"
      },
      {
        icon: "🍳",
        title: "Cooking",
        description: "Experimenting with recipes from around the world"
      }
    ]
  },
  
  // Footer section
  footer: {
    tagline: 'Full-Stack Developer specializing in modern web technologies.',
    labels: {
      pages: 'Pages',
      connect: 'Connect'
    },
    copyrightName: 'Max Mustermann',
    credits: 'Made with ❤ as an open-source template'
  }
};

/**
 * Helper function for displaying texts
 * Returns the text if it exists and is not empty
 * Returns null if the text is empty or does not exist
 */
export function displayIfExists(text: string | undefined | null): string | null {
  if (text === undefined || text === null || text === '') {
    return null;
  }
  return text;
}