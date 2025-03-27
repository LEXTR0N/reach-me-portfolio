// src/app/config/personal-config.ts

/**
 * Central configuration for personal information
 * This file contains all basic data that is used in multiple places
 */
export const PersonalConfig = {
  // Basic personal information
  name: 'Max Mustermann',
  role: 'Full-Stack Developer',
  tagline: 'specializing in modern web technologies',
  birthdate: 'May 15, 1995',
  
  // Contact information
  contact: {
    email: 'max@example.com',
    location: 'Berlin, Germany',
    phone: null, // Optional, if needed
    
    // Social Media
    social: {
      github: {
        username: 'LEXTR0N',
        url: 'https://github.com/LEXTR0N'
      },
      twitter: {
        username: 'maxmustermann',
        url: 'https://twitter.com/maxmustermann'
      },
      linkedin: {
        username: 'maxmustermann',
        url: 'https://linkedin.com/in/maxmustermann'
      },
      behance: {
        username: 'max-mustermann',
        url: 'https://behance.net/max-mustermann'
      }
    }
  },
  
  // Images/Assets
  images: {
    profile: 'assets/images/profil.png',
    logoLight: 'assets/images/logo_light.png',
    logoDark: 'assets/images/logo_dark.png',
    projects: 'assets/images/projects/'
  }
};