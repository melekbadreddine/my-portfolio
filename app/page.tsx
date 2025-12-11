import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-10 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-10 md:pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Malek BADREDDINE
        </h1>
        <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
          Computer Engineer | Cloud & DevOps
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Specialized in building scalable infrastructure, automating CI/CD pipelines, and ensuring system reliability. 
          Bridging the gap between development and operations with modern cloud-native technologies.
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
            src="https://go-skill-icons.vercel.app/api/icons?i=windows,wsl,linux,bash,ubuntu,neovim,vscode,git,gitlab,html,css,js,c,cpp,java,python,go,ts,nodejs,tailwind,angular,spring,flutter,dart,swagger,postman,mysql,postgresql,mongodb,firebase,redis,numpy,pandas,matplotlib,tensorflow,azure,aws,cloudflare,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,opentelemetry,prometheus,grafana,jaeger&perline=8" 
            alt="My Skills"
            className="hidden md:block"
          />
           <img 
            src="https://go-skill-icons.vercel.app/api/icons?i=windows,wsl,linux,bash,ubuntu,neovim,vscode,git,gitlab,html,css,js,c,cpp,java,python,go,ts,nodejs,tailwind,angular,spring,flutter,dart,swagger,postman,mysql,postgresql,mongodb,firebase,redis,numpy,pandas,matplotlib,tensorflow,azure,aws,cloudflare,nginx,docker,kubernetes,helm,terraform,ansible,githubactions,jenkins,argocd,n8n,opentelemetry,prometheus,grafana,jaeger&perline=4" 
            alt="My Skills"
            className="block md:hidden"
          />
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
            title="Microservices Observability"
            description="Implemented a complete observability stack for containerized microservices using OpenTelemetry, Grafana, Loki, and Tempo."
            tags={["Kubernetes", "OpenTelemetry", "Grafana", "Terraform"]}
          />
          <ProjectCard 
            title="DevSecOps Platform"
            description="Automated infrastructure provisioning and CI/CD pipelines integrating security scanning with Trivy and SonarQube."
            tags={["Jenkins", "ArgoCD", "Azure", "Docker"]}
          />
          <ProjectCard 
            title="AI-Powered CBT Platform"
            description="Cross-platform mobile & web app for mental health support, containerized and deployed on AKS with Generative AI integration."
            tags={["Flutter", "Python/Flask", "Azure AKS", "OpenAI"]}
          />
           <ProjectCard 
            title="Distributed Data Processing"
            description="Big Data pipeline using Hadoop MapReduce and Spark on Databricks for parallel processing of large datasets."
            tags={["Spark", "Hadoop", "Databricks", "Java"]}
          />
          <ProjectCard 
            title="AWS Infra Automation"
            description="Automated AWS infrastructure deployment (VPC, EC2, RDS) using Terraform and Ansible with Jenkins CI/CD."
            tags={["AWS", "Terraform", "Ansible", "Jenkins"]}
          />
          <ProjectCard 
            title="Smart Parking DApp"
            description="Decentralized application for parking reservation using Ethereum smart contracts and AI license plate recognition."
            tags={["Blockchain", "Solidity", "TensorFlow", "YOLO"]}
          />
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
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