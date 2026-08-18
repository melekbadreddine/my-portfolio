"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#080b12]/85 backdrop-blur-xl">
    <nav className="section-shell flex h-16 items-center justify-between" aria-label="Main navigation">
      <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-white">MB<span className="text-cyan-300">.</span></a>
      <div className="hidden items-center gap-6 md:flex">{links.map((link) => <a className="text-sm text-slate-400 transition hover:text-white focus-visible:text-white" href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>
      <a href="mailto:badreddine.malek@enis.tn" className="hidden rounded-md border border-cyan-200/30 px-3 py-1.5 text-xs font-medium text-cyan-100 hover:border-cyan-200/70 md:block">Get in touch</a>
      <button className="rounded p-2 text-slate-300 focus-visible:outline-2 focus-visible:outline-cyan-300 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {open && <div id="mobile-navigation" className="border-t border-slate-800 bg-[#080b12] px-5 py-4 md:hidden">{links.map((link) => <a className="block rounded px-3 py-2 text-sm text-slate-300 hover:bg-slate-800" onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>}
  </header>;
}
