export type ProjectCategory =
  | "Cloud"
  | "DevOps"
  | "Kubernetes"
  | "Backend"
  | "AI/ML"
  | "Data"
  | "Security"
  | "Networking"
  | "Distributed Systems";

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  categories: ProjectCategory[];
  featured: boolean;
  architecture?: {
    nodes: string[];
    description: string;
  };
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "cloud-native-observability-platform",
    title: "Cloud-Native Observability Platform",
    description:
      "Designed and implemented an observability solution for containerized microservices, combining OpenTelemetry with metrics, logs, and distributed traces.",
    highlights: [
      "Implemented application instrumentation with minimal code changes.",
      "Built an automated CI/CD pipeline for containerization, security scanning, and deployment.",
      "Integrated security and performance testing into the DevOps lifecycle.",
      "Implemented ingress routing between local environments and cloud-hosted backends.",
      "Designed a production-ready architecture combining observability, automation, and security.",
    ],
    technologies: [
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
      "Grafana",
      "Loki",
      "Tempo",
      "Mimir",
      "JMeter",
      "OctoPerf",
    ],
    categories: ["Cloud", "DevOps", "Kubernetes", "Security", "Distributed Systems"],
    featured: true,
    architecture: {
      nodes: [
        "Microservices",
        "OpenTelemetry",
        "Metrics / Logs / Traces",
        "Prometheus / Mimir",
        "Loki",
        "Tempo",
        "Grafana",
      ],
      description:
        "A Kubernetes-native observability architecture collecting metrics, logs, and distributed traces through OpenTelemetry.",
    },
  },

  {
    slug: "devsecops-platform-procan",
    title: "DevSecOps Platform — ProCAN",
    description:
      "Built and managed a secure web application for container infrastructure management while automating infrastructure provisioning and Kubernetes deployments.",
    highlights: [
      "Built a secure web application to interact with container engine APIs.",
      "Automated infrastructure provisioning for DevSecOps tooling.",
      "Developed CI/CD pipelines integrating code analysis and security scanning.",
      "Applied GitOps methodology for continuous deployment to Kubernetes.",
      "Implemented monitoring and visualization for deployed applications.",
      "Automated builds through webhook-based triggers.",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "Maven",
      "JWT",
      "MySQL",
      "Swagger",
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
    categories: ["Cloud", "DevOps", "Kubernetes", "Backend", "Security"],
    featured: true,
    architecture: {
      nodes: [
        "Source Code",
        "CI/CD",
        "SonarQube",
        "Security Scanning",
        "Docker",
        "ArgoCD",
        "Kubernetes",
        "Prometheus / Grafana",
      ],
      description:
        "A DevSecOps workflow combining automated builds, code analysis, security scanning, GitOps deployment, and monitoring.",
    },
  },

  {
    slug: "ai-powered-cbt-platform",
    title: "AI-Powered CBT Platform",
    description:
      "Developed a cross-platform AI-powered platform supporting cognitive behavioral therapy workflows, including a generative AI chatbot.",
    highlights: [
      "Co-designed application features in collaboration with psychotherapists.",
      "Developed a cross-platform mobile and web application.",
      "Integrated a generative AI chatbot for user engagement and personalization.",
      "Containerized backend services.",
      "Deployed backend services to a scalable Kubernetes environment.",
      "Applied robust version control practices for team collaboration.",
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
    categories: ["AI/ML", "Cloud", "Kubernetes", "Backend"],
    featured: true,
    architecture: {
      nodes: [
        "Flutter",
        "Firebase",
        "Flask API",
        "OpenAI API",
        "Docker",
        "AKS",
      ],
      description:
        "A cloud-native application combining a cross-platform frontend, backend services, and a generative AI chatbot.",
    },
  },

  {
    slug: "aws-infrastructure-automation",
    title: "AWS Infrastructure Automation",
    description:
      "Automated the deployment of a complete AWS infrastructure using Terraform and Ansible, with a CI/CD pipeline for continuous delivery.",
    highlights: [
      "Automated AWS infrastructure provisioning using Terraform.",
      "Configured infrastructure components with Ansible.",
      "Designed a cloud environment using VPC, EC2, RDS, S3, and ECR.",
      "Implemented IAM configuration and infrastructure automation.",
      "Built a Jenkins CI/CD pipeline for continuous build, testing, and deployment.",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Ansible",
      "Docker Compose",
      "IAM",
      "VPC",
      "EC2",
      "S3",
      "RDS",
      "ECR",
      "Jenkins",
    ],
    categories: ["Cloud", "DevOps"],
    featured: true,
    architecture: {
      nodes: [
        "Terraform",
        "VPC",
        "EC2",
        "RDS",
        "S3",
        "ECR",
        "Jenkins",
      ],
      description:
        "Infrastructure as Code and configuration automation for a complete AWS environment.",
    },
  },

  {
    slug: "kubernetes-istio-microservices",
    title: "Deployment and Management of Microservices on Istio",
    description:
      "Deployed a microservices architecture with Istio service mesh on Kubernetes and improved observability through traffic and service analysis.",
    highlights: [
      "Deployed a microservices architecture on Kubernetes.",
      "Integrated Istio as a service mesh.",
      "Analyzed service traffic and latency.",
      "Implemented distributed tracing with Jaeger.",
      "Used GitOps workflows with ArgoCD.",
      "Monitored service health and application behavior.",
    ],
    technologies: [
      "Kubernetes",
      "Istio",
      "Kiali",
      "Jaeger",
      "ArgoCD",
      "Grafana",
    ],
    categories: ["Kubernetes", "DevOps", "Distributed Systems"],
    featured: true,
    architecture: {
      nodes: [
        "Microservices",
        "Kubernetes",
        "Istio",
        "Kiali",
        "Jaeger",
        "Grafana",
        "ArgoCD",
      ],
      description:
        "A Kubernetes microservices environment using Istio for service-to-service traffic management and observability.",
    },
  },

  {
    slug: "serverless-async-job-orchestrator",
    title: "Serverless Asynchronous Job Orchestrator",
    description:
      "Designed an event-driven serverless platform for asynchronous task processing using Azure Functions and cloud-managed services.",
    highlights: [
      "Designed an event-driven architecture for asynchronous processing.",
      "Used Azure Storage Queue for decoupled task execution.",
      "Implemented serverless processing with Azure Functions.",
      "Used Cosmos DB for persistent data storage.",
      "Automated infrastructure provisioning with Terraform.",
      "Implemented CI/CD using GitHub Actions.",
    ],
    technologies: [
      "Azure Functions",
      "Cosmos DB",
      "Storage Queue",
      "Terraform",
      "GitHub Actions",
    ],
    categories: ["Cloud", "DevOps", "Distributed Systems"],
    featured: true,
    architecture: {
      nodes: [
        "Event",
        "Storage Queue",
        "Azure Function",
        "Processing",
        "Cosmos DB",
      ],
      description:
        "An event-driven serverless architecture for decoupled asynchronous task processing.",
    },
  },

  {
    slug: "capstone-devops-project",
    title: "Capstone DevOps Project — Coursera",
    description:
      "Developed RESTful APIs using Test-Driven Development and deployed the application on OpenShift with an end-to-end CI/CD pipeline.",
    highlights: [
      "Developed RESTful APIs using Flask.",
      "Applied Test-Driven Development with Unittest.",
      "Containerized the application with Docker.",
      "Deployed the application on OpenShift.",
      "Implemented end-to-end CI/CD pipelines.",
    ],
    technologies: [
      "Kanban",
      "Flask",
      "GitHub Actions",
      "Docker",
      "OpenShift",
      "Tekton",
    ],
    categories: ["DevOps", "Cloud", "Backend"],
    featured: false,
  },

  {
    slug: "laboratory-management-microservices",
    title: "Microservices for Laboratory Management",
    description:
      "Built a distributed laboratory management platform using microservices, service discovery, authentication, and a responsive management dashboard.",
    highlights: [
      "Built a distributed microservices architecture.",
      "Implemented service discovery with Eureka.",
      "Implemented authentication and authorization using OAuth 2.0 and JWT.",
      "Developed a responsive Angular dashboard.",
      "Used PostgreSQL for persistent data management.",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "Eureka",
      "OAuth 2.0",
      "JWT",
      "PostgreSQL",
    ],
    categories: ["Backend", "Distributed Systems"],
    featured: false,
  },

  {
    slug: "etl-data-reporting-platform",
    title: "ETL & Data Reporting Platform",
    description:
      "Designed and automated end-to-end ETL pipelines for data warehouse integration and built dashboards and analytical reports.",
    highlights: [
      "Designed end-to-end ETL pipelines.",
      "Integrated data into a data warehouse.",
      "Built interactive Power BI dashboards.",
      "Created analytical reports with JasperReports.",
    ],
    technologies: [
      "SQL",
      "PostgreSQL",
      "Talend",
      "Power BI",
      "JasperReports",
    ],
    categories: ["Data"],
    featured: false,
  },

  {
    slug: "sav-management-web-application",
    title: "SAV Management Web Application",
    description:
      "Developed a secure web platform for managing customer complaints and technical interventions.",
    highlights: [
      "Developed a secure web platform for customer service management.",
      "Implemented backend services with ASP.NET Core.",
      "Used SQL Server for data persistence.",
    ],
    technologies: ["ASP.NET Core", "SQL Server"],
    categories: ["Backend"],
    featured: false,
  },

  {
    slug: "enterprise-network-simulation",
    title: "Enterprise Network Simulation",
    description:
      "Designed and configured a secure multi-VLAN enterprise network with dynamic routing, access control, and redundancy.",
    highlights: [
      "Designed a multi-VLAN enterprise network.",
      "Configured OSPF dynamic routing.",
      "Implemented ACLs and network segmentation.",
      "Configured redundancy and tested connectivity.",
    ],
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "STP",
      "OSPF",
      "DHCP",
    ],
    categories: ["Networking", "Security"],
    featured: false,
  },

  {
    slug: "windows-linux-infrastructure-administration",
    title: "Windows & Linux Infrastructure Administration",
    description:
      "Deployed and managed virtualized Windows and Linux infrastructure with directory, network, file-sharing, and security services.",
    highlights: [
      "Deployed Windows and Linux servers.",
      "Configured Active Directory.",
      "Configured DHCP and DNS services.",
      "Implemented Samba file sharing.",
      "Designed network security using pfSense.",
      "Implemented firewalling, NAT, and segmentation.",
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "DHCP",
      "DNS",
      "Linux",
      "Samba",
      "pfSense",
    ],
    categories: ["Networking", "Security"],
    featured: false,
  },

  {
    slug: "ethical-hacking-security-assessment",
    title: "Ethical Hacking & Security Assessment",
    description:
      "Conducted controlled security assessments to identify vulnerabilities and provide recommendations for system hardening.",
    highlights: [
      "Performed reconnaissance and controlled security testing.",
      "Used network analysis and security assessment tools.",
      "Identified potential vulnerabilities.",
      "Provided recommendations for hardening, patching, and incident response.",
    ],
    technologies: [
      "VMware",
      "Kali Linux",
      "Metasploit",
      "Wireshark",
      "Nmap",
    ],
    categories: ["Security", "Networking"],
    featured: false,
  },

  {
    slug: "distributed-data-processing",
    title: "Distributed Data Processing with Hadoop & Spark",
    description:
      "Built parallel data processing pipelines using MapReduce and Apache Spark for large-scale data workloads.",
    highlights: [
      "Built distributed data processing pipelines.",
      "Implemented MapReduce workloads.",
      "Developed Apache Spark processing jobs.",
      "Analyzed and optimized processing performance.",
    ],
    technologies: ["Hadoop", "Spark", "Databricks", "Java", "Bash"],
    categories: ["Data", "Distributed Systems"],
    featured: false,
  },

  {
    slug: "federated-intrusion-detection",
    title: "Federated Intrusion Detection System",
    description:
      "Developed machine learning and deep learning models for intrusion detection and explored federated learning for distributed training.",
    highlights: [
      "Developed ML and DL models for intrusion detection.",
      "Applied federated learning for distributed model training.",
      "Explored privacy-preserving machine learning approaches.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    categories: ["AI/ML", "Security", "Distributed Systems"],
    featured: false,
  },

  {
    slug: "iot-data-pipeline",
    title: "IoT Data Pipeline with Node-RED & MQTT",
    description:
      "Designed a complete IoT data ingestion and processing pipeline with real-time storage and visualization.",
    highlights: [
      "Designed an IoT data ingestion pipeline.",
      "Used MQTT for device communication.",
      "Processed data using Node-RED.",
      "Implemented real-time storage and visualization.",
    ],
    technologies: [
      "Node-RED",
      "MQTT",
      "Mosquitto",
      "Firebase",
      "JavaScript",
    ],
    categories: ["Data", "Distributed Systems"],
    featured: false,
  },

  {
    slug: "parallel-algorithms",
    title: "Parallel Algorithms — Sorting & Search",
    description:
      "Implemented sequential and parallel algorithms for sorting, search, and matrix computation and evaluated their performance.",
    highlights: [
      "Implemented sequential and parallel algorithms.",
      "Used multiprocessing and MPI for parallel execution.",
      "Implemented matrix computation workloads.",
      "Evaluated speedup and efficiency across execution environments.",
    ],
    technologies: ["Python", "multiprocessing", "mpi4py", "NumPy"],
    categories: ["Distributed Systems"],
    featured: false,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);
