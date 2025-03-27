// src/app/config/skills-config.ts

export const SkillsConfig = {
    title: "My Skills",
    introduction: "Here's an overview of my technical abilities and expertise across various technologies, tools, and languages.",
    
    // Skill categories - add, remove or modify as needed
    categories: [
      {
        name: "Programming Languages",
        description: "Languages I've worked with professionally and on personal projects.",
        skills: [
          {
            name: "JavaScript",
            level: 5,
            yearsExperience: 6,
            description: "ES6+, TypeScript, Modern JS patterns"
          },
          {
            name: "Python",
            level: 4,
            yearsExperience: 4,
            description: "Django, Flask, Data Analysis"
          },
          {
            name: "Java",
            level: 4,
            yearsExperience: 5,
            description: "Spring Boot, Enterprise Applications"
          },
          {
            name: "HTML/CSS",
            level: 5,
            yearsExperience: 7,
            description: "Semantic HTML, CSS3, Sass/SCSS"
          },
          {
            name: "SQL",
            level: 4,
            yearsExperience: 5,
            description: "MySQL, PostgreSQL, Oracle"
          },
          {
            name: "PHP",
            level: 3,
            yearsExperience: 3,
            description: "WordPress, Laravel basics"
          },
          {
            name: "C#",
            level: 3,
            yearsExperience: 2,
            description: ".NET Core, Basic applications"
          }
        ]
      },
      {
        name: "Frameworks & Libraries",
        description: "Technologies I utilize to build modern applications.",
        skills: [
          {
            name: "Angular",
            level: 5,
            yearsExperience: 4,
            description: "Angular 2+, RxJS, NgRx"
          },
          {
            name: "React",
            level: 4,
            yearsExperience: 3,
            description: "Redux, Hooks, Context API"
          },
          {
            name: "Vue.js",
            level: 3,
            yearsExperience: 2,
            description: "Vue 3, Composition API"
          },
          {
            name: "Node.js",
            level: 4,
            yearsExperience: 4,
            description: "Express, REST APIs, Microservices"
          },
          {
            name: "Spring Boot",
            level: 4,
            yearsExperience: 3,
            description: "Java-based backend development"
          },
          {
            name: "Django",
            level: 3,
            yearsExperience: 2,
            description: "Python web framework"
          }
        ]
      },
      {
        name: "Tools & Technologies",
        description: "Development tools and environments I'm proficient with.",
        skills: [
          {
            name: "Git",
            level: 5,
            yearsExperience: 6,
            description: "Version control, GitHub/GitLab workflows"
          },
          {
            name: "Docker",
            level: 4,
            yearsExperience: 3,
            description: "Containerization, Docker Compose"
          },
          {
            name: "AWS",
            level: 3,
            yearsExperience: 2,
            description: "EC2, S3, Lambda, CloudFormation"
          },
          {
            name: "CI/CD",
            level: 4,
            yearsExperience: 3,
            description: "Jenkins, GitHub Actions, GitLab CI"
          },
          {
            name: "Agile/Scrum",
            level: 4,
            yearsExperience: 5,
            description: "Sprint planning, Backlogs, User stories"
          },
          {
            name: "Testing",
            level: 4,
            yearsExperience: 4,
            description: "Jest, Jasmine, Cypress, JUnit"
          }
        ]
      },
      {
        name: "Design & UX",
        description: "Design tools and principles I apply in my work.",
        skills: [
          {
            name: "Figma",
            level: 4,
            yearsExperience: 3,
            description: "UI design, Prototyping, Component libraries"
          },
          {
            name: "Adobe XD",
            level: 3,
            yearsExperience: 2,
            description: "UI/UX Design, Wireframing"
          },
          {
            name: "Responsive Design",
            level: 5,
            yearsExperience: 5,
            description: "Mobile-first, Adaptive layouts"
          },
          {
            name: "Animation",
            level: 3,
            yearsExperience: 2,
            description: "CSS animations, GSAP basics"
          }
        ]
      },
      {
        name: "Languages",
        description: "Human languages I can communicate in.",
        skills: [
          {
            name: "English",
            level: 5,
            description: "Professional working proficiency"
          },
          {
            name: "German",
            level: 5,
            description: "Native speaker"
          },
          {
            name: "Spanish",
            level: 3,
            description: "Intermediate conversational skills"
          },
          {
            name: "French",
            level: 2,
            description: "Basic communication skills"
          }
        ]
      }
    ],
    
    // Skill level descriptions - shown when hovering over skill bars
    levelDescriptions: [
      "Beginner",
      "Basic",
      "Intermediate",
      "Advanced",
      "Expert"
    ]
  };