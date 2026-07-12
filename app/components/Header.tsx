"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = ["About", "Experience", "Projects", "Skills"]

export default function Header() {
  const [active, setActive] = useState("about")
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    const sections = links.map((link) => document.getElementById(link.toLowerCase())).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-border">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6" aria-label="Primary navigation">
        <Link href="#about" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">AD</span>
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">andrew.do</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => {
            const id = link.toLowerCase()
            return (
              <li key={link}>
                <a href={`#${id}`} className={`rounded-lg px-4 py-2 font-mono text-xs transition-colors ${active === id ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                  <span className="mr-1 text-primary/70">0{index + 1}.</span>{link}
                </a>
              </li>
            )
          })}
        </ul>
        <button type="button" className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => <li key={link}><a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="flex rounded-lg px-3 py-3 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"><span className="mr-2 text-primary">0{index + 1}.</span>{link}</a></li>)}
          </ul>
        </div>
      )}
    </header>
  )
}
