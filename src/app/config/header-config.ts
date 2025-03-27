// src/app/config/header-config.ts
import { PersonalConfig } from './personal-config';

export const HeaderConfig = {
  logoImage: {
    path: PersonalConfig.images.logo,
    alt: `${PersonalConfig.name} Portfolio Logo`,
    width: 200,
    height: 80
  },
  navigation: {
    home: 'Home',
    projects: 'Projects', 
    about: 'About',
    skills: 'Skills'
  }
};