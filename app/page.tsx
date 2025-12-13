/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Github, Calendar, MapPin, Building2, GraduationCap, Trophy } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-10 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-10 md:pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Melek BADREDDINE
        </h1>
        <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
          Junior Computer Engineer | Cloud & DevOps
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          🎓 Recently graduated from the National School of Engineers of Sfax (ENIS), I am eager to contribute to innovative projects in Cloud, DevOps, Observability, and AI-driven systems, leveraging my technical expertise and passion for continuous improvement.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/guestbook">Sign Guestbook <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/melekbadreddine" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button asChild size="lg">
            <a href="/Resume_Melek_BADREDDINE.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Arsenal</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Technologies I use to build and deploy robust systems.
          </p>
        </div>
        <div className="flex justify-center">
          {/* Using Skill Icons API */}
          <img 
            src="https://go-skill-icons.vercel.app/api/icons?i=windows,linux,bash,ubuntu,catppuccin,neovim,vscode,git,gitlab,jira,confluence,html,css,js,java,python,go,ts,nodejs,tailwind,angular,spring,swagger,postgresql,mongodb,redis,numpy,pandas,matplotlib,tensorflow,crewai,azure,aws,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,opentelemetry,prometheus,grafana,jaeger&perline=8" 
            alt="My Skills"
            className="hidden md:block"
          />
           <img 
            src="https://go-skill-icons.vercel.app/api/icons?i=windows,linux,bash,ubuntu,catppuccin,neovim,vscode,git,gitlab,jira,confluence,html,css,js,java,python,go,ts,nodejs,tailwind,angular,spring,swagger,postgresql,mongodb,redis,numpy,pandas,matplotlib,tensorflow,crewai,azure,aws,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,opentelemetry,prometheus,grafana,jaeger&perline=4" 
            alt="My Skills"
            className="block md:hidden"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Experience</h2>
          <p className="max-w-[700px] text-muted-foreground">
            My journey in the tech industry, featuring hands-on roles and impactful internships.
          </p>
        </div>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border rounded-none">
                      <AvatarImage src={`/logos/exp/${job.company.toLowerCase().replace(/ /g, "-")}.png`} alt={job.company} />
                      <AvatarFallback className="font-bold">{job.logoFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        <span>{job.company}</span>
                        {job.type && <span>· {job.type}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground pl-16 md:pl-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <MapPin className="h-3 w-3" />
                       <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-6 md:pl-24">
                <ul className="list-disc list-outside space-y-2 text-sm text-muted-foreground mb-6">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground">
            A selection of my work in DevOps, Cloud Engineering, and Software Development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="AWS Infrastructure Automation and CI/CD Pipeline"
            description={[
              "Automated the provisioning of a complete AWS infrastructure using Terraform and Ansible",
              "Implemented remote Terraform state management using Amazon S3 with DynamoDB state locking",
              "Built a CI/CD pipeline with Jenkins to automate build, test, and deployment workflows",
              "Managed container images using Amazon ECR and deployed applications on EC2 instances",
            ]}
            tags={["Terraform", "Ansible", "Docker Compose", "Jenkins", "AWS IAM", "VPC", "EC2", "S3", "RDS", "ECR", "DynamoDB"]}
          />
          <ProjectCard
            title="Microservices Deployment and Service Mesh with Istio"
            description={[
              "Deployed a microservices-based architecture on Kubernetes with Istio service mesh integration",
              "Managed and observed service-to-service communication, traffic flow, and latency",
              "Monitored system performance and service dependencies using Kiali, Jaeger, and Grafana",
              "Implemented GitOps-based deployments using ArgoCD",
            ]}
            tags={["Kubernetes", "Istio", "ArgoCD", "Kiali", "Jaeger", "Grafana"]}
          />
          <ProjectCard
            title="DevOps Capstone Project (Coursera)"
            description={[
              "Developed RESTful APIs using Flask, applying Test-Driven Development (TDD) principles",
              "Containerized the application and deployed it on OpenShift (Kubernetes)",
              "Built CI/CD pipelines using GitHub Actions and Tekton to automate testing and deployment",
              "Applied Agile/Kanban practices for task tracking and delivery",
            ]}
            tags={["Flask", "GitHub Actions", "Docker", "OpenShift", "Tekton", "Kanban"]}
          />
          <ProjectCard
            title="Laboratory Management Microservices Application"
            description={[
              "Designed and implemented a distributed microservices architecture with service discovery via Eureka",
              "Implemented secure authentication and authorization using OAuth 2.0 and JWT",
              "Containerized and deployed services using Docker",
              "Developed an Angular front-end for real-time data management and visualization",
            ]}
            tags={["Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Firebase", "Eureka", "JWT", "OAuth 2.0", "Docker"]}
          />
          <ProjectCard
            title="Hybrid Windows & Linux Network Administration"
            description={[
              "Virtualized Windows and Linux servers using VMware",
              "Configured Active Directory, DNS, and DHCP in a Windows Server environment",
              "Designed and secured the network using pfSense, including NAT rules and network segmentation",
              "Implemented file sharing and access control between Windows and Linux systems using Samba",
            ]}
            tags={["VMware", "Windows Server", "Active Directory", "DHCP", "DNS", "Ubuntu", "Samba", "pfSense"]}
          />
          <ProjectCard
            title="IoT System Implementation with Node-RED and MQTT"
            description={[
              "Built a basic IoT system using Node-RED to connect devices and services",
              "Implemented real-time messaging using the MQTT protocol with a Mosquitto broker",
              "Stored and visualized data in Firebase and Node-RED dashboards",
              "Tested IoT APIs and data flows using Postman",
            ]}
            tags={["Node-RED", "MQTT", "Mosquitto", "Firebase", "JavaScript", "Postman"]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
             <p className="max-w-[700px] text-muted-foreground">
                Academic background and qualifications.
            </p>
        </div>
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border rounded-none">
                                <AvatarImage src={`/logos/edu/${edu.logoFallback.toLowerCase()}.png`} alt={edu.school} />
                                <AvatarFallback className="font-bold">{edu.logoFallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">{edu.school}</CardTitle>
                                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                             <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.duration}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{edu.location}</span>
                            </div>
                            {edu.details && (
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span>{edu.details}</span>
                                </div>
                            )}
                        </div>
                        {edu.coursework && (
                            <div className="text-sm text-muted-foreground">
                                <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Extracurricular Section */}
       <section id="activities" className="space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Extracurricular Activities</h2>
            <p className="max-w-[700px] text-muted-foreground">
                Leadership, volunteering, and community involvement.
            </p>
        </div>
         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {activities.map((activity, index) => (
                <Card key={index} className="flex flex-col">
                     <CardHeader>
                        <div className="flex items-center gap-2">
                             <Trophy className="h-5 w-5 text-yellow-500" />
                             <CardTitle className="text-lg">{activity.role}</CardTitle>
                        </div>
                     </CardHeader>
                     <CardContent className="flex-1 space-y-2">
                        <p className="font-medium">{activity.organization}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{activity.duration}</span>
                        </div>
                         <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{activity.location}</span>
                        </div>
                        {activity.description && (
                            <p className="text-sm text-muted-foreground mt-2">{activity.description}</p>
                        )}
                     </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string, description: string[], tags: string[] }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const experience = [
  {
    role: "DevOps Engineer",
    company: "Qim info",
    type: "Internship",
    duration: "Feb 2025 - Jun 2025",
    location: "5 mos",
    description: [
      "Implemented an observability solution to monitor containerized microservices.",
      "Instrumented applications to collect traces, metrics, and logs with minimal code changes.",
      "Built an automated CI/CD pipeline for containerization, scanning, and deployment.",
      "Integrated security and performance testing into the DevOps lifecycle.",
      "Implemented ingress routing to bridge local environments with cloud-hosted backends.",
      "Demonstrated a production-ready architecture combining observability, automation, and security."
    ],
    skills: ["Jira", "Confluence", "Kubernetes", "OpenTelemetry", "Terraform", "GCP", "Helm", "GitLab CI/CD", "ArgoCD", "Trivy", "Falco", "Prometheus", "JMeter", "OctoPerf", "Mimir", "Loki", "Tempo", "Grafana"],
    logoFallback: "QI"
  },
  {
    role: "DevOps Engineer",
    company: "ProCAN",
    type: "Internship",
    duration: "Jun 2024 - Jul 2024",
    location: "2 mos",
    description: [
      "Built and managed a secure web application to manipulate container engine APIs.",
      "Automated the provisioning of infrastructure to host DevSecOps tools.",
      "Developed CI/CD pipelines integrating code analysis and security scanning.",
      "Applied GitOps methodology to enable continuous deployment to Kubernetes.",
      "Implemented monitoring and visualization for deployed applications.",
      "Ensured reliable version control and automated builds with webhook-based triggers."
    ],
    skills: ["Spring Boot", "Maven", "JSON Web Token", "MySQL", "JasperReports", "Swagger", "Angular", "VMware", "Docker", "Kubernetes", "Terraform", "Azure", "Jenkins", "SonarQube", "Trivy", "Git", "GitHub", "ArgoCD", "Helm", "Prometheus", "Grafana"],
    logoFallback: "PC"
  },
  {
    role: "DevOps Engineer",
    company: "REGIM Lab",
    type: "",
    duration: "Dec 2023 - May 2024",
    location: "6 mos",
    description: [
      "Co-designed app features in collaboration with psychotherapists from Hédi Chaker Hospital.",
      "Developed a cross-platform mobile & web app for cognitive behavioral therapy support.",
      "Integrated a generative AI chatbot to enhance user engagement and personalization.",
      "Containerized backend services and deployed them to a scalable cluster environment.",
      "Facilitated seamless collaboration with robust version control practices.",
      "Delivered a complete AI-Powered CBT Mental Health Platform optimized for scalability."
    ],
    skills: ["Flutter", "Firebase", "OAuth 2.0", "Git", "GitHub", "Flask", "OpenAI API", "Docker", "Azure Kubernetes Service (AKS)"],
    logoFallback: "RL"
  },
  {
    role: "Frontend Developer",
    company: "Nehos Groupe",
    type: "Internship",
    duration: "Jun 2023 - Jun 2023",
    location: "1 mo",
    description: [
      "Developed a responsive and user-friendly website for Nehos Groupe.",
      "Applied modern web design principles to ensure cross-device compatibility.",
      "Enhanced UI/UX using layout frameworks and media query best practices."
    ],
    skills: ["HTML", "CSS Bootstrap", "JavaScript"],
    logoFallback: "NG"
  }
]

const education = [
  {
    school: "National School of Engineers of Sfax",
    degree: "Computer Engineering Degree",
    duration: "Sept. 2022 - June 2025",
    location: "Sfax, TN",
    details: "EUR-ACE Label",
    coursework: "Cloud Computing, DevOps, Artificial Intelligence, Deep Learning, Computer Security, Networks, Distributed Systems, Advanced Databases, Software Engineering...",
    logoFallback: "ENIS"
  },
  {
    school: "Preparatory Institute for Engineering Studies of Sfax",
    degree: "Preparatory Engineering Cycle in Mathematics and Physical Sciences",
    duration: "Sept. 2020 - June 2022",
    location: "Sfax, TN",
    details: "",
    coursework: "Analysis, Algebra, Physics, Computer Science, Engineering Sciences and Technologies...",
    logoFallback: "IPEIS"
  }
]

const activities = [
  {
    role: "Member",
    organization: "Microsoft Tech Club (MTC) and IEEE ENIS Student Branch",
    duration: "Sept. 2022 - June 2025",
    location: "National School of Engineers of Sfax (ENIS)",
    description: "Active participation in technical events, workshops, and training sessions."
  },
  {
    role: "Organizer – Media team member",
    organization: "Pitch Yourself For A Career 9.0",
    duration: "Sept. 2023 - Nov. 2023",
    location: "MARASSIM, Sfax",
    description: ""
  },
  {
    role: "Organizer – Logistics team member",
    organization: "HELLO WORLD! 3.0 – Programming Event",
    duration: "March 2023 - April 2023",
    location: "Sfax Digital Research Center (CRNS)",
    description: ""
  }
]
