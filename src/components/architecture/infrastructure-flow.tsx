const stages = ["Developer", "Git", "CI/CD", "Container", "Kubernetes", "Observability"];
export function InfrastructureFlow() { return <div className="surface relative overflow-hidden rounded-lg p-5 shadow-2xl shadow-cyan-950/20">
  <div className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500"><span className="size-2 rounded-full bg-rose-400" /><span className="size-2 rounded-full bg-amber-300" /><span className="size-2 rounded-full bg-emerald-400" /><span className="ml-2">platform.flow</span></div>
  <div className="space-y-1">{stages.map((stage, index) => <div key={stage}><div className="flex items-center justify-between border border-slate-700/70 bg-slate-900/60 px-4 py-3 font-mono text-sm text-slate-200"><span className="text-cyan-300">0{index + 1}</span><span>{stage}</span><span className="text-slate-600">{index === stages.length - 1 ? "◉" : "→"}</span></div>{index < stages.length - 1 && <div className="h-3 border-l border-dashed border-cyan-500/40 ml-6" />}</div>)}</div>
  <p className="mt-6 border-t border-slate-800 pt-4 font-mono text-xs text-slate-500">delivery pipeline / continuously observed</p>
</div>; }
