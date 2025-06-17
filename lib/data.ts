import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const categorizedSkills = [
  {
    category: "Languages",
    skills: ["C#","Python", "JavaScript", "TypeScript", "Java", "SQL", "LINQ"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "CosmosDB", "MongoDB", "Redis"],
  },
  {
    category: "Backend & APIs",
    skills: [
      ".NET Core",
      "ASP.NET",
      "Node.js",
      "RESTful API",
      "Entity Framework",
      "Web API",
      "MVC Architecture",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Azure (Blob Storage, Functions)",
      "AWS (EC2, S3, RDS)",
      "GCP",
      "Vercel",
      "Netlify",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "Angular",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
      "jQuery",
      "Webpack",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Visual Studio",
      "VS Code",
      "Git",
      "Postman",
      "Swagger",
      "Figma",
      "Azure DevOps",
      "Jira",
      "Agile",
      "Scrum",
      "CI/CD Pipelines",
    ],
  },
];


export const experiencesData = [
  {
    title: "Senior Software Developer",
    location: "Chubb Business Services, Telangana, India",
    description:[
      "Developed scalable REST APIs using C# and .NET in a microservices architecture, optimizing backend performance with async/await and reducing API response times by 30%.",
      "Built dynamic, high-performance UI components in Angular and TypeScript with real-time form validation and API integration, enhancing frontend responsiveness and user experience.",
      "Improved data handling by revamping Entity Framework, LINQ, and Cosmos DB queries, cutting execution time by 40% and improving system responsiveness under high load.",
      "Secured and scaled the platform with JWT/OAuth2 authentication, Azure Blob Storage, Azure Functions, Kubernetes, and CDN integration—boosting delivery speed and cutting data costs by 25%."
    ],
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2021-2023",
  },
  {
    title: "Software Developer",
    location: "Chubb Business Services, Telangana, India",
    description:[
      "Spearheaded multi-tenant application development using ASP.NET MVC and Web API, managing complex business logic, role-based access, and SQL Server integration.",
      "Engineered dynamic, modular UIs with Angular and reusable components, improving frontend performance and reducing development overhead.",
      "Designed and implemented optimized data models in Cosmos DB for high-traffic systems, reducing query latency and improving system scalability under peak loads.",
      "Enabled scalable deployments by containerizing services with Docker and setting up CI/CD pipelines using Azure DevOps, while enhancing observability via Application Insights."
    ],
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2020 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "Smart Grocery: Full-Stack Grocery Platform",
    description:
      "Full-stack grocery shopping platform with real-time inventory, dynamic product catalog, secure role-based login, and automated order management with Stripe integration.",
    tags: ["MERN Stack", "Redis", "GCP", "Stripe API"],
    imageUrl: "",
  },
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce platform enabling users to browse products, view real-time pricing and stock, apply discounts, calculate tax, and complete secure, itemized purchases with detailed receipts.",
    tags: ["C#", "ASP.NET", "Angular", "SQL"],
    imageUrl: "",
  },
  {
    title: "Admin Dashboard Management System",
    description:
      "Built an admin portal for managing users, roles, settings, and analytics with secure access controls, modular services, and streamlined operations through an intuitive interface.",
    tags: ["React", ".NET Web API", "SQL Server", "Azure DevOps"],
    imageUrl: "",
  },
  {
    title: "Digit Recognizer (ML Integration)",
    description:
      "Built and deployed a digit classification app using a TensorFlow ANN, Flask backend, and interactive UI, achieving 95%+ accuracy on real-time MNIST predictions.",
    tags: ["Python", "TensorFlow", "Flask", "JavaScript"],
    imageUrl: "",
  },
] as const;

export const projectDetails = {
  "Smart Grocery: Full-Stack Grocery Platform": {
    details: [
      "Developed a grocery shopping web app with React, Node.js, Express, and MongoDB, showing live inventory and products.",
      "Secure login with user roles, order alerts, and payment using Stripe.",
      "Made the app faster using MongoDB indexing, Redis caching."
    ],
    github: "https://github.com/yourusername/smart-grocery"
  },
  "E-Commerce Website": {
    details: [
      "Created a real-time product catalog using Angular and ASP.NET to manage 100+ products with live pricing and stock updates.",
      "Built a smart checkout system that handles tax, discounts, and generates receipts.",
      "Used Entity Framework for database operations and improved backend speed with async C# and indexing."
    ],
    github: "https://github.com/yourusername/ecommerce-site"
  },
  "Admin Dashboard Management System": {
    details: [
      "Designed and built a full-stack admin portal for managing users, settings, roles, and analytics.",
      "Integrated Azure DevOps pipelines for automated builds and deployments.",
      "Applied custom authentication logic, secure API routes, and modular service architecture."
    ],
    github: "https://github.com/yourusername/smart-grocery"
  },
  "Digit Recognizer (ML Integration)": {
    details: [
      "Used TensorFlow to train a neural network that can recognize handwritten digits.",
      "Improved accuracy and reliability by applying data normalization and augmentation.",
      "Deployed the model in a custom user interface for real-time digit prediction, showing full-stack machine learning integration."
    ],
    github: "https://github.com/yourusername/smart-grocery"
  },
};

export const certificatesData = [
  {
    title: "Artificial Intelligence",
    issuer: "IIT Hyderabad",  
    imageUrl: "/ai.png",
  },
  {
    title: "Cyber Security",
    issuer: "Cisco Networking Academy",
    imageUrl: "/cyberSecurity.png",
  },
  {
    title: "Database Design and Programming with SQL",
    issuer: "Oracle",
    imageUrl: "/sql.png",
  },
  {
    title: "C: Programming",
    issuer: "Coursera | University of California",
    imageUrl: "/c.png",
  },
  {
    title: "Object Oriented Programming with Java",
    issuer: "Coursera",
    imageUrl: "/java.png",
  },
  {
    title: "Python",
    issuer: "Coursera | University of Michigan",
    imageUrl: "/python.png",
  },
  {
    title: "HTML",
    issuer: "Coursera",
    imageUrl: "/html.png",
  },
] as const;