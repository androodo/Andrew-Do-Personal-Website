import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="overflow-hidden bg-background">
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}
