// src/app/config/personal-config.ts

/**
 * Zentrale Konfiguration für persönliche Informationen
 * Diese Datei enthält alle grundlegenden Daten, die an mehreren Stellen verwendet werden
 */
export const PersonalConfig = {
  // Grundlegende persönliche Informationen
  name: 'Max Mustermann',
  role: 'Full-Stack Developer',
  tagline: 'specializing in modern web technologies',
  birthdate: 'May 15, 1995',
  
  // Kontaktinformationen
  contact: {
    email: 'max@example.com',
    location: 'Berlin, Germany',
    phone: null, // Optional, falls benötigt
    
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
  
  // Bilder/Assets
  images: {
    profile: 'assets/images/profil.png',
    logoLight: 'assets/images/logo_light.png', // Logo für Light Mode
    logoDark: 'assets/images/logo_dark.png',   // Logo für Dark Mode
    projects: 'assets/images/projects/'
  }
};