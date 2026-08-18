export interface SkillCategory {
  name: string;
  description?: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud",
    skills: ["AWS", "Azure", "GCP"],
  },
  {
    name: "Containers & Orchestration",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "OpenShift",
      "Azure Kubernetes Service",
    ],
  },
  {
    name: "Infrastructure as Code",
    skills: ["Terraform", "Ansible"],
  },
  {
    name: "CI/CD & GitOps",
    skills: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "ArgoCD",
      "Tekton",
    ],
  },
  {
    name: "Observability",
    skills: [
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "Mimir",
      "Jaeger",
      "Kiali",
    ],
  },
  {
    name: "Security & DevSecOps",
    skills: ["Trivy", "Falco", "SonarQube"],
  },
  {
    name: "Programming Languages",
    skills: [
      "Python",
      "TypeScript",
      "Java",
      "Go",
      "C",
      "C++",
      "SQL",
    ],
  },
  {
    name: "Frameworks & Backend",
    skills: [
      "Flask",
      "Spring Boot",
      "Angular",
      "ASP.NET Core",
    ],
  },
  {
    name: "AI / ML & Data",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Spark",
      "MLflow",
      "CrewAI",
      "Databricks",
      "Talend",
      "Power BI",
    ],
  },
  {
    name: "Databases",
    skills: [
      "Oracle",
      "SQLite",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Firebase",
      "Cosmos DB",
    ],
  },
  {
    name: "Systems & Networking",
    skills: [
      "Linux",
      "NixOS",
      "Windows Server",
      "Active Directory",
      "Cisco",
      "pfSense",
    ],
  },
  {
    name: "Project Management",
    skills: ["UML", "Agile", "Jira", "Confluence"],
  },
];
