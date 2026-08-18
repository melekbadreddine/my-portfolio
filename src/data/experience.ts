export interface Experience {
  company: string;
  role: string;
  type: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "Qim info",
    role: "DevOps Engineer",
    type: "End-of-Studies Internship",
    startDate: "Feb. 2025",
    endDate: "Jun. 2025",
    description:
      "Worked on a cloud-native observability and DevOps platform for containerized microservices.",
    responsibilities: [
      "Implemented an observability solution to monitor containerized microservices.",
      "Instrumented applications to collect traces, metrics, and logs with minimal code changes.",
      "Built an automated CI/CD pipeline for containerization, scanning, and deployment.",
      "Integrated security and performance testing into the DevOps lifecycle.",
      "Implemented ingress routing to bridge local environments with cloud-hosted backends.",
      "Designed a production-ready architecture combining observability, automation, and security.",
    ],
    technologies: [
      "Jira",
      "Confluence",
      "Kubernetes",
      "OpenTelemetry",
      "Terraform",
      "GCP",
      "Helm",
      "GitLab CI/CD",
      "ArgoCD",
      "Trivy",
      "Falco",
      "Prometheus",
      "JMeter",
      "OctoPerf",
      "Loki",
      "Grafana",
      "Tempo",
      "Mimir",
    ],
  },

  {
    company: "ProCAN",
    role: "DevOps Engineer",
    type: "Internship",
    startDate: "Jun. 2024",
    endDate: "Jul. 2024",
    description:
      "Worked on a secure infrastructure management platform and automated DevSecOps workflows.",
    responsibilities: [
      "Built and managed a secure web application to manipulate container engine APIs.",
      "Automated the provisioning of infrastructure to host DevSecOps tools.",
      "Developed CI/CD pipelines integrating code analysis and security scanning.",
      "Applied GitOps methodology to enable continuous deployment to Kubernetes.",
      "Implemented monitoring and visualization for deployed applications.",
      "Ensured reliable version control and automated builds with webhook-based triggers.",
    ],
    technologies: [
      "Spring Boot",
      "Maven",
      "JSON Web Token",
      "MySQL",
      "Swagger",
      "Angular",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Jenkins",
      "SonarQube",
      "Trivy",
      "ArgoCD",
      "Helm",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    company: "REGIM Lab",
    role: "DevOps Engineer",
    type: "End-of-Year Project",
    startDate: "Dec. 2023",
    endDate: "May 2024",
    description:
      "Worked on an AI-powered cognitive behavioral therapy platform combining mobile, web, AI, and cloud-native technologies.",
    responsibilities: [
      "Co-designed application features in collaboration with psychotherapists from Hédi Chaker Hospital.",
      "Developed a cross-platform mobile and web application for cognitive behavioral therapy support.",
      "Integrated a generative AI chatbot to enhance user engagement and personalization.",
      "Containerized backend services and deployed them to a scalable cluster environment.",
      "Facilitated collaboration through robust version control practices.",
      "Delivered an AI-powered CBT platform optimized for scalability.",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "OAuth 2.0",
      "Git",
      "GitHub",
      "Flask",
      "OpenAI API",
      "Docker",
      "Azure Kubernetes Service",
    ],
  },
];
