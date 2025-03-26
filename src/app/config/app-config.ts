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
      about: 'About', 
      skills: 'Skills',
      projects: 'Projects'
    }
  },
  
  // Contact information
  contact: {
    email: 'max@example.com',
    twitter: 'example',
    linkedin: 'example',
    github: 'example'
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
        link: '/work'
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
  
  // Footer section
  footer: {
    tagline: 'Open-source portfolio template for everyone to use and customize.',
    labels: {
      pages: 'Pages',
      connect: 'Connect'
    },
    copyrightName: 'Max Mustermann',
    credits: 'Made with ❤ from LEXTR0N'
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