import { ArrowDown, ArrowRight, Code2, ExternalLink, MapPin } from "lucide-react";
import { InfrastructureFlow } from "@/components/architecture/infrastructure-flow";
import { Terminal } from "@/components/architecture/terminal";

export function HeroSection() {
  return <section id="home" className="section-shell scroll-mt-16 py-20 sm:py-28">
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="eyebrow">Melek Badreddine / Sfax, Tunisia</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">Cloud &amp; <span className="text-cyan-200">DevOps</span><br />Engineer</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">I build cloud-native platforms, automate infrastructure, and engineer reliable systems with Kubernetes, Terraform, GitOps and modern observability.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-cyan-100 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white">View Projects <ArrowRight size={16} /></a>
          <a href="https://github.com/melekbadreddine" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500"><Code2 size={16} /> GitHub</a>
          <a href="https://linkedin.com/in/melekbadreddine" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500"><ExternalLink size={16} /> LinkedIn</a>
          <a href="/CV_Melek_BADREDDINE.pdf" download className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white">Download CV <ArrowDown size={16} /></a>
        </div>
        <p className="mt-8 flex items-center gap-2 font-mono text-xs text-slate-500"><MapPin size={13} /> Available for engineering opportunities</p>
        <Terminal />
      </div>
      <InfrastructureFlow />
    </div>
  </section>;
}
