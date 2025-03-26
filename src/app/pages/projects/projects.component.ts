import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';

interface ProjectFilter {
  id: string;
  label: string;
}

interface ProjectLink {
  live: string | null;
  github: string | null;
  behance: string | null;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  links: ProjectLink;
  date: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  config = AppConfig;
  displayIfExists = displayIfExists;
  
  // All projects from config
  projects: Project[] = [];
  
  // Filter options
  filters: ProjectFilter[] = [];
  
  // Currently active filter
  activeFilter: string = 'all';
  
  // Featured projects for highlighting
  featuredProjects: Project[] = [];
  
  // Projects after filtering
  filteredProjects: Project[] = [];
  
  ngOnInit() {
    // Load projects and filters from config
    this.projects = this.config.projects.items;
    this.filters = this.config.projects.filters;
    
    // Set initial filtering
    this.filterProjects('all');
    
    // Identify featured projects
    this.featuredProjects = this.projects.filter(project => project.featured);
  }
  
  // Filter projects by category
  filterProjects(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category === category
      );
    }
  }
  
  // Check if a project has specific type of link
  hasLink(project: Project, linkType: 'live' | 'github' | 'behance'): boolean {
    return !!project.links[linkType];
  }
  
  // Get link URL safely
  getLink(project: Project, linkType: 'live' | 'github' | 'behance'): string {
    return project.links[linkType] || '#';
  }
  
  // Get placeholder image if project image is missing
  getProjectImage(imagePath: string): string {
    // For a real implementation, you might want to check if the image exists
    // For now, we'll just return the path and assume it exists
    return imagePath || 'assets/images/projects/placeholder.jpg';
  }
}