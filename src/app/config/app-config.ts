// src/app/config/app-config.ts

import { HeaderConfig } from './header-config';
import { FooterConfig } from './footer-config';
import { ContactConfig } from './contact-config';
import { HomeConfig } from './home-config';
import { AboutConfig } from './about-config';
import { SkillsConfig } from './skills-config';
import { ProjectsConfig } from './projects-config';
import { displayIfExists } from './utils';

/**
 * Central configuration file for all text and layout properties
 * The structure is divided into logical sections, imported from separate files
 */
export const AppConfig = {
  // Header section
  header: HeaderConfig,
  
  // Contact information
  contact: ContactConfig,
  
  // Homepage content
  home: HomeConfig,
  
  // About page content
  about: AboutConfig,
  
  // Skills page content
  skills: SkillsConfig,
  
  // Projects page content
  projects: ProjectsConfig,
  
  // Footer section
  footer: FooterConfig
};

// Re-export the utility function
export { displayIfExists };