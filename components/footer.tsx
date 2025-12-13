import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/melekbadreddine"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Malek BADREDDINE
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/melekbadreddine"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/melekbadreddine" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com/in/melekbadreddine" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <a href="mailto:badreddine.malek@enis.tn">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="https://wa.me/21654459691" target="_blank" rel="noreferrer">
            <Phone className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
      </div>
    </footer>
  )
}