import { Braces, BrainCircuit, Code2, Wrench } from "lucide-react"

const skillCategories = [
  { category: "Languages", icon: Code2, skills: ["Python", "C++", "TypeScript", "JavaScript", "Java", "SQL", "Bash"] },
  { category: "Frameworks & Data", icon: Braces, skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django", "Flask", "PostgreSQL", "Redis", "Pandas", "scikit-learn"] },
  { category: "AI Engineering", icon: BrainCircuit, skills: ["OpenAI", "Azure OpenAI", "LangChain", "LangGraph", "RAG", "Embeddings", "LLM Agents", "Evals"] },
  { category: "Infrastructure & Tools", icon: Wrench, skills: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Git", "pytest", "MongoDB", "Jira"] },
]

export default function Skills() {
  return <section id="skills" className="border-t border-border bg-card/25 py-24"><div className="mx-auto max-w-7xl px-4 md:px-6">
    <div className="mb-12"><p className="section-label mb-3">capabilities.json</p><h2 className="section-title text-4xl font-bold tracking-tight md:text-5xl">Technical Skills</h2></div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {skillCategories.map((category) => { const Icon = category.icon; return <article key={category.category} className="glass-panel rounded-2xl p-6 transition-all hover:border-primary/50 lg:col-span-3"><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary"><Icon className="size-5" /></span><h3 className="font-bold text-foreground">{category.category}</h3></div><span className="font-mono text-xs text-muted-foreground">{String(category.skills.length).padStart(2, "0")}</span></div><div className="flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill} className="rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent">{skill}</span>)}</div></article> })}
    </div>
  </div></section>
}
