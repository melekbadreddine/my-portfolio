/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Github, Calendar, MapPin, Building2, GraduationCap, Trophy, Terminal, Rocket, Cpu, Radio } from "lucide-react"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { GuestbookSection } from "@/components/sections/guestbook-section"
import { StarField } from "@/components/3d/star-field"
import { Astronaut } from "@/components/3d/astronaut"

export const dynamic = "force-dynamic"

export default async function Home() {
  const session = await auth()
  
  const entries = await db.guestbookEntry.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  })

  return (
    <div className="relative min-h-screen font-sans">
      <StarField />
      
      <div className="container mx-auto px-4 relative z-10 py-10 space-y-24">

        {/* Hero Section */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-10 md:pt-20">
          <div className="space-y-6 order-2 lg:order-1 text-left">
            <div className="flex items-center gap-2 text-indigo-400 animate-pulse">
               <Radio className="w-4 h-4" />
               <span className="text-sm font-mono tracking-widest uppercase">Incoming Transmission</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl text-white text-glow">
              Hi 👋, I'm <br />
              <span className="text-indigo-400">Melek BADREDDINE</span>
            </h1>
            <h2 className="text-2xl font-semibold text-indigo-200 sm:text-3xl font-mono">
              Junior Computer Engineer | Cloud & DevOps Commander
            </h2>
            <p className="max-w-[600px] text-lg text-slate-300 sm:text-xl leading-relaxed">
              🎓 Graduate of the National School of Engineers of Sfax (ENIS). <br/>
              Mission: Architecting innovative Cloud, DevOps, and AI-driven systems.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-lg shadow-indigo-500/20">
                <Link href="#guestbook">Sign Mission Log <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-indigo-400 text-indigo-300 hover:bg-indigo-900/50 hover:text-white">
                <Link href="https://github.com/melekbadreddine" target="_blank">
                  <Github className="mr-2 h-4 w-4" /> GitHub Channel
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
                <a href="/Resume_Melek_BADREDDINE.pdf" download>
                  Download Dossier
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-full w-full">
            <Astronaut />
          </div>
        </section>

        {/* Tech Arsenal Section */}
        <section id="skills" className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-4 ring-1 ring-indigo-500/30">
              <Cpu className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Tech Arsenal</h2>
            <p className="max-w-[700px] text-slate-400">
              Operational modules and technologies equipped for system deployment.
            </p>
          </div>
          <div className="flex justify-center p-6 glass-panel rounded-xl overflow-hidden">
            {/* Using Skill Icons API */}
            <img 
              src="https://go-skill-icons.vercel.app/api/icons?i=windows,linux,bash,popos,neovim,vscode,git,gitlab,jira,confluence,html,css,js,java,python,go,ts,nodejs,tailwind,angular,spring,swagger,postgresql,mongodb,redis,numpy,pandas,matplotlib,tensorflow,crewai,azure,aws,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,sonarqube,opentelemetry,prometheus,grafana,jaeger&perline=14" 
              alt="My Skills"
              className="hidden md:block opacity-90 hover:opacity-100 transition-opacity"
            />
             <img 
              src="https://go-skill-icons.vercel.app/api/icons?i=windows,linux,bash,popos,neovim,vscode,git,gitlab,jira,confluence,html,css,js,java,python,go,ts,nodejs,tailwind,angular,spring,swagger,postgresql,mongodb,redis,numpy,pandas,matplotlib,tensorflow,crewai,azure,aws,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,opentelemetry,prometheus,grafana,jaeger&perline=6" 
              alt="My Skills"
              className="block md:hidden opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        {/* Mission Log (Experience) Section */}
        <section id="experience" className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4 ring-1 ring-blue-500/30">
              <Rocket className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Mission Log</h2>
            <p className="max-w-[700px] text-slate-400">
              Chronicle of professional deployments and operations.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="glass-card border-none text-slate-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-indigo-500/30 rounded-xl bg-black">
                        <AvatarImage src={`/logos/exp/${job.company.toLowerCase().replace(/ /g, "-")}.png`} alt={job.company} className="object-contain p-1"/>
                        <AvatarFallback className="font-bold bg-slate-800 text-indigo-400">{job.logoFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-white font-mono">{job.role}</CardTitle>
                        <div className="flex items-center gap-2 text-sm font-medium text-indigo-300">
                          <Building2 className="h-3 w-3" />
                          <span>{job.company}</span>
                          {job.type && <span className="bg-indigo-500/20 px-2 py-0.5 rounded-full text-xs">· {job.type}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-slate-500 pl-20 md:pl-0 font-mono">
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
                  <ul className="list-disc list-outside space-y-2 text-sm text-slate-400 mb-6 marker:text-indigo-500">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-300 transition-colors hover:bg-indigo-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deployed Systems (Projects) Section */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4 ring-1 ring-purple-500/30">
              <Terminal className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Deployed Systems</h2>
            <p className="max-w-[700px] text-slate-400">
              A gallery of successful engineering launches and software artifacts.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="AWS Infrastructure Automation & CI/CD Pipeline"
              description={[
                "Automated AWS infrastructure provisioning (Terraform, Ansible).",
                "Remote state management via S3 & DynamoDB.",
                "Jenkins CI/CD pipeline for build/test/deploy automation.",
                "Container management with ECR & EC2 deployments.",
              ]}
              tags={["Terraform", "Ansible", "Docker", "Jenkins", "AWS", "S3", "RDS"]}
            />
            <ProjectCard
              title="Microservices Mesh with Istio"
              description={[
                "Deployed microservices on Kubernetes with Istio.",
                "Managed traffic flow, latency, and service communication.",
                "Observability via Kiali, Jaeger, and Grafana.",
                "GitOps deployment strategy using ArgoCD.",
              ]}
              tags={["Kubernetes", "Istio", "ArgoCD", "Kiali", "Grafana"]}
            />
            <ProjectCard
              title="DevOps Capstone (Coursera)"
              description={[
                "Developed TDD Flask APIs.",
                "Deployed containerized app on OpenShift.",
                "GitHub Actions & Tekton CI/CD pipelines.",
                "Agile/Kanban project management.",
              ]}
              tags={["Flask", "GitHub Actions", "Docker", "OpenShift", "Tekton"]}
            />
            <ProjectCard
              title="Lab Management Microservices"
              description={[
                "Distributed architecture with Eureka service discovery.",
                "OAuth 2.0 & JWT security implementation.",
                "Dockerized services with Angular frontend.",
              ]}
              tags={["Spring Boot", "Angular", "PostgreSQL", "Eureka", "Docker"]}
            />
            <ProjectCard
              title="Hybrid Network Administration"
              description={[
                "Virtualized Windows/Linux servers (VMware).",
                "Configured AD, DNS, DHCP, and Samba.",
                "Network security via pfSense & NAT.",
              ]}
              tags={["VMware", "Win Server", "Linux", "Samba", "pfSense"]}
            />
            <ProjectCard
              title="IoT System (Node-RED & MQTT)"
              description={[
                "IoT connectivity via Node-RED.",
                "Real-time messaging with MQTT (Mosquitto).",
                "Firebase storage & dashboard visualization.",
              ]}
              tags={["Node-RED", "MQTT", "Firebase", "JS"]}
            />
          </div>
        </section>

        {/* Training Academy (Education) Section */}
        <section id="education" className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-4 ring-1 ring-emerald-500/30">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Training Academy</h2>
             <p className="max-w-[700px] text-slate-400">
                Academic credentials and theoretical foundations.
            </p>
          </div>
           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                  <Card key={index} className="flex flex-col glass-card border-none">
                      <CardHeader>
                          <div className="flex items-center gap-4">
                              <Avatar className="h-14 w-14 border-2 border-emerald-500/30 rounded-xl bg-white">
                                  <AvatarImage src={`/logos/edu/${edu.logoFallback.toLowerCase()}.png`} alt={edu.school} className="object-contain p-1" />
                                  <AvatarFallback className="font-bold text-emerald-600">{edu.logoFallback}</AvatarFallback>
                              </Avatar>
                              <div>
                                  <CardTitle className="text-lg text-white">{edu.school}</CardTitle>
                                  <p className="text-sm text-emerald-400">{edu.degree}</p>
                              </div>
                          </div>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                          <div className="flex flex-col gap-2 text-sm text-slate-400">
                               <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-emerald-500" />
                                  <span>{edu.duration}</span>
                              </div>
                               <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-emerald-500" />
                                  <span>{edu.location}</span>
                              </div>
                              {edu.details && (
                                  <div className="flex items-center gap-2">
                                      <GraduationCap className="h-4 w-4 text-emerald-500" />
                                      <span>{edu.details}</span>
                                  </div>
                              )}
                          </div>
                          {edu.coursework && (
                              <div className="text-sm text-slate-500 border-t border-white/5 pt-4 mt-2">
                                  <span className="font-semibold text-emerald-400">Relevant Coursework:</span> {edu.coursework}
                              </div>
                          )}
                      </CardContent>
                  </Card>
              ))}
          </div>
        </section>

        {/* Side Missions (Activities) Section */}
         <section id="activities" className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-full mb-4 ring-1 ring-yellow-500/30">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Side Missions</h2>
            <p className="max-w-[700px] text-slate-400">
                Community engagement and extra-vehicular activities.
            </p>
          </div>
           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {activities.map((activity, index) => (
                  <Card key={index} className="flex flex-col glass-card border-none">
                       <CardHeader>
                          <div className="flex items-center gap-3">
                               <Trophy className="h-5 w-5 text-yellow-500" />
                               <CardTitle className="text-lg text-white">{activity.role}</CardTitle>
                          </div>
                       </CardHeader>
                       <CardContent className="flex-1 space-y-2">
                          <p className="font-medium text-yellow-100">{activity.organization}</p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Calendar className="h-3 w-3" />
                              <span>{activity.duration}</span>
                          </div>
                           <div className="flex items-center gap-2 text-xs text-slate-500">
                              <MapPin className="h-3 w-3" />
                              <span>{activity.location}</span>
                          </div>
                          {activity.description && (
                              <p className="text-sm text-slate-400 mt-2 border-t border-white/5 pt-2">{activity.description}</p>
                          )}
                       </CardContent>
                  </Card>
              ))}
          </div>
        </section>

        {/* Guestbook Section */}
        <div className="glass-panel rounded-3xl p-6 md:p-10">
          <GuestbookSection session={session} entries={entries} />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string, description: string[], tags: string[] }) {
  return (
    <Card className="flex flex-col h-full glass-card border-none hover:bg-white/10 transition-colors group">
      <CardHeader>
        <CardTitle className="text-white group-hover:text-indigo-300 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="list-disc list-inside text-sm text-slate-400 mb-6 marker:text-indigo-500">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-slate-300 transition-colors group-hover:border-indigo-500/50 group-hover:text-indigo-200">
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