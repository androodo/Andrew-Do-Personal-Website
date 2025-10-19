import Image from "next/image"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="flex-shrink-0 animate-fade-in-up">
          <div className="relative w-[280px] h-[280px] mx-auto overflow-hidden rounded-full border-4 border-blue-600 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/design-mode/Website%20Picture.png.jpeg"
              alt="Profile picture of Andrew Do"
              fill
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl space-y-8">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">Andrew Do</h1>
            <p className="text-2xl text-blue-600 font-semibold">Computer Science Student at UC Riverside</p>
          </div>

          <div className="flex flex-wrap gap-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="tel:+16573529910"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">(657) 352-9910</span>
            </a>
            <a
              href="mailto:doandrew21@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">doandrew21@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/andrew-do-93b14b17a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/androodo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <div className="space-y-5 text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg leading-relaxed">
              I'm currently pursuing an{" "}
              <strong className="text-gray-900">Accelerated B.S. + M.S. in Computer Science</strong> at the University
              of California, Riverside, expected to graduate in June 2027. I'm passionate about software engineering,
              machine learning, and building scalable solutions.
            </p>
            <p className="text-lg leading-relaxed">
              As <strong className="text-gray-900">Head of Technical Projects</strong> at the Quant Club and a{" "}
              <strong className="text-gray-900">2nd place winner</strong> at the UC Riverside Programming Challenge
              (UCRPC), I thrive on tackling complex problems and collaborating with talented teams.
            </p>
            <p className="text-lg leading-relaxed">
              I've had the privilege of working as a Software Engineer Intern at{" "}
              <strong className="text-gray-900">Panasonic Avionics Corporation</strong> and{" "}
              <strong className="text-gray-900">SuperIntro</strong>, where I developed containerized solutions,
              optimized APIs, and built full-stack applications that deliver real impact.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me at the gym, playing soccer, or practicing piano.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
