import { Braces, BrainCircuit, Code2, Network, Wrench } from "lucide-react"

const skillCategories = [
  { category: "Programming Languages", icon: Code2, skills: ["Python", "C++", "TypeScript", "JavaScript", "Java", "R", "HTML/CSS", "Bash"] },
  { category: "Frameworks & Libraries", icon: Braces, skills: ["React", "Node.js", "Express.js", "Flask", "scikit-learn", "Pandas", "Beautiful Soup", "pytest"] },
  { category: "AI Engineering", icon: BrainCircuit, skills: ["OpenAI API", "Azure OpenAI", "LangChain", "LangGraph", "LLM Agents", "Embeddings", "RAG", "Evals", "Prompt Engineering"] },
  { category: "Tools & Technologies", icon: Wrench, skills: ["Docker", "Kubernetes", "GitLab CI/CD", "AWS Vrack", "MongoDB", "SQL", "REST APIs", "Git", "Jira", "Jupyter Notebook"] },
  { category: "Concepts & Protocols", icon: Network, skills: ["Containerization", "CI/CD Pipelines", "MQTT", "OpenAMIP", "TCP/IP", "UDP", "Agile Methodologies"] },
]

export default function Skills() {
  return <section id="skills" className="border-t border-border bg-card/25 py-24"><div className="mx-auto max-w-7xl px-4 md:px-6">
    <div className="mb-12"><p className="section-label mb-3">capabilities.json</p><h2 className="section-title text-4xl font-bold tracking-tight md:text-5xl">Technical Skills</h2></div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {skillCategories.map((category, index) => { const Icon = category.icon; return <article key={category.category} className={`glass-panel rounded-2xl p-6 transition-all hover:border-primary/50 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary"><Icon className="size-5" /></span><h3 className="font-bold text-foreground">{category.category}</h3></div><span className="font-mono text-xs text-muted-foreground">{String(category.skills.length).padStart(2, "0")}</span></div><div className="flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill} className="rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent">{skill}</span>)}</div></article> })}
    </div>
  </div></section>
}
