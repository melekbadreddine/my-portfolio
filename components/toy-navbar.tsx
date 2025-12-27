"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { ThemeToggle } from "./theme-toggle"
import { Home, Cpu, Rocket, Terminal, GraduationCap, Trophy, BookOpen, LogOut, LogIn } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ToyNavbar() {
  const { data: session } = useSession()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    const sections = ["hero", "skills", "experience", "projects", "education", "activities", "guestbook"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", href: "#hero", id: "hero", icon: Home },
    { name: "Tech Arsenal", href: "#skills", id: "skills", icon: Cpu },
    { name: "Mission Log", href: "#experience", id: "experience", icon: Rocket },
    { name: "Deployed Systems", href: "#projects", id: "projects", icon: Terminal },
    { name: "Academy", href: "#education", id: "education", icon: GraduationCap },
    { name: "Side Missions", href: "#activities", id: "activities", icon: Trophy },
    { name: "Guestbook", href: "#guestbook", id: "guestbook", icon: BookOpen },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <motion.nav 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex flex-col items-center gap-2 p-2 rounded-full glass-panel border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-black/40"
      >
        <div className="flex flex-col items-center gap-1 bg-white/5 rounded-full p-1 pb-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              <motion.div
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "relative group p-3 rounded-full transition-all duration-300",
                  activeSection === item.id 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50 scale-110" 
                    : "hover:bg-white/20 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400"
                )}
              >
                <item.icon className={cn("w-5 h-5", activeSection === item.id ? "text-white" : "text-indigo-600 dark:text-indigo-400")} />
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="w-8 h-px bg-white/20 my-1" />

        <div className="flex flex-col items-center gap-2 pb-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ThemeToggle />
          </motion.div>

          {session?.user ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => signOut()}
              className="p-3 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500"
              title="Abort Mission"
            >
              <LogOut className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => signIn("github")}
              className="p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400"
              title="Join Crew"
            >
              <LogIn className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </motion.nav>
    </div>
  )
}
