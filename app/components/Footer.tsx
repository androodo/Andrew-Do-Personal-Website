import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
    <div><p className="font-mono text-xs uppercase tracking-widest text-primary">end_of_page</p><p className="mt-2 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Andrew Do. Built with Next.js and Tailwind CSS.</p></div>
    <div className="flex items-center gap-2">
      <a href="mailto:doandrew21@gmail.com" aria-label="Email Andrew" className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Mail className="size-4" /></a>
      <a href="https://github.com/androodo" target="_blank" rel="noopener noreferrer" aria-label="Andrew's GitHub" className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Github className="size-4" /></a>
      <a href="https://www.linkedin.com/in/andrew-k-do/" target="_blank" rel="noopener noreferrer" aria-label="Andrew's LinkedIn" className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Linkedin className="size-4" /></a>
      <a href="#about" aria-label="Back to top" className="ml-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><ArrowUp className="size-4" />Top</a>
    </div>
  </div></footer>
}
