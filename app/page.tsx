import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
