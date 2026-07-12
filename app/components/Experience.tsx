"use client"

import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const experiences = [
  { title: "Software Engineer Intern", company: "Panasonic Avionics Corporation", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ixDBsBMM3fz48ZmnAAkW0E5uhBglE.png", location: "Irvine, CA", period: "Jun. 2026 – Sep. 2026", achievements: ["Owned a first-of-its-kind hybrid virtual rack CI workflow extending physical Intel NUC-based rack testing with AWS/Kubernetes-backed virtual servers, reducing repeated environment setup time by an estimated 60%.", "Engineered GitLab CI/CD automation using Python, Bash, YAML, Docker, and pytest to generate rack configurations, deploy builds, run smoke/regression suites, and gate promotion through a 3-stage virtual-to-physical validation hierarchy.", "Built an AI-assisted CI failure triage layer using LangChain, OpenAI LLMs, embeddings/RAG, JUnit/log parsing, and JIRA APIs to retrieve similar failures, classify root causes, summarize logs, and create actionable tickets, reducing manual debugging effort by an estimated 70%."] },
  { title: "Software Engineer Intern", company: "Panasonic Avionics Corporation", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ixDBsBMM3fz48ZmnAAkW0E5uhBglE.png", location: "Irvine, CA", period: "Jun. 2025 – Sep. 2025", achievements: ["Designed and Dockerized a Python-based satellite modem simulator for distributed integration testing, exposing REST APIs, MQTT pub/sub, and programmable device states to reduce dependence on physical hardware.", "Deployed simulator services through GitLab CI/CD on AWS with structured logs, telemetry, and repeatable initialization workflows, cutting manual test environment setup from hours to minutes."] },
  { title: "Software Engineer Intern", company: "SuperIntro", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c7bAAR6nQAxMQF4Sld2pSYMyDfTgGS.png", location: "San Francisco, CA", period: "Feb. 2025 – Apr. 2025", achievements: ["Built a production LLM agent matching service with LangGraph, LangChain, Azure OpenAI, tool calling, memory, embeddings, eval harnesses, and guardrails, improving match quality by 15%.", "Owned backend and frontend systems for onboarding and paid subscriptions using React, TypeScript, Express, and PostgreSQL; reduced median LLM response latency by 35% through caching, batching, and streaming."] },
]

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)
  return (
    <section id="experience" className="border-y border-border bg-card/25 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="section-label mb-3">career.log</p><h2 className="section-title text-4xl font-bold tracking-tight md:text-5xl">Experience</h2></div><p className="max-w-md text-sm leading-relaxed text-muted-foreground">Building reliable systems across aviation connectivity, AI products, and developer infrastructure.</p></div>
        <div className="relative max-w-5xl before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-border md:before:left-8">
          {experiences.map((exp, index) => {
            const isOpen = expanded === index
            const panelId = `experience-${index}`
            return <article key={`${exp.company}-${exp.period}`} className="relative pb-7 pl-14 md:pl-24">
              <div className="absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-primary/40 bg-background font-mono text-xs font-bold text-primary md:size-16">0{index + 1}</div>
              <div className={`glass-panel overflow-hidden rounded-2xl transition-colors ${isOpen ? "border-primary/50" : "hover:border-primary/30"}`}>
                <button type="button" className="flex w-full flex-col gap-5 p-6 text-left md:flex-row md:items-center md:justify-between md:p-8" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setExpanded(isOpen ? null : index)}>
                  <div className="flex items-start gap-4"><div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-background"><Image src={exp.logo} alt={`${exp.company} logo`} fill sizes="56px" className="object-contain" /></div><div><h3 className="text-xl font-bold text-foreground md:text-2xl">{exp.title}</h3><p className="mt-1 flex items-center gap-2 text-sm font-semibold text-primary"><Briefcase className="size-4" />{exp.company}</p><p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5" />{exp.location}</p></div></div>
                  <div className="flex items-center justify-between gap-4 md:flex-col md:items-end"><span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-xs text-muted-foreground"><Calendar className="size-3.5 text-primary" />{exp.period}</span><ChevronDown className={`size-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} /></div>
                </button>
                <div id={panelId} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><ul className="flex flex-col gap-4 border-t border-border px-6 py-6 md:px-8">{exp.achievements.map((achievement, i) => <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" /><span>{achievement}</span></li>)}</ul></div></div>
              </div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
