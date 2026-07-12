import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Terminal } from "lucide-react"

const actions = [
  { label: "Email", href: "mailto:doandrew21@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrew-k-do/", icon: Linkedin, external: true },
  { label: "GitHub", href: "https://github.com/androodo", icon: Github, external: true },
]

export default function AboutMe() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden pt-16">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-24 size-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-20 md:px-6">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="animate-reveal">
            <div className="section-label mb-6"><Terminal className="size-4" /> Hello, world</div>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">I&apos;m Andrew Do.<br /><span className="text-primary">I build systems</span> that ship.</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Computer Science student at UC Riverside focused on AI engineering, infrastructure, and full-stack products that solve real problems.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map(({ label, href, icon: Icon, external }) => (
                <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10">
                  <Icon className="size-4 text-primary" />{label}
                </a>
              ))}
              <a href="tel:+16573529910" className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"><Phone className="size-4" />(657) 352-9910</a>
            </div>
            <a href="#experience" className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">Explore my work <ArrowDown className="size-4" /></a>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-reveal [animation-delay:150ms]">
            <div className="glass-panel relative rounded-3xl p-3">
              <div className="absolute -left-3 top-10 z-10 rounded-lg border border-accent/30 bg-background px-3 py-2 font-mono text-xs text-accent shadow-lg"><span className="mr-2 inline-block size-2 rounded-full bg-accent status-pulse" />open to opportunities</div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <Image src="/images/design-mode/Website%20Picture.png.jpeg" alt="Andrew Do smiling in a restaurant" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover object-[50%_42%] transition-transform duration-700 hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-background/85 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4"><div><p className="font-semibold text-foreground">Andrew Do</p><p className="mt-1 text-sm text-muted-foreground">Software Engineer</p></div><div className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3.5 text-primary" />Riverside, CA</div></div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-xs">
              {[['Focus','AI + Systems'],['Education','B.S. + M.S.'],['School','UC Riverside']].map(([label,value]) => <div key={label} className="rounded-xl border border-border bg-card/60 p-3"><span className="block text-muted-foreground">{label}</span><span className="mt-1 block font-semibold text-primary">{value}</span></div>)}
            </div>
          </div>

          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 md:p-8 animate-reveal [animation-delay:250ms]">
            <p className="section-label mb-4">about.md</p>
            <div className="grid gap-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>I&apos;m currently pursuing an <strong className="text-foreground">Accelerated B.S. + M.S. in Computer Science</strong> at the University of California, Riverside!</p>
              <p>As <strong className="text-foreground">Head of Technical Projects</strong> at the Quant Club and a <strong className="text-foreground">2nd place winner</strong> at UCRPC, I thrive on complex problems and collaborative teams.</p>
              <p>I&apos;ve worked as a Software Engineer Intern at <strong className="text-foreground">Panasonic Avionics Corporation</strong> and <strong className="text-foreground">SuperIntro</strong>, building containerized solutions, optimized APIs, and full-stack applications.</p>
              <p>When I&apos;m not coding, you&apos;ll find me at the gym, playing soccer, or practicing piano.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
