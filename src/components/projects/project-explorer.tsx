"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";

const filters: ("All" | ProjectCategory)[] = ["All", "Cloud", "DevOps", "Kubernetes", "Backend", "AI/ML", "Data", "Security", "Networking", "Distributed Systems"];
export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter)), [filter, projects]);
  return <div className="mt-12"><div className="flex gap-2 overflow-x-auto pb-3" aria-label="Project filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition focus-visible:outline-2 focus-visible:outline-cyan-300 ${filter === item ? "border-cyan-200/60 bg-cyan-200/10 text-cyan-100" : "border-slate-700 text-slate-400 hover:text-white"}`}>{item}</button>)}</div><div className="grid gap-3 md:grid-cols-2">{shown.map((project) => <article className="surface rounded-lg p-5 transition hover:border-slate-500" key={project.slug}><div className="flex items-start justify-between gap-3"><h3 className="font-medium text-white">{project.title}</h3><span className="font-mono text-[10px] text-slate-600">{project.categories[0]}</span></div><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.technologies.slice(0, 5).map((tech) => <span className="rounded border border-slate-700 px-2 py-1 font-mono text-[10px] text-slate-400" key={tech}>{tech}</span>)}</div></article>)}</div></div>;
}
