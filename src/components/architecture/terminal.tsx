export function Terminal() {
  return <div className="mt-8 max-w-xl overflow-hidden rounded-lg border border-slate-700/70 bg-[#090e15] font-mono text-xs shadow-xl shadow-black/20">
    <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-2.5"><span className="size-2 rounded-full bg-rose-400"/><span className="size-2 rounded-full bg-amber-300"/><span className="size-2 rounded-full bg-emerald-400"/><span className="ml-2 text-slate-600">engineer@portfolio:~</span></div>
    <div className="space-y-2 p-4 leading-5"><p><span className="text-cyan-300">$</span> <span className="text-slate-300">whoami</span></p><p className="text-slate-500">melek@cloud-engineer</p><p><span className="text-cyan-300">$</span> <span className="text-slate-300">focus</span></p><p className="text-slate-500">cloud-native infrastructure &amp; reliability</p></div>
  </div>;
}
